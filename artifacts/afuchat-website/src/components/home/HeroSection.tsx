import { motion } from 'framer-motion';
import { Link } from 'wouter';
import heroImage from '@assets/AfuChat_1783469000333.png';

export default function HeroSection() {
  return (
    /* Section is transparent — the page's unified sky-blue gradient shows through */
    <section className="relative overflow-hidden pt-0 pb-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">

        {/* ── LEFT: text ── */}
        <div className="flex flex-col items-start text-left px-4 sm:px-6 lg:px-10 xl:px-16
                        pt-14 sm:pt-20 lg:pt-28 pb-10 lg:pb-28">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6
                       bg-white/40 border border-white/60 backdrop-blur-sm"
          >
            <span className="text-[#1463A5] text-xs">✦</span>
            <span className="text-sm font-medium text-[#1463A5]">One account. Everything connected.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0A2540]
                       leading-[1.08] tracking-tight mb-5"
          >
            One identity.<br />
            Every service.<br />
            Zero friction.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="text-lg sm:text-xl text-[#2D5A7A] max-w-md mb-8 leading-relaxed"
          >
            Create one AfuMail account and instantly access chat, cloud storage, AI,
            entertainment and more — no separate sign-ups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3
                       w-full sm:w-auto mb-10"
          >
            <Link
              href="/signup"
              className="px-7 py-3.5 bg-[#1F95FF] text-white text-base font-semibold
                         rounded-xl hover:bg-[#0F7AE0] transition-colors text-center shadow-lg
                         shadow-blue-500/30"
            >
              Create AfuMail →
            </Link>
            <Link
              href="/ecosystem"
              className="px-7 py-3.5 bg-white/60 text-[#0A2540] text-base font-semibold
                         rounded-xl border border-white/70 hover:bg-white/80 transition-colors
                         text-center backdrop-blur-sm"
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
              {['#1F95FF', '#6C63FF', '#10B981', '#F59E0B'].map((bg, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white/80 flex items-center
                             justify-center text-white text-xs font-bold shadow-sm"
                  style={{ background: bg }}
                >
                  {['A', 'J', 'M', 'S'][i]}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-[#2D5A7A]">Trusted by millions globally</span>
          </motion.div>
        </div>

        {/* ── RIGHT: AfuChat screenshot — floats on the same sky-blue bg ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="relative flex items-end justify-center overflow-hidden
                     min-h-[300px] sm:min-h-[400px] lg:min-h-0"
        >
          <img
            src={heroImage}
            alt="AfuChat app"
            className="w-full max-w-[400px] sm:max-w-[480px] lg:max-w-none lg:w-full
                       object-contain object-bottom"
            style={{ display: 'block' }}
          />
        </motion.div>

      </div>
    </section>
  );
}
