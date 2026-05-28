'use client';

import { MapPin } from 'lucide-react';

const cities = [
  'Atibaia', 'Mairiporã', 'Bragança Paulista',
  'Jarinu', 'Itatiba', 'Nazaré Paulista',
  'Pedra Bela', 'Piracaia', 'Campo Limpo Paulista',
];

export default function CoverageStrip() {
  return (
    <div className="bg-[#080808] border-y border-white/5 py-4 overflow-hidden">
      <div className="flex items-center gap-2 px-6 mb-3 max-w-7xl mx-auto">
        <MapPin className="w-3.5 h-3.5 text-pink-500 shrink-0" />
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-bold">Atendemos toda a região</span>
      </div>
      <div className="flex items-center gap-0 overflow-x-auto no-scrollbar">
        {/* duplica para efeito de scroll infinito visual */}
        {[...cities, ...cities].map((city, i) => (
          <div key={i} className="flex items-center gap-6 px-6 shrink-0">
            <span className="text-sm font-bold text-white/50 whitespace-nowrap hover:text-pink-400 transition-colors cursor-default">
              {city}
            </span>
            <span className="w-1 h-1 rounded-full bg-pink-500/40 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
