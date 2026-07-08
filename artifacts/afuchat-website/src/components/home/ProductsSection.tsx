import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import { Link } from 'wouter';

export default function ProductsSection() {
  const featuredProducts = PRODUCT_DATA.slice(0, 5);

  return (
    <section
      className="section-pad relative"
      style={{
        backgroundImage: "url('/bg-products.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 max-container container-pad">
        <div className="mb-12 sm:mb-16 text-center sm:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight"
          >
            Everything you need in one ecosystem.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="text-lg text-purple-200/70"
          >
            Eight services. One AfuMail account.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {featuredProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.08 }}
              >
                <Link href={product.path}>
                  <div
                    className="h-full bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-6 hover:border-white/40 hover:bg-white/15 transition-all duration-200 cursor-pointer"
                    style={{ '--p-color': product.color } as React.CSSProperties}
                  >
                    <Icon className="w-7 h-7 mb-5" style={{ color: product.color }} />
                    <h3 className="text-base font-semibold text-white mb-1.5">{product.name}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{product.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link href="/products" className="inline-flex items-center text-[#60BDFF] font-medium hover:text-white transition-colors">
            View all products →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
