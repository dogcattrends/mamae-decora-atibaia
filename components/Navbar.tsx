'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { CONTACT_INFO } from './constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Acervo', href: '#acervo' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Calculadora', href: '#calculadora' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        mounted && isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative w-10 h-10 flex items-center justify-center border border-white/20 rounded-xl overflow-hidden group-hover:border-pink-500/50 transition-colors">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <Sparkles className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-black tracking-tighter leading-none">
              MAMÃE <span className="text-pink-500 italic font-light">Decora</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">Atibaia • SP</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-pink-500 transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-pink-500 hover:text-white transition-all active:scale-95"
          >
            Orçamento
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 p-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-medium text-white/80 hover:text-pink-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                className="bg-pink-500 text-white text-center py-4 rounded-2xl font-bold"
              >
                Falar no WhatsApp
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
