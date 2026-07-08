import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import { Link } from 'wouter';

export default function Products() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero */}
      <div className="max-container container-pad pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-purple-400 font-semibold text-xs uppercase tracking-widest mb-3">The Full Suite</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight leading-tight">
              Eight products.<br />One account.
            </h1>
            <p className="text-lg text-white/55 max-w-xl leading-relaxed">
              Every AfuChat product is crafted to stand on its own — and to become dramatically more powerful when combined. Your single AfuMail account unlocks all of them.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
            <img src="/illustrations/ill-sec-products.png" alt="The full AfuChat product suite" className="w-full max-w-lg mx-auto drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Products list */}
      <div className="max-container container-pad py-10">
        <div className="flex flex-col gap-2">
          {PRODUCT_DATA.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            >
              <Link href={product.path}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-7 px-5 rounded-2xl items-center group cursor-pointer hover:bg-white/3 transition-colors">
                  <div className="md:col-span-2 flex items-center gap-3">
                    <img src={product.icon3d} alt={`${product.name} icon`} className="w-16 h-16 object-contain flex-shrink-0" />
                  </div>
                  <div className="md:col-span-2">
                    <h2 className="text-xl font-bold text-white mb-1">{product.name}</h2>
                    <p className="text-sm font-medium" style={{ color: product.color }}>{product.tagline}</p>
                  </div>
                  <p className="md:col-span-5 text-sm text-white/50 leading-relaxed">{product.description}</p>
                  <div className="md:col-span-3 flex flex-wrap gap-2 self-start">
                    {product.features.map((f, j) => (
                      <span key={j} className="text-xs text-white/30">{f}{j < product.features.length - 1 ? ' ·' : ''}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-container container-pad py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">One account. All products. Forever free.</h2>
          <p className="text-white/50 text-lg mb-8 max-w-xl leading-relaxed">
            Create your AfuMail account in under 30 seconds and unlock every product in the ecosystem at no cost.
          </p>
          <Link href="/signup" className="inline-block px-7 py-3.5 bg-[#1F7AFF] text-white font-bold text-sm rounded-full hover:bg-[#1468E0] transition-colors">
            Get started free →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
