import { motion } from 'framer-motion';

export default function DownloadSection() {
  return (
    <section className="relative py-14">
      <div className="max-container container-pad flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left text-white"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-white">Available everywhere.</h2>
          <p className="text-white/55 text-lg">Take your ecosystem on the go.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Google Play */}
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/8 border border-white/15 text-white px-6 py-3.5 rounded-full hover:bg-white/14 transition-colors w-full sm:w-auto justify-center"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M3.18 23.76c.37.2.8.22 1.2.05l12.1-6.97-2.58-2.58L3.18 23.76zM.69 1.37C.26 1.73 0 2.29 0 3v18c0 .71.26 1.27.69 1.63l.09.08 10.08-10.08v-.24L.78 1.29l-.09.08zM20.04 10.54l-2.85-1.64-2.88 2.88 2.88 2.88 2.86-1.65c.82-.47.82-1.23-.01-1.47zM4.38.19L16.48 7.16l-2.58 2.58L3.18.24c.4-.17.83-.15 1.2-.05z"/>
            </svg>
            <div className="text-left leading-tight">
              <span className="block text-[10px] text-white/50">GET IT ON</span>
              <span className="block font-semibold text-sm">Google Play</span>
            </div>
          </a>

          {/* App Store */}
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/8 border border-white/15 text-white px-6 py-3.5 rounded-full hover:bg-white/14 transition-colors w-full sm:w-auto justify-center"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.15 3.8.02 3.02 2.65 4.03 2.68 4.04l-.08.28zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left leading-tight">
              <span className="block text-[10px] text-white/50">Download on the</span>
              <span className="block font-semibold text-sm">App Store</span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
