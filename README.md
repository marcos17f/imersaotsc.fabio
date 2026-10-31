# Imersão TSC · Fábio Gimenes

Landing page oficial da Imersão TSC (Técnico Sem Crise): página de vendas do evento presencial de
2 dias em São Paulo para donos de assistência técnica e loja de acessórios.

Feita em **Astro + TypeScript + Tailwind**, na pasta [`web/`](web/).

## Rodar

```
cd web
npm install
npm run dev        # http://localhost:4321
```

## Testar

```
npm test                         # Vitest: contagem regressiva e preços
npx playwright install chromium  # só na primeira vez
npm run e2e                      # Playwright em 390px e 1440px
npm run build                    # gera web/dist (estático)
```

## Trocar turma, data ou preço

Tudo fica em **um arquivo só**: [`web/src/data/site.ts`](web/src/data/site.ts) (`event`, `offer`, `links`).
Textos de casos, vídeos, módulos e FAQ também estão lá.

## Deploy (Vercel)

Importar o repositório na Vercel com **Root Directory = `web`**. A Vercel detecta Astro sozinha
(build `npm run build`, saída `dist`).

## Estrutura

- `web/` — o site
- `specs/002-landing-redesign/` — especificação, plano e tarefas (Spec Kit)
- `index.html` + `assets/` — página antiga em WordPress/Elementor, guardada só como referência
