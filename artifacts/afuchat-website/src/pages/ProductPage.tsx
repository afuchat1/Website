import { motion } from 'framer-motion';
import { useParams, Link } from 'wouter';
import { PRODUCT_DATA } from '@/data/products';
import NotFound from '@/pages/not-found';
import { ArrowLeft } from 'lucide-react';

export default function ProductPage() {
  const params = useParams();
  const product = PRODUCT_DATA.find(p => p.id === params.id);
  if (!product) return <NotFound />;
  const Icon = product.icon;
  const otherProducts = PRODUCT_DATA.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div
      className="w-full min-h-screen"
      style={{
        background: `
          radial-gradient(ellipse at 70% 20%, ${product.color}22 0%, transparent 55%),
          radial-gradient(ellipse at 20% 70%, rgba(14,40,120,0.30) 0%, transparent 50%),
          #060c1e
        `,
      }}
    >
      {/* Hero */}
      <div className="max-container container-pad pt-14 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link href="/products" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 font-medium text-sm mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            All products
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Icon className="w-8 h-8 mb-6" style={{ color: product.color }} />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-tight">{product.name}</h1>
              <p className="text-xl font-semibold mb-5" style={{ color: product.color }}>{product.tagline}</p>
              <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-lg">
                {product.description} Fully integrated with every other AfuChat service via your single AfuMail account.
              </p>
              <Link
                href="/signup"
                className="inline-block px-7 py-3.5 text-white font-bold text-sm rounded-xl hover:opacity-90 transition-opacity"
                style={{ backgroundColor: product.color }}
              >
                Get started free →
              </Link>
            </div>
            <div className="flex items-start justify-end">
              <img src={product.illustration} alt={`${product.name} illustration`} className="w-full max-w-sm drop-shadow-2xl" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Key features */}
      <div className="max-container container-pad py-16 border-t border-white/8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <p className="font-semibold text-xs uppercase tracking-widest mb-3" style={{ color: product.color }}>Key Features</p>
          <h2 className="text-3xl font-bold text-white tracking-tight">What {product.name} can do</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {product.features.map((feature, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <span className="text-4xl font-extrabold text-white/10 block mb-4">0{i + 1}</span>
              <h3 className="text-lg font-bold text-white mb-2">{feature}</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {feature} is built to work seamlessly within the AfuChat ecosystem, leveraging your unified AfuMail identity to deliver a frictionless experience.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ecosystem integration */}
      <div className="max-container container-pad py-16 border-t border-white/8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3">Ecosystem Integration</p>
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">{product.name} works better with everything else</h2>
            <p className="text-white/50 text-base leading-relaxed mb-6">
              {product.name} is deeply integrated with the rest of AfuChat. Your identity, files, AI assistant, and contacts are all shared — so switching between services feels like using one powerful app, not eight separate ones.
            </p>
            <div className="flex flex-col gap-4">
              {otherProducts.map((p) => {
                const OIcon = p.icon;
                return (
                  <Link key={p.id} href={p.path}>
                    <div className="flex items-center gap-3 group">
                      <OIcon className="w-4 h-4 flex-shrink-0" style={{ color: p.color }} />
                      <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">{p.name} — {p.tagline}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="/illustrations/ill-sec-ecosystem.png" alt="Platform integration" className="w-full max-w-sm mx-auto drop-shadow-2xl"
              style={{ filter: `drop-shadow(0 20px 40px ${product.color}30)` }} />
          </motion.div>
        </div>
      </div>

      {/* Get started */}
      <div className="max-container container-pad py-16 border-t border-white/8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Ready to try {product.name}?</h2>
          <p className="text-white/50 text-base mb-8 max-w-lg leading-relaxed">
            Get access to {product.name} and all 7 other AfuChat services with one free AfuMail account. No credit card required.
          </p>
          <div className="flex gap-4 items-center">
            <Link href="/signup" className="inline-block px-7 py-3.5 text-white font-bold text-sm rounded-xl hover:opacity-90 transition-opacity" style={{ backgroundColor: product.color }}>
              Create free account →
            </Link>
            <Link href="/products" className="text-white/40 text-sm font-medium hover:text-white/70 transition-colors">
              View all products →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
