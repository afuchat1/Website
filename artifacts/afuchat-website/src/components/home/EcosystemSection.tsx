import { illSecEcosystem } from "@/data/illustrations";
import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import { Link } from 'wouter';

export default function EcosystemSection() {
  const products = PRODUCT_DATA.slice(0, 8);

  return (
    <section className="section-pad overflow-hidden relative">
      <div className="relative z-10 max-container container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex items-center justify-center order-1 lg:order-2 mb-2 sm:mb-0"
          >
            <img src={illSecEcosystem} alt="AfuChat connected ecosystem" className="w-full max-w-[260px] sm:max-w-lg drop-shadow-2xl" />
          </motion.div>
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3"
            >Platform Ecosystem</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 tracking-tight leading-tight"
            >
              One identity.<br />Eight powerful services.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-white/55 mb-8 sm:mb-10 leading-relaxed"
            >
              AfuMail sits at the center of everything. Sign in once and every service — chat, AI, cloud, entertainment and more — is instantly available.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8"
            >
              {products.map((product, i) => (
                <motion.div key={product.id} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <Link href={product.path}>
                    <div className="flex items-center gap-4 sm:gap-3 group cursor-pointer bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none hover:bg-white/10 sm:hover:bg-transparent transition-colors">
                      <img src={product.icon3d} alt="" className="w-8 h-8 sm:w-8 sm:h-8 object-contain flex-shrink-0" />
                      <span className="text-sm font-medium text-white/80 sm:text-white/65 group-hover:text-white transition-colors">{product.name}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-8 sm:mt-10 text-center sm:text-left">
              <Link href="/ecosystem" className="inline-block py-3 sm:py-0 text-blue-400 font-medium text-sm hover:text-blue-300 transition-colors">
                Explore the full ecosystem →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
