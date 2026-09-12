'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PRODUCT_DATA } from '@/data/products';
import { illSecProducts } from '@/data/illustrations';
import Footer from '@/components/layout/Footer';
import ShowcaseCard from '@/components/cards/ShowcaseCard';

export default function Products() {
  return <div className="studio-shell">
    <section className="products-hero max-container studio-section grid items-center gap-10 sm:gap-12 lg:grid-cols-[1fr_.72fr] lg:gap-20">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="max-w-3xl text-[clamp(3.5rem,8vw,7.4rem)] font-semibold leading-[.88] tracking-[-.075em] text-[#e6f1ff]">Built as<br /><span className="text-[#4da8ff]">separate</span><br />ideas.</h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-[#91a8c4] sm:text-lg">Products owned or developed within the Afu ecosystem, from communication and email to AI technology and movie discovery.</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .1 }} className="flex items-center justify-center">
         <img src={illSecProducts} alt="AfuChat Technologies product suite" className="max-h-[230px] w-full scale-[1.08] object-contain drop-shadow-2xl sm:max-h-[350px]" />
      </motion.div>
    </section>
    <section className="max-container studio-section-tight">
      <div className="mb-7 flex items-end justify-between gap-5 sm:mb-10">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#e6f1ff] sm:text-4xl">Explore the products.</h2>
        </div>
        <span className="hidden text-right text-xs leading-relaxed text-[#7890a7] sm:block">Owned and developed<br />within the Afu ecosystem.</span>
      </div>
      <div aria-label="AfuChat Technologies products" className="grid gap-5 md:grid-cols-2">
         {PRODUCT_DATA.map((product, index) => <ShowcaseCard key={product.id} name={product.name} category={product.category} tagline={product.tagline} description={product.description} features={product.features} color={product.color} index={index} href={product.path} hrefLabel="Explore details" secondaryHref={product.website} secondaryLabel="Visit website" github={product.github} icon={product.icon} illustration={product.illustration} illustrationAlt={`${product.name} product artwork`} />)}
      </div>
    </section>
    <Footer />
  </div>;
}