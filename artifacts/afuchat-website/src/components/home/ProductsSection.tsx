import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import { Link } from 'wouter';

export default function ProductsSection() {
  const products = PRODUCT_DATA.slice(0, 8);

  return (
    <section
      className="section-pad relative"
      style={{
        background: `
          radial-gradient(ellipse at 25% 55%, rgba(100,30,200,0.32) 0%, transparent 50%),
          radial-gradient(ellipse at 75% 30%, rgba(20,60,180,0.28) 0%, transparent 50%),
          #07091e
        `,
      }}
    >
      <div className="relative z-10 max-container container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-purple-400 font-semibold text-xs uppercase tracking-widest mb-3"
            >The Full Suite</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight leading-tight"
            >
              Everything you need<br />in one ecosystem.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-lg text-white/55 mb-6 leading-relaxed"
            >
              Eight powerful services built to work together. One AfuMail account unlocks all of them — no passwords to juggle, no separate subscriptions.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <Link href="/products" className="text-purple-400 font-medium text-sm hover:text-purple-300 transition-colors">
                View all products →
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <img src="/illustrations/ill-sec-products.png" alt="The full AfuChat product suite" className="w-full max-w-lg mx-auto drop-shadow-2xl" />
          </motion.div>
        </div>

        {/* Flat product grid — no cards, no borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.06 }}
              >
                <Link href={product.path}>
                  <div className="group cursor-pointer">
                    <img src={product.illustration} alt={`${product.name} illustration`} className="w-16 h-16 object-contain mb-4" />
                    <h3 className="text-sm font-bold text-white mb-1.5">{product.name}</h3>
                    <p className="text-xs text-white/40 leading-relaxed mb-3">{product.description}</p>
                    <span className="text-xs font-medium group-hover:underline" style={{ color: product.color }}>Learn more →</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
