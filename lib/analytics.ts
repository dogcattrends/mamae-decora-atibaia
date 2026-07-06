export const ANALYTICS_CONSENT_KEY = 'mamae_decora_analytics_consent';
export const ANALYTICS_CONSENT_EVENT = 'mamae-decora:analytics-consent';

export type AnalyticsEventName =
  | 'whatsapp_cta_click'
  | 'form_orcamento_submit'
  | 'guia_pdf_download'
  | 'calculadora_uso';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function hasAnalyticsConsent() {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(ANALYTICS_CONSENT_KEY) === 'accepted';
}

export function trackEvent(
  event: AnalyticsEventName,
  parameters: Record<string, unknown> = {},
) {
  if (!hasAnalyticsConsent()) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...parameters });
}
