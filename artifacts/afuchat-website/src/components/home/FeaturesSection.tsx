import { illSecSecurity } from "@/data/illustrations";
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Sparkles, RefreshCw, Zap, Globe } from 'lucide-react';

const features = [
  { title: 'Independent Power', desc: 'Each product is designed to excel in its category without relying on other apps.', icon: ShieldCheck, color: '#1F95FF' },
  { title: 'End-to-End Security', desc: 'Your data is encrypted by default. We cannot read your messages, files, or searches.', icon: Lock, color: '#16C784' },
  { title: 'Focused Utility', desc: 'We build tools that solve specific problems brilliantly, without unnecessary bloat.', icon: Sparkles, color: '#F59E0B' },
  { title: 'Always in Sync', desc: 'Start on your phone, finish on desktop. Seamless synchronization across all platforms.', icon: RefreshCw, color: '#6C63FF' },
  { title: 'Blazing Fast', desc: 'Global infrastructure delivers sub-100ms response times anywhere in the world.', icon: Zap, color: '#EC4899' },
  { title: 'Global Reach', desc: 'Available in 50+ countries with localised content, multilingual support, and regional CDNs.', icon: Globe, color: '#14B8A6' },
];

export default function FeaturesSection() {
  return (
    <section className="section-pad relative">
      <div className="relative z-10 max-container container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="order-1 lg:order-1 flex justify-center mb-2 sm:mb-0"
          >
            <img src={illSecSecurity} alt="Platform security and reliability" className="w-full max-w-[260px] sm:max-w-sm drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 24px 48px rgba(20,184,166,0.30))' }} />
          </motion.div>
          {/* Text */}
          <div className="order-2 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-teal-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3"
            >Platform Advantages</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 leading-tight"
            >Why millions choose<br />AfuChat.</motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-white/55 leading-relaxed"
            >Built from the ground up for security, speed, and simplicity — everything you need, nothing you don't.</motion.p>
          </div>
        </div>

        {/* Flat feature grid — no card wrappers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 sm:gap-x-12 sm:gap-y-12">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.07 }}
              >
                <Icon className="w-6 h-6 mb-4" style={{ color: f.color }} />
                <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
