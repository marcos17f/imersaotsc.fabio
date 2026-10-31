# Quickstart

## Pré-requisitos
Node 24+ e npm.

## Rodar
```
cd web
npm install
npm run dev        # http://localhost:4321
```

## Validar
```
npm run test       # Vitest: contagem e formatação de preço
npx playwright install chromium   # só na primeira vez
npm run e2e        # Playwright em 390px e 1440px (contracts/ui.md)
npm run build      # gera web/dist estático
```

## Resultado esperado
- Testes verdes.
- Em 390px: título, data, local e botão de compra sem rolar; menu ☰ abre e fecha.
- Em 1440px: 9 a 12 telas; botão ↑ aparece após a primeira tela.
- Todo botão de compra abre a Hotmart; todo botão de WhatsApp abre a conversa.

## Trocar a turma
Editar só `web/src/data/site.ts` (`event` e `offer`).
