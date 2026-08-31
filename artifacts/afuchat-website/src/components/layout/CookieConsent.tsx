'use client';
import { useEffect, useRef, useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import {
  DEFAULT_PREFS,
  OPEN_CONSENT_EVENT,
  getStoredConsent,
  saveConsent,
  type ConsentPrefs,
} from '@/lib/cookieConsent';

const CATEGORIES: {
  key: keyof ConsentPrefs;
  label: string;
  description: string;
}[] = [
  {
    key: 'functional',
    label: 'Functional Cookies',
    description:
      'Remember choices you make (like your signed-in session across afuchat.com and web.afuchat.com) to give you a more personalized experience.',
  },
  {
    key: 'performance',
    label: 'Performance Cookies',
    description:
      'Help us understand how visitors use our site — pages viewed, time spent, errors encountered — so we can improve performance and reliability.',
  },
  {
    key: 'targeting',
    label: 'Targeting Cookies',
    description:
      'Used to make advertising and content more relevant to you, and to measure the effectiveness of our marketing campaigns.',
  },
];

export default function CookieConsent() {
  // `null` = not yet checked; `false` = checked, nothing to show; `true` = show banner
  const [visible, setVisible] = useState<boolean | null>(null);
  const [managing, setManaging] = useState(false);
  const [prefs, setPrefs] = useState<ConsentPrefs>(DEFAULT_PREFS);
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      setPrefs(stored.prefs);
      setVisible(false);
    } else {
      setVisible(true);
    }

    const onOpen = () => {
      const current = getStoredConsent();
      if (current) setPrefs(current.prefs);
      setVisible(true);
      setManaging(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, onOpen);
  }, []);

  // Focus management: move focus into the panel when it appears, trap Tab
  // inside it while open, and restore focus to whatever triggered it on close.
  useEffect(() => {
    if (!visible) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setVisible(false);
        setManaging(false);
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, a[href], input, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [visible]);

  if (!visible) return null;

  const commit = (next: ConsentPrefs) => {
    saveConsent(next);
    setPrefs(next);
    setVisible(false);
    setManaging(false);
  };

  const allOn: ConsentPrefs = { functional: true, performance: true, targeting: true };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] flex justify-center px-4 pb-4 sm:px-6 sm:pb-6">
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-consent-title"
        tabIndex={-1}
        className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#050d1f]/98 backdrop-blur-2xl shadow-2xl shadow-black/60 p-6 sm:p-7 outline-none"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <h2 id="cookie-consent-title" className="text-lg font-bold text-white tracking-tight">Your Cookie Options</h2>
          <button
            aria-label="Close"
            onClick={() => commit(prefs)}
            className="text-white/40 hover:text-white transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-white/50 leading-relaxed mb-5">
          AfuChat uses four types of cookies as described below. You can decide which categories of
          cookies you wish to accept to improve your experience on our site. To learn more, please read our{' '}
          <a href="/legal/cookies" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
            Cookie Policy
          </a>
          .
        </p>

        {!managing ? (
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => commit(allOn)}
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity"
            >
              Allow All
            </button>
            <button
              onClick={() => setManaging(true)}
              className="inline-flex items-center justify-center px-6 py-3 text-white/70 font-medium text-sm border border-white/15 rounded-full hover:text-white hover:border-white/30 transition-colors"
            >
              Manage Consent Preferences
            </button>
            <button
              onClick={() => commit(DEFAULT_PREFS)}
              className="inline-flex items-center justify-center px-6 py-3 text-white/50 font-medium text-sm hover:text-white/80 transition-colors sm:ml-auto"
            >
              Reject All
            </button>
          </div>
        ) : (
          <CookiePreferencesPanel
            prefs={prefs}
            onAllowAll={() => commit(allOn)}
            onRejectAll={() => commit(DEFAULT_PREFS)}
            onConfirm={commit}
          />
        )}
      </div>
    </div>
  );
}

function CookiePreferencesPanel({
  prefs,
  onAllowAll,
  onRejectAll,
  onConfirm,
}: {
  prefs: ConsentPrefs;
  onAllowAll: () => void;
  onRejectAll: () => void;
  onConfirm: (prefs: ConsentPrefs) => void;
}) {
  const [draft, setDraft] = useState<ConsentPrefs>(prefs);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div>
      <div className="flex items-center justify-between px-1 py-3 border-b border-white/8">
        <button
          className="flex items-center gap-2 text-sm font-semibold text-white/85"
          onClick={() => setExpanded(v => (v === 'necessary' ? null : 'necessary'))}
        >
          {expanded === 'necessary' ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          Strictly Necessary Cookies
        </button>
        <span className="text-xs font-semibold text-blue-400">Always Active</span>
      </div>
      {expanded === 'necessary' && (
        <p className="text-xs text-white/45 leading-relaxed px-1 pt-3 pb-1">
          Required for the site and sign-in to work — like keeping you logged in across afuchat.com and
          web.afuchat.com. These cannot be switched off.
        </p>
      )}

      {CATEGORIES.map(cat => (
        <div key={cat.key} className="border-b border-white/8">
          <div className="flex items-center justify-between px-1 py-3">
            <button
              className="flex items-center gap-2 text-sm font-semibold text-white/85"
              onClick={() => setExpanded(v => (v === cat.key ? null : cat.key))}
            >
              {expanded === cat.key ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              {cat.label}
            </button>
            <button
              role="switch"
              aria-checked={draft[cat.key]}
              aria-label={`Toggle ${cat.label}`}
              onClick={() => setDraft(d => ({ ...d, [cat.key]: !d[cat.key] }))}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors ${
                draft[cat.key] ? 'bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF]' : 'bg-white/15'
              }`}
            >
              <span
                className={`inline-block h-4.5 w-4.5 transform rounded-full bg-white shadow transition-transform ${
                  draft[cat.key] ? 'translate-x-5.5' : 'translate-x-1'
                }`}
                style={{ height: 18, width: 18 }}
              />
            </button>
          </div>
          {expanded === cat.key && (
            <p className="text-xs text-white/45 leading-relaxed px-1 pb-3">{cat.description}</p>
          )}
        </div>
      ))}

      <div className="flex flex-col sm:flex-row gap-3 pt-5">
        <button
          onClick={onRejectAll}
          className="inline-flex items-center justify-center px-6 py-3 text-white/70 font-medium text-sm border border-white/15 rounded-full hover:text-white hover:border-white/30 transition-colors"
        >
          Reject All
        </button>
        <button
          onClick={onAllowAll}
          className="inline-flex items-center justify-center px-6 py-3 text-white/70 font-medium text-sm border border-white/15 rounded-full hover:text-white hover:border-white/30 transition-colors"
        >
          Allow All
        </button>
        <button
          onClick={() => onConfirm(draft)}
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity sm:ml-auto"
        >
          Confirm My Choices
        </button>
      </div>
    </div>
  );
}
