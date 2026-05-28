from pathlib import Path
import html
import re

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    Image,
    KeepTogether,
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    Preformatted,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)
from PIL import Image as PILImage


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "v14.1-white-paper-draft.md"
OUT = ROOT / "GSL-RC-White-Paper-v14.1-final-review.pdf"


def clean_inline(text):
    text = html.escape(text)
    text = re.sub(r"`([^`]+)`", r"<font face='Courier'>\1</font>", text)
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r"\1", text)
    return text


def make_styles():
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            "BodyJust",
            parent=styles["BodyText"],
            fontName="Times-Roman",
            fontSize=12,
            leading=14.5,
            alignment=TA_JUSTIFY,
            spaceAfter=6,
        )
    )
    styles.add(
        ParagraphStyle(
            "TitleGSL",
            parent=styles["Title"],
            fontName="Times-Bold",
            fontSize=18,
            leading=22,
            textColor=colors.HexColor("#17365D"),
            alignment=TA_CENTER,
            spaceAfter=10,
        )
    )
    styles.add(
        ParagraphStyle(
            "H1GSL",
            parent=styles["Heading1"],
            fontName="Times-Bold",
            fontSize=15,
            leading=18,
            textColor=colors.HexColor("#17365D"),
            spaceBefore=14,
            spaceAfter=7,
            keepWithNext=True,
        )
    )
    styles.add(
        ParagraphStyle(
            "H2GSL",
            parent=styles["Heading2"],
            fontName="Times-Bold",
            fontSize=13,
            leading=16,
            textColor=colors.HexColor("#1F4E79"),
            spaceBefore=10,
            spaceAfter=6,
            keepWithNext=True,
        )
    )
    styles.add(
        ParagraphStyle(
            "CaptionGSL",
            parent=styles["BodyText"],
            fontName="Times-Italic",
            fontSize=10,
            leading=12,
            alignment=TA_JUSTIFY,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            "CodeGSL",
            parent=styles["Code"],
            fontName="Courier",
            fontSize=8.8,
            leading=10.5,
            leftIndent=18,
            rightIndent=18,
            spaceBefore=4,
            spaceAfter=8,
        )
    )
    return styles


def is_table_start(lines, i):
    return (
        i + 1 < len(lines)
        and lines[i].strip().startswith("|")
        and re.match(r"^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$", lines[i + 1])
    )


def parse_table(lines, i):
    rows = []
    while i < len(lines) and lines[i].strip().startswith("|"):
        rows.append([c.strip() for c in lines[i].strip().strip("|").split("|")])
        i += 1
    return [rows[0]] + rows[2:], i


def add_table(story, rows, styles):
    data = [[Paragraph(clean_inline(cell), styles["BodyJust"]) for cell in row] for row in rows]
    col_count = max(len(row) for row in rows)
    widths = [7.0 * inch / col_count] * col_count
    table = Table(data, colWidths=widths, repeatRows=1, hAlign="CENTER")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#D9EAF7")),
                ("FONTNAME", (0, 0), (-1, 0), "Times-Bold"),
                ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#9AAEC0")),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    story.extend([table, Spacer(1, 8)])


def image_flowable(path, max_width=6.4 * inch, max_height=4.6 * inch):
    with PILImage.open(path) as img:
        w, h = img.size
    scale = min(max_width / w, max_height / h)
    return Image(str(path), width=w * scale, height=h * scale)


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Times-Roman", 9)
    canvas.setFillColor(colors.HexColor("#666666"))
    canvas.drawCentredString(4.25 * inch, 0.5 * inch, f"Great Salt Lake RC White Paper v14.1 final review | {doc.page}")
    canvas.restoreState()


def build():
    styles = make_styles()
    lines = SRC.read_text(encoding="utf-8").splitlines()
    story = []
    in_code = False
    code_lines = []
    pending_list = []
    pending_ordered = False

    def flush_list():
        nonlocal pending_list, pending_ordered
        if pending_list:
            story.append(
                ListFlowable(
                    [ListItem(Paragraph(clean_inline(item), styles["BodyJust"])) for item in pending_list],
                    bulletType="1" if pending_ordered else "bullet",
                    leftIndent=18,
                )
            )
            story.append(Spacer(1, 4))
        pending_list = []
        pending_ordered = False

    i = 0
    while i < len(lines):
        raw = lines[i]
        line = raw.strip()
        if not line:
            flush_list()
            i += 1
            continue
        if line.startswith("```"):
            flush_list()
            if in_code:
                story.append(Preformatted("\n".join(code_lines), styles["CodeGSL"]))
                code_lines = []
                in_code = False
            else:
                in_code = True
            i += 1
            continue
        if in_code:
            code_lines.append(raw)
            i += 1
            continue
        if is_table_start(lines, i):
            flush_list()
            rows, i = parse_table(lines, i)
            add_table(story, rows, styles)
            continue
        if line.startswith("# "):
            flush_list()
            story.append(Paragraph(clean_inline(line[2:].strip()), styles["TitleGSL"]))
        elif line.startswith("## "):
            flush_list()
            text = line[3:].strip()
            if text in {"Suggested Citation", "Document Production Note", "References and Data Sources to Preserve"}:
                story.append(PageBreak())
            story.append(Paragraph(clean_inline(text), styles["H1GSL"]))
        elif line.startswith("### "):
            flush_list()
            story.append(Paragraph(clean_inline(line[4:].strip()), styles["H2GSL"]))
        elif line.startswith("!["):
            flush_list()
            match = re.match(r"!\[([^\]]*)\]\(([^)]+)\)", line)
            if match:
                img_path = ROOT / match.group(2)
                if img_path.exists():
                    flow = [image_flowable(img_path)]
                    if i + 1 < len(lines) and lines[i + 1].strip().startswith("Caption:"):
                        flow.append(Paragraph(clean_inline(lines[i + 1].strip()), styles["CaptionGSL"]))
                        i += 1
                    story.append(KeepTogether(flow))
                    story.append(Spacer(1, 8))
        elif line.startswith("Caption:"):
            flush_list()
            story.append(Paragraph(clean_inline(line), styles["CaptionGSL"]))
        elif re.match(r"^\d+\.\s+", line):
            if pending_list and not pending_ordered:
                flush_list()
            pending_ordered = True
            pending_list.append(re.sub(r"^\d+\.\s+", "", line))
        elif line.startswith("- "):
            if pending_list and pending_ordered:
                flush_list()
            pending_ordered = False
            pending_list.append(line[2:].strip())
        else:
            flush_list()
            story.append(Paragraph(clean_inline(line), styles["BodyJust"]))
        i += 1
    flush_list()

    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=LETTER,
        rightMargin=1 * inch,
        leftMargin=1 * inch,
        topMargin=1 * inch,
        bottomMargin=0.8 * inch,
        title="Great Salt Lake Water Level Forecasting via RC Circuit Analogy",
        author="Ian R. Harvey",
    )
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(OUT)


if __name__ == "__main__":
    build()
