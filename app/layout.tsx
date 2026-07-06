import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import AnalyticsConsent from '@/components/AnalyticsConsent';
import { BUSINESS_STATS } from '@/lib/stats';
import { SITE_URL } from '@/lib/site-url';
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
  metadataBase: new URL(SITE_URL),
  title: 'Mamãe Decora Atibaia | Pegue e Monte & Locação de Decoração',
  description: `A maior variedade de temas Pegue e Monte em Atibaia-SP. ${BUSINESS_STATS.themes.value} temas exclusivos. Alugue, monte e encante com praticidade e sofisticação!`,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Pegue e Monte Atibaia',
    'Locação de Decoração Atibaia',
    'Festa Infantil Atibaia',
    'Aluguel de Temas Festas',
    'Mamãe Decora',
    'Decoração Festa Mairiporã',
    'Decoração Festa Bragança Paulista',
    'Kit Decoração Festa SP',
  ],
  authors: [{ name: 'Mamãe Decora Atibaia' }],
  openGraph: {
    title: `Mamãe Decora Atibaia | ${BUSINESS_STATS.themes.value} Temas Pegue e Monte`,
    description: `Transforme sua festa com nossos kits exclusivos. ${BUSINESS_STATS.themes.value} temas. Retire em Atibaia-SP e monte você mesma em minutos.`,
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Mamãe Decora Atibaia',
    images: [
      {
        url: '/mundo-bita.jpg',
        width: 1200,
        height: 630,
        alt: 'Mamãe Decora Atibaia — Decoração Pegue e Monte para Festas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mamãe Decora Atibaia | Pegue e Monte',
    description: `${BUSINESS_STATS.themes.value} temas exclusivos para sua festa em Atibaia-SP. Retire, monte e encante!`,
    images: ['/mundo-bita.jpg'],
  },
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'Atibaia, São Paulo, Brasil',
    'geo.position': '-23.1165;-46.5553',
    'ICBM': '-23.1165, -46.5553',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mamãe Decora Atibaia',
  description: `Locação de decoração para festas pelo sistema Pegue e Monte em Atibaia-SP. ${BUSINESS_STATS.themes.value} temas exclusivos.`,
  url: SITE_URL,
  telephone: '+5511977336703',
  email: 'ribekerana@gmail.com',
  image: `${SITE_URL}/mundo-bita.jpg`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jardim Cerejeiras',
    addressLocality: 'Atibaia',
    addressRegion: 'SP',
    postalCode: '12951-420',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.1165,
    longitude: -46.5553,
  },
  areaServed: [
    { '@type': 'City', name: 'Atibaia' },
    { '@type': 'City', name: 'Mairiporã' },
    { '@type': 'City', name: 'Bragança Paulista' },
    { '@type': 'City', name: 'Jarinu' },
    { '@type': 'City', name: 'Itatiba' },
  ],
  sameAs: ['https://www.instagram.com/ana4849/'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
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
        <AnalyticsConsent />
        <Script
          id="json-ld-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
