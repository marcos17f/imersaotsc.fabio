# Tarefas: Clone da Landing Page Imersão TSC

**Entrada**: [spec.md](spec.md), [plan.md](plan.md)

## Fase 1: Preparação

- [x] T001 Identificar a stack do original (WordPress 7.1.3 + Elementor 4.2.4 + LiteSpeed) e confirmar que não há repositório público no GitHub
- [x] T002 Criar o projeto `imersaotsc-clone` com git + Spec Kit

## Fase 2: História 1 — página completa (P1) 🎯 MVP

- [x] T003 [H1] Espelhar `index.html` + 200 assets do host original em `assets/`
- [ ] T004 [H1] Comparar clone e original lado a lado em 1440px; anotar diferenças
- [ ] T005 [H1] Aba Network: listar requisições restantes a `fabiogimenes.com.br` (URLs em JSON no `elementorFrontendConfig`, lazy-load) e torná-las locais
- [ ] T006 [H1] Console: corrigir 404 de assets
- [ ] T007 [H1] Confirmar que a contagem regressiva funciona

## Fase 3: História 2 — celular (P1)

- [ ] T008 [H2] Comparar em 390px; sem rolagem horizontal

## Fase 4: História 3 — FAQ e WhatsApp (P2)

- [ ] T009 [H3] Testar abrir/fechar do FAQ e o botão de WhatsApp

## Fase 5: História 4 — troca de marca (P3)

- [ ] T010 [H4] Trocar checkout (Hotmart), WhatsApp, PixelYourSite/Site Kit, marca, fotos e depoimentos antes de qualquer publicação

## Fase 6: Acabamento

- [x] T011 README com instruções de como rodar (`python -m http.server 5500`)
