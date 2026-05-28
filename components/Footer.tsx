'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { CONTACT_INFO } from './constants';

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-[#030303] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4">
            <Link href="/" className="group flex items-center gap-3 mb-8">
              <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-xl">
                <Sparkles className="w-5 h-5 text-pink-400" />
              </div>
              <span className="font-display text-2xl font-black tracking-tighter">
                MAMÃE <span className="text-pink-500 italic font-light">Decora</span>
              </span>
            </Link>
            <p className="text-white/40 leading-relaxed mb-8 max-w-sm">
              Especialistas em transformar momentos simples em memórias inesquecíveis através do sistema Pegue e Monte em Atibaia-SP.
            </p>
            <div className="flex gap-4">
              <Link
                href={CONTACT_INFO.instagram}
                target="_blank"
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-pink-500 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-white/30 mb-6">Navegação</h4>
              <ul className="space-y-4 text-sm font-medium text-white/60">
                <li><Link href="#" className="hover:text-pink-500 transition-colors">Início</Link></li>
                <li><Link href="#acervo" className="hover:text-pink-500 transition-colors">Acervo</Link></li>
                <li><Link href="#como-funciona" className="hover:text-pink-500 transition-colors">Como Funciona</Link></li>
                <li><Link href="#calculadora" className="hover:text-pink-500 transition-colors">Calculadora</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-white/30 mb-6">Legal</h4>
              <ul className="space-y-4 text-sm font-medium text-white/60">
                <li><Link href="/termos-de-uso" className="hover:text-pink-500 transition-colors">Termos de Uso</Link></li>
                <li><Link href="/politica-de-privacidade" className="hover:text-pink-500 transition-colors">Privacidade</Link></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white/30 mb-6">Localização</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-pink-500 shrink-0" />
                <span className="text-sm text-white/60 leading-relaxed">
                  {CONTACT_INFO.address}
                </span>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-pink-500 shrink-0" />
                <span className="text-sm text-white/60">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-pink-500 shrink-0" />
                <span className="text-sm text-white/60">{CONTACT_INFO.email}</span>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-8 h-32 rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              <iframe
                src="https://maps.google.com/maps?q=Jardim+Cerejeiras,+Atibaia,+SP,+12951-420,+Brasil&output=embed&hl=pt-BR"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
          <div className="text-white/40">© 2026 Mamãe Decora Atibaia. Todos os direitos reservados.</div>
          <div className="text-white/40">
            Desenvolvido por{' '}
            <a href="https://wa.me/5511968771362" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
              Arthur Ribeker
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
