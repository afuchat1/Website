'use client';
import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import Link from 'next/link';
import { illSecProducts } from '@/data/illustrations';
import Footer from '@/components/layout/Footer';

export default function Products() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero */}
      <div className="max-container container-pad pt-8 pb-10 sm:pt-20 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-purple-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3">Our Products</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight leading-tight">
              Eight tools.<br />One vision.
            </h1>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-md">
              Every AfuChat product is built to stand on its own — no artificial dependencies, no forced bundles. Use one, use all, or mix and match.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="flex justify-center">
            <img src={illSecProducts} alt="AfuChat product suite" className="w-full max-w-sm drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-container container-pad py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_DATA.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link href={p.path} className="block group">
                <div className="flex flex-col items-start gap-4 p-5 rounded-2xl hover:bg-white/4 transition-colors">
                  <img src={p.icon3d} alt={`${p.name} icon`} className="w-14 h-14 object-contain" loading="lazy" decoding="async" />
                  <div>
                    <p className="text-white font-bold text-base mb-1 group-hover:text-white/90 transition-colors">{p.name}</p>
                    <p className="text-white/35 text-xs uppercase tracking-widest font-semibold mb-2">{p.category}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{p.description}</p>
                  </div>
                  <span className="text-xs font-semibold mt-auto" style={{ color: p.color }}>
                    Learn more →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
