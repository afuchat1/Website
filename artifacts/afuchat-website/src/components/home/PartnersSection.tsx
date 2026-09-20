'use client';

import { motion } from 'framer-motion';

export default function PartnersSection() {
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
          className="flex justify-center"
        >
          <div className="w-full max-w-5xl flex justify-center">
            <img
              src="/assets/partners/partner-brands.png"
              alt="AfuChat Technologies partners"
              className="w-full max-w-4xl h-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
