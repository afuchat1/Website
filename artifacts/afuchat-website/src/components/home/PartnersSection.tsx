'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const partners = [
  {
    name: 'Sabula Shoe Spot',
    image: '/assets/partners/sabula-shoe-spot.webp',
  },
  {
    name: 'Mindset Radio',
    image: '/assets/partners/mindset-radio.webp',
  },
];

export default function PartnersSection() {
  const [activePartner, setActivePartner] = useState<number | null>(null);

  return (
    <section className="py-14 sm:py-18 lg:py-22">
      <div className="max-container container-pad">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <p className="text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3">
            Our partners
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Working with organizations that share our vision.
          </h2>
          <p className="text-white/45 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mt-3">
            We work with trusted organizations and partners to build useful digital experiences and bring technology to more people.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16"
        >
          {partners.map((partner, index) => {
            const isActive = activePartner === index;

            return (
              <button
                key={partner.name}
                type="button"
                aria-label={"Select " + partner.name}
                aria-pressed={isActive}
                onClick={() => setActivePartner(index)}
                className="flex items-center justify-center rounded-xl p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  className={[
                    'h-28 w-28 sm:h-36 sm:w-36 lg:h-40 lg:w-40 object-contain transition-[filter,opacity] duration-300',
                    isActive ? 'grayscale-0 opacity-100' : 'grayscale opacity-60',
                  ].join(' ')}
                />
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
