import { Link } from 'wouter';
import { PRODUCT_DATA } from '@/data/products';
import { TRUSTPILOT_PROFILE_URL, TRUSTPILOT_SUMMARY } from '@/data/trustpilot';
import logo from '@assets/afuchat_logo_transparent.png';
import trustpilotLogo from '@assets/image_1783529159179.png';
import googlePlayBadge from '@assets/image_1783529255108.png';

function TrustpilotBadge() {
  return (
    <a
      href={TRUSTPILOT_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${TRUSTPILOT_SUMMARY.rating.toFixed(1)} stars on Trustpilot, ${TRUSTPILOT_SUMMARY.reviewCount} reviews`}
      className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-md shadow-black/20 transition-transform hover:scale-[1.04]"
    >
      <img src={trustpilotLogo} alt="Trustpilot" className="h-6 w-auto" />
    </a>
  );
}

function StoreButtons() {
  return (
    <div className="flex items-center gap-3">
      <TrustpilotBadge />
      <a
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-fit"
      >
        <img src={googlePlayBadge} alt="Get it on Google Play" className="h-10 w-auto" />
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
