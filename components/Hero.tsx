'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ChevronRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import { CONTACT_INFO } from './constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/mundo-bita.jpg"
          alt="Decoração Mundo Bita"
          fill
          className="object-cover opacity-40 scale-105 animate-slow-zoom"
          priority
          referrerPolicy="no-referrer"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-white/80">
            Agenda Aberta para 2026 em Atibaia
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.92] mb-8"
        >
          SONHOS EM <br />
          <span className="inline-block pb-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-300 to-white italic font-light">
            Detalhes
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed mb-12"
        >
          A maior variedade de temas <strong>Pegue e Monte</strong> de Atibaia. 
          Kits profissionais que você mesma monta e transforma sua festa em um evento inesquecível.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            className="group relative bg-pink-500 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <Calendar className="w-5 h-5" />
            RESERVAR MINHA DATA
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#acervo"
            className="px-10 py-5 rounded-2xl border border-white/20 font-bold text-lg hover:bg-white/5 transition-all"
          >
            VER TEMAS
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
