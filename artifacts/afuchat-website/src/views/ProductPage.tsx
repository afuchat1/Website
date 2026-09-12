'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Check, MoveUpRight } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';
import { illSecEcosystem } from '@/data/illustrations';
import Footer from '@/components/layout/Footer';
import { notFound } from 'next/navigation';

export default function ProductPage({ id }: { id: string }) {
  const product = PRODUCT_DATA.find((item) => item.id === id);
  if (!product) notFound();
  const Icon = product!.icon;
  const otherProducts = PRODUCT_DATA.filter((item) => item.id !== product!.id).slice(0, 4);
  return <div className="studio-shell">
    <section className="max-container studio-section grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-24">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <div className="mb-7 flex items-center gap-3"><Icon className="h-6 w-6" style={{ color: product!.color }} strokeWidth={1.5} /><span className="studio-kicker text-[9px] text-[#5d7694]">{product!.category}</span></div>
        <h1 className="text-[clamp(3.4rem,7vw,6.7rem)] font-semibold leading-[.88] tracking-[-.075em] text-[#e6f1ff]">{product!.name}</h1>
        <p className="mt-7 max-w-lg text-xl font-medium leading-snug" style={{ color: product!.color }}>{product!.tagline}</p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[#91a8c4]">{product!.description}</p>
        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">{product!.features.map((feature) => <span key={feature} className="flex items-center gap-2 text-xs text-[#91a8c4]"><Check className="h-3.5 w-3.5" style={{ color: product!.color }} />{feature}</span>)}</div>
         <div className="mt-9 flex flex-wrap gap-3">
           <a href={product!.website} target="_blank" rel="noopener noreferrer" className="studio-button text-white" style={{ background: product!.color }}>Visit product <ArrowUpRight className="h-4 w-4" /></a>
           {product!.github && <a href={product!.github} target="_blank" rel="noopener noreferrer" className="studio-button studio-button-ghost">View on GitHub</a>}
         </div>
      </motion.div>
       <motion.div initial={{ opacity: 0, scale: .93 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .1 }} className="relative"><div className="mb-7 flex justify-between pb-4 text-[10px] text-[#5d7694] studio-mono"><span>{product!.name.toUpperCase()} / PRODUCT VIEW</span><span>ACTIVE</span></div><img src={product!.illustration} alt={product!.name} className="w-full drop-shadow-2xl" /></motion.div>
    </section>
     <section className="border-y border-white/[.08] bg-[#081529]/55"><div className="max-container studio-section-tight grid items-center gap-12 lg:grid-cols-[.65fr_1fr] lg:gap-24"><div><p className="studio-kicker mb-5 text-[#9d8cff]">AfuChat Technologies / Company product</p><h2 className="text-3xl font-semibold leading-tight text-[#e6f1ff] sm:text-4xl">Part of the Afu ecosystem.</h2><p className="mt-5 max-w-md text-sm leading-relaxed text-[#6f89a7]">AfuChat Technologies develops products across communication, email, AI technology, and entertainment.</p></div><img src={illSecEcosystem} alt="AfuChat Technologies product ecosystem" loading="lazy" className="mx-auto w-full max-w-md" /></div></section>
    <section className="max-container studio-section-tight"><div className="mb-8 flex items-center justify-between"><p className="studio-kicker text-[#5d7694]">Continue exploring</p><Link href="/products" className="studio-link flex items-center gap-2 text-xs">Product index <ArrowUpRight className="h-3.5 w-3.5" /></Link></div><div className="grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">{otherProducts.map((item) => { const OtherIcon = item.icon; return <Link key={item.id} href={item.path} className="group flex items-center gap-3 border-b border-white/10 px-1 py-5 sm:border-l sm:px-5 first:sm:border-l-0"><OtherIcon className="h-5 w-5" style={{ color: item.color }} strokeWidth={1.5} /><span className="text-sm text-[#91a8c4] group-hover:text-white">{item.name}</span><MoveUpRight className="ml-auto h-3.5 w-3.5 text-[#5d7694] group-hover:text-[#4da8ff]" /></Link>; })}</div></section>
    <Footer />
  </div>;
}