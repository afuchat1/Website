'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="photo-bg-section relative isolate overflow-hidden flex items-center bg-[#06132a] text-white" style={{ backgroundImage: "linear-gradient(90deg, rgba(3, 12, 30, 0.95) 0%, rgba(3, 12, 30, 0.84) 48%, rgba(3, 12, 30, 0.52) 100%), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="relative z-10 max-container container-pad w-full">
        <div className="grid grid-cols-1 items-center py-16 sm:py-24 lg:py-32">
          <div className="max-w-3xl">
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-5">
              An independent technology company.
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              className="text-[32px] leading-[1.1] sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-5 tracking-tight">
              We build technology<br />that moves ideas<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">forward.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-white/55 mb-6 sm:mb-8 max-w-md leading-relaxed">
              AfuChat Technologies Limited is a technology company building a growing portfolio of digital products and delivering practical software solutions for businesses, institutions, and ambitious teams.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-8 sm:mb-10">
              <Link href="/products" className="flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25">
                Explore our portfolio
              </Link>
              <Link href="/work" className="flex items-center justify-center px-7 py-3.5 text-white/70 font-medium text-sm hover:text-white transition-colors border border-white/10 rounded-full sm:border-transparent sm:bg-transparent">
                See our work
              </Link>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
              className="text-white/40 text-xs sm:text-sm">
              Built with ambition in Uganda. Designed for a connected world.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
