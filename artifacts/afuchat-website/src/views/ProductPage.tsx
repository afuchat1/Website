import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { PRODUCT_DATA } from '@/data/products';
import { illSecEcosystem } from '@/data/illustrations';
import Footer from '@/components/layout/Footer';
import NotFoundPage from '@/views/not-found';

export default function ProductPage({ id }: { id: string }) {
  const product = PRODUCT_DATA.find(p => p.id === id);
  if (!product) return <NotFoundPage />;
  const Icon = product.icon;
  const otherProducts = PRODUCT_DATA.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="w-full min-h-screen">
      {/* Hero */}
      <div className="max-container container-pad pt-6 pb-12 sm:pt-14 sm:pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <Icon className="hidden sm:block w-8 h-8 mb-6" style={{ color: product.color }} />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-1 tracking-tight">{product.name}</h1>
              <p className="text-[11px] uppercase tracking-widest font-bold text-white/30 mb-4">{product.category}</p>
              <p className="text-lg sm:text-xl font-semibold mb-4 leading-snug" style={{ color: product.color }}>{product.tagline}</p>
              <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-8 max-w-md">{product.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {product.features.map(f => (
                  <span key={f} className="px-3 py-1.5 rounded-full text-xs font-semibold text-white/70 bg-white/8">{f}</span>
                ))}
              </div>
              <a
                href="https://web.afuchat.com/register"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity"
                style={{ background: `linear-gradient(135deg, ${product.color}, #6C63FF)` }}
              >
                Get started free →
              </a>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                src={product.illustration}
                alt={product.name}
                className="w-full max-w-sm drop-shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Other products */}
      <div className="max-container container-pad py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <p className="font-semibold text-xs uppercase tracking-widest mb-3 text-white/40">Ecosystem</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <h2 className="text-2xl font-bold text-white tracking-tight">Works even better together.</h2>
            <img src={illSecEcosystem} alt="AfuChat ecosystem" className="w-full max-w-xs drop-shadow-2xl hidden lg:block" loading="lazy" decoding="async" />
          </div>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6">
          {otherProducts.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <Link href={p.path}>
                <div className="flex items-center gap-3 group">
                  <img src={p.icon3d} alt={`${p.name} icon`} className="w-9 h-9 object-contain flex-shrink-0" loading="lazy" decoding="async" />
                  <span className="text-sm text-white/50 group-hover:text-white transition-colors">{p.name}</span>
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
