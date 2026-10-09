'use client';
import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import ProductIcon from '@/components/products/ProductIcon';
import Link from 'next/link';
import { illSecProducts } from '@/data/illustrations';
import Footer from '@/components/layout/Footer';

export default function Products() {
  return (
    <div className="product-catalogue-page w-full min-h-screen">
      <div className="max-container container-pad pt-8 pb-10 sm:pt-20 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[#1746A2] font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3">Our products</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 mb-5 tracking-tight leading-tight">
              Four products.<br />One company.
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md">
              We build products around real needs. AfuChat connects people, AfuMail provides email and identity, AfuCloud handles cloud services, and Engagera brings AI tools and live web context together.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="flex justify-center">
            <img src={illSecProducts} alt="AfuChat Technologies product lineup" className="w-full max-w-sm object-contain" loading="eager" decoding="async" />
          </motion.div>
        </div>
      </div>

      <div className="max-container container-pad py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_DATA.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}>
              <Link href={p.path} className="block group">
                <div className="h-full min-h-[15rem] rounded-2xl border border-slate-200 bg-white hover:border-[#1746A2]/40 hover:shadow-lg hover:shadow-slate-900/5 transition-all p-6">
                  <div className="flex items-center gap-4 mb-5">
                    <ProductIcon product={p} containerClassName="w-14 h-14 rounded-2xl" iconClassName="w-7 h-7" />
                    <div>
                      <p className="text-slate-950 font-bold text-base">{p.name}</p>
                      <p className="text-slate-500 text-xs">{p.category}</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold mb-2 leading-snug" style={{ color: "#1746A2" }}>{p.tagline}</p>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">{p.description}</p>
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
