# Constituição da Landing Page Imersão TSC

## Princípios

### I. Conversão primeiro
Esta é uma página de vendas. Toda seção MUST terminar levando a uma de duas ações:
"Garantir ingresso" (checkout Hotmart) ou "Falar no WhatsApp". O botão de compra MUST estar
sempre visível (menu fixo no topo). Nenhum elemento entra na página se não ajudar a vender.

### II. Visual de especialista
A página MUST parecer uma consultoria de gestão, não um anúncio:
- Fundo escuro; texto claro; muito espaço em branco; tipografia forte.
- O verde TSC MUST ser usado só em botões, números e pequenos destaques. MUST NOT ser fundo de
  seção nem cor de título grande.
- Sem emojis no texto; sem gradientes chamativos; sem texto colorido embutido em imagens novas.

Motivo: o site antigo era colorido demais e passava pouca autoridade.

### III. Enxuta, mas completa
A página tem 8 seções (Hero, O problema, O método, Programa, Casos reais, Investimento,
Quem é o Fábio, Dúvidas), mais vídeos de depoimento, galeria das turmas, um CTA no meio e o
desabafo do Fábio. Alvo: 9 a 12 telas no desktop (o site antigo tem 25,5). Conteúdo repetido
MUST ser fundido; listas longas viram grade, carrossel ou sanfona. Um botão "voltar ao topo"
MUST existir após a primeira tela.

### IV. Celular e performance
O tráfego vem de anúncio no celular. A página MUST ser estática, carregar quase sem JavaScript
(só contagem regressiva, menu ☰ e voltar ao topo), com imagens otimizadas e dimensionadas.
Todo layout MUST funcionar em 390px sem rolagem horizontal.

### V. Simplicidade
Stack: Astro + TypeScript + Tailwind CSS. MUST NOT usar Emotion, GraphQL, Shopify ou Terraform.
Dependência nova só entra com motivo escrito no plano. A menor mudança que funciona.

## Restrições

- Marca, nome, fotos, vídeos e depoimentos são do cliente (Fábio Gimenes / Imersão TSC) e são
  mantidos.
- Links mantidos: checkout `https://pay.hotmart.com/V102260170T` (com os parâmetros atuais),
  WhatsApp `https://wa.me/message/H4ZERXXJY6OVK1`, Google Tag Manager `GTM-WKQ2BRD9`.
- Data, horário, local, preços e prazo da contagem MUST ter uma única fonte de verdade no código;
  nenhum valor duplicado no texto.
- Testes: Vitest para a lógica (contagem regressiva, formatação de preço); Playwright para o fluxo
  (CTAs apontam para Hotmart/WhatsApp, menu e âncoras, voltar ao topo) em 390px e 1440px.
- `index.html` e `assets/` antigos ficam como referência até o novo site ir ao ar.

## Fluxo de trabalho

constitution → specify → plan → tasks → implement. Cada entrega é conferida no Chrome em 390px e
1440px antes de ser dada como pronta.

## Governança

Esta constituição prevalece sobre os demais documentos. Emendas são registradas aqui com aumento
de versão semântico (MAJOR: princípio removido ou redefinido; MINOR: princípio ou seção nova;
PATCH: redação). Todo plano MUST conferir os princípios acima antes de começar.

**Versão**: 2.0.0 | **Ratificada**: 2026-10-31 | **Última emenda**: 2026-10-31
