import Link from 'next/link';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { BUSINESS_STATS } from '@/lib/stats';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl border border-white/10 mb-8">
          <Sparkles className="w-9 h-9 text-pink-400" />
        </div>

        <p className="text-pink-500 text-xs font-black uppercase tracking-widest mb-4">Página não encontrada</p>

        <h1 className="font-display text-7xl md:text-9xl font-black mb-4 text-white/10">404</h1>

        <p className="text-white/60 text-lg mb-10 leading-relaxed">
          Ops! Essa página não existe. Mas a gente tem {BUSINESS_STATS.themes.copy} temas esperando por você.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-pink-500 text-white px-8 py-4 rounded-2xl font-black hover:bg-pink-600 transition-all active:scale-95"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
