import {
  illSecCta,
  illSecDeveloper,
  illSecEcosystem,
  illSecHero,
} from '@/data/illustrations';

const BACKDROP_LAYERS = [
  { source: illSecHero, className: 'site-backdrop-hero' },
  { source: illSecEcosystem, className: 'site-backdrop-ecosystem' },
  { source: illSecDeveloper, className: 'site-backdrop-developer' },
  { source: illSecCta, className: 'site-backdrop-cta' },
];

export default function SiteBackdrop() {
  return (
    <div className="site-backdrop" aria-hidden="true">
      <div className="site-backdrop-wash" />
      {BACKDROP_LAYERS.map(({ source, className }) => (
        <div key={source} className={`site-backdrop-layer ${className}`}>
          <img src={source} alt="" decoding="async" />
        </div>
      ))}
    </div>
  );
}