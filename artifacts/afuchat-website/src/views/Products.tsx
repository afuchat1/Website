'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Github, MoveUpRight } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';
import { illSecProducts } from '@/data/illustrations';
import Footer from '@/components/layout/Footer';

function ProductCard({ product, index }: { product: (typeof PRODUCT_DATA)[number]; index: number }) {
  const Icon = product.icon;
  const visibleFeatures = product.features.slice(0, 4);
  const remainingFeatures = product.features.length - visibleFeatures.length;

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-[#f5f9fe] p-3 transition-transform hover:-translate-y-1 sm:p-4"
    >
      <div className="relative flex min-h-[190px] items-center justify-center overflow-hidden rounded-[1.35rem] bg-white/70 p-5 sm:min-h-[220px]">
        <img
          src={product.illustration}
          alt={`${product.name} product artwork`}
          loading={index > 1 ? 'lazy' : 'eager'}
          decoding="async"
          className="max-h-[170px] w-full object-contain transition-transform duration-500 group-hover:scale-105 sm:max-h-[195px]"
        />
      </div>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-5 sm:px-3 sm:pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <Icon className="h-6 w-6 shrink-0" style={{ color: product.color }} strokeWidth={1.6} />
          </div>
          <span className="studio-mono text-[10px] text-[#7890a7]">0{index + 1}</span>
        </div>

        <Link href={product.path} className="mt-5 block">
          <h2 className="text-2xl font-semibold tracking-tight text-[#e6f1ff] transition-colors group-hover:text-[#2b5ea4]">
            {product.name}
          </h2>
          <p className="mt-2 text-sm font-medium" style={{ color: product.color }}>{product.tagline}</p>
        </Link>

        <p className="mt-3 text-sm leading-relaxed text-[#6f89a7]">{product.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {visibleFeatures.map((feature) => (
            <span key={feature} className="rounded-full bg-white px-2.5 py-1.5 text-[11px] text-[#5d7694]">
              {feature}
            </span>
          ))}
          {remainingFeatures > 0 && (
            <span className="rounded-full bg-white px-2.5 py-1.5 text-[11px] text-[#7890a7]">
              +{remainingFeatures} more
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
          <Link href={product.path} className="flex items-center gap-2 text-xs font-semibold text-[#2b5ea4]">
            Explore details <MoveUpRight className="h-3.5 w-3.5" />
          </Link>
          <a href={product.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-[#6f89a7] hover:text-[#2b5ea4]">
            Visit website <ExternalLink className="h-3 w-3" />
          </a>
          {product.github && (
            <a href={product.github} target="_blank" rel="noopener noreferrer" aria-label={`${product.name} on GitHub`} className="text-[#6f89a7] hover:text-[#2b5ea4]">
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Products() {
  return <div className="studio-shell">
    <section className="products-hero max-container grid items-center gap-7 py-9 sm:gap-12 sm:py-20 lg:grid-cols-[1fr_.72fr] lg:py-32">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="max-w-3xl text-[clamp(3.5rem,8vw,7.4rem)] font-semibold leading-[.88] tracking-[-.075em] text-[#e6f1ff]">Built as<br /><span className="text-[#4da8ff]">separate</span><br />ideas.</h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-[#91a8c4] sm:text-lg">Products owned or developed within the Afu ecosystem, from communication and email to AI technology and movie discovery.</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .1 }} className="flex items-center justify-center rounded-[1.75rem] bg-[#f5f9fe] p-4 sm:p-8">
        <img src={illSecProducts} alt="AfuChat product suite" className="max-h-[190px] w-full object-contain drop-shadow-2xl sm:max-h-[300px]" />
      </motion.div>
    </section>
    <section className="max-container pb-16 sm:pb-20">
      <div className="mb-7 flex items-end justify-between gap-5 sm:mb-10">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#e6f1ff] sm:text-4xl">Explore the products.</h2>
        </div>
        <span className="hidden text-right text-xs leading-relaxed text-[#7890a7] sm:block">Owned and developed<br />within the Afu ecosystem.</span>
      </div>
      <div aria-label="AfuChat Technologies products" className="grid gap-5 md:grid-cols-2">
        {PRODUCT_DATA.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
      </div>
    </section>
    <Footer />
  </div>;
}