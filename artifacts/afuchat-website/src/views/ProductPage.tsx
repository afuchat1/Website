'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';
import ProductIcon from '@/components/products/ProductIcon';
import AfuCloudDetails from '@/components/products/AfuCloudDetails';
import { illSecEcosystem } from '@/data/illustrations';
import Footer from '@/components/layout/Footer';
import NotFoundPage from '@/views/not-found';

const AFUCLOUD_URL = 'https://cloud.afuchat.com';
const AFUCLOUD_QUICKSTART_URL = 'https://cloud.afuchat.com/docs/getting-started/quickstart';

export default function ProductPage({ id }: { id: string }) {
  const product = PRODUCT_DATA.find(p => p.id === id);
  if (!product) return <NotFoundPage />;
  const isAfuCloud = product.id === 'afucloud';
  const Icon = product.icon;
  const otherProducts = PRODUCT_DATA.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className={`w-full min-h-screen ${isAfuCloud ? 'afucloud-product-page' : ''}`}>
      <div className={isAfuCloud ? 'afucloud-brand-content' : ''}>
        {/* Hero */}
        <div className="max-container container-pad pt-6 pb-12 sm:pt-14 sm:pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
              <div className="order-2 lg:order-1">
                {product.logo ? (
                  <img src={product.logo} alt="" aria-hidden="true" className="hidden sm:block w-8 h-8 mb-6 object-contain" />
                ) : (
                  <Icon className="hidden sm:block w-8 h-8 mb-6" style={{ color: product.color }} />
                )}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-1 tracking-tight">
                  {isAfuCloud ? 'AfuCloud Image Storage API' : product.name}
                </h1>
                <p className="text-[11px] uppercase tracking-widest font-bold text-white/30 mb-4">{product.category}</p>
                <p className={`text-lg sm:text-xl font-semibold mb-4 leading-snug ${isAfuCloud ? 'afucloud-tagline' : ''}`} style={{ color: product.color }}>{product.tagline}</p>
                <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-8 max-w-md">{product.description}</p>
                {isAfuCloud && (
                  <div className="flex flex-wrap gap-3 mb-8">
                    <a
                      href={AFUCLOUD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="afucloud-primary-cta inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-colors"
                    >
                      Visit AfuCloud <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a
                      href={AFUCLOUD_QUICKSTART_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 hover:border-white/30 hover:text-white transition-colors"
                    >
                      Read the API quickstart <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.features.map(f => (
                    <span key={f} className="px-3 py-1.5 rounded-full text-xs font-semibold text-white/70 bg-white/8">{f}</span>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                {isAfuCloud && product.logo ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="w-full max-w-sm"
                  >
                    <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl border border-[hsl(30_15%_88%)] bg-[hsl(35_30%_96%)] p-8">
                      <div className="absolute inset-[16%] rounded-full bg-[hsl(154_55%_92%)]" aria-hidden="true" />
                      <div className="absolute inset-[23%] rounded-full border border-[#07965B]/20" aria-hidden="true" />
                      <img
                        src={product.logo}
                        alt="Official AfuCloud green cloud and upload mark"
                        width={128}
                        height={128}
                        className="relative h-32 w-32 object-contain sm:h-36 sm:w-36"
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    src={product.illustration}
                    alt={`${product.name} product illustration`}
                    className="w-full max-w-sm drop-shadow-2xl"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
        {isAfuCloud && <AfuCloudDetails />}
      </div>

      {/* Other products */}
      {!isAfuCloud && (
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
                    <ProductIcon product={p} containerClassName="w-10 h-10 rounded-xl" iconClassName="w-5 h-5" />
                    <span className="text-sm text-white/50 group-hover:text-white transition-colors">{p.name}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
