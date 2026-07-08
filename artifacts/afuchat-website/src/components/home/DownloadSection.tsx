import { motion } from 'framer-motion';

export default function DownloadSection() {
  return (
    <section className="w-full py-12 px-4" style={{ background: 'linear-gradient(135deg, #1F95FF 0%, #1575D4 100%)' }}>
      <div className="max-container flex flex-col md:flex-row items-center justify-between gap-8 md:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left text-white"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Available everywhere.</h2>
          <p className="text-white/80 text-lg">Take your ecosystem on the go.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="flex items-center gap-3 bg-[#0F172A] text-white px-6 py-3.5 rounded-xl hover:bg-black transition-colors w-full sm:w-auto justify-center">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            <div className="text-left flex flex-col items-start leading-tight">
              <span className="text-[10px] text-white/70">GET IT ON</span>
              <span className="font-semibold">Google Play</span>
            </div>
          </button>

          <button className="flex items-center gap-3 bg-[#0F172A] text-white px-6 py-3.5 rounded-xl hover:bg-black transition-colors w-full sm:w-auto justify-center">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path d="M10 2c1 .5 2 2 2 5h-2c0-3-1-4-2-5Z"></path></svg>
            <div className="text-left flex flex-col items-start leading-tight">
              <span className="text-[10px] text-white/70">Download on the</span>
              <span className="font-semibold">App Store</span>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}