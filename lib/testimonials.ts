export type Testimonial = {
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
  image: string | null;
  content: string;
  theme: string;
};

// SUBSTITUIR POR DEPOIMENTOS E FOTOS REAIS AUTORIZADOS PELA CLIENTE
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Patrícia Lima',
    role: 'Mãe do Theo',
    initials: 'PL',
    avatarColor: 'from-pink-500 to-rose-400',
    image: null,
    content:
      'O kit Batizado estava impecável! Tudo muito limpo e bem embalado. A montagem foi super tranquila e o resultado final parecia decoração de buffet caro.',
    theme: 'Batizado',
  },
  {
    name: 'Juliana Mendes',
    role: 'Mãe da Alice',
    initials: 'JM',
    avatarColor: 'from-pink-400 to-fuchsia-500',
    image: null,
    content:
      'Aluguei o tema Frozen e as crianças ficaram encantadas. A Ana é super atenciosa e me ajudou a escolher o kit certo para o tamanho da minha sala.',
    theme: 'Frozen',
  },
  {
    name: 'Renata Souza',
    role: 'Mãe do Lucas',
    initials: 'RS',
    avatarColor: 'from-fuchsia-500 to-pink-600',
    image: null,
    content:
      'Melhor custo-benefício de Atibaia. As peças são de muita qualidade e o sistema de pegue e monte facilita demais a vida de quem quer economizar.',
    theme: 'Mundo Bita',
  },
];
