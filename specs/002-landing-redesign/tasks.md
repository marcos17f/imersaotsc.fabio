# Tasks: Redesenho da landing page da Imersão TSC

**Input**: `specs/002-landing-redesign/` (plan, spec, data-model, contracts/ui.md, research, quickstart)
**Tests**: pedidos na constituição (Vitest para lógica, Playwright para fluxo em 390/1440).

## Phase 1: Setup

- [X] T001 Criar projeto Astro 5 (template minimal, TS strict) em `web/` e adicionar Tailwind 4 via `@tailwindcss/vite` em `web/astro.config.mjs`
- [X] T002 [P] Adicionar Vitest e Playwright como devDependencies e scripts `test`, `e2e` em `web/package.json`; criar `web/playwright.config.ts` com projetos 390×844 e 1440×900 e `webServer` em `npm run preview`
- [X] T003 [P] Copiar imagens listadas em `research.md` de `assets/wp-content/uploads/2026/08/` para `web/src/assets/img/` com nomes curtos (`hero.webp`, `turmas.webp`, `caso-evandro.webp`, `caso-deyvison.webp`, `caso-daniel.webp`, `fabio.webp`)

## Phase 2: Foundational

- [X] T004 Criar `web/src/data/site.ts` com `event`, `offer`, `links`, `stats`, `pillars`, `modules`, `cases`, `videos`, `faq` e `brl()` conforme `data-model.md` ("Valores de dinheiro são números"; FAQ de preço/data montado a partir de `offer`/`event`)
- [X] T005 [P] Criar `web/src/styles/global.css` com Tailwind e tokens `@theme` (bg `#0B0F17`, bg2 `#111722`, line `#1F2633`, text `#E8EAED`, muted `#9AA3B2`, accent `#22C55E`, accent-ink `#04140A`) e classes `.btn`, `.btn-ghost`, `.eyebrow`
- [X] T006 Criar `web/src/layouts/Base.astro` com `<head>` (title, description, viewport, Inter, GTM `links.gtmId`) e `<noscript>` do GTM no body; `id="top"` no body

## Phase 3: User Story 1 — Visitante do anúncio compra o ingresso (P1) 🎯 MVP

**Independent test**: em 390px, título, data, local e botão de compra visíveis sem rolar; botão leva à Hotmart.

- [X] T007 [P] [US1] Criar `web/src/components/Nav.astro`: sticky, marca TSC, botão `data-cta="checkout"` sempre visível (links e ☰ ficam para US3)
- [X] T008 [P] [US1] Criar `web/src/components/Hero.astro`: eyebrow, h1, subtítulo, `data-cta="checkout"` + "Ver o programa", meta (data/local/2 por 1) e faixa `stats`
- [X] T009 [US1] Criar `web/src/pages/index.astro` montando Base + Nav + Hero
- [X] T010 [US1] Teste Playwright em `web/tests/landing.spec.ts`: hero acima da dobra em 390px; todo `[data-cta=checkout]` aponta para `links.checkout`

## Phase 4: User Story 2 — Visitante indeciso se convence lendo (P2)

**Independent test**: 8 seções na ordem; vídeo toca no clique; FAQ abre/fecha; WhatsApp correto.

- [X] T011 [P] [US2] `web/src/lib/countdown.ts` (`remaining(target, now)` → dias/horas/min/seg/done) + `web/src/lib/countdown.test.ts` (meio do prazo, exatamente zero, passado)
- [X] T012 [P] [US2] `web/src/components/Problem.astro` (`#problema`): sintomas + custo pessoal em 2 colunas
- [X] T013 [P] [US2] `web/src/components/Method.astro` (`#metodo`): 3 pilares, por que presencial, o que não é
- [X] T014 [P] [US2] `web/src/components/Program.astro` (`#programa`): 7 módulos em grade + CTA
- [X] T015 [P] [US2] `web/src/components/Cases.astro` (`#casos`): carrossel scroll-snap de `cases`, vídeos com fachada (capa `i.ytimg.com` → iframe `youtube-nocookie` no clique), galeria `turmas`, CTA do meio
- [X] T016 [P] [US2] `web/src/components/Offer.astro` (`#investimento`): incluso, quando/onde, preço via `brl()`, `#countdown` usando `remaining()`, CTAs checkout e whatsapp, garantia
- [X] T017 [P] [US2] `web/src/components/About.astro`: foto, bio, desabafo
- [X] T018 [P] [US2] `web/src/components/Faq.astro` (`#duvidas`): `<details>` por item + link WhatsApp
- [X] T019 [US2] Adicionar as seções em ordem em `web/src/pages/index.astro`
- [X] T020 [US2] Testes Playwright: ordem das seções, `[data-cta=whatsapp]` → `links.whatsapp`, FAQ abre/fecha, clique no vídeo cria iframe

## Phase 5: User Story 3 — Visitante navega direto ao que procura (P3)

**Independent test**: links do menu levam às seções; ☰ no celular; botão ↑ aparece após 1 tela e volta ao topo.

- [X] T021 [US3] Completar `web/src/components/Nav.astro`: links para âncoras; < 1024px botão ☰ com `aria-expanded` que abre/fecha; clicar em link fecha; `scroll-padding-top` no CSS
- [X] T022 [P] [US3] Criar `web/src/components/BackToTop.astro` (`#back-to-top`, oculto até `scrollY > innerHeight`) e `web/src/components/Footer.astro` com link `#top`
- [X] T023 [US3] Testes Playwright: link "Investimento" leva à seção; ☰ abre/fecha em 390px; `#back-to-top` aparece e leva a `scrollY === 0`

## Phase 6: Polish

- [X] T024 Teste Playwright: altura 9–12 telas em 1440×900; `scrollWidth <= innerWidth` em 390 e 1440
- [X] T025 Conferir no Chrome em 390 e 1440 (constituição); ajustar espaçamentos
- [X] T026 [P] Atualizar `README.md` com como rodar `web/` e onde trocar data/preço

## Dependencies

Setup → Foundational → US1 → (US2, US3 em paralelo) → Polish. Dentro da US2, T012–T018 são arquivos independentes [P].

## Implementation Strategy

MVP = US1 (menu + hero + checkout). Depois US2 (conteúdo completo), US3 (navegação), Polish.
