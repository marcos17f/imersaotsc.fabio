# Implementation Plan: Redesenho da landing page da Imersão TSC

**Branch**: `002-landing-redesign` | **Date**: 2026-10-31 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/002-landing-redesign/spec.md`

## Summary

Página de vendas única, estática, escura com verde TSC, 8 seções, menu fixo e botão voltar ao topo.
Construída em Astro (saída estática) + TypeScript strict + Tailwind, com todo o conteúdo variável
(evento, oferta, links, casos, vídeos, FAQ, módulos) num único `web/src/data/site.ts`. JS só para
contagem regressiva, menu ☰, botão ↑ e o clique que carrega o vídeo do YouTube.

## Technical Context

**Language/Version**: TypeScript 5 (strict), Node 22.12+ (testado com v24.22.0)

**Primary Dependencies**: Astro 7, Tailwind CSS 4 (`@tailwindcss/vite`), fonte Inter via Google Fonts

**Storage**: N/A (conteúdo em `web/src/data/site.ts`)

**Testing**: Vitest (lógica de contagem e formatação), Playwright (fluxo em 390px e 1440px)

**Target Platform**: Navegadores modernos, foco em celular (Chrome Android / Safari iOS)

**Project Type**: Site estático (uma página)

**Performance Goals**: Primeira tela visível em até 2,5 s em 4G; imagens em WebP/AVIF dimensionadas

**Constraints**: Quase sem JS; sem rolagem horizontal de 320px a 1440px; 9 a 12 telas no desktop

**Scale/Scope**: 1 página, 8 seções, ~10 componentes

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Princípio | Como o plano cumpre | OK |
|---|---|---|
| I. Conversão primeiro | Botão de compra no menu fixo, no Hero, no Programa, no CTA do meio e no Investimento; WhatsApp no Investimento e nas Dúvidas | ✅ |
| II. Visual de especialista | Tokens Tailwind: fundo `#0B0F17`, verde `#22C55E` só em `btn`, números e marcadores | ✅ |
| III. Enxuta, mas completa | 8 seções + vídeos, galeria, CTA do meio, desabafo; teste Playwright mede 9–12 telas | ✅ |
| IV. Celular e performance | Saída estática, `astro:assets` para imagens, vídeo só carrega no clique | ✅ |
| V. Simplicidade | Só Astro + Tailwind como dependências de produção; sem lib de carrossel, sanfona ou ícones | ✅ |
| Restrições: fonte única | `site.ts` é a única origem de datas, preços e links; teste confere que preço aparece igual | ✅ |
| Restrições: testes | Vitest + Playwright 390/1440 | ✅ |

Pós-design: sem violações. Complexity Tracking vazio.

## Project Structure

### Documentation (this feature)

```text
specs/002-landing-redesign/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/ui.md
└── tasks.md            # /speckit-tasks
```

### Source Code (repository root)

```text
web/                         # projeto Astro novo (a página antiga fica na raiz como referência)
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── playwright.config.ts
├── public/favicon.svg
├── src/
│   ├── data/site.ts         # fonte única: evento, oferta, links, módulos, casos, vídeos, FAQ
│   ├── lib/countdown.ts     # lógica pura (testada com Vitest)
│   ├── lib/countdown.test.ts
│   ├── assets/img/          # fotos copiadas de assets/wp-content/uploads
│   ├── styles/global.css    # Tailwind + tokens de cor
│   ├── layouts/Base.astro   # <head>, GTM, fontes
│   ├── components/
│   │   ├── Nav.astro  Hero.astro  Problem.astro  Method.astro  Program.astro
│   │   ├── Cases.astro  Offer.astro  About.astro  Faq.astro  Footer.astro
│   │   └── BackToTop.astro
│   └── pages/index.astro
└── tests/landing.spec.ts    # Playwright
```

**Structure Decision**: Projeto único em `web/`. Um componente por seção porque cada seção é uma
unidade visual independente; dados fora dos componentes para cumprir a fonte única.

## Complexity Tracking

Nenhuma violação.
