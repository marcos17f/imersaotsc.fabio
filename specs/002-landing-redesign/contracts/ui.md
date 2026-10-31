# UI Contract

O que os testes Playwright verificam. Seletores estáveis via `id` e `data-cta`.

## Âncoras de seção
`#problema`, `#metodo`, `#programa`, `#casos`, `#investimento`, `#duvidas` (Hero no topo, Fábio sem link no menu).

## Botões
| Atributo | Destino | Onde aparece |
|---|---|---|
| `data-cta="checkout"` | `links.checkout` (abre em nova aba) | Menu, Hero, Programa, CTA do meio, Investimento |
| `data-cta="whatsapp"` | `links.whatsapp` (nova aba) | Investimento, Dúvidas |

## Menu
- `nav` fixo (`position: sticky`) em todas as larguras.
- ≥ 1024px: links visíveis. < 1024px: botão `[aria-controls="menu"]` com `aria-expanded`; clicar num link fecha.

## Voltar ao topo
- `#back-to-top` oculto enquanto `scrollY < innerHeight`; visível depois; clique → `scrollY === 0`.
- Rodapé: link `href="#top"`.

## Contagem
- `#countdown` com `[data-unit=days|hours|minutes|seconds]`; ao zerar mostra texto de lote.

## Tamanho
- Em 1440×900: `scrollHeight / innerHeight` entre 9 e 12.
- Em 390 e 1440: `scrollWidth <= innerWidth`.
