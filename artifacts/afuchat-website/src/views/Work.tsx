'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Code2, Layers3, Workflow } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';
import ProductIcon from '@/components/products/ProductIcon';
import Footer from '@/components/layout/Footer';

const capabilities = [
  {
    icon: Layers3,
    title: 'Digital products',
    description: 'We design and build products around practical needs, from communication and email to cloud infrastructure and AI.',
  },
  {
    icon: Code2,
    title: 'Software engineering',
    description: 'Web applications, integrations, APIs, and dependable foundations that can evolve as a business grows.',
  },
  {
    icon: Workflow,
    title: 'Connected experiences',
    description: 'We bring interfaces, services, and workflows together so the whole experience feels consistent and useful.',
  },
];

export default function WorkPageView() {
  return (
    <main className="work-page min-h-screen w-full bg-white text-slate-950">
      <section className="relative isolate overflow-hidden bg-[#06132a] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(31,122,255,0.24),transparent_55%)]" />
        <div className="relative max-container container-pad py-20 sm:py-28 lg:py-32">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Our work</p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Useful technology.<br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">Built to move ideas forward.</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              We build our own digital products and develop practical software experiences that help people and organizations connect, create, and grow.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] px-6 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
                Explore our products <ArrowUpRight size={16} />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white/85 transition-colors hover:bg-white/5">
                Discuss a project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-container container-pad py-16 sm:py-20">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#1746A2]">Product portfolio</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Work we're building</h2>
          <p className="leading-relaxed text-slate-600">
            Our portfolio focuses on connected, useful technology. Explore the products and the problems each one is designed to solve.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_DATA.map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
              <Link href={product.path} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/5">
                <ProductIcon product={product} containerClassName="mb-5 h-12 w-12 rounded-xl" iconClassName="h-6 w-6" />
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{product.category}</p>
                <h3 className="mb-2 text-xl font-bold">{product.name}</h3>
                <p className="mb-3 text-sm font-semibold text-[#1746A2]">{product.tagline}</p>
                <p className="flex-1 text-sm leading-relaxed text-slate-600">{product.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1746A2]">
                  View product <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="max-container container-pad py-16 sm:py-20">
          <div className="mb-9 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#1746A2]">How we contribute</p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">From idea to working experience</h2>
            <p className="leading-relaxed text-slate-600">We focus on clear problems, thoughtful engineering, and solutions that can improve with real-world use.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1746A2]">
                    <Icon size={21} />
                  </div>
                  <h3 className="mb-3 text-lg font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-container container-pad py-16 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#06132a] p-7 text-white sm:p-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">Have a problem worth solving?</h2>
            <p className="leading-relaxed text-white/60">Tell us what you're trying to build. We'll explore whether our team and technology are a good fit.</p>
          </div>
          <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-blue-50">
            Contact our team <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
