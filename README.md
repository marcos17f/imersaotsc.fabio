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

## CI/CD e segurança (shift-left)

- **Na sua máquina** (ative uma vez: `git config core.hooksPath .githooks`): o `pre-commit` barra
  segredos no commit e roda testes + checagem de tipos quando `web/` muda.
- **No GitHub Actions** (`.github/workflows/`), a cada push e PR:
  - `ci-cd.yml`: varredura de segredos no histórico (gitleaks), revisão de dependências novas em PR,
    `npm audit`, tipos, Vitest e Playwright (390px e 1440px).
  - `codeql.yml`: análise estática de segurança do código (também toda segunda).
  - **Deploy na Vercel só acontece se tudo passar**, e só a partir da `main`.
- **Dependabot** abre PR semanal com atualizações de pacotes e actions.
- Testes de segurança fixos: o build falha se o checkout sair de `pay.hotmart.com` ou o WhatsApp
  sair de `wa.me`; os cabeçalhos de segurança do `web/vercel.json` não podem ser removidos.

Para o deploy automático, crie na Vercel (time `marcos17fs-projects`) e cadastre em
GitHub → Settings → Secrets and variables → Actions: `VERCEL_TOKEN`, `VERCEL_ORG_ID`,
`VERCEL_PROJECT_ID`. Não ligue também a integração Git da Vercel, senão cada push publica duas vezes
(e sem esperar os testes).
