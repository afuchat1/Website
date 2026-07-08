import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function CtaSection() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{
        backgroundImage: "url('/bg-cta.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-container container-pad">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">Get started free</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
              Start your AfuChat<br />journey today.
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Create your free AfuMail account in 30 seconds and unlock the entire ecosystem instantly — no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/signup"
                className="px-8 py-4 bg-white text-[#0F2CFF] text-base font-bold rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center justify-center shadow-xl shadow-black/30"
              >
                Create free account →
              </Link>
              <Link
                href="/ecosystem"
                className="px-8 py-4 bg-white/12 border border-white/25 text-white text-base font-medium rounded-xl hover:bg-white/20 transition-colors inline-flex items-center justify-center"
              >
                See how it works
              </Link>
            </div>
            <p className="text-sm text-white/40 mt-4">
              Free forever · No credit card · Cancel anytime
            </p>
          </motion.div>

          {/* Right: illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src="/ill-community.jpg"
              alt="Connected community illustration"
              className="w-full max-w-md rounded-3xl shadow-2xl shadow-black/50 border border-white/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
