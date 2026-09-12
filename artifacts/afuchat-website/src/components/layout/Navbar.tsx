'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Github, Menu, X, ArrowUpRight } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';

const GITHUB_REPO_URL = 'https://github.com/afuchat1/Website';

function GithubStarBadge() {
  const [stars, setStars] = useState<string | null>(null);
  useEffect(() => {
    let cancelled = false;
    fetch('https://api.github.com/repos/afuchat1/Website')
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!cancelled && data && typeof data.stargazers_count === 'number') {
          setStars(data.stargazers_count > 999 ? `${(data.stargazers_count / 1000).toFixed(1)}k` : `${data.stargazers_count}`);
        }
      }).catch(() => {});
    return () => { cancelled = true; };
  }, []);
  return (
    <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" aria-label="AfuChat on GitHub" className="studio-link flex items-center gap-2 text-xs">
      <Github className="h-4 w-4" />
      {stars && <span className="studio-mono text-[10px]">{stars}</span>}
    </a>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const links = [{ label: 'Work', href: '/work' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onOutside = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setProductsOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('pointerdown', onOutside);
    return () => { window.removeEventListener('scroll', onScroll); document.removeEventListener('pointerdown', onOutside); };
  }, []);

  useEffect(() => { setOpen(false); setProductsOpen(false); }, [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled ? 'border-white/10 bg-[#06101f]/90 backdrop-blur-xl' : 'border-transparent bg-[#06101f]/55 backdrop-blur-md'}`}>
      <div className="max-container flex h-[72px] items-center justify-between">
        <Link href="/" className="group flex items-center" aria-label="AfuChat home">
          <img src="/assets/atl-logo.svg" alt="ATL" className="h-9 w-auto transition-transform duration-200 group-hover:scale-[1.03]" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          <div ref={menuRef} className="relative">
            <button type="button" aria-expanded={productsOpen} aria-controls="product-menu" onClick={() => setProductsOpen((value) => !value)} className="studio-link flex items-center gap-1.5 text-[13px]">
              Products <ChevronDown className={`h-3.5 w-3.5 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
            </button>
            {productsOpen && (
              <div id="product-menu" role="menu" className="absolute left-1/2 top-8 w-[430px] -translate-x-1/2 border border-white/10 bg-[#09172a]/98 p-3 shadow-2xl shadow-black/30">
                <div className="mb-2 flex items-center justify-between px-3 py-2">
                  <Link href="/products" className="flex items-center gap-1 text-[11px] text-[#91a8c4] hover:text-white">Index <ArrowUpRight className="h-3 w-3" /></Link>
                </div>
                <div className="grid grid-cols-2">
                  {PRODUCT_DATA.map((product) => {
                    const Icon = product.icon;
                    return <Link key={product.id} href={product.path} role="menuitem" onClick={() => setProductsOpen(false)} className="group flex items-center gap-3 border-t border-white/[.06] px-3 py-3 hover:bg-white/[.04]">
                      <Icon className="h-4 w-4" style={{ color: product.color }} strokeWidth={1.7} />
                      <span className="text-xs text-[#91a8c4] transition-colors group-hover:text-[#e6f1ff]">{product.name}</span>
                    </Link>;
                  })}
                </div>
              </div>
            )}
          </div>
          {links.map((link) => <Link key={link.href} href={link.href} className={`text-[13px] transition-colors ${pathname === link.href ? 'text-white' : 'studio-link'}`}>{link.label}</Link>)}
          <Link href="/developers" className={`text-[13px] transition-colors ${pathname === '/developers' ? 'text-white' : 'studio-link'}`}>Developers</Link>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <GithubStarBadge />
          <a href="https://web.afuchat.com/login" className="studio-link text-[13px]">Log in</a>
          <Link href="/contact" className="studio-button studio-button-primary min-h-[38px] px-4 text-xs">Start a project <ArrowUpRight className="h-3.5 w-3.5" /></Link>
        </div>
        <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="p-2 text-[#91a8c4] hover:text-white md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && <div className="border-t border-white/10 bg-[#06101f]/98 px-4 pb-5 pt-3 md:hidden">
        <div className="mx-auto flex max-w-[1220px] flex-col">
          <button type="button" onClick={() => setProductsOpen((value) => !value)} className="flex items-center justify-between border-b border-white/[.08] py-4 text-left text-sm text-[#e6f1ff]">Products <ChevronDown className={`h-4 w-4 ${productsOpen ? 'rotate-180' : ''}`} /></button>
          {productsOpen && <div className="grid grid-cols-2 border-b border-white/[.08] pb-2">
            {PRODUCT_DATA.map((product) => <Link key={product.id} href={product.path} className="py-3 text-sm text-[#91a8c4]">{product.name}</Link>)}
          </div>}
          {links.map((link) => <Link key={link.href} href={link.href} className="border-b border-white/[.08] py-4 text-sm text-[#91a8c4]">{link.label}</Link>)}
          <Link href="/developers" className="border-b border-white/[.08] py-4 text-sm text-[#91a8c4]">Developers</Link>
          <div className="flex items-center justify-between pt-5"><GithubStarBadge /><Link href="/contact" className="studio-button studio-button-primary min-h-[40px] text-xs">Start a project</Link></div>
        </div>
      </div>}
    </header>
  );
}