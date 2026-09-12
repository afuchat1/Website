'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, BrainCircuit, Code2, Globe2, Layers3, Smartphone, ShoppingCart, MoveUpRight } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';
import { PROJECTS } from '@/data/projects';
import { illSecDeveloper, illSecHero } from '@/data/illustrations';
import Footer from '@/components/layout/Footer';

const featuredProducts = PRODUCT_DATA;
const capabilities = [
  ['01', Globe2, 'Websites', 'Clear, responsive websites for companies and organizations.'],
  ['02', Code2, 'Web applications', 'Useful digital products built around real user flows.'],
  ['03', Smartphone, 'Mobile applications', 'Android, iOS, and cross-platform experiences.'],
  ['04', ShoppingCart, 'E-commerce', 'Product discovery and commerce experiences that work.'],
  ['05', BrainCircuit, 'AI products', 'Focused AI tools that turn complex tasks into simple ones.'],
  ['06', Layers3, 'Custom solutions', 'Digital products shaped around the problem to solve.'],
] as const;

function Label({ children, tone = '#4da8ff' }: { children: React.ReactNode; tone?: string }) {
  return <p className="studio-kicker mb-5" style={{ color: tone }}>{children}</p>;
}

export default function PortfolioHome() {
  return <div className="studio-shell">
    <section className="max-container studio-section grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
      <div className="studio-fade">
        <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,7.8rem)] font-semibold leading-[.88] tracking-[-.075em] text-[#e6f1ff]">Useful<br /><span className="text-[#4da8ff]">things,</span><br />made real.</h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-[#91a8c4] sm:text-lg">We are a technology company building our own products and helping ambitious organizations turn useful ideas into working digital experiences.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/work" className="studio-button studio-button-primary">Explore our work <ArrowUpRight className="h-4 w-4" /></Link>
          <Link href="/contact" className="studio-button studio-button-ghost">Start a project</Link>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .75 }} className="relative">
        <div className="relative">
          <img src={illSecHero} alt="AfuChat Technologies digital products" className="w-full drop-shadow-2xl" />
        </div>
      </motion.div>
    </section>

    <section className="border-y border-white/[.08] bg-[#081529]/60">
      <div className="max-container grid gap-10 py-16 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
        <div><Label tone="#8be7c4">Capabilities</Label><h2 className="max-w-md text-3xl font-semibold leading-tight text-[#e6f1ff] sm:text-4xl">Small studio.<br />Wide range.</h2><p className="mt-5 max-w-md text-sm leading-relaxed text-[#6f89a7]">From the first sketch to the final deploy, we combine product thinking, design, and engineering in one close loop.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {capabilities.map(([number, Icon, title, description]) => <div key={title} className="group border-t border-white/[.08] py-5 sm:pr-8">
            <div className="flex gap-4"><span className="studio-index pt-1">{number}</span><Icon className="h-5 w-5 text-[#4da8ff] transition-transform group-hover:translate-x-1" strokeWidth={1.5} /><div><h3 className="text-sm font-semibold text-[#e6f1ff]">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[#6f89a7]">{description}</p></div></div>
          </div>)}
        </div>
      </div>
    </section>

    <section className="max-container studio-section">
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><Label tone="#9d8cff">Company products</Label><h2 className="text-3xl font-semibold text-[#e6f1ff] sm:text-4xl">An ecosystem in progress.</h2></div><Link href="/products" className="studio-link flex items-center gap-2 text-sm">View product index <ArrowUpRight className="h-4 w-4" /></Link></div>
       <div aria-label="Featured AfuChat products" className="mobile-rail flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-2 md:gap-0 md:overflow-visible">
        {featuredProducts.map((product, index) => { const Icon = product.icon; return <motion.div key={product.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }} className="border-b border-white/[.1] md:even:border-l">
            <Link href={product.path} className="group grid min-h-[280px] min-w-[86vw] snap-start grid-cols-[1fr_.82fr] overflow-hidden bg-transparent md:min-w-0">
            <div className="flex flex-col justify-between p-6 sm:p-8"><div><Icon className="h-6 w-6" style={{ color: product.color }} strokeWidth={1.5} /><p className="studio-kicker mt-8 text-[9px] text-[#5d7694]">{product.category}</p><h3 className="mt-2 text-2xl font-semibold text-[#e6f1ff]">{product.name}</h3><p className="mt-3 text-sm leading-relaxed text-[#6f89a7]">{product.description}</p></div><span className="flex items-center gap-2 text-xs text-[#91a8c4] group-hover:text-[#4da8ff]">Open product <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span></div>
              <div className="flex min-h-[280px] items-center justify-center p-0"><img src={product.illustration} alt={`${product.name} product artwork`} loading="lazy" className="max-h-[285px] w-full scale-[1.08] object-contain transition-transform duration-500 group-hover:scale-[1.14]" /></div>
          </Link>
        </motion.div>; })}
      </div>
    </section>

    <section className="border-y border-white/[.08] bg-[#081529]/50">
      <div className="max-container studio-section">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><Label tone="#8be7c4">Selected work</Label><h2 className="max-w-2xl text-3xl font-semibold text-[#e6f1ff] sm:text-4xl">Partner work, built with the same care.</h2></div><Link href="/work" className="studio-link flex items-center gap-2 text-sm">View all work <ArrowUpRight className="h-4 w-4" /></Link></div>
       <div aria-label="Selected client work" className="mobile-rail flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:gap-0 md:overflow-visible">{PROJECTS.slice(0, 3).map((project, index) => { const Icon = project.icon; return <motion.a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="group min-w-[86vw] snap-start rounded-3xl bg-[#f5f9fe] p-6 md:min-w-0 md:rounded-none md:p-8">
          <div className="flex items-center justify-between"><Icon className="h-5 w-5" style={{ color: project.accent }} strokeWidth={1.5} /><ArrowUpRight className="h-4 w-4 text-[#5d7694] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" /></div><p className="studio-kicker mt-12 text-[9px] text-[#5d7694]">{project.category}</p><h3 className="mt-2 text-xl font-semibold text-[#e6f1ff]">{project.name}</h3><p className="mt-3 text-sm leading-relaxed text-[#6f89a7]">{project.description}</p>
        </motion.a>; })}</div>
      </div>
    </section>

    <section className="max-container studio-section grid items-center gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
      <div className="mx-auto max-w-sm"><img src={illSecDeveloper} alt="AfuChat Technologies building digital products" loading="lazy" className="w-full" /></div>
      <div><Label tone="#4da8ff">The company behind the work</Label><h2 className="max-w-2xl text-4xl font-semibold leading-tight text-[#e6f1ff] sm:text-5xl">Product-minded<br />by default.</h2><p className="mt-6 max-w-xl text-base leading-relaxed text-[#91a8c4]">Led by AM Kaweesi, Founder &amp; Technology Builder, we build our own digital products and help businesses and organizations turn useful ideas into working digital experiences.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/about" className="studio-button studio-button-ghost">About the studio <ArrowUpRight className="h-4 w-4" /></Link><Link href="/contact" className="studio-link flex items-center gap-2 px-2 text-sm">Talk about a project <MoveUpRight className="h-4 w-4" /></Link></div></div>
    </section>
    <section className="max-container pb-24"><div className="studio-panel relative overflow-hidden p-8 sm:p-14"><div className="relative z-10 max-w-2xl"><h2 className="text-3xl font-semibold text-[#e6f1ff] sm:text-5xl">Start with the problem.<br />End with something useful.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-[#91a8c4]">Tell us what you are trying to create. We will work toward the right digital product.</p><Link href="/contact" className="studio-button studio-button-primary mt-8">Start a project <ArrowUpRight className="h-4 w-4" /></Link></div></div></section>
    <Footer />
  </div>;
}