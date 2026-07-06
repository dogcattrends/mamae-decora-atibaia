const DEFAULT_SITE_URL = 'https://mamae-decora-atibaia.vercel.app';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL
).replace(/\/$/, '');

export const SITE_HOSTNAME = new URL(SITE_URL).hostname.replace(/^www\./, '');
