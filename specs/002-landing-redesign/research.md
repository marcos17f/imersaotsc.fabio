# Research: Redesenho da landing page da Imersão TSC

## Framework
- **Decision**: Astro 7, saída estática.
- **Rationale**: Gera HTML puro sem JS por padrão; componentes `.astro` com TypeScript; otimiza imagens.
- **Alternatives**: Vite + TS puro (sem componentes nem otimização de imagem); Next.js (manda JS
  de React para uma página que não precisa).

## Estilo
- **Decision**: Tailwind CSS 4 via `@tailwindcss/vite`, tokens de cor em `@theme`.
- **Alternatives**: Emotion (CSS-in-JS precisa de runtime; vetado na constituição).

## Vídeos de depoimento
- **Decision**: "Fachada leve": capa + botão ▶; no clique troca por `<iframe>` de
  `youtube-nocookie.com/embed/<id>`. IDs extraídos do site atual:
  Mateus `tuDmxr-h5PU`, Kauan `PAi7ShVAlbM`, Naila `yimJdZjGRQo` (YouTube Shorts).
- **Rationale**: 3 iframes do YouTube pesariam ~1,5 MB e atrasariam a primeira tela.
- **Capa**: `https://i.ytimg.com/vi/<id>/hqdefault.jpg`, com nome sobreposto.

## Carrossel de casos
- **Decision**: CSS `scroll-snap` horizontal, sem biblioteca. No desktop as 3 cabem lado a lado.

## FAQ
- **Decision**: `<details>/<summary>` nativo. Funciona sem JS e é acessível.

## Contagem regressiva
- **Decision**: Função pura `remaining(target, now)` → `{days, hours, minutes, seconds, done}` em
  `src/lib/countdown.ts`; script do componente só atualiza o DOM a cada segundo.
- **Alvo**: início do evento, `2026-11-01T09:00:00-03:00`.
- **Ao zerar**: mostra "Últimas vagas neste lote".

## Rastreamento
- **Decision**: Snippet oficial do GTM `GTM-WKQ2BRD9` no `<head>` + `<noscript>` no `<body>`.
  PixelYourSite/Site Kit não são migrados (os pixels saem pelo GTM).

## Imagens (origem → uso)
| Arquivo em `assets/wp-content/uploads/2026/08/` | Uso |
|---|---|
| `chatgpt_image_27_de_jul_de_2026_20_01_49_1.webp` | Hero (Fábio no palco) |
| `image_3274-scaled-1.webp` | Galeria das 5 turmas |
| `chatgpt_image_22_de_ago_de_2026_13_36_28_1-scaled-1-*.webp` | Caso Deyvison |
| `chatgpt_image_22_de_ago_de_2026_13_37_37_1-scaled-1-*.webp` | Caso Daniel |
| `chatgpt_image_22_de_ago_de_2026_13_40_55_1-scaled-1-*.webp` | Caso Evandro |
| `Sem-Titulo-13-1.webp` | Foto do Fábio (conferido: Fábio palestrando, camisa TSC) |

## Conteúdo: decisões de texto
- Dias: domingo 01/11 e segunda 02/11/2026 (Finados), 9h às 19h.
- Preço: de R$2.057 por 12x R$97 ou R$997 à vista (FAQ antigo citava R$89/R$897; corrigido).
- Bio do Fábio diz "143 empresários em 4 edições" e o CTA diz "a sala já encheu 5 vezes".
  Mantemos "5 turmas" (dado mais recente, do bloco de oferta) e "mais de 143 empresários".
  Confirmar com o cliente.
