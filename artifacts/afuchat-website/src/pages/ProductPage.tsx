import { motion } from 'framer-motion';
import { useParams, Link } from 'wouter';
import { PRODUCT_DATA } from '@/data/products';
import NotFound from '@/pages/not-found';
import { ArrowLeft } from 'lucide-react';
import { illSecEcosystem } from '@/data/illustrations';

export default function ProductPage() {
  const params = useParams();
  const product = PRODUCT_DATA.find(p => p.id === params.id);
  if (!product) return <NotFound />;
  const Icon = product.icon;
  const otherProducts = PRODUCT_DATA.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="w-full min-h-screen">
      {/* Hero */}
      <div className="max-container container-pad pt-6 pb-12 sm:pt-14 sm:pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link href="/products" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 font-medium text-[13px] sm:text-sm mb-8 sm:mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            All products
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <Icon className="hidden sm:block w-8 h-8 mb-6" style={{ color: product.color }} />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-1 tracking-tight">{product.name}</h1>
              <p className="text-[11px] uppercase tracking-widest font-bold text-white/30 mb-4">{product.category}</p>
              <p className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5" style={{ color: product.color }}>{product.tagline}</p>
              <p className="text-base sm:text-lg text-white/55 leading-relaxed mb-8 max-w-lg">
                {product.description} Experience a standalone tool engineered for absolute excellence.
              </p>
              <Link
                href="/signup"
                className="inline-block w-full sm:w-auto text-center px-7 py-3.5 text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: product.color }}
              >
                Get started free →
              </Link>
            </div>
            <div className="order-1 lg:order-2 flex items-start justify-center sm:justify-end mb-4 sm:mb-0">
              <img src={product.illustration} alt={`${product.name} illustration`} className="w-full max-w-[280px] sm:max-w-sm drop-shadow-2xl" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Key features */}
      <div className="max-container container-pad py-12 sm:py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 sm:mb-12">
          <p className="font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3" style={{ color: product.color }}>Key Features</p>
          <h2 className="text-[28px] leading-[1.2] sm:text-3xl font-bold text-white tracking-tight">What {product.name} can do</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {product.features.map((feature, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <span className="text-4xl font-extrabold text-white/10 block mb-3 sm:mb-4">0{i + 1}</span>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">{feature}</h3>
              <p className="text-[13px] sm:text-sm text-white/45 sm:text-white/40 leading-relaxed">
                {feature} is built to deliver a frictionless experience, focusing entirely on performance, reliability, and utility.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional Integrations */}
      <div className="max-container container-pad py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3">Optional Integrations</p>
            <h2 className="text-[28px] leading-[1.2] sm:text-3xl font-bold text-white mb-4 tracking-tight">Plays beautifully with others</h2>
            <p className="text-white/55 sm:text-white/50 text-[15px] sm:text-base leading-relaxed mb-8 sm:mb-6">
              While {product.name} stands entirely on its own, it also integrates effortlessly with other AfuChat products. Use AfuMail for quick single sign-on, or connect to our cloud infrastructure for instant access to your files — entirely up to you.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4">
              {otherProducts.map(p => (
                <Link key={p.id} href={p.path}>
                  <div className="flex items-center gap-3 sm:gap-3 group bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none">
                    <img src={p.icon3d} alt="" className="w-8 h-8 sm:w-7 sm:h-7 object-contain flex-shrink-0" />
                    <span className="text-sm text-white/80 sm:text-white/50 group-hover:text-white/80 transition-colors leading-snug">
                      <span className="font-semibold text-white/90 sm:font-normal">{p.name}</span> — {p.tagline}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mt-4 sm:mt-0">
            <img src={illSecEcosystem} alt="Platform integration" className="w-full max-w-[260px] sm:max-w-sm mx-auto drop-shadow-2xl"
              style={{ filter: `drop-shadow(0 20px 40px ${product.color}30)` }} />
          </motion.div>
        </div>
      </div>

      {/* Get started */}
      <div className="max-container container-pad py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-[28px] leading-[1.2] sm:text-3xl font-bold text-white mb-3 tracking-tight text-center sm:text-left">Ready to try {product.name}?</h2>
          <p className="text-white/55 sm:text-white/50 text-base mb-8 max-w-lg leading-relaxed text-center sm:text-left">
            Get access to {product.name} in seconds. Create a free account to begin — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-start">
            <Link href="/signup" className="inline-block w-full sm:w-auto text-center px-7 py-3.5 text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: product.color }}>
              Create free account →
            </Link>
            <Link href="/products" className="text-white/50 sm:text-white/40 text-sm font-medium hover:text-white/70 transition-colors py-2 sm:py-0">
              View all products →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
