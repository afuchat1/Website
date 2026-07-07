import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { PRODUCT_DATA } from '@/data/products';

export function ProductsSection() {
  return (
    <section className="py-32 section-bg-dark relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="section-headline mb-6"
          >
            Built for the<br />modern digital life.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="subheadline max-w-2xl"
          >
            Nine distinct platforms. One cohesive experience. Each product is engineered to be world-class on its own, but magical when used together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_DATA.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={product.path}>
                  <div 
                    className="glass-card h-full p-8 flex flex-col group cursor-pointer"
                    style={{ '--color-border-hover': product.accentHex } as any}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                      {product.name}
                    </h3>
                    
                    <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {product.features.slice(0, 2).map((feature, j) => (
                        <span key={j} className="text-[11px] font-medium text-slate-300 px-3 py-1 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)]">
                          {feature}
                        </span>
                      ))}
                    </div>
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
