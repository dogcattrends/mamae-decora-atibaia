'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Search, Filter, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { THEMES, CONTACT_INFO } from './constants';

const categories = ['Todos', 'Infantil', 'Personagens', 'Batizado', 'Adulto'];

export default function ThemesShowcase() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredThemes = useMemo(() => {
    return THEMES.filter((theme) => {
      const matchesSearch = theme.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'Todos' || theme.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <section id="acervo" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="font-display text-4xl md:text-7xl font-black mb-4">
              NOSSO <span className="text-pink-500">ACERVO</span>
            </h2>
            <p className="text-white/40 max-w-md">
              Explore mais de 300 temas exclusivos. Se não encontrar o que procura, nós criamos para você.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-pink-500 transition-colors" />
              <input
                type="text"
                placeholder="Buscar tema..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-64 bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-pink-500/50 transition-all"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-4 rounded-2xl text-sm font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? 'bg-pink-500 text-white'
                      : 'bg-white/5 text-white/40 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredThemes.map((theme, index) => (
              <motion.div
                key={theme.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10"
              >
                <Image
                  src={theme.image}
                  alt={theme.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  referrerPolicy="no-referrer"
                  priority={index < 4}
                  loading={index < 4 ? undefined : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] uppercase tracking-widest text-pink-400 font-black mb-2 block">
                    {theme.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">{theme.name}</h3>
                  <Link
                    href={`${CONTACT_INFO.whatsapp}?text=Olá! Gostaria de consultar a disponibilidade do tema: ${theme.name}`}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-pink-400 transition-colors"
                  >
                    Consultar Disponibilidade <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredThemes.length === 0 && (
          <div className="text-center py-24">
            <p className="text-white/40 text-xl">Nenhum tema encontrado com esse nome.</p>
            <button 
              onClick={() => {setSearch(''); setActiveCategory('Todos');}}
              className="mt-4 text-pink-500 font-bold underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
