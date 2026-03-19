'use client';

import { motion } from 'motion/react';
import { CheckCircle, ArrowLeft, Instagram, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { CONTACT_INFO } from '@/components/constants';

export default function Obrigado() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(236,72,153,0.3)]"
        >
          <CheckCircle className="w-12 h-12 text-white" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-6xl font-black mb-6"
        >
          OBRIGADO PELO <br />
          <span className="text-pink-500 italic font-light">Interesse!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg mb-12 leading-relaxed"
        >
          Seus dados foram enviados com sucesso. Em breve você receberá seu guia exclusivo no e-mail. Que tal agilizar seu orçamento agora mesmo?
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <Link
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-5 rounded-2xl font-black hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-6 h-6" />
            AGILIZAR NO WHATSAPP
          </Link>
          <Link
            href={CONTACT_INFO.instagram}
            target="_blank"
            className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white py-5 rounded-2xl font-black hover:bg-white/10 transition-all"
          >
            <Instagram className="w-6 h-6 text-pink-500" />
            VER NO INSTAGRAM
          </Link>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o site
        </Link>
      </div>
    </main>
  );
}
