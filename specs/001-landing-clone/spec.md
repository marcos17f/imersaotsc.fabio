# Especificação: Clone da Landing Page Imersão TSC

**Branch**: `001-landing-clone`
**Criada em**: 2026-10-31
**Status**: Rascunho
**Pedido**: "Clonar o site https://fabiogimenes.com.br/imersaotsc/ na mesma linguagem; se não houver GitHub público, clonar pelo que aparece na tela."

## Contexto

A página original é uma landing page de vendas de um evento presencial (Imersão TSC — Técnico Sem Crise) voltado para donos de assistência técnica de celular. Não existe repositório público: o site roda num CMS (WordPress + Elementor), então o clone parte da página renderizada.

## Cenários de uso e testes *(obrigatório)*

### História 1 - Visitante lê a página e decide comprar (Prioridade: P1)

O visitante abre a página, rola por todas as seções (dores → 3 pilares → o que a imersão é/não é → casos reais → módulos → data/local → o que está incluso → depoimentos → oferta com contagem regressiva → quem é o anfitrião → FAQ → desabafo pessoal) e clica num botão de compra.

**Por que essa prioridade**: é o núcleo da página; sem isso não há clone.

**Teste independente**: abrir o clone e o original lado a lado; todas as seções aparecem na mesma ordem, com os mesmos textos e imagens.

**Cenários de aceite**:

1. **Dado** o clone servido localmente, **quando** o visitante abre a página, **então** todas as seções do original aparecem na mesma ordem e com o mesmo conteúdo.
2. **Dado** qualquer botão de CTA ("GARANTIR O MEU INGRESSO", "QUERO GARANTIR MINHA VAGA", "QUERO TER ESSE RESULTADO"), **quando** clicado, **então** leva ao link de checkout configurado.
3. **Dada** a seção de oferta, **quando** a página carrega, **então** a contagem "o preço sobe em…" aparece e está correndo.

---

### História 2 - Visitante no celular (Prioridade: P1)

A maior parte do tráfego vem do Instagram (utm_source=ig). A página precisa ficar igual ao original no celular.

**Teste independente**: tela com 390px de largura; comparar com o original na mesma largura.

**Cenários de aceite**:

1. **Dada** uma tela de 390px, **quando** rolar a página inteira, **então** não há rolagem horizontal e o layout é igual ao do original.

---

### História 3 - Visitante com dúvidas (Prioridade: P2)

O visitante abre as perguntas do FAQ ("Fábio, mas e se...") e/ou fala com o time no WhatsApp.

**Cenários de aceite**:

1. **Dado** o FAQ, **quando** clicar numa pergunta, **então** a resposta abre/fecha.
2. **Dado** o botão de WhatsApp, **quando** clicado, **então** abre o link de WhatsApp configurado.

---

### História 4 - Dono troca a marca do clone (Prioridade: P3)

Quem for dono do clone troca a marca, o checkout, o WhatsApp e os pixels pelos seus antes de publicar.

**Cenários de aceite**:

1. **Dado** o repositório, **quando** o dono procura os links/IDs do original, **então** encontra todos listados num só lugar (ver Premissas).

### Casos extremos

- Aberto por `file://` em vez de HTTP: fontes/ícones podem não carregar → o README manda usar servidor local.
- Contagem regressiva do original presa a uma data fixa: depois dessa data pode mostrar zeros ou sumir.
- Scripts de terceiros (pixel, Hotmart) fora do ar/bloqueados: a página ainda tem que renderizar 100%.

## Requisitos *(obrigatório)*

### Requisitos funcionais

- **RF-001**: O clone DEVE reproduzir todas as seções, textos e imagens do original, na mesma ordem.
- **RF-002**: O clone DEVE renderizar sem nenhuma requisição ao host do site original.
- **RF-003**: O clone DEVE manter o comportamento responsivo do original (desktop, tablet, celular).
- **RF-004**: Os CTAs DEVEM apontar para um link de checkout; os botões de WhatsApp, para um link de WhatsApp.
- **RF-005**: O FAQ DEVE abrir/fechar as respostas.
- **RF-006**: A contagem regressiva da oferta DEVE funcionar.
- **RF-007**: Os vídeos de depoimento do original DEVEM aparecer/tocar (incorporados da fonte original).
- **RF-008**: O projeto DEVE ter instruções de como rodar localmente.

### Entidades principais

- **Seção**: um bloco da página (título, texto, imagem, CTA).
- **CTA**: botão com texto e link de destino (checkout ou WhatsApp).
- **Depoimento**: nome, @perfil, citação, antes/depois, foto ou vídeo.
- **Oferta**: lote, preço cheio, parcelas, preço à vista, contagem regressiva.

## Critérios de sucesso *(obrigatório)*

- **CS-001**: 100% das seções do original presentes, na mesma ordem (conferência manual lado a lado).
- **CS-002**: 0 requisições ao host original ao carregar o clone (conferido na aba Network).
- **CS-003**: Nenhuma diferença visível de layout em 1440px e 390px de largura.
- **CS-004**: A página carrega e fica interativa em menos de 3 s numa conexão local.

## Premissas

- "Mesma linguagem" = o HTML/CSS/JS gerado pelo WordPress + Elementor; sem portar para outro framework.
- Links do original (trocar antes de qualquer publicação): checkout `pay.hotmart.com/V102260170T`, WhatsApp `wa.me/message/H4ZERXXJY6OVK1`, tags do PixelYourSite e do Google Site Kit.
- O clone não é publicado com a marca do original (Constituição IV).
