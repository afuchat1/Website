import { motion } from 'framer-motion';
import { Link } from 'wouter';
import heroImage from '@assets/AfuChat_1783469000333.png';

// The image's own background is a sky-blue radial gradient.
// We replicate that exact gradient as the section BG so the
// image content bleeds seamlessly into the page — no box effect.
const IMAGE_BG =
  'radial-gradient(ellipse 120% 100% at 60% 10%, #EEF7FF 0%, #BDE0F8 35%, #7EB9DC 70%, #5EA8D0 100%)';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-0 pb-0">
      {/* ── Full-bleed two-tone background ──────────────────────────────
          Desktop: left half = white, right half = image sky-blue
          Mobile:  top portion = white (text), bottom = sky-blue (image)
      ──────────────────────────────────────────────────────────────── */}

      {/* White left panel — only visible on lg+ */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-white hidden lg:block pointer-events-none" />

      {/* Sky-blue right panel — full width on mobile, right-half on lg */}
      <div
        className="absolute inset-0 lg:left-1/2 pointer-events-none"
        style={{ background: IMAGE_BG }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">

        {/* ── LEFT: text (white bg on desktop) ── */}
        <div className="flex flex-col items-start text-left px-4 sm:px-6 lg:px-10 xl:px-16 pt-14 sm:pt-20 lg:pt-28 pb-10 lg:pb-28 bg-white lg:bg-transparent">
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
            Create one AfuMail account and instantly access chat, cloud storage, AI, entertainment and more — no separate sign-ups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10"
          >
            <Link
              href="/signup"
              className="px-7 py-3.5 bg-[#1F95FF] text-white text-base font-semibold rounded-xl hover:bg-[#0F7AE0] transition-colors text-center"
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
              {['#1F95FF', '#6C63FF', '#10B981', '#F59E0B'].map((bg, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm"
                  style={{ background: bg }}
                >
                  {['A', 'J', 'M', 'S'][i]}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-[#64748B]">Trusted by millions globally</span>
          </motion.div>
        </div>

        {/* ── RIGHT: image (sky-blue bg — same gradient as image itself) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="relative flex items-end justify-center overflow-hidden min-h-[340px] sm:min-h-[420px] lg:min-h-0"
          style={{ background: IMAGE_BG }}
        >
          <img
            src={heroImage}
            alt="AfuChat app"
            className="w-full max-w-[400px] sm:max-w-[480px] lg:max-w-none lg:w-full object-contain object-bottom"
            style={{ display: 'block' }}
          />
        </motion.div>

      </div>
    </section>
  );
}
