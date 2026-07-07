import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { PRODUCT_DATA } from '@/data/products';

export default function Products() {
  return (
    <div className="pt-32 pb-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-headline mb-6"
        >
          Our Products
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="subheadline max-w-2xl mb-20"
        >
          Everything you need to communicate, create, and collaborate. Powered by the AfuMail identity system.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_DATA.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                      {product.features.map((feature, j) => (
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
    </div>
  );
}
