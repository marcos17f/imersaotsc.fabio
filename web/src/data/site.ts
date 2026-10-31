// Fonte única de datas, preços e links. Trocar de turma = editar só este arquivo
// (event, offer e, se a Hotmart gerar oferta nova, links.checkout). Conferir com o checkout da Hotmart.

export const brl = (v: number) => 'R$ ' + v.toLocaleString('pt-BR');

export const event = {
  startsAt: '2026-10-31T09:00:00-03:00',
  dateLabel: '31 de outubro e 01 de novembro',
  daysLabel: 'Sábado e domingo',
  hours: '9h às 19h',
  address: 'R. Airi, 227 – Vila Gomes Cardim',
  city: 'São Paulo – SP, 03310-010',
  landmark: 'Próximo ao metrô Tatuapé',
};

export const offer = {
  lot: 'Lote zero',
  fullPrice: 2057,
  installments: 12,
  installmentValue: 97,
  cashPrice: 997,
  bundle: '2 ingressos pelo preço de 1',
  guarantee: 'Garantia total no primeiro dia: devolvemos 100%, sem burocracia.',
  includes: [
    'Método TSC completo: mentalidade, crescimento e liberdade',
    'Apostila com exercícios práticos',
    'Plano de ação personalizado para a sua loja',
    'Certificado Técnico Sem Crise',
    'Networking com donos de loja do Brasil inteiro',
    '30 dias de acompanhamento depois da imersão',
  ],
};

export const links = {
  checkout: 'https://pay.hotmart.com/V102260170T?off=epu23b12&checkoutMode=10',
  whatsapp: 'https://wa.me/message/H4ZERXXJY6OVK1',
  gtmId: 'GTM-WKQ2BRD9',
};

// Trava de segurança: o build falha se alguém trocar o checkout ou o WhatsApp por um link fora
// dos domínios oficiais (evita publicar um link de pagamento falso por engano ou de propósito).
export function assertOfficialLink(url: string, host: string) {
  const u = new URL(url);
  if (u.protocol !== 'https:' || u.hostname !== host || u.username || u.password)
    throw new Error(`Link não oficial bloqueado: ${url} (esperado https://${host}/...)`);
}
assertOfficialLink(links.checkout, 'pay.hotmart.com');
assertOfficialLink(links.whatsapp, 'wa.me');
if (!/^GTM-[A-Z0-9]+$/.test(links.gtmId)) throw new Error(`ID do GTM inválido: ${links.gtmId}`);

export const stats = [
  { value: '203+', label: 'donos de assistência já passaram' },
  { value: '5', label: 'turmas lotadas' },
  { value: '7', label: 'módulos práticos' },
  { value: '30 dias', label: 'de acompanhamento depois' },
];

export const wants = [
  { want: 'Você quer crescer,', but: 'mas passa o dia inteiro na bancada resolvendo o que ninguém mais resolve.' },
  { want: 'Você quer contratar,', but: 'mas todo funcionário que entra dá mais trabalho do que alívio. Quando não vira seu concorrente.' },
  { want: 'Você quer tirar férias,', but: 'mas sabe que na sua ausência o faturamento cai e o problema acumula. Ou a loja nem abre.' },
  { want: 'Você quer ganhar mais,', but: 'mas quanto mais serviço entra, mais preso você fica.' },
  { want: 'Você quer estar com sua família,', but: 'mas chega em casa sem paciência pra quem você mais ama.' },
];

export const symptoms = [
  'A falta de tempo',
  'O funcionário que não vestiu a camisa',
  'O cliente que só quer preço',
  'A concorrência que cobra barato',
  'O mercado difícil e a crise',
];

export const costs = [
  { title: 'Tempo.', text: 'Seu filho crescendo, sua família esperando e você sempre dizendo "não posso". Isso não volta.' },
  { title: 'Você mesmo.', text: 'Cansado, sem paciência com quem mais ama, sem reconhecer quem era antes de virar "o dono da loja".' },
  { title: 'O sonho.', text: 'Você abriu a loja sonhando com liberdade. Hoje ela é o motivo de nunca ter um dia de folga de verdade.' },
];

export const pillars = [
  { title: 'Mentalidade', text: 'Sair do papel de técnico e assumir o papel de dono.' },
  { title: 'Crescimento', text: 'Atendimento, vendas, preço e divulgação que colocam caixa todo mês.' },
  { title: 'Liberdade', text: 'Processos e equipe para a loja funcionar sem você no balcão.' },
];

export const notThis = [
  'Palestra motivacional ou papo de coach',
  'Curso gravado que você abandona na metade',
  'Teoria de gestão feita para empresa grande',
];

