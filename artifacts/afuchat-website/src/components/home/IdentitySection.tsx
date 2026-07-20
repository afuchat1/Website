'use client';
import { illSecIdentity, illSecSecurity } from '@/data/illustrations';
import { motion } from 'framer-motion';
import { Mail, ShieldCheck, LayoutGrid } from 'lucide-react';

const steps = [
  { icon: Mail,        label: 'One AfuMail account',     desc: 'Your email is your identity across every AfuChat product.' },
  { icon: ShieldCheck, label: 'End-to-end encrypted',    desc: 'Zero-knowledge security — even we cannot read your data.' },
  { icon: LayoutGrid,  label: 'Access everything',       desc: 'AfuChat, AfuAI, AfuCloud and more — one login, all products.' },
];

export default function IdentitySection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="max-container container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img src={illSecIdentity} alt="AfuMail identity" className="w-full max-w-sm drop-shadow-2xl" loading="lazy" decoding="async" />
          </motion.div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-4"
            >
              Identity
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight leading-tight"
            >
              One identity.<br />Every product.
            </motion.h2>
            <div className="flex flex-col gap-6 mt-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{step.label}</p>
                    <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
