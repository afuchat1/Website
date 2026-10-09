'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight, Github } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';
import ProductIcon from '@/components/products/ProductIcon';

const LOGO_SRC = '/assets/afuchat-brand-symbol.svg';
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
      className={`flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-[#1746A2] dark:text-white/70 dark:hover:text-white px-3.5 py-2 transition-colors ${className}`}
    >
      <Github className="w-4 h-4" />
      {stars && <span className="text-xs font-semibold text-slate-800 dark:text-white/85">{stars}</span>}
    </a>
  );
}

function ProductNavigationLinks({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <>
      <nav aria-label="Product navigation" className="flex flex-col">
        {PRODUCT_DATA.map(product => (
          <Link
            key={product.id}
            href={product.path}
            onClick={onNavigate}
            aria-current={pathname === product.path ? 'page' : undefined}
            className="afucloud-product-nav-link"
          >
            <ProductIcon product={product} containerClassName="h-8 w-8" iconClassName="h-5 w-5" />
            <span>{product.name}</span>
          </Link>
        ))}
      </nav>
      <Link href="/products" onClick={onNavigate} className="afucloud-product-nav-all">
        View all products <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname() ?? '';
  const isAfuCloud = pathname === '/products/afucloud';
  const productsRef = useRef<HTMLDivElement>(null);
  const drawerCloseButtonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    if (!isAfuCloud || !productsOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setProductsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    drawerCloseButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isAfuCloud, productsOpen]);

  const navLinks = [
    { label: 'Partners',   href: '/partners' },
    { label: 'Developers', href: '/developers' },
    { label: 'About us',    href: '/about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${isAfuCloud ? 'afucloud-site-header border-transparent' : 'border-slate-200 bg-white dark:border-white/10 dark:bg-[#040C1E]'}`}
      >
        <div className="max-container container-pad h-16 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src={isAfuCloud ? '/assets/products/afucloud-logo.svg' : LOGO_SRC}
              alt={isAfuCloud ? 'AfuCloud' : 'AfuChat Technologies Limited'}
              className={`h-8 w-8 object-contain ${isAfuCloud ? '' : 'dark:brightness-0 dark:invert'}`}
            />
            <span className={`font-bold text-lg ${isAfuCloud ? "text-white" : "text-slate-900 dark:text-white"}`}>{isAfuCloud ? 'AfuCloud' : 'AfuChat Technologies'}</span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-7">

            {isAfuCloud ? (
              <button
                type="button"
                aria-expanded={productsOpen}
                aria-controls="afucloud-products-drawer"
                className="afucloud-tablet-products-trigger hidden lg:hidden md:inline-flex items-center gap-2 text-sm font-medium"
                onClick={() => setProductsOpen(true)}
              >
                Products <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            ) : (
              /* Products mega-dropdown for the other product pages */
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
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-[#1746A2] dark:text-white/70 dark:hover:text-white transition-colors"
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
                                <ProductIcon product={p} containerClassName="w-9 h-9 rounded-xl" iconClassName="w-4 h-4" />
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
                                <ProductIcon product={p} containerClassName="w-9 h-9 rounded-xl" iconClassName="w-4 h-4" />
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
                        <Link href="/products" onClick={() => setProductsOpen(false)} className="text-xs font-semibold text-white bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                          View all products
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {navLinks.map(link => (
              <Link key={link.label} href={link.href} className="text-sm font-medium text-slate-700 hover:text-[#1746A2] dark:text-white/70 dark:hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop actions ── */}
          <div className="hidden md:flex items-center gap-3">
            <GithubStarBadge />
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden p-2 -mr-2 text-slate-700 hover:text-[#1746A2] dark:text-white/70 dark:hover:text-white transition-colors"
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
                onClick={() => {
                  if (isAfuCloud) {
                    setIsOpen(false);
                    setProductsOpen(true);
                  } else {
                    setMobileProductsOpen(v => !v);
                  }
                }}
                aria-expanded={isAfuCloud ? productsOpen : mobileProductsOpen}
                aria-controls={isAfuCloud ? 'afucloud-products-drawer' : 'mobile-products-panel'}
              >
                Products
                {isAfuCloud ? (
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                )}
              </button>
              {mobileProductsOpen && !isAfuCloud && (
                <div id="mobile-products-panel" className="flex flex-col bg-white/5 py-2">
                  {PRODUCT_DATA.map(p => (
                    <Link key={p.id} href={p.path} className="flex items-center gap-4 px-8 py-3.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors">
                      <ProductIcon product={p} containerClassName="w-8 h-8 rounded-xl" iconClassName="w-4 h-4" />
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
            </div>
          </div>
        )}
      </header>

      {isAfuCloud && (
        <>
          <aside className="afucloud-products-sidebar hidden lg:flex" aria-label="Products sidebar">
            <p className="afucloud-products-sidebar-heading">Products</p>
            <ProductNavigationLinks pathname={pathname} />
          </aside>

          {productsOpen && (
            <>
              <button
                type="button"
                className="afucloud-products-scrim"
                aria-label="Close products sidebar"
                onClick={() => setProductsOpen(false)}
              />
              <aside
                id="afucloud-products-drawer"
                className="afucloud-products-drawer"
                aria-label="Products sidebar"
              >
                <div ref={productsRef}>
                  <div className="afucloud-products-drawer-heading">
                    <p className="afucloud-products-sidebar-heading">Products</p>
                    <button
                      ref={drawerCloseButtonRef}
                      type="button"
                      aria-label="Close products sidebar"
                      className="afucloud-products-drawer-close"
                      onClick={() => setProductsOpen(false)}
                    >
                      <X className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                  <ProductNavigationLinks
                    pathname={pathname}
                    onNavigate={() => setProductsOpen(false)}
                  />
                </div>
              </aside>
            </>
          )}
        </>
      )}
    </>
  );
}
