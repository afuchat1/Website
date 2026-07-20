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

export const CONSENT_COOKIE_NAME = 'afuchat_cookie_consent';
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

// Same shared-domain reasoning as src/lib/supabase.ts: on real afuchat.com
// hosts, scope the cookie to the root domain so a choice made here is also
// visible to web.afuchat.com (and vice versa) instead of asking twice. On
// localhost/preview domains a `.afuchat.com` cookie domain is invalid, so we
// fall back to a host-only cookie there.
const SHARED_COOKIE_DOMAIN = '.afuchat.com';

function isProdHost(): boolean {
  if (typeof window === 'undefined') return false;
  return window.location.hostname.endsWith('afuchat.com');
}

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string, maxAgeDays: number) {
  if (typeof document === 'undefined') return;
  const maxAge = maxAgeDays * 24 * 60 * 60;
  const domainPart = isProdHost() ? `; domain=${SHARED_COOKIE_DOMAIN}` : '';
  const securePart = isProdHost() ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax${domainPart}${securePart}`;
}

export function getStoredConsent(): StoredConsent | null {
  const raw = readCookie(CONSENT_COOKIE_NAME);
  if (!raw) return null;
  try {
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
  const stored: StoredConsent = { prefs, decidedAt: new Date().toISOString() };
  // 180 days is the common expiry used by most cookie consent tools.
  writeCookie(CONSENT_COOKIE_NAME, JSON.stringify(stored), 180);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: prefs }));
  }
}

// Lets any component (e.g. a "Manage cookies" link in the footer) reopen the
// preferences panel without prop-drilling.
export const OPEN_CONSENT_EVENT = 'afuchat:open-cookie-preferences';
export function openCookiePreferences() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}
