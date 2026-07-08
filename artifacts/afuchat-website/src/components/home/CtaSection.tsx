import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function CtaSection() {
  return (
    <section className="section-pad bg-white">
      <div className="max-container container-pad text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">
            Start your AfuChat journey today.
          </h2>
          <p className="text-lg text-[#64748B] mb-8">
            Create your free AfuMail account in 30 seconds and unlock the entire ecosystem.
          </p>
          
          <Link 
            href="/signup" 
            className="px-8 py-4 bg-[#1F95FF] text-white text-lg font-semibold rounded-xl hover:bg-[#0F7AE0] transition-colors mb-4 w-full sm:w-auto inline-flex items-center justify-center"
          >
            Create free account →
          </Link>
          <p className="text-sm text-[#64748B]">
            No credit card required. Free forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}