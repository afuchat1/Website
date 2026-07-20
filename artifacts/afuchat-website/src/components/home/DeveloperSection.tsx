
import { illSecDeveloper } from '@/data/illustrations';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function DeveloperSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="max-container container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-green-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-4">Developer Platform</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight leading-tight">
              Build on AfuChat.<br />Ship faster.
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8 max-w-md">
              REST and GraphQL APIs, real-time WebSocket events, and open-source SDKs for every major platform. Build integrations in hours, not weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/developers" className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity">
                Read the docs →
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
            <img src={illSecDeveloper} alt="AfuChat developer platform" className="w-full max-w-sm drop-shadow-2xl" loading="lazy" decoding="async" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
