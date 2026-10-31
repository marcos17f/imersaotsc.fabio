# Especificação: Redesenho da landing page da Imersão TSC

**Feature Branch**: `002-landing-redesign`

**Created**: 2026-10-31

**Status**: Draft

**Input**: Redesenho da página de vendas da Imersão TSC (evento presencial de 2 dias em São Paulo,
do Fábio Gimenes, para donos de assistência técnica e loja de acessórios). Visual escuro + verde TSC,
menu fixo, 8 seções, página de 9 a 12 telas, botão voltar ao topo. Prévia aprovada:
`.superpowers/brainstorm/2051-1793458325/content/pagina-completa-v2.html` (tema "A escuro + verde TSC").

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Visitante do anúncio compra o ingresso (Priority: P1)

Um dono de assistência clica num anúncio no celular, cai no topo da página, entende em segundos o
que é a imersão (o quê, quando, onde, pra quem) e toca em "Garantir ingresso", indo para o checkout.

**Why this priority**: É a razão de a página existir. Sem isso não há venda.

**Independent Test**: Abrir a página em 390px, conferir que título, data, local e botão de compra
aparecem sem rolar, tocar no botão e chegar ao checkout da Hotmart.

**Acceptance Scenarios**:

1. **Given** a página aberta no celular, **When** carrega, **Then** a primeira tela mostra o título,
   a data, o local, a oferta "2 ingressos pelo preço de 1" e um botão de compra.
2. **Given** qualquer ponto da página, **When** o visitante olha o topo, **Then** o botão
   "Garantir ingresso" está visível no menu fixo.
3. **Given** qualquer botão de compra, **When** é tocado, **Then** abre o checkout da Hotmart com os
   parâmetros atuais da oferta.

---

### User Story 2 - Visitante indeciso se convence lendo (Priority: P2)

O visitante rola pela história: problema, método, programa, casos reais com vídeos e fotos das
turmas, oferta com preço e contagem regressiva, quem é o Fábio e dúvidas. Termina comprando ou
chamando o time no WhatsApp.

**Why this priority**: A maioria não compra na primeira tela; o argumento completo converte o resto.

**Independent Test**: Ler a página de cima a baixo em 1440px e 390px, conferindo que as 8 seções
existem na ordem, os vídeos tocam, o FAQ abre e fecha e o botão de WhatsApp abre a conversa.

**Acceptance Scenarios**:

1. **Given** a seção Investimento, **When** o visitante a vê, **Then** vê o que está incluso, quando
   e onde, o preço parcelado e à vista, a contagem regressiva, a garantia e os botões Hotmart e WhatsApp.
2. **Given** a seção Casos reais, **When** o visitante toca num vídeo, **Then** o depoimento toca
   sem sair da página.
3. **Given** a seção Dúvidas, **When** toca numa pergunta, **Then** a resposta abre; tocando de
   novo, fecha.
4. **Given** o visitante em dúvida, **When** toca em "Falar com o time no WhatsApp", **Then** abre
   a conversa do WhatsApp da Imersão.

---

### User Story 3 - Visitante navega direto ao que procura (Priority: P3)

O visitante quer ver só o preço, o programa ou as dúvidas. Usa o menu do topo (no celular, o ☰)
para pular direto à seção e o botão "voltar ao topo" para retornar sem rolar.

**Why this priority**: Pedido explícito do cliente: facilitar achar as coisas e evitar rolagem.

**Independent Test**: Tocar em cada link do menu e conferir o salto à seção certa; rolar além da
primeira tela e usar o botão ↑.

**Acceptance Scenarios**:

1. **Given** o menu do topo, **When** toca em "Investimento" (ou outro link), **Then** a página
   rola até essa seção, sem o título ficar escondido atrás do menu.
2. **Given** o celular, **When** toca no ☰, **Then** os links aparecem; ao tocar num link, o menu
   fecha e a página vai para a seção.
3. **Given** o visitante na primeira tela, **Then** o botão ↑ não aparece; **When** rola além da
   primeira tela, **Then** o botão ↑ aparece no canto inferior direito; **When** toca nele,
   **Then** volta ao topo.
4. **Given** o rodapé, **When** toca em "Voltar ao topo", **Then** volta ao topo.

---

### Edge Cases

- **Contagem regressiva chega a zero**: em vez de 00:00:00 ou números negativos, mostra uma
  mensagem neutra ("Últimas vagas neste lote") e os botões de compra continuam funcionando.
- **Evento já passou**: a data e o prazo vêm de um único lugar, então atualizar a próxima turma
  é uma única troca de dados; a página nunca exibe duas datas diferentes.
- **JavaScript desligado ou com falha**: o conteúdo, os links de compra, o WhatsApp, o menu (links
  visíveis) e o FAQ continuam utilizáveis; só a contagem e o botão ↑ somem.
- **Vídeo não carrega**: aparece a capa com o nome da pessoa; a página não quebra.
- **Tela muito estreita (320px)**: nenhum texto ou botão sai da tela; sem rolagem horizontal.

## Requirements *(mandatory)*

### Functional Requirements

**Estrutura e navegação**

- **FR-001**: A página MUST ter, nesta ordem: Hero, O problema, O método, Programa, Casos reais,
  Investimento, Quem é o Fábio, Dúvidas e rodapé.
- **FR-002**: O menu MUST ficar fixo no topo durante a rolagem, com a marca TSC, os links O problema,
  O método, Programa, Casos reais, Investimento, Dúvidas e o botão "Garantir ingresso".
- **FR-003**: Em telas de celular, os links do menu MUST ficar num menu ☰ e o botão de ingresso MUST
  continuar visível ao lado.
