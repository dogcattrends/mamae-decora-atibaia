import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Mamãe Decora Atibaia | Pegue e Monte & Locação de Decoração',
  description: 'A maior variedade de temas Pegue e Monte em Atibaia-SP. Alugue, monte e encante!',
  keywords: ['Pegue e Monte Atibaia', 'Locação de Decoração', 'Festa Infantil Atibaia', 'Aluguel de Temas', 'Mamãe Decora'],
  authors: [{ name: 'Mamãe Decora Atibaia' }],
  openGraph: {
    title: 'Mamãe Decora Atibaia | Pegue e Monte',
    description: 'Transforme sua festa com nossos kits exclusivos. Mais de 300 temas disponíveis.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://mamaedecoraatibaia.com.br',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#050505] text-white antialiased selection:bg-pink-500/30 selection:text-pink-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
