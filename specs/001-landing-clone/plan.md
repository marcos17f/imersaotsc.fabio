# Plano de Implementação: Clone da Landing Page Imersão TSC

**Branch**: `001-landing-clone` | **Data**: 2026-10-31 | **Spec**: [spec.md](spec.md)

## Resumo

Espelho estático da página como o Elementor a renderiza: `index.html` + `assets/` com os CSS/JS/imagens/fontes que ficam no host original, com as URLs reescritas para caminhos relativos. Servido por um servidor HTTP local simples.

## Contexto técnico

**Linguagem**: HTML5, CSS3, JavaScript (jQuery + frontend do Elementor, igual ao original)
**Origem**: WordPress 7.1.3, Elementor 4.2.4, tema hello-elementor, LiteSpeed Cache (CSS/JS minificados em `wp-content/litespeed/`)
**Dependências**: nada para instalar; Google Fonts via CDN
**Servidor local**: `python -m http.server 5500`
**Testes**: comparação visual lado a lado no Chrome (1440px e 390px) + aba Network
**Plataforma**: navegadores modernos, foco no celular (tráfego do Instagram)

## Verificação da Constituição

| Princípio | Status |
|---|---|
| I. Fidelidade | OK: usa o HTML/CSS realmente renderizado pelo original |
| II. Mesma stack | OK: HTML/CSS/JS do Elementor, sem framework novo |
| III. Autossuficiente | OK: assets do host original copiados para `assets/` |
| IV. Sem se passar pelo original | PENDENTE: marca/links/pixels ainda são do original; trocar antes de publicar (T010) |
| V. Simplicidade | OK: sem build |

## Estrutura do projeto

```text
imersaotsc-clone/
├── index.html                 # página renderizada, URLs reescritas
├── assets/wp-content/         # espelho dos assets do original (mesmos caminhos)
│   ├── litespeed/css|js/      # CSS/JS minificados
│   ├── plugins/ themes/       # Elementor, hello-elementor
│   └── uploads/2026/          # imagens
├── specs/001-landing-clone/   # spec, plano, tarefas
└── README.md
```

**Decisão de estrutura**: manter os caminhos `wp-content/...` do original dentro de `assets/` para que os `url()` relativos dentro dos CSS continuem funcionando sem edição manual.

## Como o espelho é feito

1. Baixar o HTML da página.
2. Para cada URL do host original que termina em extensão de asset (css/js/imagem/fonte/mp4), baixar e reescrever para caminho relativo.
3. Nos CSS, resolver os `url(...)` recursivamente (fontes, fundos).
4. Não mexer em links de página (checkout, WhatsApp, outras páginas) nem em URLs escapadas em JSON.

## Riscos

- O "delay JS"/lazy-load do LiteSpeed pode depender de scripts carregados dinamicamente → conferir 404 no Console.
- Scripts do Elementor carregados via `elementorFrontendConfig` com URLs absolutas (JSON) ainda apontam para o original → conferir na aba Network (CS-002).
- A contagem regressiva pode depender de uma data configurada no Elementor.