- **FR-004**: Cada link do menu MUST levar à sua seção sem que o título fique escondido sob o menu.
- **FR-005**: Um botão flutuante ↑ MUST aparecer só depois que o visitante rolar além da primeira tela
  e MUST levar ao topo; o rodapé MUST ter o link "Voltar ao topo".

**Conteúdo**

- **FR-006**: O Hero MUST mostrar título, subtítulo, botão de compra, botão "Ver o programa", data,
  local, oferta "2 ingressos pelo preço de 1" e a faixa de números (5 turmas lotadas, 7 módulos,
  2 dias presenciais, 30 dias de acompanhamento).
- **FR-007**: O problema MUST juntar os sintomas (funcionário, cliente que só quer preço,
  concorrência, crise) e o custo pessoal (tempo, você mesmo, o sonho) num único bloco.
- **FR-008**: O método MUST apresentar os 3 pilares (Mentalidade, Crescimento, Liberdade), por que a
  imersão é presencial e o que ela não é.
- **FR-009**: Programa MUST listar os 7 módulos em grade compacta, com um botão de compra.
- **FR-010**: Casos reais MUST ter os 3 casos de antes/depois (Evandro, Deyvison, Daniel) em
  carrossel, os 3 vídeos de depoimento (Mateus, Kauan, Naila), a foto das 5 turmas e um bloco de
  chamada "Essa sala já encheu 5 vezes" com botão de compra.
- **FR-011**: Investimento MUST mostrar o que está incluso (6 itens), quando, onde, preço cheio
  riscado, parcelado e à vista, contagem regressiva até a virada de lote, garantia e os botões
  Hotmart e WhatsApp.
- **FR-012**: Quem é o Fábio MUST ter foto, bio curta e o desabafo pessoal.
- **FR-013**: Dúvidas MUST ter as perguntas do site atual em sanfona (abre/fecha) e um link para o
  WhatsApp.
- **FR-014**: Os textos MUST reaproveitar o texto de vendas atual, enxugado, sem emojis e sem
  contradições. Dias do evento: sábado 31/10 e domingo 01/11/2026, das 9h às 19h (confirmado pelo
  cliente e pelo checkout da Hotmart em 2026-10-31).
- **FR-015**: Preço: de R$2.057 por 12x de R$97 ou R$997 à vista, 2 ingressos pelo preço de 1, lote
  zero. O FAQ é corrigido para esses valores (antes citava 12x R$89 e R$897).
- **FR-016**: A contagem regressiva MUST contar até o início do evento (31/10/2026 às 9h, horário de
  Brasília), já que não há prazo de lote informado.
- **FR-017**: Data, horário, local, preços, prazo do lote e links MUST vir de uma única fonte, de
  modo que cada valor apareça igual em toda a página.

**Visual**

- **FR-018**: Fundo escuro, texto claro, verde TSC só em botões, números e pequenos destaques;
  nenhuma seção com fundo verde nem título grande em verde.
- **FR-019**: Em 390px e 1440px, nenhum conteúdo pode gerar rolagem horizontal.

**Integrações mantidas**

- **FR-020**: Todo botão de compra MUST apontar para `https://pay.hotmart.com/V102260170T` com os
  parâmetros da oferta atual (`off=epu23b12`, `checkoutMode=10`).
- **FR-021**: Todo botão de WhatsApp MUST apontar para `https://wa.me/message/H4ZERXXJY6OVK1`.
- **FR-022**: A página MUST carregar o Google Tag Manager `GTM-WKQ2BRD9`, como o site atual.

### Key Entities

- **Evento**: datas, dias da semana, horário, endereço, referência (metrô Tatuapé).
- **Oferta**: lote, preço cheio, parcelas e valor da parcela, valor à vista, "2 por 1", prazo do lote,
  link de checkout, garantia.
- **Caso real**: nome, loja/tempo de loja, frase, antes, depois, foto.
- **Depoimento em vídeo**: nome, capa, vídeo.
- **Pergunta frequente**: pergunta, resposta.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A página inteira tem entre 9 e 12 telas de altura no desktop (1440×900); o site atual tem 25,5.
- **SC-002**: No celular (390px), título, data, local e botão de compra aparecem sem rolar.
- **SC-003**: De qualquer ponto da página, o visitante chega ao checkout com 1 toque.
- **SC-004**: De qualquer ponto da página, o visitante chega a qualquer seção com no máximo 2 toques
  (☰ + link) e volta ao topo com 1 toque.
- **SC-005**: A primeira tela aparece em até 2,5 s numa conexão 4G típica de celular.
- **SC-006**: Nenhum valor de data ou preço aparece de dois jeitos diferentes na página.
- **SC-007**: 100% dos botões de compra levam à Hotmart e 100% dos de WhatsApp levam à conversa
  certa, conferidos por teste automático em 390px e 1440px.

## Assumptions

- O time trabalha com o Fábio Gimenes; marca, fotos, vídeos e depoimentos atuais podem ser usados.
- Os vídeos de depoimento ficam onde já estão hospedados hoje (o site atual os incorpora); se não
  houver vídeo, usa-se a capa com link.
- As fotos de antes/depois atuais têm "ANTES/DEPOIS" escritos em vermelho/verde. A primeira versão
  usa as atuais; se o cliente mandar versões sem esse texto, elas substituem.
- Os pixels de anúncio continuam sendo disparados pelo GTM; nada do PixelYourSite/WordPress é migrado.
- Fora do escopo: blog, mais páginas, área de edição de textos, outros idiomas, captura de leads.
- A página antiga (`index.html` + `assets/`) fica no repositório só como referência.
