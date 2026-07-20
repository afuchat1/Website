import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import { Link } from 'wouter';
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
                <div className="rounded-2xl border border-white/8 bg-white/4 hover:bg-white/7 transition-colors p-6">
                  <div className="flex items-center gap-4 mb-5">
                    <img src={p.icon3d} alt="" className="w-12 h-12 object-contain flex-shrink-0" loading="lazy" decoding="async" />
                    <div>
                      <p className="text-white font-bold text-sm">{p.name}</p>
                      <p className="text-white/38 text-xs">{p.category}</p>
                    </div>
                  </div>
                  <p className="text-xs font-semibold mb-2 leading-snug" style={{ color: p.color }}>{p.tagline}</p>
                  <p className="text-white/40 text-xs leading-relaxed line-clamp-3">{p.description}</p>
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
