# Metalúrgica Rios

Site institucional da Metalúrgica Rios — bancas expositoras para hortifruti,
suportes tipo mão francesa e cantoneiras.

**Site:** [metalurgicarios.com.br](https://metalurgicarios.com.br/)

## Sobre este repositório

O site fica em [`site/`](site/) — HTML, CSS e JavaScript puro, sem build e sem
dependências. Para publicar, suba o conteúdo dessa pasta para a raiz do domínio.

Documentação completa (paleta, estrutura, o que ajustar antes de ir ao ar) em
[`site/README.md`](site/README.md).

## Rodar localmente

```bash
cd site && python3 -m http.server 8000
```

Abra <http://localhost:8000>.

## Conteúdo

As fotos originais (HEIC e JPG em resolução de câmera) não são versionadas —
ficam só as versões otimizadas para web, em `site/assets/img/`. O `logo.png` na
raiz é o arquivo original da marca, do qual saíram as variantes usadas no site.
