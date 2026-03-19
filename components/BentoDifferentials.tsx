'use client';

import { motion } from 'motion/react';
import { Package, Clock, Heart, ShieldCheck } from 'lucide-react';

const differentials = [
  {
    title: 'Praticidade Total',
    description: 'Kits pensados para serem transportados em carros de passeio e montados em minutos.',
    icon: Package,
    className: 'md:col-span-2 md:row-span-2 bg-pink-500/10 border-pink-500/20',
    iconColor: 'text-pink-500',
  },
  {
    title: 'Acervo de Luxo',
    description: 'Peças selecionadas, limpas e sempre renovadas para garantir o brilho da sua festa.',
    icon: Heart,
    className: 'md:col-span-2 bg-white/[0.02] border-white/10',
    iconColor: 'text-red-400',
  },
  {
    title: 'Rapidez no Atendimento',
    description: 'Orçamentos rápidos e consultoria para ajudar você a escolher o melhor kit.',
    icon: Clock,
    className: 'md:col-span-1 bg-white/[0.02] border-white/10',
    iconColor: 'text-blue-400',
  },
  {
    title: 'Segurança e Higiene',
    description: 'Todas as peças são higienizadas rigorosamente após cada locação.',
    icon: ShieldCheck,
    className: 'md:col-span-1 bg-white/[0.02] border-white/10',
    iconColor: 'text-emerald-400',
  },
];

export default function BentoDifferentials() {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-4">
            POR QUE ESCOLHER A <br />
            <span className="text-pink-500">MAMÃE DECORA?</span>
          </h2>
          <p className="text-white/40 max-w-xl">
            Unimos a economia do &quot;faça você mesma&quot; com a sofisticação de uma decoração profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-[2.5rem] border flex flex-col justify-between group hover:border-white/20 transition-all ${item.className}`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 ${item.iconColor}`}>
                <item.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
