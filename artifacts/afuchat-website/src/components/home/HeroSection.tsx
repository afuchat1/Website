import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 65% 40%, rgba(14,98,210,0.45) 0%, transparent 55%),
          radial-gradient(ellipse at 20% 70%, rgba(99,60,220,0.30) 0%, transparent 50%),
          radial-gradient(ellipse at 85% 80%, rgba(0,180,200,0.18) 0%, transparent 45%),
          #040c1e
        `,
      }}
    >
      {/* Subtle noise grain overlay */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px',
      }} />

      <div className="relative z-10 max-container container-pad w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/6 text-white/70 text-xs font-medium mb-6 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              One account. Everything connected.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight leading-[1.08]"
            >
              One identity.<br />
              Every service.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Zero friction.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/55 mb-8 max-w-md leading-relaxed"
            >
              Create one AfuMail account and instantly access chat, cloud storage, AI, entertainment and more — no separate sign-ups.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="/signup"
                className="px-7 py-3.5 bg-[#1F7AFF] text-white font-bold text-sm rounded-xl hover:bg-[#1468E0] transition-colors shadow-lg shadow-blue-500/25"
              >
                Create AfuMail →
              </Link>
              <Link
                href="/ecosystem"
                className="px-7 py-3.5 bg-white/10 border border-white/18 text-white font-medium text-sm rounded-xl hover:bg-white/16 transition-colors backdrop-blur-sm"
              >
                See how it works
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {['#6366F1','#10B981','#F59E0B','#EF4444'].map((c, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-[#040c1e]"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <span className="text-white/45 text-sm">Trusted by millions globally</span>
            </motion.div>
          </div>

          {/* Right: app mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src="/brand-bg.png"
                alt="AfuChat app preview"
                className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                style={{
                  WebkitMaskImage: 'radial-gradient(ellipse 90% 88% at 55% 48%, black 45%, transparent 100%)',
                  maskImage: 'radial-gradient(ellipse 90% 88% at 55% 48%, black 45%, transparent 100%)',
                }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
