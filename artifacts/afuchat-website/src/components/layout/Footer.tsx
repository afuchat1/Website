import Link from 'next/link';
import { PRODUCT_DATA } from '@/data/products';

export default function Footer() {
  return (
    <footer className="footer-shell relative">
      <svg
        className="footer-dip"
        viewBox="0 0 1440 190"
        preserveAspectRatio="none"
        role="img"
        aria-label="Decorative footer separator"
      >
        <path
          fill="var(--footer-surface)"
          d="M0 92C45 68 82 48 126 54C174 60 180 94 184 128C188 160 205 174 226 166C247 158 235 118 254 102C276 84 302 111 331 88C360 62 389 75 420 82C452 90 475 74 509 72C551 69 583 85 616 77C650 68 665 52 690 52C728 52 743 71 755 101C769 140 770 162 799 170C829 179 844 158 858 126C871 93 899 90 922 80C945 70 936 46 966 34C997 20 1015 60 1058 61C1099 62 1115 39 1145 27C1183 12 1205 48 1236 62C1264 75 1294 79 1320 70C1354 58 1380 63 1410 67C1423 69 1434 67 1440 65V190H0Z"
        />
      </svg>

      <div className="footer-body">
      <div className="max-container container-pad pt-12 pb-10 sm:pt-16">

        {/* ── Main grid ── */}
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mb-16 md:grid-cols-3 md:gap-12">

          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center mb-5" aria-label="AfuChat Technologies Limited home">
              <img src="/assets/atl-logo.svg" alt="ATL — AfuChat Technologies Limited" className="h-9 w-auto" />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Independent products.<br />Built for the world.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">Products</h4>
            <ul className="flex flex-col gap-3.5">
              {PRODUCT_DATA.slice(0, 4).map(p => (
                <li key={p.id}>
                  <Link href={p.path} className="text-white/38 hover:text-white text-sm transition-colors">
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
                { label: 'Selected Work', href: '/work' },
                { label: 'Contact',   href: '/contact' },
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
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-white/22 text-xs">
             © 2026 AfuChat Technologies Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: 'Privacy Policy',   href: '/legal/privacy' },
              { label: 'Terms of Service', href: '/legal/terms' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="text-white/28 hover:text-white/60 text-xs transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
