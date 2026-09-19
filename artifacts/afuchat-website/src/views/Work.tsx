'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '@/components/layout/Footer';
import { PROJECTS } from '@/data/projects';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function Work() {
  return (
    <div className="studio-shell atmosphere-page min-h-screen">
      <section className="page-hero max-container container-pad py-14 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <div className="accent-bar mb-7" />
          <p className="studio-kicker mb-6 text-[#d76750]">Selected work / 2020—today</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">Digital experiences built for real organizations.</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
            A selection of websites and digital projects built for businesses, organizations, and media teams. Each project starts with a real audience and a clear job to do.
          </p>
        </motion.div>
      </section>

        <section className="atmosphere-band">
        <div className="max-container container-pad py-16 sm:py-20">
          <ScrollReveal className="mb-10 grid gap-4 sm:grid-cols-[.6fr_1fr] sm:items-end">
            <h2 className="text-3xl font-semibold tracking-tight text-[#e6f1ff] sm:text-4xl">Useful work, in public.</h2>
            <p className="max-w-xl text-sm leading-relaxed text-[#6f89a7]">A compact selection of launches where the interface had to carry a real message, workflow, or community.</p>
          </ScrollReveal>
         <div aria-label="Selected client projects" className="mobile-rail flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible">
          {PROJECTS.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                 className="site-card group flex min-h-[290px] min-w-[86vw] snap-start flex-col p-7 transition-transform hover:-translate-y-1 md:min-w-0 sm:p-8"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]" style={{ color: project.accent }}>
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <span className="flex items-center gap-1 text-xs text-white/30 transition-colors group-hover:text-white/70">
                      Visit project <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#e6f1ff]">{project.name}</h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#91a8c4]">{project.description}</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.focus.map(item => (
                    <span key={item} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-white/45">{item}</span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>
        </div>
      </section>

      <section className="max-container container-pad pb-16 sm:pb-20">
         <div className="color-panel rounded-[2rem] px-6 py-10 sm:px-10">
          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Have a product, website, or app to build?</h2>
            <a href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#1F7AFF] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#388bff]">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}