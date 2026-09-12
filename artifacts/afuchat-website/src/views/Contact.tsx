'use client';

import { ArrowUpRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '@/components/layout/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="max-container container-pad py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-300">Start a project</p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">Tell us what you&apos;re building.</h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/50">
              Share a little about the product, website, application, or digital solution you have in mind. We&apos;ll use your note to start the right conversation.
            </p>
            <a href="mailto:hello@afuchat.com" className="mt-8 inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-300">
                <Mail className="h-4 w-4" />
              </span>
              hello@afuchat.com
            </a>
          </motion.div>

          <motion.form
            action="mailto:hello@afuchat.com"
            method="post"
            encType="text/plain"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm text-white/60">
                Name
                <input name="name" required className="mt-2 w-full rounded-xl border border-white/10 bg-[#071126] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-blue-400/60" placeholder="Your name" />
              </label>
              <label className="text-sm text-white/60">
                Email
                <input type="email" name="email" required className="mt-2 w-full rounded-xl border border-white/10 bg-[#071126] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-blue-400/60" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-5 block text-sm text-white/60">
              Company or organization
              <input name="company" className="mt-2 w-full rounded-xl border border-white/10 bg-[#071126] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-blue-400/60" placeholder="Your company (optional)" />
            </label>
            <label className="mt-5 block text-sm text-white/60">
              What are you looking to build?
              <select name="project_type" defaultValue="" required className="mt-2 w-full rounded-xl border border-white/10 bg-[#071126] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-blue-400/60">
                <option value="" disabled>Select a project type</option>
                <option>Website</option>
                <option>Web application</option>
                <option>Android app</option>
                <option>iOS app</option>
                <option>E-commerce</option>
                <option>Custom software</option>
                <option>AI product</option>
                <option>Other</option>
              </select>
            </label>
            <label className="mt-5 block text-sm text-white/60">
              Project description
              <textarea name="project_description" required rows={6} className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#071126] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-blue-400/60" placeholder="What should the product help people do?" />
            </label>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] px-6 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
              Send project inquiry <ArrowUpRight className="h-4 w-4" />
            </button>
            <p className="mt-4 text-xs leading-relaxed text-white/30">This opens your email app with the project details addressed to hello@afuchat.com.</p>
          </motion.form>
        </div>
      </section>
      <Footer />
    </div>
  );
}