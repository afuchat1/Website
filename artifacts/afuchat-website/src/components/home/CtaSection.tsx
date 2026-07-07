import { motion } from 'framer-motion';
import { Link } from 'wouter';

export function CtaSection() {
  return (
    <section className="py-32 section-bg-base relative px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          {/* Card Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A5F] to-[#1F95FF] z-0"></div>
          
          {/* Inner Glow / Shimmer border effect */}
          <div className="absolute inset-0 border-[2px] border-white/20 rounded-3xl z-10 pointer-events-none mix-blend-overlay"></div>
          
          {/* Content */}
          <div className="relative z-20 px-8 py-24 md:py-32 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-2xl">
              Create your AfuMail today.
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-medium mb-10 max-w-xl">
              One account. Eight services. Zero friction. Join millions who have already simplified their digital life.
            </p>
            
            <Link href="/signup" className="h-14 px-10 inline-flex items-center justify-center bg-white text-[#0B1220] text-lg font-bold rounded-full hover:scale-105 transition-transform shadow-xl">
              Get started for free
            </Link>
          </div>

          {/* Decorative shapes inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 blur-[100px] rounded-full z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00D4FF] opacity-20 blur-[100px] rounded-full z-10 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
