import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import EcosystemSection from '@/components/home/EcosystemSection';
import IdentitySection from '@/components/home/IdentitySection';
import FeaturesSection from '@/components/home/FeaturesSection';
import DeveloperSection from '@/components/home/DeveloperSection';
import DownloadSection from '@/components/home/DownloadSection';
import CtaSection from '@/components/home/CtaSection';

// Blob positions are calculated from real section heights at 1280 px:
//   section-pad = py-28 = 224 px padding, total page ≈ 4 226 px
//   Hero 0–12 % │ Products 12–34 % │ Ecosystem 34–47 % │ Identity 47–59 %
//   Features 59–72 % │ Developer 72–84 % │ Download 84–90 % │ CTA 90–100 %
// Each 130 vw blob has a 70 % fade radius ≈ 582 px ≈ 14 % of page height,
// so adjacent blobs always overlap and leave no dark gap between sections.
const BLOBS = [
  // ── Hero (center ≈ 6 %) ──
  { c: 'rgba(14,98,210,0.52)',  s: '130vw', t: '6%',  l: '65%' },
  { c: 'rgba(99,60,220,0.38)',  s: '112vw', t: '9%',  l: '18%' },
  { c: 'rgba(0,180,200,0.20)',  s: '80vw',  t: '11%', l: '88%' },

  // ── Products (center ≈ 23 %) ──
  { c: 'rgba(100,30,200,0.40)', s: '130vw', t: '24%', l: '24%' },
  { c: 'rgba(20,60,180,0.32)',  s: '112vw', t: '19%', l: '76%' },

  // ── Ecosystem (center ≈ 41 %) ──
  { c: 'rgba(14,80,200,0.42)',  s: '130vw', t: '41%', l: '82%' },
  { c: 'rgba(80,30,200,0.32)',  s: '112vw', t: '38%', l: '14%' },

  // ── Identity (center ≈ 53 %) ──
  { c: 'rgba(15,60,180,0.48)',  s: '130vw', t: '52%', l: '71%' },
  { c: 'rgba(20,140,180,0.28)', s: '92vw',  t: '56%', l: '18%' },

  // ── Features (center ≈ 66 %) ──
  { c: 'rgba(8,100,100,0.58)',  s: '130vw', t: '66%', l: '18%' },
  { c: 'rgba(10,80,120,0.44)',  s: '112vw', t: '63%', l: '77%' },

  // ── Developer (center ≈ 78 %) ──
  { c: 'rgba(10,80,40,0.56)',   s: '130vw', t: '75%', l: '61%' },
  { c: 'rgba(5,50,80,0.34)',    s: '92vw',  t: '80%', l: '18%' },

  // ── Download (center ≈ 87 %) ──
  { c: 'rgba(31,122,255,0.50)', s: '112vw', t: '87%', l: '18%' },
  { c: 'rgba(108,99,255,0.40)', s: '100vw', t: '87%', l: '82%' },

  // ── CTA (center ≈ 95 %) ──
  { c: 'rgba(90,40,200,0.56)',  s: '130vw', t: '97%', l: '14%' },
  { c: 'rgba(0,140,210,0.50)',  s: '112vw', t: '93%', l: '82%' },
  { c: 'rgba(0,180,170,0.32)',  s: '88vw',  t: '99%', l: '55%' },
  { c: 'rgba(20,60,200,0.36)',  s: '92vw',  t: '91%', l: '41%' },
] as const;

export default function Home() {
  return (
    <div className="relative flex flex-col w-full">
      {/* ── Single shared ambient canvas — all colour blobs, spanning every section ── */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {BLOBS.map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: b.t,
              left: b.l,
              width: b.s,
              height: b.s,
              background: `radial-gradient(circle, ${b.c} 0%, transparent 70%)`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      <HeroSection />
      <ProductsSection />
      <EcosystemSection />
      <IdentitySection />
      <FeaturesSection />
      <DeveloperSection />
      <DownloadSection />
      <CtaSection />
    </div>
  );
}
