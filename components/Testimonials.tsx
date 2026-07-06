'use client';

import { motion } from 'motion/react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { TESTIMONIALS } from '@/lib/testimonials';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-4">
            QUEM <span className="text-pink-500">CONFIA</span>
          </h2>
          <p className="text-white/55 mb-6">Histórias reais de mães que transformaram suas festas com a gente.</p>
          <Link
            href="https://www.google.com/maps/search/Mamãe+Decora+Atibaia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-white/70 hover:bg-white/10 hover:text-white transition-all"
            aria-label="Ver avaliações no Google (abre em nova aba)"
          >
            <div className="flex gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>Ver avaliações no Google</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-50" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
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

              <div className="flex items-center gap-4">
                <div className={`relative w-12 h-12 overflow-hidden rounded-full bg-gradient-to-br ${item.avatarColor} flex items-center justify-center text-white font-black text-sm shrink-0`}>
                  {item.image ? (
                    <Image src={item.image} alt={`Foto de ${item.name}`} fill className="object-cover" />
                  ) : (
                    item.initials
                  )}
                </div>
                <div>
                  <div className="font-bold text-lg leading-tight">{item.name}</div>
                  <div className="text-sm text-white/40 font-medium">
                    {item.role} · Tema: <span className="text-pink-500/70">{item.theme}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
