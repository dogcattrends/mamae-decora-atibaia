'use client';

import { motion } from 'motion/react';
import { Search, Package, Sparkles, RotateCcw } from 'lucide-react';

const steps = [
  {
    title: 'Escolha o Tema',
    description: 'Navegue pelo nosso acervo com mais de 300 temas e escolha o seu favorito pelo WhatsApp.',
    icon: Search,
  },
  {
    title: 'Retire o Kit',
    description: 'Retire as peças higienizadas em nossa sede em Atibaia. Cabe tudo em um carro comum.',
    icon: Package,
  },
  {
    title: 'Monte a Festa',
    description: 'Siga nossas dicas e monte você mesma uma decoração profissional em poucos minutos.',
    icon: Sparkles,
  },
  {
    title: 'Devolva as Peças',
    description: 'Após a festa, basta devolver as peças no prazo combinado. Simples e sem complicação.',
    icon: RotateCcw,
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-4">
            COMO <span className="text-pink-500">FUNCIONA?</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            O sistema Pegue e Monte é a forma mais inteligente e econômica de ter uma festa de luxo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-pink-500/50 group-hover:bg-pink-500/10 transition-all duration-500">
                <step.icon className="w-8 h-8 text-white group-hover:text-pink-500 transition-colors" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-black font-black flex items-center justify-center text-xs">
                  0{index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
