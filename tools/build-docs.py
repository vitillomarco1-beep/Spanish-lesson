#!/usr/bin/env python3
"""Converte i documenti docs/*.md in pagine HTML (docs/*.html) apribili dall'app.
Uso: pip install markdown && python3 tools/build-docs.py"""
import pathlib, re, markdown

ROOT = pathlib.Path(__file__).resolve().parent.parent
CSS = """body{margin:0;font:17px/1.6 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:#faf7f2;color:#222}
main{max-width:820px;margin:0 auto;padding:16px 18px 60px}h1{font-size:1.6rem}h2{margin-top:2em;color:#c60b1e}
table{border-collapse:collapse;width:100%;display:block;overflow-x:auto;margin:12px 0}td,th{border:1px solid #e8e2d8;padding:6px 8px;text-align:left;vertical-align:top}
th{background:#f1ece3}blockquote{margin:12px 0;padding:10px 14px;background:#fff7d6;border-left:4px solid #ffc400}
code{background:#f1ece3;padding:1px 4px;border-radius:4px}a{color:#2f6db5}.back{display:inline-block;margin:8px 0 4px;font-weight:600}"""
for md in sorted((ROOT / "docs").glob("*.md")):
    text = re.sub(r"\(([\w-]+)\.md\)", r"(\1.html)", md.read_text(encoding="utf-8"))
    body = markdown.markdown(text, extensions=["tables"])
    title = re.search(r"^# (.+)$", text, re.M).group(1)
    html = f"""<!DOCTYPE html>
<html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light">
<title>{title}</title><style>{CSS}</style></head>
<body><main><a class="back" href="../index.html">← Torna all'app</a>
{body}
<p><a class="back" href="../index.html">← Torna all'app</a></p></main></body></html>
"""
    md.with_suffix(".html").write_text(html, encoding="utf-8")
    print("scritto", md.with_suffix(".html").relative_to(ROOT))
