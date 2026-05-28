'use client';

import { motion } from 'motion/react';
import { STATS } from './constants';

export default function Stats() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-5 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors group"
            >
              <div className="font-display text-4xl md:text-6xl font-black text-white mb-2 group-hover:text-pink-500 transition-colors leading-none">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-white/40 font-bold mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
