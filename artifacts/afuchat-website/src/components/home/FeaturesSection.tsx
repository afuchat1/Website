'use client';
import { illSecSecurity } from '@/data/illustrations';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Sparkles, RefreshCw, Zap, Globe } from 'lucide-react';

const features = [
  { icon: ShieldCheck, label: 'Zero-Knowledge Security',  desc: 'Your data is encrypted before it ever leaves your device.' },
  { icon: Lock,        label: 'End-to-End Encryption',    desc: 'Every message and file is protected with AES-256.' },
  { icon: Sparkles,    label: 'AI Built In',              desc: 'Smart suggestions and automation across every product.' },
  { icon: RefreshCw,   label: 'Real-Time Sync',           desc: 'Instant updates across all your devices, always.' },
  { icon: Zap,         label: 'Blazing Fast',             desc: 'Sub-100ms response times, globally distributed.' },
  { icon: Globe,       label: 'Available Everywhere',     desc: 'Web, iOS, Android, macOS, and Windows.' },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="max-container container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-teal-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-4"
            >
              Features
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight leading-tight"
            >
              Built to the highest standard.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 text-base leading-relaxed mb-10 max-w-md"
            >
              Security, speed, and intelligence aren&apos;t add-ons at AfuChat — they&apos;re the foundation every product is built on.
            </motion.p>

            {/* Flat grid — no cards, no borders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <f.icon className="w-4.5 h-4.5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-white/85 font-semibold text-sm mb-1">{f.label}</p>
                    <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center lg:justify-end mt-4 lg:mt-0"
          >
            <img src={illSecSecurity} alt="AfuChat security" className="w-full max-w-sm drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
