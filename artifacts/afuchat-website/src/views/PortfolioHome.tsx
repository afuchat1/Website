'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PRODUCT_DATA } from '@/data/products';
import { PROJECTS } from '@/data/projects';
import { illSecDeveloper, illSecHero } from '@/data/illustrations';
import Footer from '@/components/layout/Footer';
import ShowcaseCard from '@/components/cards/ShowcaseCard';

const capabilities = [
  ['Websites', 'Clear, responsive websites for companies and organizations.'],
  ['Web applications', 'Useful digital products built around real user flows.'],
  ['Mobile applications', 'Android, iOS, and cross-platform experiences.'],
  ['E-commerce', 'Product discovery and commerce experiences that work.'],
  ['AI products', 'Focused AI tools that turn complex tasks into simple ones.'],
  ['Custom solutions', 'Digital products shaped around the problem to solve.'],
] as const;

export default function PortfolioHome() {
  return <div className="studio-shell">
    <section className="max-container studio-section relative overflow-visible py-14 sm:py-20 lg:min-h-[calc(100vh-72px)] lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-12">
        <div className="studio-fade relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/[.04] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[.18em] text-[#91a8c4] backdrop-blur-md"><span className="h-1.5 w-1.5 rounded-full bg-[#4da8ff] shadow-[0_0_14px_rgba(77,168,255,.8)]" />Digital products, built to work</div>
          <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,7.8rem)] font-semibold leading-[.88] tracking-[-.075em] text-[#e6f1ff]">Useful<br /><span className="text-[#4da8ff]">things,</span><br />made real.</h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#91a8c4] sm:text-lg">We are a technology company building our own products and helping ambitious organizations turn useful ideas into working digital experiences.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/products" className="studio-button studio-button-primary">Explore products</Link>
            <Link href="/contact" className="studio-button studio-button-ghost">Start a project</Link>
          </div>
        </div>
        <div className="relative flex min-h-[280px] items-center justify-center lg:min-h-[520px]">
          <img src={illSecHero} alt="" aria-hidden="true" className="relative z-10 w-full max-w-[620px] object-contain drop-shadow-[0_35px_80px_rgba(31,149,255,.16)]" />
        </div>
      </div>
    </section>

    <section className="relative border-y border-white/[.08] bg-white/[.012] backdrop-blur-[2px]">
      <div className="max-container grid gap-10 py-16 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
        <div><h2 className="max-w-md text-3xl font-semibold leading-tight text-[#e6f1ff] sm:text-4xl">Small studio.<br />Wide range.</h2><p className="mt-5 max-w-md text-sm leading-relaxed text-[#6f89a7]">From the first sketch to the final deploy, we combine product thinking, design, and engineering in one close loop.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {capabilities.map(([title, description]) => <div key={title} className="border-t border-white/[.08] py-5 sm:pr-8">
            <div><h3 className="text-sm font-semibold text-[#e6f1ff]">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[#6f89a7]">{description}</p></div>
          </div>)}
        </div>
      </div>
    </section>

    <section className="max-container studio-section">
      <div className="mb-10 flex items-end justify-between gap-6"><div><p className="mb-3 text-[10px] uppercase tracking-[.18em] text-[#5d7694]">The ecosystem</p><h2 className="text-3xl font-semibold text-[#e6f1ff] sm:text-4xl">An ecosystem in progress.</h2></div><span className="hidden max-w-xs text-right text-xs leading-relaxed text-[#6f89a7] md:block">A growing family of products across communication, AI, email and digital experiences.</span></div>
        <div aria-label="Featured AfuChat products" className="grid gap-5 md:grid-cols-2">
          {PRODUCT_DATA.map((product, index) => <ShowcaseCard key={product.id} name={product.name} category={product.category} tagline={product.tagline} description={product.description} features={product.features} color={product.color} index={index} href={product.path} hrefLabel="Explore details" secondaryHref={product.website} secondaryLabel="Visit website" icon={product.icon} illustration={product.illustration} illustrationAlt={`${product.name} product artwork`} />)}
      </div>
    </section>

    <section className="border-y border-white/[.08] bg-transparent">
      <div className="max-container studio-section">
        <div className="mb-10"><h2 className="max-w-2xl text-3xl font-semibold text-[#e6f1ff] sm:text-4xl">Partner work, built with the same care.</h2></div>
        <div aria-label="Selected client work" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 3).map((project, index) => <ShowcaseCard key={project.id} name={project.name} category={project.category} tagline={project.category} description={project.description} features={project.focus} color={project.accent} index={index} href={project.url} hrefLabel="Visit project" hrefExternal icon={project.icon} />)}
        </div>
      </div>
    </section>

     <section className="max-container studio-section grid items-center gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
      <div className="mx-auto max-w-sm"><img src={illSecDeveloper} alt="AfuChat Technologies building digital products" loading="lazy" className="w-full" /></div>
       <div><h2 className="max-w-2xl text-4xl font-semibold leading-tight text-[#e6f1ff] sm:text-5xl">Product-minded<br />by default.</h2><p className="mt-6 max-w-xl text-base leading-relaxed text-[#91a8c4]">Led by AM Kaweesi, Founder &amp; Technology Builder, we build our own digital products and help businesses and organizations turn useful ideas into working digital experiences.</p><div className="mt-8"><Link href="/about" className="studio-button studio-button-ghost">About the studio</Link></div></div>
    </section>
    <Footer />
  </div>;
}