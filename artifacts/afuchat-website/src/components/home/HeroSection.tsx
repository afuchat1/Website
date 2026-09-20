'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { illSecHero } from '@/data/illustrations';

export default function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden">
      <div className="relative z-10 max-container container-pad w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center pt-8 pb-4 sm:pt-12 sm:pb-8 lg:py-20">
          <div>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-5">
              Technology company. Product builder.
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              className="text-[32px] leading-[1.1] sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-5 tracking-tight">
              We build useful<br />digital products<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">for real people.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-white/55 mb-6 sm:mb-8 max-w-md leading-relaxed">
              AfuChat Technologies builds its own products across communication, email, cloud, and AI. We also help businesses and organizations turn good ideas into working websites, applications, and digital systems.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-8 sm:mb-10">
              <Link href="/products" className="flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25">
                Explore our products
              </Link>
              <Link href="/work" className="flex items-center justify-center px-7 py-3.5 text-white/70 font-medium text-sm hover:text-white transition-colors border border-white/10 rounded-full sm:border-transparent sm:bg-transparent">
                See our work
              </Link>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
              className="text-white/40 text-xs sm:text-sm">
              Built in Uganda. Made to serve people anywhere.
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }} className="flex justify-center lg:justify-end mt-4 sm:mt-0">
            <img src={illSecHero} alt="AfuChat Technologies digital products" className="w-full max-w-[280px] sm:max-w-md lg:max-w-lg drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
