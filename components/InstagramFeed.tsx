'use client';

import Image from 'next/image';
import { Instagram, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { CONTACT_INFO } from './constants';

const feedImages = [
  '/mundo-bita.jpg',
  '/Frozen.jpg',
  '/patrulha-canina.png',
  '/Batizado.png',
  '/Bolofofos.jpg',
  '/Sereia.jpg',
];

export default function InstagramFeed() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="text-center md:text-left">
            <h2 className="font-display text-4xl md:text-6xl font-black mb-4">
              SIGA NO <span className="text-pink-500">INSTAGRAM</span>
            </h2>
            <p className="text-white/40">Acompanhe as montagens reais das nossas clientes diariamente.</p>
          </div>
          <Link
            href={CONTACT_INFO.instagram}
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all"
          >
            <Instagram className="w-5 h-5 text-pink-500" />
            @ana4849
            <ExternalLink className="w-4 h-4 opacity-30" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {feedImages.map((img, i) => (
            <Link
              key={i}
              href={CONTACT_INFO.instagram}
              target="_blank"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-white/5"
            >
              <Image
                src={img}
                alt={`Instagram post ${i}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
