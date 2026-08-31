import Link from 'next/link';
import { PRODUCT_DATA } from '@/data/products';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      <div className="max-container container-pad pt-16 pb-8">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10 md:mb-14">

          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center mb-5">
              <span className="text-white font-bold text-lg">AfuChat</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Independent products.<br />Built for the world.
            </p>
            <p className="text-white/22 text-xs">AfuChat Technologies Limited</p>
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

          {/* More */}
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">More</h4>
            <ul className="flex flex-col gap-3.5">
              {PRODUCT_DATA.slice(4, 8).map(p => (
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
