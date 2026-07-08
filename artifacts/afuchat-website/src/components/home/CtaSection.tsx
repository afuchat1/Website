import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function CtaSection() {
  return (
    <section
      className="section-pad relative"
      style={{
        backgroundImage: "url('/bg-cta.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 max-container container-pad text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Start your AfuChat journey today.
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Create your free AfuMail account in 30 seconds and unlock the entire ecosystem.
          </p>

          <Link
            href="/signup"
            className="px-8 py-4 bg-white text-[#0F2CFF] text-lg font-bold rounded-xl hover:bg-blue-50 transition-colors mb-4 w-full sm:w-auto inline-flex items-center justify-center shadow-xl shadow-black/30"
          >
            Create free account →
          </Link>
          <p className="text-sm text-white/50">
            No credit card required. Free forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
