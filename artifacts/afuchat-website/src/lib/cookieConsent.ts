'use client';

// Cookie consent categories, matching the four-category model most vendors
// (Cloudflare included) use. "necessary" can't be turned off — everything
// else defaults to OFF until the visitor explicitly opts in.
export type ConsentCategory = 'functional' | 'performance' | 'targeting';

export interface ConsentPrefs {
  functional: boolean;
  performance: boolean;
  targeting: boolean;
}

export const CONSENT_STORAGE_KEY = 'afuchat_cookie_consent';
export const CONSENT_EVENT = 'afuchat:cookie-consent-changed';

export const DEFAULT_PREFS: ConsentPrefs = {
  functional: false,
  performance: false,
  targeting: false,
};

export interface StoredConsent {
  prefs: ConsentPrefs;
  decidedAt: string;
}

export function getStoredConsent(): StoredConsent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (
      !parsed ||
      typeof parsed !== 'object' ||
      !parsed.prefs ||
      typeof parsed.prefs.functional !== 'boolean' ||
      typeof parsed.prefs.performance !== 'boolean' ||
      typeof parsed.prefs.targeting !== 'boolean'
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(prefs: ConsentPrefs) {
  if (typeof window === 'undefined') return;
  const stored: StoredConsent = { prefs, decidedAt: new Date().toISOString() };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: prefs }));
}

// Lets any component (e.g. a "Manage cookies" link in the footer) reopen the
// preferences panel without prop-drilling.
export const OPEN_CONSENT_EVENT = 'afuchat:open-cookie-preferences';
export function openCookiePreferences() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}
