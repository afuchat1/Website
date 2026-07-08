import { illSecCta } from "@/data/illustrations";
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function CtaSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="relative z-10 max-container container-pad">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6 sm:mb-4"
          >
            <img src={illSecCta} alt="Launch your AfuChat journey" className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-2xl" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-300 font-semibold text-[10px] sm:text-sm uppercase tracking-widest mb-3"
          >
            Get started free
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-5 tracking-tight leading-tight"
          >
            Start your AfuChat<br />journey today.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-white/60 mb-8 leading-relaxed"
          >
            Create your free AfuMail account in 30 seconds and unlock the entire ecosystem instantly — no credit card required.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-6 sm:mb-5"
          >
            <Link
              href="/signup"
              className="px-9 py-4 bg-white text-[#0F2CFF] text-base font-bold rounded-full hover:bg-blue-50 transition-colors shadow-xl shadow-black/30 w-full sm:w-auto text-center"
            >
              Create free account →
            </Link>
            <Link
              href="/ecosystem"
              className="px-9 py-4 bg-white/10 border border-white/22 text-white text-base font-medium rounded-full hover:bg-white/18 transition-colors w-full sm:w-auto text-center"
            >
              See how it works
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm text-white/35"
          >
            No credit card required. Free forever.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
