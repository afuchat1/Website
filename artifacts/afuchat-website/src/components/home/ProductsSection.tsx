import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import { Link } from 'wouter';

export default function ProductsSection() {
  const featuredProducts = PRODUCT_DATA.slice(0, 5);

  return (
    <section className="section-pad">
      <div className="max-container container-pad">
        <div className="mb-12 sm:mb-16 text-center sm:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-3 tracking-tight"
          >
            Everything you need in one ecosystem.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#64748B]"
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
                  <div className="h-full bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:border-[var(--p-color)] hover:shadow-md transition-all duration-200 group cursor-pointer"
                    style={{ '--p-color': product.color } as React.CSSProperties}
                  >
                    {/* Icon — no background box */}
                    <Icon
                      className="w-7 h-7 mb-5"
                      style={{ color: product.color }}
                    />
                    <h3 className="text-base font-semibold text-[#0F172A] mb-1.5">{product.name}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">{product.description}</p>
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
          <Link href="/products" className="inline-flex items-center text-[#1F95FF] font-medium hover:underline">
            View all products →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