export const modules = [
  { title: 'Mentalidade de empresário', text: 'Quebre as crenças e travas que mantêm você preso na bancada.' },
  { title: 'Atendimento que gera confiança', text: 'O cliente passa a comprar pela confiança, não pelo preço.' },
  { title: 'Vendas e precificação', text: 'Venda mais, cobre certo e pare de perder dinheiro com desconto.' },
  { title: 'Divulgação estratégica', text: 'Clientes chegando sempre, sem depender só de indicação.' },
  { title: 'Gestão e processos', text: 'A empresa continua rodando quando você não está.' },
  { title: 'Equipe e liderança', text: 'Contrate, desenvolva e lidere sem virar refém de funcionário.' },
  { title: 'Receba antes de executar', text: 'Menos aparelho parado esperando pagamento e caixa melhor já na primeira semana.' },
];

export const cases = [
  {
    name: 'Deyvison',
    role: 'Total Tech · @totaltechregistro',
    image: 'caso-deyvison',
    quote: 'Acreditava que a empresa não funcionava sem mim. Em poucos meses consigo me ausentar e a loja continua rodando.',
    before: '4 anos de loja, preso no operacional, achando que o negócio morria sem ele.',
    after: 'Equipe alinhada, caixa no positivo e liberdade para se ausentar.',
  },
  {
    name: 'Daniel',
    role: 'Dono de assistência há 3 anos · @dw_smartdigital',
    image: 'caso-daniel',
    quote: 'Enfrentei 2 dias de ônibus do Piauí até São Paulo. Foi a decisão que mudou a gestão do meu negócio.',
    before: 'Trabalhando muito, sem direção, apagando incêndio na bancada.',
    after: 'Processos organizados, equipe forte e visão estratégica de dono.',
  },
  {
    name: 'Evandro',
    role: 'Dono de loja há 13 anos · @ribeirotechsantaalbertina',
    image: 'caso-evandro',
    quote: 'Viajei 700 km para a minha primeira imersão. Hoje a loja roda sem mim e o faturamento aumentou.',
    before: '13 anos de loja, 100% na bancada, sem férias há anos.',
    after: 'Aprendeu a delegar, faturou mais e voltou a viajar com a família.',
  },
] as const;

export const videos = [
  { name: 'Mateus', youtubeId: 'tuDmxr-h5PU' },
  { name: 'Kauan', youtubeId: 'PAi7ShVAlbM' },
  { name: 'Naila', youtubeId: 'yimJdZjGRQo' },
];

export const faq = [
  { q: 'Não posso fechar a loja 2 dias.', a: `A imersão é no fim de semana justamente por isso. E se você não consegue se afastar nem 2 dias, esse é o maior sinal de que precisa vir.` },
  { q: 'E se a loja der problema enquanto eu estiver aí?', a: 'Se a loja não sobrevive 48 horas sem você, o problema não é a imersão. É a loja. E é exatamente isso que a gente vem resolver.' },
  { q: 'Moro longe. Vale a pena?', a: 'A maioria não é de São Paulo; já veio gente de 38 horas de ônibus. A gente indica hospedagem perto do local e orienta o deslocamento. Você não se vira sozinho.' },
  { q: 'Já fiz curso e não mudou nada.', a: 'Curso ensina o que fazer. A imersão muda quem você é enquanto dono. Por isso o método começa pela mentalidade, não pela planilha.' },
  { q: 'É caro?', a: `Você provavelmente perde mais de ${brl(offer.cashPrice)} por mês em desconto, fiado e retrabalho. A conta a gente faz no primeiro dia.` },
  { q: 'E se eu não gostar?', a: offer.guarantee },
  { q: 'Preciso ter funcionário para participar?', a: 'Não. Tem dono que veio sozinho na operação e saiu com o plano para contratar do jeito certo.' },
  { q: 'Posso levar meu sócio ou meu técnico?', a: 'Pode. O ingresso é duplo justamente para isso.' },
  { q: 'Como funciona a imersão?', a: `2 dias presenciais em São Paulo, ${event.hours}. Método TSC completo, plano de ação personalizado, apostila, certificado e coffee break.` },
  { q: 'Tem parcelamento?', a: `Sim: ${offer.installments}x de ${brl(offer.installmentValue)} no cartão, ou ${brl(offer.cashPrice)} à vista.` },
  { q: 'Como recebo a confirmação?', a: 'Direto no WhatsApp, logo depois da compra, junto com o grupo de informações sobre hotel, aeroporto e restaurantes.' },
];
