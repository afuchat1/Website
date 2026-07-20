
import { illSecCta } from '@/data/illustrations';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function CtaSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="max-container container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-4">Get started</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight leading-tight">
              Everything you need.<br />Nothing you don&apos;t.
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8 max-w-md">
              Create one free account and access every AfuChat product instantly. No bundles, no forced upgrades — just the tools you actually want.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://web.afuchat.com/register" className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity">
                Create free account →
              </a>
              <Link href="/products" className="inline-flex items-center justify-center px-7 py-3.5 text-white/60 font-medium text-sm border border-white/10 rounded-full hover:text-white hover:border-white/20 transition-colors">
                Browse products
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center"
          >
            <img src={illSecCta} alt="Get started with AfuChat" className="w-full max-w-sm drop-shadow-2xl" loading="lazy" decoding="async" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
