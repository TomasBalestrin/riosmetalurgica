# Site — Metalúrgica Rios

Site institucional de página única, em HTML, CSS e JavaScript puro. Sem build,
sem dependências: é só publicar a pasta.

## Paleta

Amostrada da logo (`logo.png`), não escolhida à mão:

| Token | Hex | Onde |
|---|---|---|
| `--azul` | `#3f3f8c` | Botões, filtro ativo, rótulos em fundo claro |
| `--azul-claro` | `#5a5aa8` | Hover de botão, bordas, superfícies |
| `--azul-texto` | `#8585cc` | Texto pequeno sobre fundo escuro (contraste AA) |
| `--azul-esc` | `#26267d` | Reserva |
| `--cromo` | `#c9ccd2` | Perfil de aço, subtítulo do header |
| `--cromo-cl` | `#eef0f3` | Tags dos cards |
| `--aco-900` | `#101214` | Fundo das seções escuras |

O `--azul-texto` existe porque `#5a5aa8` só alcança 3.1:1 sobre o grafite —
abaixo do mínimo de 4.5:1 para texto pequeno. Para texto em fundo escuro,
use sempre `--azul-texto` (5.6:1).

O botão do WhatsApp fica verde de propósito: é a cor do app e as pessoas
reconhecem por ela.

## Logo

| Arquivo | Uso |
|---|---|
| `assets/img/logo-branca.png` | Header e rodapé (fundo escuro) — o texto "Metalúrgica", preto no original, foi clareado |
| `assets/img/logo.png` | Fundo claro, se precisar |

Ambas geradas a partir do `logo.png` original, que continua na raiz do projeto.

## Estrutura

```
site/
├── index.html              página completa
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── img/
        ├── loja-*.jpg      fotos de lojas (versões -800 para telas menores)
        ├── prod-*.jpg      fotos de produtos na fábrica
        └── clientes/       logos recortados, um por arquivo
```

## Publicar

Suba o conteúdo de `site/` para a raiz do domínio. Funciona em qualquer
hospedagem estática (Hostinger, Netlify, Vercel, GitHub Pages, cPanel).

Para rodar localmente:

```bash
cd site && python3 -m http.server 8000
```

## O que ajustar antes de ir ao ar

| Onde | O quê |
|---|---|
| `index.html` | `contato@metalurgicarios.com.br` — trocar pelo e-mail real |
| `index.html` | "CNPJ sob consulta" no rodapé — colocar o CNPJ |
| `index.html` | Horário de atendimento — confirmar |
| `assets/js/main.js` | `WHATSAPP` (linha 5) — número que recebe os orçamentos |

O telefone `+55 (27) 99994-6719` aparece em três lugares do `index.html`
(link `tel:`, rodapé e schema.org) além do `main.js`.

## Como o formulário funciona

Não há back-end. Ao enviar, o formulário monta a mensagem e abre o WhatsApp com
o texto pronto — o cliente confere e manda. Se um dia quiser receber por e-mail,
dá para apontar o `<form>` para um serviço como Formspree sem mexer no resto.

## Catálogo em PDF

O site original tinha um botão de download do catálogo. O arquivo não estava
entre os materiais; quando tiver o PDF, coloque em `assets/catalogo.pdf` e
adicione o botão na seção de produtos.

## Conteúdo

Fotos e logos vieram das pastas `fotos lojas`, `fotos produtos` e `parceiros`.
Os HEIC foram convertidos para JPG e redimensionados para no máximo 1600 px;
cada foto tem uma versão de 800 px usada nos cards e na galeria. Os sete logos
de clientes foram recortados individualmente da arte original.
