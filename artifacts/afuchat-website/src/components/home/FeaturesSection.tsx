'use client';
import { illSecSecurity } from '@/data/illustrations';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Sparkles, RefreshCw, Zap, Globe } from 'lucide-react';

const features = [
  { icon: ShieldCheck, label: 'Product thinking', desc: 'We start with a real problem and build around the people who need the product.' },
  { icon: Lock, label: 'Privacy and security', desc: 'We treat privacy and security as part of the product, not something added at the end.' },
  { icon: Sparkles, label: 'Useful AI', desc: 'Engagera brings live web context, AI chat, and developer tools into one platform.' },
  { icon: RefreshCw, label: 'Built to work', desc: 'We care about reliable systems, practical interfaces, and products people can actually use.' },
  { icon: Zap, label: 'Fast iteration', desc: 'Small teams can move from an idea to a working product and improve it from real use.' },
  { icon: Globe, label: 'Built from Uganda', desc: 'Our work starts in Uganda and is designed to reach users and organizations anywhere.' },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="max-container container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-teal-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-4">
              How we work
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight leading-tight">
              Build it. Test it.<br />Make it useful.
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-white/50 text-base leading-relaxed mb-10 max-w-md">
              We are a product and engineering company. We build our own software, work on client projects, and keep improving what we put in people's hands.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
              {features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }} className="flex items-start gap-3">
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
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="flex justify-center lg:justify-end mt-4 lg:mt-0">
            <img src={illSecSecurity} alt="AfuChat Technologies approach to building products" className="w-full max-w-sm drop-shadow-2xl" loading="lazy" decoding="async" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
