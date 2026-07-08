import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import { Link } from 'wouter';
import { illSecProducts } from '@/data/illustrations';

export default function Products() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero */}
      <div className="max-container container-pad pt-8 pb-10 sm:pt-20 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-purple-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3">Our Products</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-5 tracking-tight leading-[1.1]">
              Eight products.<br />Infinite possibilities.
            </h1>
            <p className="text-base sm:text-lg text-white/55 max-w-xl leading-relaxed mb-6 sm:mb-0">
              Every AfuChat product is crafted to stand on its own, delivering a world-class experience in its category. Use one, use them all — the choice is yours.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
            <img src={illSecProducts} alt="The full AfuChat product suite" className="w-full max-w-[280px] sm:max-w-lg mx-auto drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Products list */}
      <div className="max-container container-pad py-8 sm:py-10">
        <div className="flex flex-col gap-4 sm:gap-2">
          {PRODUCT_DATA.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            >
              <Link href={product.path}>
                <div className="flex flex-col sm:grid sm:grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 py-6 px-5 rounded-2xl group cursor-pointer bg-white/5 sm:bg-transparent hover:bg-white/10 sm:hover:bg-white/3 transition-colors">
                  <div className="md:col-span-2 flex items-center gap-3">
                    <img src={product.icon3d} alt={`${product.name} icon`} className="w-12 h-12 sm:w-16 sm:h-16 object-contain flex-shrink-0" />
                    <div className="sm:hidden block">
                      <h2 className="text-lg font-bold text-white mb-0.5">{product.name}</h2>
                      <p className="text-[10px] uppercase tracking-wide font-semibold text-white/40 mb-1">{product.category}</p>
                      <p className="text-xs font-medium" style={{ color: product.color }}>{product.tagline}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block md:col-span-2">
                    <h2 className="text-xl font-bold text-white mb-0.5">{product.name}</h2>
                    <p className="text-[10px] uppercase tracking-wide font-semibold text-white/40 mb-2">{product.category}</p>
                    <p className="text-sm font-medium" style={{ color: product.color }}>{product.tagline}</p>
                  </div>
                  <p className="md:col-span-5 text-sm text-white/60 sm:text-white/50 leading-relaxed">{product.description}</p>
                  <div className="md:col-span-3 flex flex-wrap gap-2 sm:self-start mt-2 sm:mt-0">
                    {product.features.map((f, j) => (
                      <span key={j} className="text-[11px] sm:text-xs text-white/40 sm:text-white/30">{f}{j < product.features.length - 1 ? ' ·' : ''}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-container container-pad py-16 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center sm:text-left">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight leading-tight">Start using our<br className="sm:hidden" /> products today.</h2>
          <p className="text-white/55 sm:text-white/50 text-base sm:text-lg mb-8 max-w-xl leading-relaxed mx-auto sm:mx-0">
            Create an account in under 30 seconds and gain instant access to world-class tools. No credit card required.
          </p>
          <Link href="/signup" className="inline-block px-8 py-4 sm:px-7 sm:py-3.5 bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto">
            Get started free →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
