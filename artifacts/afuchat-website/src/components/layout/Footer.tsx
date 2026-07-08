import { Link } from 'wouter';
import { PRODUCT_DATA } from '@/data/products';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-white/8"
      style={{
        background: `
          radial-gradient(ellipse at 30% 50%, rgba(10,30,80,0.40) 0%, transparent 60%),
          #030810
        `,
      }}
    >
      <div className="max-container container-pad py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1F7AFF] to-[#6C63FF] flex items-center justify-center">
                <span className="text-white font-extrabold text-xs">A</span>
              </div>
              <span className="text-white font-bold text-lg">AfuChat</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              One identity. Eight powerful services. Zero friction.
            </p>
            <p className="text-white/25 text-xs">AfuChat Technologies Limited</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white/70 font-semibold text-xs uppercase tracking-widest mb-4">Products</h4>
            <ul className="flex flex-col gap-2.5">
              {PRODUCT_DATA.slice(0, 4).map((p) => (
                <li key={p.id}>
                  <Link href={p.path} className="text-white/40 hover:text-white text-sm transition-colors">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Products */}
          <div>
            <h4 className="text-white/70 font-semibold text-xs uppercase tracking-widest mb-4">More</h4>
            <ul className="flex flex-col gap-2.5">
              {PRODUCT_DATA.slice(4, 8).map((p) => (
                <li key={p.id}>
                  <Link href={p.path} className="text-white/40 hover:text-white text-sm transition-colors">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white/70 font-semibold text-xs uppercase tracking-widest mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'About', href: '/company' },
                { label: 'Developers', href: '/developers' },
                { label: 'Ecosystem', href: '/ecosystem' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/careers' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/40 hover:text-white text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {currentYear} AfuChat Technologies Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
              <Link key={l} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
