import { motion } from 'framer-motion';
import { Link } from 'wouter';
import heroImage from '@assets/AfuChat_1783469000333.png';

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden pt-12 sm:pt-20 lg:pt-28 pb-0">
      {/* Subtle background tint only on right half */}
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #e8f4ff 100%)' }}
      />

      <div className="max-container container-pad relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-end">

          {/* ── Left column ── */}
          <div className="flex flex-col items-start text-left pb-16 lg:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F0F7FF] border border-[#BFDBFE] mb-6"
            >
              <span className="text-[#1F95FF] text-xs">✦</span>
              <span className="text-sm font-medium text-[#1F95FF]">One account. Everything connected.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0F172A] leading-[1.08] tracking-tight mb-5"
            >
              One identity.<br />
              Every service.<br />
              Zero friction.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="text-lg sm:text-xl text-[#64748B] max-w-md mb-8 leading-relaxed"
            >
              Create one AfuMail account and instantly access chat, cloud storage, AI, entertainment, and more — no separate sign-ups.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10"
            >
              <Link
                href="/signup"
                className="px-7 py-3.5 bg-[#1F95FF] text-white text-base font-semibold rounded-xl hover:bg-[#0F7AE0] active:bg-[#0A65C2] transition-colors text-center"
              >
                Create AfuMail →
              </Link>
              <Link
                href="/ecosystem"
                className="px-7 py-3.5 bg-white text-[#0F172A] text-base font-semibold rounded-xl border border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors text-center"
              >
                See how it works
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.32 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2.5">
                {['#1F95FF','#6C63FF','#10B981','#F59E0B'].map((bg, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm"
                    style={{ background: bg }}
                  >
                    {['A','J','M','S'][i]}
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-[#64748B]">Trusted by millions globally</span>
            </motion.div>
          </div>

          {/* ── Right column — real AfuChat screenshot ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="relative w-full flex items-end justify-center lg:justify-end"
          >
            <img
              src={heroImage}
              alt="AfuChat app screens"
              className="w-full max-w-[420px] sm:max-w-[500px] lg:max-w-full object-contain object-bottom drop-shadow-2xl"
              style={{ maxHeight: '580px' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
