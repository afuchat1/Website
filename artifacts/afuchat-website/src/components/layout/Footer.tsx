import Link from 'next/link';
import { PRODUCT_DATA } from '@/data/products';
import { TRUSTPILOT_PROFILE_URL, TRUSTPILOT_SUMMARY } from '@/data/trustpilot';
import { openCookiePreferences } from '@/lib/cookieConsent';

const LOGO_SRC         = '/assets/afuchat_logo_transparent.png';
const TRUSTPILOT_LOGO  = '/assets/trustpilot_logo.png';
const GOOGLE_PLAY_BADGE = '/assets/google_play_badge.png';

function StoreButtons() {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <a
        href={TRUSTPILOT_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${TRUSTPILOT_SUMMARY.rating.toFixed(1)} stars on Trustpilot`}
        className="bg-white/10 hover:bg-white/15 transition-colors rounded-full px-3 py-1.5 flex items-center"
      >
        <img src={TRUSTPILOT_LOGO} alt="Trustpilot" className="h-5 w-auto" loading="lazy" decoding="async" />
      </a>
      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
      >
        <img src={GOOGLE_PLAY_BADGE} alt="Get it on Google Play" className="h-10 w-auto" loading="lazy" decoding="async" />
      </a>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      <div className="max-container container-pad pt-16 pb-8">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10 md:mb-14">

          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <img src={LOGO_SRC} alt="AfuChat" className="h-8 w-auto" />
              <span className="text-white font-bold text-lg">AfuChat</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Independent products.<br />Built for the world.
            </p>
            <div className="mb-5">
              <StoreButtons />
            </div>
            <p className="text-white/22 text-xs">AfuChat Technologies Limited</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">Products</h4>
            <ul className="flex flex-col gap-3.5">
              {PRODUCT_DATA.slice(0, 4).map(p => (
                <li key={p.id}>
                  <Link href={p.path} className="flex items-center gap-2.5 text-white/38 hover:text-white text-sm transition-colors group">
                    <img src={p.icon3d} alt="" className="w-5 h-5 object-contain flex-shrink-0" loading="lazy" decoding="async" />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">More</h4>
            <ul className="flex flex-col gap-3.5">
              {PRODUCT_DATA.slice(4, 8).map(p => (
                <li key={p.id}>
                  <Link href={p.path} className="flex items-center gap-2.5 text-white/38 hover:text-white text-sm transition-colors group">
                    <img src={p.icon3d} alt="" className="w-5 h-5 object-contain flex-shrink-0" loading="lazy" decoding="async" />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'About',      href: '/about' },
                { label: 'Developers', href: '/developers' },
                { label: 'Partners',   href: '/partners' },
                { label: 'Careers',    href: '/about/careers' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/38 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Copyright bar ── */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/22 text-xs">
            © {year} AfuChat Technologies Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: 'Privacy Policy',   href: '/legal/privacy' },
              { label: 'Terms of Service', href: '/legal/terms' },
              { label: 'Cookie Policy',    href: '/legal/cookies' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="text-white/28 hover:text-white/60 text-xs transition-colors">
                {l.label}
              </Link>
            ))}
            <button
              onClick={openCookiePreferences}
              className="text-white/28 hover:text-white/60 text-xs transition-colors"
            >
              Manage Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
