 'use client';

import { usePathname } from 'next/navigation';
import {
  illSecAbout,
  illSecBrand,
  illSecCareers,
  illSecContact,
  illSecCta,
  illSecDeveloper,
  illSecEcosystem,
  illSecEnterprise,
  illSecHero,
  illSecHelp,
  illSecIdentity,
  illSecLeadership,
  illSecPress,
  illSecProducts,
  illSecSecurity,
  illSecSitemap,
} from '@/data/illustrations';

const BACKDROP_LAYERS = [
  { source: illSecEcosystem, className: 'site-backdrop-ecosystem' },
  { source: illSecDeveloper, className: 'site-backdrop-developer' },
  { source: illSecCta, className: 'site-backdrop-cta' },
];

function getRouteBackdrop(pathname: string | null) {
  if (!pathname || pathname === '/') return illSecHero;
  if (pathname.startsWith('/products/')) return pathname.includes('engagera') ? illSecHero : illSecProducts;
  if (pathname === '/products') return illSecProducts;
  if (pathname === '/about') return illSecAbout;
  if (pathname.startsWith('/about/leadership')) return illSecLeadership;
  if (pathname.startsWith('/about/careers')) return illSecCareers;
  if (pathname.startsWith('/about/press')) return illSecPress;
  if (pathname.startsWith('/about/brand')) return illSecBrand;
  if (pathname === '/enterprise') return illSecEnterprise;
  if (pathname === '/contact') return illSecContact;
  if (pathname === '/developers') return illSecDeveloper;
  if (pathname === '/help') return illSecHelp;
  if (pathname === '/security') return illSecSecurity;
  if (pathname === '/sitemap') return illSecSitemap;
  if (pathname === '/reviews') return illSecIdentity;
  if (pathname === '/work' || pathname === '/partners') return illSecEcosystem;
  if (pathname.startsWith('/legal/')) return illSecSecurity;
  return illSecCta;
}

export default function SiteBackdrop() {
  const pathname = usePathname();
  const routeBackdrop = getRouteBackdrop(pathname);

  return (
    <div className="site-backdrop" aria-hidden="true">
      <div className="site-backdrop-wash" />
      <div className="site-backdrop-grid" />
      <div className="site-backdrop-ring site-backdrop-ring-one" />
      <div className="site-backdrop-ring site-backdrop-ring-two" />
      <div className="site-backdrop-layer site-backdrop-route">
        <img src={routeBackdrop} alt="" decoding="async" />
      </div>
      {BACKDROP_LAYERS.map(({ source, className }) => (
        <div key={source} className={`site-backdrop-layer ${className}`}>
          <img src={source} alt="" decoding="async" />
        </div>
      ))}
    </div>
  );
}