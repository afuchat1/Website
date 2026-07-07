import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import NotFound from './not-found';

export default function ProductPage() {
  const { id } = useParams();
  const product = PRODUCT_DATA.find(p => p.id === id);

  if (!product) {
    return <NotFound />;
  }

  const Icon = product.icon;

  return (
    <div className="pt-32 pb-40 relative">
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-[0.07] blur-[150px] pointer-events-none"
        style={{ backgroundColor: product.accentHex }}
      ></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <Link href="/products" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 rounded-3xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center mb-8 shadow-2xl" style={{ borderColor: `${product.accentHex}40` }}>
              <Icon className="w-10 h-10" style={{ color: product.accentHex }} />
            </div>

            <h1 className="hero-headline mb-6">{product.name}</h1>
            <p className="text-2xl font-medium text-white mb-6 tracking-tight">{product.tagline}</p>
            <p className="subheadline mb-10 max-w-xl">{product.description}</p>

            <div className="flex gap-4">
              <button className="h-14 px-8 inline-flex items-center justify-center text-white font-medium rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform" style={{ backgroundColor: product.accentHex }}>
                Get {product.name}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square max-h-[500px]"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden glass-card flex items-center justify-center p-12 text-center" style={{ '--color-border-hover': product.accentHex } as any}>
              <div className="text-slate-400">
                <Icon className="w-24 h-24 mx-auto mb-6 opacity-50" style={{ color: product.accentHex }} />
                <p className="font-mono text-sm uppercase tracking-widest text-slate-500 mb-2">Product UI Visualization</p>
                <p className="text-sm">Interactive demo environment coming soon.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {product.features.map((feature, i) => (
            <div key={i} className="glass-card p-8 hover:!border-[rgba(255,255,255,0.1)] hover:!bg-[rgba(255,255,255,0.03)] hover:!shadow-none hover:!transform-none">
              <CheckCircle2 className="w-8 h-8 mb-6" style={{ color: product.accentHex }} />
              <h3 className="text-xl font-bold text-white mb-3">{feature}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Enterprise-grade capabilities natively integrated into the platform architecture.</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
