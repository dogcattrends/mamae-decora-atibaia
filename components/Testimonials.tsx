'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Patrícia Lima',
    role: 'Mãe do Theo',
    content: 'O kit Batizado estava impecável! Tudo muito limpo e bem embalado. A montagem foi super tranquila e o resultado final parecia decoração de buffet caro.',
    theme: 'Batizado',
  },
  {
    name: 'Juliana Mendes',
    role: 'Mãe da Alice',
    content: 'Aluguei o tema Frozen e as crianças ficaram encantadas. A Ana é super atenciosa e me ajudou a escolher o kit certo para o tamanho da minha sala.',
    theme: 'Frozen',
  },
  {
    name: 'Renata Souza',
    role: 'Mãe do Lucas',
    content: 'Melhor custo-benefício de Atibaia. As peças são de muita qualidade e o sistema de pegue e monte facilita demais a vida de quem quer economizar.',
    theme: 'Mundo Bita',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-4">
            QUEM <span className="text-pink-500">CONFIA</span>
          </h2>
          <p className="text-white/40">Histórias reais de mães que transformaram suas festas com a gente.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] transition-all"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-pink-500/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-pink-500 text-pink-500" />
                ))}
              </div>

              <p className="text-white/70 leading-relaxed mb-8 italic">
                &quot;{item.content}&quot;
              </p>

              <div>
                <div className="font-bold text-lg">{item.name}</div>
                <div className="text-sm text-white/40 font-medium">
                  {item.role} • Tema: <span className="text-pink-500/60">{item.theme}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
