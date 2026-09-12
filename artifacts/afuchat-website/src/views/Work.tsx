'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '@/components/layout/Footer';
import { PROJECTS } from '@/data/projects';

export default function Work() {
  return (
    <div className="min-h-screen">
      <section className="max-container container-pad py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-300">Selected work</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">Digital experiences built for real organizations.</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
            A selection of websites and digital projects built for businesses, organizations, and media teams. Each project starts with a real audience and a clear job to do.
          </p>
        </motion.div>
      </section>

      <section className="max-container container-pad pb-20 sm:pb-28">
        <div className="grid gap-5 md:grid-cols-2">
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
                className="group flex min-h-[290px] flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] sm:p-8"
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
                  <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">{project.category}</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">{project.name}</h2>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/45">{project.description}</p>
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
      </section>

      <section className="max-container container-pad pb-20 sm:pb-28">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-teal-500/10 to-blue-500/10 px-6 py-10 sm:px-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-300">Your project</p>
          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Have a product, website, or app to build?</h2>
            <a href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] px-6 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}