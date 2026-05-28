from pathlib import Path
import sys

from pdf2image import convert_from_path


ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "GSL-RC-White-Paper-v14.1-final-review.pdf"
OUT_DIR = ROOT / "rendered-white-paper-pdf"


def main():
    OUT_DIR.mkdir(exist_ok=True)
    pages = convert_from_path(str(PDF), dpi=120)
    for idx, page in enumerate(pages, start=1):
        page.save(OUT_DIR / f"page-{idx:02d}.png")
    print(f"Rendered {len(pages)} pages to {OUT_DIR}")


if __name__ == "__main__":
    main()
