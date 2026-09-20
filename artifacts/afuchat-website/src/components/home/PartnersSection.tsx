'use client';

import { useEffect, useState } from 'react';

const partners = [
  { name: 'Sabula Shoe Spot', image: '/assets/partners/sabula-shoe-spot.webp' },
  { name: 'Mindset Radio', image: '/assets/partners/mindset-radio.webp' },
  { name: 'AJS Digital Services', image: 'https://www.ajsdigitalservices.com/assets/ajs-logo-DQ_jrscg.jpeg' },
];

function removeWhiteBackground(source: string) {
  return new Promise<string>((resolve) => {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext('2d', { willReadFrequently: true });
      if (!context) return resolve(source);
      context.drawImage(image, 0, 0);
      const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
      const data = pixels.data;
      const width = canvas.width;
      const height = canvas.height;
      const visited = new Uint8Array(width * height);
      const queue = new Int32Array(width * height);
      let head = 0;
      let tail = 0;

      const isWhite = (i: number) => data[i] > 242 && data[i + 1] > 242 && data[i + 2] > 242;
      const add = (x: number, y: number) => {
        const p = y * width + x;
        if (visited[p]) return;
        const i = p * 4;
        if (!isWhite(i)) return;
        visited[p] = 1;
        queue[tail++] = p;
      };

      for (let x = 0; x < width; x++) { add(x, 0); add(x, height - 1); }
      for (let y = 0; y < height; y++) { add(0, y); add(width - 1, y); }

      while (head < tail) {
        const p = queue[head++];
        const x = p % width;
        const y = Math.floor(p / width);
        data[p * 4 + 3] = 0;
        if (x > 0) add(x - 1, y);
        if (x < width - 1) add(x + 1, y);
        if (y > 0) add(x, y - 1);
        if (y < height - 1) add(x, y + 1);
      }

      context.putImageData(pixels, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };
    image.onerror = () => resolve(source);
    image.src = source;
  });
}

export default function PartnersSection() {
  const [images, setImages] = useState<Record<string, string>>({});
  const [activePartner, setActivePartner] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    Promise.all(
      partners.map(async (partner) => [partner.name, await removeWhiteBackground(partner.image)] as const)
    ).then((entries) => {
      if (mounted) setImages(Object.fromEntries(entries));
    });
    return () => { mounted = false; };
  }, []);

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
                  src={images[partner.name] || partner.image}
                  alt={partner.name}
                  width={180}
                  height={180}
                  loading="lazy"
                  decoding="async"
                  className={'h-28 w-28 sm:h-36 sm:w-36 lg:h-40 lg:w-40 object-contain transition-[filter,opacity] duration-300 ' + (isActive ? 'grayscale-0 opacity-100' : 'grayscale opacity-55')}
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