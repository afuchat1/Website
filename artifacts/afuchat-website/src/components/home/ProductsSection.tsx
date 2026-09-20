'use client';
import { illSecProducts } from '@/data/illustrations';
import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import Link from 'next/link';

export default function ProductsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="max-container container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="order-2 lg:order-1 flex justify-center">
            <img src={illSecProducts} alt="AfuChat Technologies products" className="w-full max-w-[420px] drop-shadow-2xl" loading="lazy" decoding="async" />
          </motion.div>
          <div className="order-1 lg:order-2">
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-5">
              Our products
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              Products we are<br />actually building.
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-white/50 text-base leading-relaxed mb-8 sm:mb-10 max-w-md">
              AfuChat Technologies develops products for communication, identity, cloud services, and AI. Each product has a clear purpose, and the ecosystem grows from products that are actually built and used.
            </motion.p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-5 mb-8 sm:mb-10">
              {PRODUCT_DATA.map((p, i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}>
                  <Link href={p.path}>
                    <div className="flex items-center gap-3 group">
                      <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                        style={{ color: p.color, backgroundColor: `${p.color}18` }}>
                        <p.icon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors leading-none mb-0.5">{p.name}</p>
                        <p className="text-xs text-white/30 leading-none">{p.category}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity">
                View all products
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
