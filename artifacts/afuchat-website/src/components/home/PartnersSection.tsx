'use client';

import { useState } from 'react';

const partners = [
  { name: 'Sabula Shoe Spot', image: '/assets/partners/sabula-shoe-spot.png' },
  { name: 'Mindset Radio', image: '/assets/partners/mindset-radio.png' },
  { name: 'AJS Digital Services', image: '/assets/partners/ajs-digital-services.png' },
];

export default function PartnersSection() {
  const [activePartner, setActivePartner] = useState<string | null>(null);

  const items = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="overflow-hidden py-14 sm:py-18 lg:py-22">
      <div className="max-container container-pad">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3">Our partners</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Working with organizations that share our vision.</h2>
          <p className="text-white/45 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mt-3">
            We work with trusted organizations and partners to build useful digital experiences and bring technology to more people.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden" aria-label="Our partners">
        <div className="partners-marquee flex w-max items-center gap-12 sm:gap-16 lg:gap-24 px-6">
          {items.map((partner, index) => {
            const isActive = activePartner === partner.name;
            return (
              <button
                key={partner.name + '-' + index}
                type="button"
                aria-label={'Select ' + partner.name}
                aria-pressed={isActive}
                onClick={() => setActivePartner(isActive ? null : partner.name)}
                className="shrink-0 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  width={180}
                  height={180}
                  loading="lazy"
                  decoding="async"
                  className={'h-28 w-28 sm:h-36 sm:w-36 lg:h-40 lg:w-40 object-contain grayscale opacity-100 transition-transform duration-300 ' + (isActive ? 'scale-105' : '')}
                />
              </button>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .partners-marquee { animation: partners-slide 22s linear infinite; }
        .partners-marquee:hover { animation-play-state: paused; }
        @keyframes partners-slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .partners-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}