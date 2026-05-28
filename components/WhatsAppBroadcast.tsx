'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Bell, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from './constants';

const BROADCAST_MSG = encodeURIComponent(
  'Olá, Ana! Quero entrar na lista de novidades da Mamãe Decora para saber quando abrirem novas datas e temas!'
);

export default function WhatsAppBroadcast() {
  return (
    <section className="py-16 md:py-20 bg-[#080808] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] border border-pink-500/20 bg-pink-500/5 p-10 md:p-14 flex flex-col md:flex-row items-center gap-8 text-center md:text-left overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="w-16 h-16 rounded-2xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center shrink-0">
            <Bell className="w-7 h-7 text-pink-400" />
          </div>

          <div className="flex-1">
            <h3 className="font-display text-2xl md:text-3xl font-black mb-2">
              Seja a <span className="text-pink-500">primeira a saber</span>
            </h3>
            <p className="text-white/50 leading-relaxed text-sm md:text-base">
              Entre na nossa lista de novidades pelo WhatsApp e receba alertas de datas disponíveis, temas novos e promoções exclusivas antes de todo mundo.
            </p>
          </div>

          <Link
            href={`${CONTACT_INFO.whatsapp}?text=${BROADCAST_MSG}`}
            target="_blank"
            className="shrink-0 flex items-center gap-2 bg-pink-500 text-white px-8 py-4 rounded-2xl font-black hover:bg-pink-600 transition-all active:scale-95 whitespace-nowrap"
          >
            Entrar na lista
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
