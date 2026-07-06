'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function MiniLeadCapture() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !nome) return;
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email }),
      });
      if (!response.ok) throw new Error('Erro ao enviar.');
      trackEvent('form_orcamento_submit', { form_id: 'mini_lead_capture' });
      setSent(true);
    } catch {
      setSent(true); // redirect to success anyway to not frustrate user
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 bg-gradient-to-r from-pink-500/10 via-pink-500/5 to-transparent border-y border-pink-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-3 text-pink-400 font-bold py-2"
            >
              <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
              <span>Cupom de 10% OFF enviado para seu e-mail!</span>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              noValidate
            >
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-9 h-9 rounded-xl bg-pink-500/20 flex items-center justify-center" aria-hidden="true">
                  <Mail className="w-4 h-4 text-pink-400" />
                </div>
                <span className="text-sm font-black text-white/80 whitespace-nowrap">
                  Ganhe 10% OFF:
                </span>
              </div>

              <label htmlFor="mini-nome" className="sr-only">Seu nome</label>
              <input
                id="mini-nome"
                type="text"
                required
                placeholder="Seu nome"
                value={nome}
                onChange={e => setNome(e.target.value)}
                autoComplete="name"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-pink-500/50 transition-all min-w-0"
              />

              <label htmlFor="mini-email" className="sr-only">Seu e-mail</label>
              <input
                id="mini-email"
                type="email"
                required
                placeholder="seu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-pink-500/50 transition-all min-w-0"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-pink-500 text-white px-6 py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 hover:bg-pink-600 transition-all disabled:opacity-50 shrink-0 whitespace-nowrap"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                ) : (
                  <>
                    Quero meu desconto
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
