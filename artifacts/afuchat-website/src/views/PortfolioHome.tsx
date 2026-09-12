'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Globe2,
  Layers3,
  Smartphone,
  ShoppingCart,
} from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';
import { PROJECTS } from '@/data/projects';
import { illSecDeveloper, illSecHero } from '@/data/illustrations';
import Footer from '@/components/layout/Footer';

const featuredProductIds = ['afuchat', 'afumail', 'afuai', 'afumovies'];
const featuredProducts = PRODUCT_DATA.filter(product => featuredProductIds.includes(product.id));

const capabilities = [
  { icon: Globe2, label: 'Websites', description: 'Clear, responsive websites for companies and organizations.' },
  { icon: Code2, label: 'Web applications', description: 'Useful digital products built around real user flows.' },
  { icon: Smartphone, label: 'Mobile applications', description: 'Android, iOS, and cross-platform experiences.' },
  { icon: ShoppingCart, label: 'E-commerce', description: 'Product discovery and commerce experiences that work.' },
  { icon: BrainCircuit, label: 'AI products', description: 'Focused AI tools that turn complex tasks into simple ones.' },
  { icon: Layers3, label: 'Custom solutions', description: 'Digital products shaped around the problem to solve.' },
];

function SectionLabel({ children, color = '#60A5FA' }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color }}>
      {children}
    </p>
  );
}

export default function PortfolioHome() {
  return (
    <div className="relative flex w-full flex-col overflow-hidden">
      <section className="relative">
        <div className="max-container container-pad">
          <div className="grid min-h-[640px] grid-cols-1 items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-28">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
              <SectionLabel>AfuChat Technologies Limited</SectionLabel>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-[68px]">
                We build digital products that move people forward.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
                A Ugandan technology company building its own products, websites, web applications, mobile apps, e-commerce platforms, and custom digital solutions.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/work" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-opacity hover:opacity-90">
                  See our work <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium text-white/70 transition-colors hover:border-white/25 hover:text-white">
                  Start a project
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/35">
                <span>Company products</span>
                <span className="h-1 w-1 rounded-full bg-blue-400/70" />
                <span>Client projects</span>
                <span className="h-1 w-1 rounded-full bg-purple-400/70" />
                <span>Built for the real world</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="absolute inset-8 rounded-full bg-blue-500/10 blur-3xl" />
              <img src={illSecHero} alt="AfuChat Technologies digital products" className="relative w-full max-w-[520px] drop-shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.015] py-16 sm:py-20">
        <div className="max-container container-pad">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <SectionLabel color="#A78BFA">What we build</SectionLabel>
              <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                From first idea to a product people can use.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/45">
                We combine product thinking, design, and engineering to create digital experiences for our own ecosystem and for organizations with something meaningful to build.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
              {capabilities.map(({ icon: Icon, label, description }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-400">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{label}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/38">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-container container-pad">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <SectionLabel color="#C084FC">Company products</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Products we are building.</h2>
            </div>
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white">
              Explore all products <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {featuredProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link href={product.path} className="group grid min-h-[230px] grid-cols-[1fr_0.8fr] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-colors hover:border-white/20 hover:bg-white/[0.06]">
                    <div className="flex flex-col justify-between p-6 sm:p-7">
                      <div>
                        <Icon className="h-7 w-7" style={{ color: product.color }} strokeWidth={1.7} />
                        <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">{product.category}</p>
                        <h3 className="mt-2 text-xl font-bold text-white">{product.name}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/45">{product.description}</p>
                      </div>
                      <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-white/45 transition-colors group-hover:text-white">
                        View product <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                    <div className="flex items-end justify-center overflow-hidden bg-gradient-to-br from-white/[0.03] to-white/[0.08] p-4">
                      <img src={product.illustration} alt={`${product.name} product artwork`} className="h-full max-h-[210px] w-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] py-20 sm:py-28">
        <div className="max-container container-pad">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <SectionLabel color="#2DD4BF">Selected work</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Digital work for real organizations.</h2>
            </div>
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white">
              View all client work <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {PROJECTS.slice(0, 3).map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group rounded-3xl border border-white/10 bg-[#071126] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]" style={{ color: project.accent }}>
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-white/25 transition-colors group-hover:text-white/70" />
                  </div>
                  <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">{project.category}</p>
                  <h3 className="mt-2 text-lg font-bold text-white">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/42">{project.description}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-container container-pad">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="flex justify-center">
              <img src={illSecDeveloper} alt="AfuChat Technologies building digital products" className="w-full max-w-sm drop-shadow-2xl" loading="lazy" />
            </div>
            <div>
              <SectionLabel color="#4ADE80">The company behind the work</SectionLabel>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Product-minded by default.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/48">
                AfuChat Technologies Limited is led by AM Kaweesi, Founder &amp; Technology Builder. We build our own digital products and help businesses and organizations turn useful ideas into working digital experiences.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/70 transition-colors hover:border-white/25 hover:text-white">
                  About AfuChat Technologies <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-blue-300 transition-colors hover:text-white">
                  Talk about a project <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="max-container container-pad">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-transparent px-6 py-12 sm:px-12 sm:py-16">
            <div className="relative z-10 max-w-2xl">
              <SectionLabel color="#60A5FA">Have something to build?</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Let&apos;s make the next useful thing.</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/48">
                Tell us what you are trying to create. We&apos;ll start with the problem, then work toward the right digital product.
              </p>
              <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] px-7 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl" />
            <div className="absolute -bottom-28 right-24 h-64 w-64 rounded-full bg-purple-400/15 blur-3xl" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}