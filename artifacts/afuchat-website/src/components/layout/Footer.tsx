import { Link } from 'wouter';
import { PRODUCT_DATA } from '@/data/products';
import { TRUSTPILOT_PROFILE_URL, TRUSTPILOT_SUMMARY } from '@/data/trustpilot';
import logo from '@assets/afuchat_logo_transparent.png';
import trustpilotLogo from '@assets/image_1783529159179.png';

function TrustpilotBadge() {
  return (
    <a
      href={TRUSTPILOT_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3.5 py-2 hover:bg-white/10 transition-colors w-fit"
    >
      <img src={trustpilotLogo} alt="Trustpilot" className="h-3.5 w-auto" />
      <span className="text-white font-bold text-xs">{TRUSTPILOT_SUMMARY.rating.toFixed(1)}</span>
      <span className="text-white/40 text-xs">· {TRUSTPILOT_SUMMARY.reviewCount} reviews on Trustpilot</span>
    </a>
  );
}

function StoreButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-white/8 border border-white/15 text-white px-4 py-2.5 rounded-xl hover:bg-white/14 transition-colors"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M3.18 23.76c.37.2.8.22 1.2.05l12.1-6.97-2.58-2.58L3.18 23.76zM.69 1.37C.26 1.73 0 2.29 0 3v18c0 .71.26 1.27.69 1.63l.09.08 10.08-10.08v-.24L.78 1.29l-.09.08zM20.04 10.54l-2.85-1.64-2.88 2.88 2.88 2.88 2.86-1.65c.82-.47.82-1.23-.01-1.47zM4.38.19L16.48 7.16l-2.58 2.58L3.18.24c.4-.17.83-.15 1.2-.05z"/>
        </svg>
        <div className="text-left leading-tight">
          <span className="block text-[9px] text-white/50">GET IT ON</span>
          <span className="block font-semibold text-xs">Google Play</span>
        </div>
      </a>
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-white/8 border border-white/15 text-white px-4 py-2.5 rounded-xl hover:bg-white/14 transition-colors"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.15 3.8.02 3.02 2.65 4.03 2.68 4.04l-.08.28zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div className="text-left leading-tight">
          <span className="block text-[9px] text-white/50">Download on the</span>
          <span className="block font-semibold text-xs">App Store</span>
        </div>
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
              <img src={logo} alt="AfuChat" className="h-8 w-auto" />
              <span className="text-white font-bold text-lg">AfuChat</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Independent products.<br />Built for the world.
            </p>
            <div className="mb-5">
              <TrustpilotBadge />
            </div>
            <div className="mb-5">
              <StoreButtons />
            </div>
            <p className="text-white/22 text-xs">AfuChat Technologies Limited</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">
              Products
            </h4>
            <ul className="flex flex-col gap-3.5">
              {PRODUCT_DATA.slice(0, 4).map(p => (
                <li key={p.id}>
                  <Link
                    href={p.path}
                    className="flex items-center gap-2.5 text-white/38 hover:text-white text-sm transition-colors group"
                  >
                    <img src={p.icon3d} alt="" className="w-5 h-5 object-contain flex-shrink-0" />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">
              More
            </h4>
            <ul className="flex flex-col gap-3.5">
              {PRODUCT_DATA.slice(4, 8).map(p => (
                <li key={p.id}>
                  <Link
                    href={p.path}
                    className="flex items-center gap-2.5 text-white/38 hover:text-white text-sm transition-colors group"
                  >
                    <img src={p.icon3d} alt="" className="w-5 h-5 object-contain flex-shrink-0" />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'About',      href: '/about' },
                { label: 'Developers', href: '/developers' },
                { label: 'Partners',   href: '/partners' },
                { label: 'Reviews',    href: '/reviews' },
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

        {/* ── Copyright bar — the ONLY border on the page ── */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/22 text-xs">
            © {year} AfuChat Technologies Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: 'Privacy Policy',  href: '/legal/privacy' },
              { label: 'Terms of Service', href: '/legal/terms' },
              { label: 'Cookie Policy',   href: '/legal/cookies' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="text-white/28 hover:text-white/60 text-xs transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
