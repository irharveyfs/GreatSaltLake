from __future__ import annotations

import email
import re
from email import policy
from pathlib import Path

from docx import Document
from lxml import html


ROOT = Path(__file__).resolve().parents[1]
IMPORTED = ROOT / "imported-email"
ATTACHMENTS = IMPORTED / "attachments"
EXTRACTED = ROOT / "extracted"


def write_text(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text.rstrip() + "\n", encoding="utf-8")


def clean_text(text: str) -> str:
    text = text.replace("\xa0", " ")
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def extract_email_body() -> None:
    emlx = next((IMPORTED / "raw").glob("*.emlx"))
    raw = emlx.read_bytes()
    first_newline = raw.find(b"\n")
    if first_newline != -1 and raw[:first_newline].strip().isdigit():
        raw = raw[first_newline + 1 :]
    msg = email.message_from_bytes(raw, policy=policy.default)

    plain_parts: list[str] = []
    html_parts: list[str] = []
    for part in msg.walk():
        ctype = part.get_content_type()
        disp = part.get_content_disposition()
        if disp == "attachment":
            continue
        if ctype == "text/plain":
            plain_parts.append(part.get_content())
        elif ctype == "text/html":
            html_parts.append(part.get_content())

    header_lines = [
        f"From: {msg.get('from', '')}",
        f"To: {msg.get('to', '')}",
        f"Subject: {msg.get('subject', '')}",
        f"Date: {msg.get('date', '')}",
        f"Message-Id: {msg.get('message-id', '')}",
    ]
    write_text(EXTRACTED / "email_body.txt", "\n".join(header_lines) + "\n\n" + clean_text("\n\n".join(plain_parts)))
    if html_parts:
        write_text(EXTRACTED / "email_body.html", "\n\n".join(html_parts))


def iter_docx_files() -> list[Path]:
    return sorted(ATTACHMENTS.glob("*/*.docx"))


def extract_docx(path: Path) -> str:
    doc = Document(path)
    lines: list[str] = [f"# {path.name}", ""]

    for block in doc.element.body:
        tag = block.tag.rsplit("}", 1)[-1]
        if tag == "p":
            para_text = "".join(node.text or "" for node in block.iter() if node.tag.rsplit("}", 1)[-1] == "t")
            para_text = clean_text(para_text)
            if para_text:
                lines.append(para_text)
                lines.append("")
        elif tag == "tbl":
            table_index = len([line for line in lines if line.startswith("## Table ")]) + 1
            lines.append(f"## Table {table_index}")
            for tr in block.iter():
                if tr.tag.rsplit("}", 1)[-1] != "tr":
                    continue
                cells: list[str] = []
                for tc in tr:
                    if tc.tag.rsplit("}", 1)[-1] == "tc":
                        cell_text = " ".join(t.text or "" for t in tc.iter() if t.tag.rsplit("}", 1)[-1] == "t")
                        cells.append(clean_text(cell_text))
                if cells:
                    lines.append("| " + " | ".join(cells) + " |")
            lines.append("")
    return "\n".join(lines)


def extract_docxes() -> None:
    for path in iter_docx_files():
        safe = re.sub(r"[^A-Za-z0-9._-]+", "_", path.stem).strip("_")
        write_text(EXTRACTED / f"{safe}.md", extract_docx(path))


def panel_text(tree: html.HtmlElement, panel_id: str) -> str:
    nodes = tree.xpath(f"//*[@id='{panel_id}']")
    if not nodes:
        return ""
    text = nodes[0].text_content()
    return clean_text(text)


def extract_html(path: Path) -> None:
    source = path.read_text(encoding="utf-8", errors="replace")
    tree = html.fromstring(source)
    short = "v10_4" if "10.4" in path.name else "v12"

    buttons: list[str] = []
    for button in tree.xpath("//button"):
        label = clean_text(button.text_content())
        onclick = button.get("onclick", "")
        if "switchTab" in onclick:
            buttons.append(f"- {label} `{onclick}`")

    panels: list[str] = []
    panel_ids = []
    for node in tree.xpath("//*[contains(concat(' ', normalize-space(@class), ' '), ' tab-content ') or contains(concat(' ', normalize-space(@class), ' '), ' tab-panel ')]"):
        pid = node.get("id", "")
        if not pid:
            continue
        panel_ids.append(pid)
        headings = [clean_text(h.text_content()) for h in node.xpath(".//h1|.//h2|.//h3|.//h4")]
        headings = [h for h in headings if h]
        panels.append(f"## {pid}\n" + "\n".join(f"- {h}" for h in headings[:30]))

    functions = sorted(set(re.findall(r"\bfunction\s+([A-Za-z0-9_$]+)\s*\(", source)))
    consts = sorted(set(re.findall(r"\bconst\s+([A-Za-z0-9_$]+)\s*=", source)))
    inputs = []
    for inp in tree.xpath("//input[@id]"):
        attrs = {k: inp.get(k) for k in ("id", "type", "min", "max", "step", "value", "oninput", "onchange") if inp.get(k) is not None}
        inputs.append("- " + ", ".join(f"{k}={v}" for k, v in attrs.items()))

    structure = [
        f"# HTML Structure: {path.name}",
        "",
        "## Tabs",
        "\n".join(buttons),
        "",
        "## Panels And Headings",
        "\n\n".join(panels),
        "",
        "## Inputs",
        "\n".join(inputs[:120]),
        "",
        "## JavaScript Functions",
        "\n".join(f"- `{name}`" for name in functions),
        "",
        "## Top-Level Constants",
        "\n".join(f"- `{name}`" for name in consts[:120]),
    ]
    write_text(EXTRACTED / f"{short}_html_structure.md", "\n".join(structure))

    for pid in panel_ids:
        if pid in {"tab-wp", "panel-about", "panel-history", "panel-waterbudget", "panel-validation"}:
            text = panel_text(tree, pid)
            if text:
                write_text(EXTRACTED / f"{short}_{pid}.txt", text)


def extract_htmls() -> None:
    for path in sorted(ATTACHMENTS.glob("*/*.html")):
        extract_html(path)


def image_manifest() -> None:
    rows = ["# Image Attachments", ""]
    for path in sorted(ATTACHMENTS.glob("*/*.png")):
        rows.append(f"- `{path.relative_to(ROOT)}`")
    write_text(EXTRACTED / "image_manifest.md", "\n".join(rows))


def main() -> None:
    extract_email_body()
    extract_docxes()
    extract_htmls()
    image_manifest()


if __name__ == "__main__":
    main()
