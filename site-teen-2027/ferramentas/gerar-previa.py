"""Gera uma PRÉVIA do site com as fotos embutidas no próprio arquivo.

Visualizadores que isolam a página (painel do app do Claude, pré-visualizações) bloqueiam
imagens de outros sites, e o site real usa as fotos do WordPress (ci.goiania.br). A prévia
baixa essas fotos, reduz o tamanho e embute tudo, para ver o site completo em qualquer lugar.
Não serve para publicar: no WordPress/HostGator use o index.html normal.

Uso:  python3 site-teen-2027/ferramentas/gerar-previa.py   (ou: npm run site-teen:previa)
Saída: site-teen-2027/previa/index.html  (pasta ignorada pelo git)
Precisa de: internet e Pillow (pip install pillow).
"""
import base64, io, os, re, sys, urllib.request
from PIL import Image

AQUI = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.dirname(AQUI)
ORIGEM = os.path.join(SITE, "index.html")
DESTINO = os.path.join(SITE, "previa", "index.html")
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"


def baixar(url):
    pedido = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "image/*"})
    with urllib.request.urlopen(pedido, timeout=60) as r:
        return r.read()


def embutir(url, dados):
    if url.lower().endswith(".png"):
        return "data:image/png;base64," + base64.b64encode(dados).decode()
    im = Image.open(io.BytesIO(dados)).convert("RGB")
    largura = 1600 if url == FOTO_DO_TOPO else 900
    if im.width > largura:
        im = im.resize((largura, round(im.height * largura / im.width)), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=72, optimize=True, progressive=True)
    return "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()


html = open(ORIGEM, encoding="utf-8").read()
m = re.search(r'imagemTopo:\s*"([^"]+)"', html)
FOTO_DO_TOPO = m.group(1) if m else ""
urls = sorted(set(re.findall(r'https://ci\.goiania\.br/wp-content/uploads/[^"\'\s)]+\.(?:jpg|jpeg|png)', html)))
falhas = []
for url in urls:
    try:
        html = html.replace(url, embutir(url, baixar(url)))
    except Exception as erro:  # foto que não baixar fica com o link normal
        falhas.append(f"{url} ({erro})")
html = html.replace("<title>Intercâmbio Teen® 2027", "<title>[PRÉVIA] Intercâmbio Teen® 2027", 1)
os.makedirs(os.path.dirname(DESTINO), exist_ok=True)
open(DESTINO, "w", encoding="utf-8").write(html)
print(f"Prévia gravada em {os.path.relpath(DESTINO)} · {len(urls) - len(falhas)}/{len(urls)} imagens embutidas · {len(html.encode()) // 1024} KB")
for f in falhas:
    print("não baixou:", f, file=sys.stderr)
