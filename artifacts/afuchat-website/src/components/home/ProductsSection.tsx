import { illSecProducts } from "@/data/illustrations";
import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import { Link } from 'wouter';

export default function ProductsSection() {
  const products = PRODUCT_DATA.slice(0, 8);

  return (
    <section className="section-pad relative">
      <div className="relative z-10 max-container container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-12 sm:mb-20">
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-purple-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3"
            >The Full Suite</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 tracking-tight leading-tight"
            >
              Eight products.<br />Infinite possibilities.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-white/55 mb-6 leading-relaxed"
            >
              Discover our lineup of world-class digital tools. Each is built to excel at its specific job, giving you the freedom to choose exactly what you need.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-center sm:text-left">
              <Link href="/products" className="inline-block py-3 sm:py-0 text-purple-400 font-medium text-sm hover:text-purple-300 transition-colors">
                View all products →
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 mb-2 sm:mb-0"
          >
            <img src={illSecProducts} alt="The full AfuChat product suite" className="w-full max-w-[260px] sm:max-w-md lg:max-w-lg mx-auto drop-shadow-2xl" />
          </motion.div>
        </div>

        {/* Flat product grid — no cards, no borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-x-10 sm:gap-y-10">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.06 }}
            >
              <Link href={product.path}>
                <div className="group cursor-pointer bg-white/5 sm:bg-transparent p-5 sm:p-0 rounded-2xl sm:rounded-none hover:bg-white/10 sm:hover:bg-transparent transition-colors">
                  <div className="flex items-center gap-4 sm:gap-0 sm:block mb-3 sm:mb-0">
                    <img src={product.icon3d} alt={`${product.name} icon`} className="w-12 h-12 sm:w-14 sm:h-14 object-contain sm:mb-4" />
                    <div>
                      <h3 className="text-base sm:text-sm font-bold text-white sm:mb-0.5">{product.name}</h3>
                      <p className="text-[11px] uppercase tracking-wide font-semibold text-white/30 sm:mb-2">{product.category}</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-xs text-white/50 sm:text-white/40 leading-relaxed mb-4 sm:mb-3">{product.description}</p>
                  <span className="text-sm sm:text-xs font-medium group-hover:underline" style={{ color: product.color }}>Learn more →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
