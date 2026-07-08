import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import { Link } from 'wouter';

export default function EcosystemSection() {
  const products = PRODUCT_DATA.slice(0, 8);

  return (
    <section className="section-pad overflow-hidden relative">
      <div className="relative z-10 max-container container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3"
            >Platform Ecosystem</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight leading-tight"
            >
              One identity.<br />Eight powerful services.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-lg text-white/55 mb-10 leading-relaxed"
            >
              AfuMail sits at the center of everything. Sign in once and every service — chat, AI, cloud, entertainment and more — is instantly available.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="grid grid-cols-2 gap-y-5 gap-x-8"
            >
              {products.map((product, i) => (
                <motion.div key={product.id} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <Link href={product.path}>
                    <div className="flex items-center gap-3 group cursor-pointer">
                      <img src={product.icon3d} alt="" className="w-8 h-8 object-contain flex-shrink-0" />
                      <span className="text-sm font-medium text-white/65 group-hover:text-white transition-colors">{product.name}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-10">
              <Link href="/ecosystem" className="text-blue-400 font-medium text-sm hover:text-blue-300 transition-colors">
                Explore the full ecosystem →
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <img src="/illustrations/ill-sec-ecosystem.png" alt="AfuChat connected ecosystem" className="w-full max-w-lg drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
