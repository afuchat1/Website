'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';
import { illSecProducts } from '@/data/illustrations';
import Footer from '@/components/layout/Footer';

export default function Products() {
  return <div className="studio-shell">
    <section className="max-container studio-section grid items-end gap-12 lg:grid-cols-[1fr_.72fr]">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <p className="studio-kicker mb-6 text-[#9d8cff]">Company products / 04 products</p>
        <h1 className="max-w-3xl text-[clamp(3.5rem,8vw,7.4rem)] font-semibold leading-[.88] tracking-[-.075em] text-[#e6f1ff]">Built as<br /><span className="text-[#4da8ff]">separate</span><br />ideas.</h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-[#91a8c4] sm:text-lg">Products owned or developed within the Afu ecosystem, from communication and email to AI technology and movie discovery.</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .1 }} className="border border-white/10 bg-[#0b1b31]/50 p-5 sm:p-8">
        <img src={illSecProducts} alt="AfuChat product suite" className="w-full drop-shadow-2xl" />
      </motion.div>
    </section>
     <section className="max-container pb-24">
       <div
         aria-label="AfuChat products"
           className="mobile-rail flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:grid sm:grid-cols-2 sm:gap-0 sm:overflow-visible lg:grid-cols-4"
       >
         {PRODUCT_DATA.map((product, index) => { const Icon = product.icon; return <motion.div key={product.id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .04 }} className="min-w-[84vw] snap-start sm:min-w-0">
           <Link href={product.path} className="group flex min-h-[310px] flex-col rounded-3xl bg-[#f5f9fe] p-6 transition-transform hover:-translate-y-1 sm:rounded-none sm:p-7"><div className="flex items-start justify-between"><Icon className="h-7 w-7" style={{ color: product.color }} strokeWidth={1.5} /><ArrowUpRight className="h-4 w-4 text-[#5d7694] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" /></div><p className="studio-kicker mt-auto text-[9px] text-[#5d7694]">{product.category}</p><h2 className="mt-2 text-xl font-semibold text-[#e6f1ff]">{product.name}</h2><p className="mt-3 text-sm leading-relaxed text-[#6f89a7]">{product.description}</p><span className="mt-7 flex items-center gap-2 text-xs font-medium text-[#91a8c4] group-hover:text-[#4da8ff]">Explore product <MoveUpRight className="h-3.5 w-3.5" /></span></Link>
         </motion.div>; })}
       </div>
       <p className="mt-4 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-[#7890a7] sm:hidden">Swipe to explore products</p>
    </section>
    <Footer />
  </div>;
}