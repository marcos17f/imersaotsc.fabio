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

Importar o repositório na Vercel (time `marcos17fs-projects`) com **Root Directory = `web`**.
O `web/vercel.json` já define o build como `npm test && npm run build`: **se um teste falhar, a Vercel
não publica** e o site no ar continua o anterior. Cada push na `main` publica sozinho.

## Estrutura

- `web/` — o site
- `specs/002-landing-redesign/` — especificação, plano e tarefas (Spec Kit)
- `index.html` + `assets/` — página antiga em WordPress/Elementor, guardada só como referência

## CI/CD e segurança (shift-left)

- **Na sua máquina** (ative uma vez: `git config core.hooksPath .githooks`):
  - `pre-commit`: barra segredos no commit e roda testes + checagem de tipos quando `web/` muda.
  - `pre-push`: `npm audit` + testes no navegador (390px e 1440px); se falhar, o push não sobe.
- **Na Vercel**: o build roda os testes antes de publicar (ver Deploy).
- **No GitHub Actions** (`.github/workflows/`), a cada push e PR — *parado enquanto a conta do
  GitHub tiver pendência de cobrança; volta sozinho quando ela for resolvida*:
  - `ci-cd.yml`: varredura de segredos no histórico (gitleaks), revisão de dependências novas em PR,
    `npm audit`, tipos, Vitest e Playwright (390px e 1440px).
  - `codeql.yml`: análise estática de segurança do código (também toda segunda).
  - Job de deploy opcional (só roda se os segredos da Vercel forem cadastrados).
- **Dependabot** abre PR semanal com atualizações de pacotes e actions.
- Testes de segurança fixos: o build falha se o checkout sair de `pay.hotmart.com` ou o WhatsApp
  sair de `wa.me`; os cabeçalhos de segurança do `web/vercel.json` não podem ser removidos.

Deploy hoje é pela integração Git da Vercel. **Não cadastre** `VERCEL_TOKEN`/`VERCEL_ORG_ID`/
`VERCEL_PROJECT_ID` no GitHub enquanto ela estiver ligada, senão cada push publica duas vezes.
