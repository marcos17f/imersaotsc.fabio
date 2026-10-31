# Data Model: `web/src/data/site.ts`

Um único módulo exporta constantes tipadas. Nenhum componente escreve data, preço ou link à mão.

## event
- `startsAt`: ISO com fuso (`2026-11-01T09:00:00-03:00`) — alvo da contagem
- `dateLabel`: "01 e 02 de novembro"
- `daysLabel`: "Domingo e segunda (feriado)"
- `hours`: "9h às 19h"
- `address`: "R. Airi, 227 – Vila Gomes Cardim, São Paulo – SP, 03310-010"
- `landmark`: "Próximo ao metrô Tatuapé"

## offer
- `lot`: "Lote zero"
- `fullPrice`: 2057 (número, em reais)
- `installments`: 12
- `installmentValue`: 97
- `cashPrice`: 997
- `bundle`: "2 ingressos pelo preço de 1"
- `guarantee`: "Garantia total no primeiro dia: devolvemos 100%."
- `includes`: string[6]

## links
- `checkout`: `https://pay.hotmart.com/V102260170T?off=epu23b12&checkoutMode=10`
- `whatsapp`: `https://wa.me/message/H4ZERXXJY6OVK1`
- `gtmId`: `GTM-WKQ2BRD9`

## stats: `{ value: string; label: string }[]` (4 itens)

## pillars: `{ title; text }[]` (3) · modules: `{ title; text }[]` (7)

## cases: `{ name; role; quote; before; after; image }[]` (3)

## videos: `{ name; youtubeId }[]` (3)

## faq: `{ q; a }[]` (11, texto corrigido)

## Regras
- Valores de dinheiro são números; a formatação ("R$ 997") sai de uma função única `brl()`.
- Todo texto que cita preço ou data (ex.: FAQ "Tem parcelamento?") é montado a partir de `offer`/`event`.
