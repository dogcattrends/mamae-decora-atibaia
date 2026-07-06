'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Gift } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { BUSINESS_STATS } from '@/lib/stats';
import { trackEvent } from '@/lib/analytics';

export default function LeadForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, data }),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || 'Erro ao enviar.');
      }

      trackEvent('form_orcamento_submit', { form_id: 'lead_guide' });
      router.push('/obrigado');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao enviar. Tente novamente.');
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-pink-500/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 text-pink-500 text-xs font-black uppercase tracking-widest mb-6">
              <Gift className="w-4 h-4" />
              Bônus Exclusivo
            </div>
            <h2 className="font-display text-3xl md:text-6xl font-black mb-6">
              GANHE UM <span className="text-pink-500">GUIA DE PLANEJAMENTO</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Cadastre-se para receber nosso PDF exclusivo com dicas de montagem e um cupom de <strong>10% OFF</strong> na sua primeira locação — direto no seu e-mail.
            </p>

            <div className="flex items-center gap-4 text-white/50 text-sm">
              <div className="flex -space-x-2" aria-hidden="true">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-white/10" />
                ))}
              </div>
              <span>{BUSINESS_STATS.guideDownloadsThisMonth.copy}</span>
            </div>
          </div>

          <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label
                  htmlFor="lead-nome"
                  className="block text-xs font-black uppercase tracking-widest text-white/55 mb-3"
                >
                  Nome Completo
                </label>
                <input
                  id="lead-nome"
                  required
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  autoComplete="name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-pink-500/60 focus-visible:ring-2 focus-visible:ring-pink-500/50 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="lead-email"
                  className="block text-xs font-black uppercase tracking-widest text-white/55 mb-3"
                >
                  E-mail
                </label>
                <input
                  id="lead-email"
                  required
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoComplete="email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-pink-500/60 focus-visible:ring-2 focus-visible:ring-pink-500/50 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="lead-data"
                  className="block text-xs font-black uppercase tracking-widest text-white/55 mb-3"
                >
                  Data Prevista da Festa <span className="text-white/30 normal-case font-normal">(opcional)</span>
                </label>
                <input
                  id="lead-data"
                  type="date"
                  value={data}
                  onChange={e => setData(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-pink-500/60 focus-visible:ring-2 focus-visible:ring-pink-500/50 transition-all"
                />
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-xl py-3 px-4"
                >
                  {error}
                </motion.p>
              )}

              <button
                disabled={loading}
                type="submit"
                className="w-full bg-pink-500 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-pink-600 transition-all disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-pink-500"
              >
                {loading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    QUERO MEU GUIA + DESCONTO
                    <Send className="w-5 h-5" aria-hidden="true" />
                  </>
                )}
              </button>
              <p className="text-[10px] text-center text-white/30 uppercase tracking-widest">
                Prometemos não enviar spam. Seus dados estão seguros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
