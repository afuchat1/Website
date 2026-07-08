import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function CtaSection() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{
        /* Smooth blue/purple/teal multi-radial — matches the reference screenshot exactly */
        background: `
          radial-gradient(ellipse at 15% 65%, rgba(90,40,200,0.50) 0%, transparent 52%),
          radial-gradient(ellipse at 80% 30%, rgba(0,140,210,0.45) 0%, transparent 50%),
          radial-gradient(ellipse at 55% 90%, rgba(0,180,170,0.30) 0%, transparent 45%),
          radial-gradient(ellipse at 40% 10%, rgba(20,60,200,0.35) 0%, transparent 50%),
          #060d24
        `,
      }}
    >
      <div className="relative z-10 max-container container-pad">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <img src="/illustrations/ill-sec-cta.png" alt="Launch your AfuChat journey" className="w-40 h-40 object-contain drop-shadow-2xl" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Get started free
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight leading-tight"
          >
            Start your AfuChat<br />journey today.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 mb-8 leading-relaxed"
          >
            Create your free AfuMail account in 30 seconds and unlock the entire ecosystem instantly — no credit card required.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-5"
          >
            <Link
              href="/signup"
              className="px-9 py-4 bg-white text-[#0F2CFF] text-base font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-xl shadow-black/30"
            >
              Create free account →
            </Link>
            <Link
              href="/ecosystem"
              className="px-9 py-4 bg-white/10 border border-white/22 text-white text-base font-medium rounded-xl hover:bg-white/18 transition-colors"
            >
              See how it works
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-white/35"
          >
            No credit card required. Free forever.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
