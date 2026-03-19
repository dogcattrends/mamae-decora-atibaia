'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Users, CheckCircle2, Info } from 'lucide-react';
import Link from 'next/link';
import { CONTACT_INFO } from './constants';

const kits = [
  {
    id: 'pocket',
    name: 'Kit Pocket',
    range: [0, 15],
    description: 'Ideal para o famoso "só um bolinho" em áreas gourmet ou salas de estar.',
    includes: ['Móveis Compactos', 'Painel Redondo', 'Suportes para Doces', 'Personagens do Tema'],
    color: 'border-blue-500/20 bg-blue-500/5',
    accent: 'text-blue-400',
  },
  {
    id: 'standard',
    name: 'Kit Standard',
    range: [16, 50],
    description: 'O queridinho! Perfeito para salões de festas e garagens amplas.',
    includes: ['Trio de Cilindros', 'Painel Estruturado', 'Cenografia Temática', 'Acessórios Completos'],
    color: 'border-pink-500/40 bg-pink-500/5',
    accent: 'text-pink-500',
    popular: true,
  },
  {
    id: 'premium',
    name: 'Kit Premium',
    range: [51, 200],
    description: 'Para quem busca impacto visual e preenchimento de grandes espaços.',
    includes: ['Mobiliário Variado', 'Painel Romano/Trio', 'Cenografia de Chão', 'Tapete e Adereços'],
    color: 'border-purple-500/20 bg-purple-500/5',
    accent: 'text-purple-400',
  },
];

export default function PartyCalculator() {
  const [guests, setGuests] = useState(30);

  const recommendedKit = kits.find(
    (kit) => guests >= kit.range[0] && guests <= kit.range[1]
  ) || kits[1];

  return (
    <section id="calculadora" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-4">
            QUAL O <span className="text-pink-500">KIT IDEAL?</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Ajuste o número de convidados e veja nossa recomendação profissional para sua festa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/10">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-500">
                  <Users className="w-6 h-6" />
                </div>
                <span className="font-bold text-xl text-white/80">Número de Convidados</span>
              </div>
              <span className="text-4xl font-display font-black text-pink-500">{guests}</span>
            </div>

            <input
              type="range"
              min="5"
              max="100"
              step="5"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-pink-500 mb-12"
            />

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
              <Info className="w-6 h-6 text-white/30 shrink-0 mt-1" />
              <p className="text-sm text-white/40 leading-relaxed">
                Esta é uma estimativa baseada no preenchimento visual do espaço. 
                Para festas em locais muito grandes, recomendamos o Kit Premium independente do número de convidados.
              </p>
            </div>
          </div>

          <motion.div
            key={recommendedKit.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-10 rounded-[3rem] border-2 relative ${recommendedKit.color}`}
          >
            {recommendedKit.popular && (
              <span className="absolute -top-4 left-10 bg-pink-500 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                Mais Escolhido
              </span>
            )}

            <div className="mb-8">
              <span className={`text-sm font-black uppercase tracking-widest mb-2 block ${recommendedKit.accent}`}>
                Recomendação Ideal
              </span>
              <h3 className="text-4xl font-display font-black mb-4">{recommendedKit.name}</h3>
              <p className="text-white/60 leading-relaxed">{recommendedKit.description}</p>
            </div>

            <div className="space-y-4 mb-10">
              {recommendedKit.includes.map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className={`w-5 h-5 ${recommendedKit.accent}`} />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href={`${CONTACT_INFO.whatsapp}?text=Olá! A calculadora me recomendou o ${recommendedKit.name} para ${guests} pessoas. Gostaria de consultar a disponibilidade.`}
              target="_blank"
              className="w-full bg-white text-black py-5 rounded-2xl font-black text-center block hover:bg-pink-500 hover:text-white transition-all"
            >
              CONSULTAR DISPONIBILIDADE
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
