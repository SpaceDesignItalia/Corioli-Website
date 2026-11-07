"""Alleggerisce le build delle demo copiate in public/demo/<specialita>/.

Da lanciare dopo ogni copia di una nuova build (vedi scripts/README-demo.md):

    python scripts/ottimizza-demo.py

Cosa fa, per ogni demo:
- il font delle icone Tabler (circa 6.000 icone, 850 KB in woff2) viene
  ridotto alle sole icone che il codice usa, e il CSS perde le circa 5.800
  regole delle icone inutilizzate (oltre 200 KB);
- i formati di font che i browser moderni non scaricano (woff, ttf) e i file
  in radice che nessuno richiama vengono cancellati;
- il CSS modificato prende un nome nuovo, cosi' la cache lunga degli asset non
  serve mai la versione vecchia.

Richiede: pip install fonttools brotli
"""

import glob
import hashlib
import io
import os
import re
import sys

from fontTools import subset
from fontTools.ttLib import TTFont

RADICE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "demo")
TESTO = (".js", ".mjs", ".css", ".html")


def leggi(p):
    with open(p, encoding="utf8") as f:
        return f.read()


def scrivi(p, s):
    with open(p, "w", encoding="utf8", newline="") as f:
        f.write(s)


def hash_breve(dati: bytes) -> str:
    return hashlib.sha256(dati).hexdigest()[:8]


def ottimizza(cartella: str) -> None:
    assets = os.path.join(cartella, "assets")
    testuali = [p for p in glob.glob(os.path.join(cartella, "**", "*"), recursive=True) if p.endswith(TESTO)]
    css_icone = [
        p for p in glob.glob(os.path.join(assets, "*.css"))
        if "tabler-icons" in leggi(p) and "tabler-icons-demo-" not in leggi(p)
    ]
    if not css_icone:
        print(f"  {os.path.basename(cartella)}: font icone gia' ottimizzato")
    for css_path in css_icone:
        css = leggi(css_path)
        regole = re.findall(r'\.(ti-[a-z0-9-]+):before\{content:"([^"]+)"\}', css)
        codice = "".join(leggi(p) for p in testuali if p.endswith((".js", ".mjs", ".html")))
        nel_codice = set(re.findall(r"(?<![a-z0-9-])ti-[a-z0-9]+(?:-[a-z0-9]+)*", codice))
        usate = {n for n, _ in regole if n in nel_codice}
        codepoint = sorted({ord(ch) for n, c in regole if n in usate for ch in c})

        woff2 = [p for p in glob.glob(os.path.join(assets, "tabler-icons-*.woff2"))]
        if len(woff2) != 1:
            sys.exit(f"atteso un solo woff2 delle icone in {assets}, trovati {len(woff2)}")
        font = TTFont(woff2[0])
        # Le icone si richiamano per codepoint: le legature non servono, e la
        # tabella GSUB del font Tabler 3.23 non e' nemmeno leggibile.
        for tag in ("GSUB", "GPOS", "GDEF"):
            if tag in font:
                del font[tag]
        opzioni = subset.Options()
        opzioni.flavor = "woff2"
        opzioni.layout_features = []
        opzioni.name_IDs = []
        s = subset.Subsetter(opzioni)
        s.populate(unicodes=codepoint)
        s.subset(font)
        buf = io.BytesIO()
        font.flavor = "woff2"
        font.save(buf)
        dati = buf.getvalue()
        nome_font = f"tabler-icons-demo-{hash_breve(dati)}.woff2"
        with open(os.path.join(assets, nome_font), "wb") as f:
            f.write(dati)

        prefisso = re.search(r"url\((/[^)]*?/assets/)tabler-icons", css).group(1)
        css = re.sub(
            r"@font-face\{font-family:tabler-icons;[^}]*\}",
            "@font-face{font-family:tabler-icons;font-style:normal;font-weight:400;font-display:block;"
            f'src:url({prefisso}{nome_font}) format("woff2")}}',
            css,
        )
        css = re.sub(
            r'\.(ti-[a-z0-9-]+):before\{content:"[^"]+"\}',
            lambda m: m.group(0) if m.group(1) in usate else "",
            css,
        )
        vecchio = os.path.basename(css_path)
        base = re.sub(r"-[A-Za-z0-9_-]{8}\.css$", "", vecchio)
        nuovo = f"{base}-{hash_breve(css.encode())}.css"
        scrivi(os.path.join(assets, nuovo), css)
        os.remove(css_path)
        for p in testuali:
            if os.path.exists(p) and p != css_path:
                t = leggi(p)
                if vecchio in t:
                    scrivi(p, t.replace(vecchio, nuovo))
        for p in glob.glob(os.path.join(assets, "tabler-icons-*")):
            if not os.path.basename(p).startswith("tabler-icons-demo-"):
                os.remove(p)
        print(f"  {os.path.basename(cartella)}: {len(usate)} icone su {len(regole)}, font {len(dati) // 1024} KB")

    # File in radice che nessun file della build richiama.
    tutto = "".join(leggi(p) for p in glob.glob(os.path.join(cartella, "**", "*"), recursive=True) if p.endswith(TESTO))
    for p in glob.glob(os.path.join(cartella, "*")):
        nome = os.path.basename(p)
        if os.path.isfile(p) and nome != "index.html" and nome not in tutto:
            os.remove(p)
            print(f"  {os.path.basename(cartella)}: tolto {nome}, non usato")


if __name__ == "__main__":
    for c in sorted(glob.glob(os.path.join(RADICE, "*"))):
        if os.path.isdir(c):
            ottimizza(c)
