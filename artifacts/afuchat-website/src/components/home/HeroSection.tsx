import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { illSecHero } from '@/data/illustrations';

export default function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden">
      <div className="relative z-10 max-container container-pad w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center pt-8 pb-4 sm:pt-12 sm:pb-8 lg:py-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-5"
            >
              One account. Everything connected.
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-[32px] leading-[1.1] sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-5 tracking-tight"
            >
              One identity.<br />Every service.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Zero friction.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-white/55 mb-6 sm:mb-8 max-w-md leading-relaxed"
            >
              Create one AfuMail account and instantly access chat, cloud storage, AI, entertainment and more — no separate sign-ups.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-8 sm:mb-10"
            >
              <Link href="/signup" className="flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25">
                Create AfuMail →
              </Link>
              <Link href="/ecosystem" className="flex items-center justify-center px-7 py-3.5 text-white/70 font-medium text-sm hover:text-white transition-colors border border-white/10 rounded-full sm:border-transparent sm:bg-transparent">
                See how it works →
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['#6366F1','#10B981','#F59E0B','#EF4444'].map((c, i) => (
                  <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-[#040c1e]" style={{ background: c }} />
                ))}
              </div>
              <span className="text-white/40 text-xs sm:text-sm">Trusted by millions globally</span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center lg:justify-end mt-4 sm:mt-0"
          >
            <img
              src={illSecHero}
              alt="One identity connecting every AfuChat service"
              className="w-full max-w-[280px] sm:max-w-md lg:max-w-lg drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
