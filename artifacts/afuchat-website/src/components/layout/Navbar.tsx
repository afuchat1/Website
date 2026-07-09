'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Github } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';

const LOGO_SRC = '/assets/afuchat_logo_transparent.png';
const GITHUB_REPO_URL = 'https://github.com/afuchat1/Website';

function formatStars(count: number) {
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return `${count}`;
}

function GithubStarBadge({ className = '' }: { className?: string }) {
  const [stars, setStars] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('https://api.github.com/repos/afuchat1/Website')
      .then(res => (res.ok ? res.json() : null))
      .then(data => {
        if (!cancelled && data && typeof data.stargazers_count === 'number') {
          setStars(formatStars(data.stargazers_count));
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  return (
    <a
      href={GITHUB_REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white px-3.5 py-2 transition-colors ${className}`}
    >
      <Github className="w-4 h-4" />
      {stars && <span className="text-xs font-semibold text-white/85">{stars}</span>}
    </a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileProductsOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  // Close products dropdown when clicking outside
  useEffect(() => {
    if (!productsOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [productsOpen]);

  const navLinks = [
    { label: 'Partners',   href: '/partners' },
    { label: 'Developers', href: '/developers' },
    { label: 'Company',    href: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#040c1e]/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-container container-pad h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <img src={LOGO_SRC} alt="AfuChat" className="h-8 w-auto" />
          <span className="font-bold text-white text-lg">AfuChat</span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-7">

          {/* Products mega-dropdown */}
          <div
            ref={productsRef}
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              id="products-btn"
              aria-haspopup="true"
              aria-expanded={productsOpen}
              aria-controls="products-panel"
              className="flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors"
              onClick={() => setProductsOpen(v => !v)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setProductsOpen(v => !v); }
                if (e.key === 'Escape') setProductsOpen(false);
              }}
            >
              Products
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
            </button>

            {productsOpen && (
              <div
                id="products-panel"
                role="region"
                aria-label="Products menu"
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[620px] z-50"
              >
                <div className="bg-[#050d1f]/98 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/60 p-5">
                  <div className="grid grid-cols-2 gap-0">
                    <div className="pr-5">
                      <p className="text-white/28 font-semibold text-[10px] uppercase tracking-widest mb-3 px-2">Products</p>
                      {PRODUCT_DATA.slice(0, 4).map(p => (
                        <Link key={p.id} href={p.path} onClick={() => setProductsOpen(false)}>
                          <div className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-white/6 transition-colors group">
                            <img src={p.icon3d} alt="" className="w-8 h-8 object-contain flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold text-white/85 group-hover:text-white leading-none mb-0.5">{p.name}</p>
                              <p className="text-xs text-white/32 leading-none">{p.tagline}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="pl-5 border-l border-white/8">
                      <p className="text-white/28 font-semibold text-[10px] uppercase tracking-widest mb-3 px-2">More</p>
                      {PRODUCT_DATA.slice(4, 8).map(p => (
                        <Link key={p.id} href={p.path} onClick={() => setProductsOpen(false)}>
                          <div className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-white/6 transition-colors group">
                            <img src={p.icon3d} alt="" className="w-8 h-8 object-contain flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold text-white/85 group-hover:text-white leading-none mb-0.5">{p.name}</p>
                              <p className="text-xs text-white/32 leading-none">{p.tagline}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-white/8 mt-4 pt-4 flex items-center justify-between">
                    <Link href="/products" onClick={() => setProductsOpen(false)} className="text-xs font-medium text-white/40 hover:text-white transition-colors">
                      See all products →
                    </Link>
                    <Link href="/signup" onClick={() => setProductsOpen(false)} className="text-xs font-semibold text-white bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                      Get started free
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.map(link => (
            <Link key={link.label} href={link.href} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop actions ── */}
        <div className="hidden md:flex items-center gap-3">
          <GithubStarBadge />
          <Link href="/login" className="text-sm font-medium text-white/75 border border-white/16 px-5 py-2 rounded-full hover:bg-white/6 hover:border-white/26 transition-colors">
            Log in
          </Link>
          <Link href="/signup" className="text-sm font-medium text-white bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] rounded-full px-5 py-2 hover:opacity-90 transition-opacity">
            Sign Up
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden p-2 -mr-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#040c1e]/98 backdrop-blur-2xl shadow-2xl shadow-black/40 max-h-[calc(100dvh-64px)] overflow-y-auto pb-6 border-b border-white/10">
          <div className="flex flex-col py-2">
            <button
              className="flex items-center justify-between px-6 py-4 text-base font-medium text-white/80 hover:text-white hover:bg-white/4 w-full transition-colors"
              onClick={() => setMobileProductsOpen(v => !v)}
              aria-expanded={mobileProductsOpen}
            >
              Products
              <ChevronDown className={`w-5 h-5 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileProductsOpen && (
              <div className="flex flex-col bg-white/5 py-2">
                {PRODUCT_DATA.map(p => (
                  <Link key={p.id} href={p.path} className="flex items-center gap-4 px-8 py-3.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors">
                    <img src={p.icon3d} alt="" className="w-7 h-7 object-contain flex-shrink-0" />
                    <span className="font-medium">{p.name}</span>
                  </Link>
                ))}
              </div>
            )}
            {navLinks.map(link => (
              <Link key={link.label} href={link.href} className="px-6 py-4 text-base font-medium text-white/80 hover:text-white hover:bg-white/4 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 px-6 pt-2">
            <GithubStarBadge className="justify-center py-3.5" />
            <Link href="/login" className="flex items-center justify-center text-sm font-medium text-white/80 border border-white/15 rounded-full px-4 py-3.5 hover:bg-white/6 transition-colors">
              Log in
            </Link>
            <Link href="/signup" className="flex items-center justify-center text-sm font-bold text-white bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] rounded-full px-4 py-3.5 hover:opacity-90 transition-opacity">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
