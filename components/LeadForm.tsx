'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Gift } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LeadForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    router.push('/obrigado');
  };

  return (
    <section className="py-24 bg-pink-500/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 text-pink-500 text-xs font-black uppercase tracking-widest mb-6">
              <Gift className="w-4 h-4" />
              Bônus Exclusivo
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black mb-6">
              GANHE UM <span className="text-pink-500">GUIA DE <br />PLANEJAMENTO</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Cadastre-se para receber nosso PDF exclusivo com dicas de montagem e um cupom de <strong>10% OFF</strong> na sua primeira locação.
            </p>
            
            <div className="flex items-center gap-4 text-white/40 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-white/10" />
                ))}
              </div>
              <span>+450 mães já baixaram o guia este mês</span>
            </div>
          </div>

          <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-3">Nome Completo</label>
                <input
                  required
                  type="text"
                  placeholder="Seu nome"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-pink-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-3">E-mail</label>
                <input
                  required
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-pink-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-3">Data Prevista da Festa</label>
                <input
                  type="date"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-pink-500/50 transition-all"
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full bg-pink-500 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-pink-600 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    QUERO MEU GUIA + DESCONTO
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
              <p className="text-[10px] text-center text-white/20 uppercase tracking-widest">
                Prometemos não enviar spam. Seus dados estão seguros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
