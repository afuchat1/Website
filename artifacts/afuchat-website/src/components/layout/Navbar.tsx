'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Leadership', href: '/about/leadership' },
  { label: 'Careers', href: '/about/careers' },
  { label: 'Press', href: '/about/press' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const onOutside = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
        setCompanyOpen(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('pointerdown', onOutside);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('pointerdown', onOutside);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
    setCompanyOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || (pathname ?? '').startsWith(href + '/');

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#06101f]/92 shadow-[0_12px_45px_rgba(0,0,0,.16)] backdrop-blur-xl' : 'bg-[#06101f]/68 backdrop-blur-md'}`}>
      <nav ref={navRef} className="max-container flex min-h-[72px] items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="group flex shrink-0 items-center" aria-label="AfuChat Technologies home">
          <img src="/assets/atl-logo.svg" alt="ATL" className="h-8 w-auto transition-transform duration-200 group-hover:scale-[1.02] sm:h-9" />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <Link href="/" className={`studio-link text-[13px] ${pathname === '/' ? 'text-white' : ''}`}>Home</Link>

          <div className="relative">
            <button type="button" aria-expanded={productsOpen} onClick={() => { setProductsOpen(v => !v); setCompanyOpen(false); }} className={`studio-link flex items-center gap-1.5 text-[13px] ${isActive('/products') ? 'text-white' : ''}`}>
              Products <ChevronDown className={`h-3.5 w-3.5 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
            </button>
            {productsOpen && (
              <div className="absolute left-1/2 top-10 w-[460px] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#081629]/98 p-3 shadow-2xl shadow-black/35 backdrop-blur-xl" role="menu">
                <Link href="/products" className="flex items-center justify-between rounded-xl px-3 py-3 text-xs text-[#e6f1ff] hover:bg-white/[.05]">
                  <span><span className="block font-semibold">All products</span><span className="mt-1 block text-[#6f89a7]">Explore the Afu product ecosystem</span></span>
                  <ArrowUpRight className="h-4 w-4 text-[#4da8ff]" />
                </Link>
                <div className="mt-2 grid grid-cols-2 gap-1 border-t border-white/[.07] pt-2">
                  {PRODUCT_DATA.map(product => (
                    <Link key={product.id} href={product.path} role="menuitem" className="rounded-xl px-3 py-3 text-xs text-[#91a8c4] hover:bg-white/[.05] hover:text-white">
                      <span className="block font-medium text-[#dbeaff]">{product.name}</span>
                      <span className="mt-1 block text-[10px] text-[#627b98]">{product.category}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/work" className={`studio-link text-[13px] ${isActive('/work') ? 'text-white' : ''}`}>Work</Link>

          <div className="relative">
            <button type="button" aria-expanded={companyOpen} onClick={() => { setCompanyOpen(v => !v); setProductsOpen(false); }} className={`studio-link flex items-center gap-1.5 text-[13px] ${isActive('/about') ? 'text-white' : ''}`}>
              Company <ChevronDown className={`h-3.5 w-3.5 transition-transform ${companyOpen ? 'rotate-180' : ''}`} />
            </button>
            {companyOpen && (
              <div className="absolute left-1/2 top-10 w-56 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#081629]/98 p-2 shadow-2xl shadow-black/35 backdrop-blur-xl" role="menu">
                {companyLinks.map(link => (
                  <Link key={link.href} href={link.href} role="menuitem" className="block rounded-xl px-3 py-3 text-xs text-[#91a8c4] hover:bg-white/[.05] hover:text-white">{link.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/developers" className={`studio-link text-[13px] ${isActive('/developers') ? 'text-white' : ''}`}>Developers</Link>
          <Link href="/contact" className={`studio-link text-[13px] ${isActive('/contact') ? 'text-white' : ''}`}>Contact</Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="studio-button studio-button-primary min-h-[38px] px-4 text-xs">Start a project</Link>
        </div>

        <button type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(v => !v)} className="rounded-lg p-2 text-[#91a8c4] hover:bg-white/[.05] hover:text-white md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/[.08] bg-[#06101f]/98 px-4 pb-6 pt-2 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-[1220px] flex-col">
            <Link href="/" className="border-b border-white/[.07] py-4 text-sm text-[#e6f1ff]">Home</Link>
            <button type="button" onClick={() => setProductsOpen(v => !v)} className="flex items-center justify-between border-b border-white/[.07] py-4 text-left text-sm text-[#e6f1ff]">
              Products <ChevronDown className={`h-4 w-4 ${productsOpen ? 'rotate-180' : ''}`} />
            </button>
            {productsOpen && (
              <div className="grid grid-cols-2 gap-x-4 border-b border-white/[.07] py-2">
                <Link href="/products" className="py-3 text-sm text-[#dbeaff]">All products</Link>
                {PRODUCT_DATA.map(product => <Link key={product.id} href={product.path} className="py-3 text-sm text-[#91a8c4]">{product.name}</Link>)}
              </div>
            )}
            <Link href="/work" className="border-b border-white/[.07] py-4 text-sm text-[#91a8c4]">Work</Link>
            <button type="button" onClick={() => setCompanyOpen(v => !v)} className="flex items-center justify-between border-b border-white/[.07] py-4 text-left text-sm text-[#91a8c4]">
              Company <ChevronDown className={`h-4 w-4 ${companyOpen ? 'rotate-180' : ''}`} />
            </button>
            {companyOpen && <div className="border-b border-white/[.07] pl-3">
              {companyLinks.map(link => <Link key={link.href} href={link.href} className="block py-3 text-sm text-[#91a8c4]">{link.label}</Link>)}
            </div>}
            <Link href="/developers" className="border-b border-white/[.07] py-4 text-sm text-[#91a8c4]">Developers</Link>
            <Link href="/contact" className="border-b border-white/[.07] py-4 text-sm text-[#91a8c4]">Contact</Link>
            <Link href="/contact" className="studio-button studio-button-primary mt-5 min-h-[44px] justify-center text-xs">Start a project</Link>
          </div>
        </div>
      )}
    </header>
  );
}
