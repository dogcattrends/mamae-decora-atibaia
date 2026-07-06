'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import {
  ANALYTICS_CONSENT_EVENT,
  ANALYTICS_CONSENT_KEY,
  trackEvent,
} from '@/lib/analytics';

type ConsentState = 'loading' | 'pending' | 'accepted' | 'declined';

function GoogleTags() {
  const rawGtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const rawGa4Id = process.env.NEXT_PUBLIC_GA4_ID;
  const gtmId = rawGtmId && /^GTM-[A-Z0-9]+$/i.test(rawGtmId) ? rawGtmId : null;
  const ga4Id = rawGa4Id && /^G-[A-Z0-9]+$/i.test(rawGa4Id) ? rawGa4Id : null;

  return (
    <>
      {gtmId && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      )}

      {ga4Id && (
        <>
          <Script
            id="google-analytics-library"
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', { analytics_storage: 'granted' });
              gtag('js', new Date());
              gtag('config', '${ga4Id}', { send_page_view: true });
            `}
          </Script>
        </>
      )}
    </>
  );
}

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState<ConsentState>('loading');

  useEffect(() => {
    const storedConsent = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    setConsent(
      storedConsent === 'accepted'
        ? 'accepted'
        : storedConsent === 'declined'
          ? 'declined'
          : 'pending',
    );
  }, []);

  useEffect(() => {
    const handleTrackedClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';

      if (href.includes('wa.me/')) {
        trackEvent('whatsapp_cta_click', {
          section_origin:
            anchor.dataset.whatsappOrigin ||
            anchor.closest<HTMLElement>('section[id]')?.id ||
            'unknown',
        });
      }

      if (href.includes('/api/guia-pdf')) {
        trackEvent('guia_pdf_download', {
          section_origin: anchor.dataset.downloadOrigin || 'unknown',
        });
      }
    };

    document.addEventListener('click', handleTrackedClick);
    return () => document.removeEventListener('click', handleTrackedClick);
  }, []);

  const saveConsent = (value: 'accepted' | 'declined') => {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
    setConsent(value);
    window.dispatchEvent(new CustomEvent(ANALYTICS_CONSENT_EVENT, { detail: value }));
  };

  return (
    <>
      {consent === 'accepted' && (
        <>
          <GoogleTags />
          <Analytics />
        </>
      )}

      {consent === 'pending' && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Consentimento de cookies"
          className="fixed inset-x-4 bottom-4 z-[200] mx-auto max-w-3xl rounded-2xl border border-white/15 bg-[#111]/95 p-5 shadow-2xl backdrop-blur-xl md:flex md:items-center md:gap-6"
        >
          <p className="text-sm leading-relaxed text-white/75 md:flex-1">
            Usamos cookies de analytics para medir acessos e melhorar o site. Google
            Analytics, GTM e Vercel Analytics só serão carregados se você aceitar.{' '}
            <Link href="/politica-de-privacidade" className="text-pink-400 underline">
              Ver política de privacidade
            </Link>
            .
          </p>
          <div className="mt-4 flex gap-3 md:mt-0">
            <button
              type="button"
              onClick={() => saveConsent('declined')}
              className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-bold text-white/70 hover:bg-white/5"
            >
              Recusar
            </button>
            <button
              type="button"
              onClick={() => saveConsent('accepted')}
              className="rounded-xl bg-pink-500 px-4 py-2.5 text-sm font-black text-white hover:bg-pink-600"
            >
              Aceitar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
