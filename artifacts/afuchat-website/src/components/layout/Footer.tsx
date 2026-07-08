import { Link } from 'wouter';
import { PRODUCT_DATA } from '@/data/products';
import logo from '@assets/afuchat_logo_transparent.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      <div className="max-container container-pad pt-16 pb-8">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <img src={logo} alt="AfuChat" className="h-8 w-auto" />
              <span className="text-white font-bold text-lg">AfuChat</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              One identity. Eight powerful<br />services. Zero friction.
            </p>
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
                { label: 'Ecosystem',  href: '/ecosystem' },
                { label: 'Blog',       href: '/blog' },
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
