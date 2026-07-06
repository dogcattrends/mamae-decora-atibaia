// ATUALIZAR COM NÚMEROS REAIS CONFIRMADOS PELO CLIENTE
export const BUSINESS_STATS = {
  themes: {
    label: 'Temas Exclusivos',
    value: '300+',
    copy: 'mais de 300',
  },
  parties: {
    label: 'Festas Realizadas',
    value: '2.000+',
  },
  years: {
    label: 'Anos de História',
    value: '5',
  },
  happyClients: {
    label: 'Clientes Felizes',
    value: '1.500+',
  },
  guideDownloadsThisMonth: {
    value: '+450',
    copy: '+450 mães já baixaram o guia este mês',
  },
} as const;

export const STATS = [
  BUSINESS_STATS.themes,
  BUSINESS_STATS.parties,
  BUSINESS_STATS.years,
  BUSINESS_STATS.happyClients,
] as const;
