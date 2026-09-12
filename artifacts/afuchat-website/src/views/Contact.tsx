'use client';

import { ArrowUpRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '@/components/layout/Footer';

export default function Contact() {
  return <div className="studio-shell">
    <section className="max-container studio-section grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <p className="studio-kicker mb-6">Start a project / 01</p>
        <h1 className="max-w-2xl text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[.88] tracking-[-.075em] text-[#e6f1ff]">Tell us what<br />you&apos;re <span className="text-[#4da8ff]">building.</span></h1>
        <p className="mt-8 max-w-md text-base leading-relaxed text-[#91a8c4]">Share a little about the product, website, application, or digital solution you have in mind. We&apos;ll use your note to start the right conversation.</p>
        <a href="mailto:hello@afuchat.com" className="mt-9 inline-flex items-center gap-3 text-sm text-[#91a8c4] hover:text-white"><span className="flex h-9 w-9 items-center justify-center border border-[#4da8ff]/40 text-[#4da8ff]"><Mail className="h-4 w-4" /></span>hello@afuchat.com</a>
      </motion.div>
      <motion.form action="mailto:hello@afuchat.com" method="post" encType="text/plain" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }} className="studio-panel p-6 sm:p-9">
        <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4 text-[10px] text-[#5d7694] studio-mono"><span>PROJECT INTAKE</span><span>HELLO@AFUCHAT.COM</span></div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-xs text-[#91a8c4]">Name<input name="name" required className="mt-2 w-full border border-white/10 bg-[#06101f] px-4 py-3 text-sm text-white outline-none placeholder:text-[#5d7694] focus:border-[#4da8ff]" placeholder="Your name" /></label>
          <label className="text-xs text-[#91a8c4]">Email<input type="email" name="email" required className="mt-2 w-full border border-white/10 bg-[#06101f] px-4 py-3 text-sm text-white outline-none placeholder:text-[#5d7694] focus:border-[#4da8ff]" placeholder="you@example.com" /></label>
        </div>
        <label className="mt-5 block text-xs text-[#91a8c4]">Company or organization<input name="company" className="mt-2 w-full border border-white/10 bg-[#06101f] px-4 py-3 text-sm text-white outline-none placeholder:text-[#5d7694] focus:border-[#4da8ff]" placeholder="Your company (optional)" /></label>
        <label className="mt-5 block text-xs text-[#91a8c4]">What are you looking to build?<select name="project_type" defaultValue="" required className="mt-2 w-full border border-white/10 bg-[#06101f] px-4 py-3 text-sm text-[#91a8c4] outline-none focus:border-[#4da8ff]"><option value="" disabled>Select a project type</option><option>Website</option><option>Web application</option><option>Android app</option><option>iOS app</option><option>E-commerce</option><option>Custom software</option><option>AI product</option><option>Other</option></select></label>
        <label className="mt-5 block text-xs text-[#91a8c4]">Project description<textarea name="project_description" required rows={6} className="mt-2 w-full resize-y border border-white/10 bg-[#06101f] px-4 py-3 text-sm text-white outline-none placeholder:text-[#5d7694] focus:border-[#4da8ff]" placeholder="What should the product help people do?" /></label>
        <button type="submit" className="studio-button studio-button-primary mt-6">Send project inquiry <ArrowUpRight className="h-4 w-4" /></button>
        <p className="mt-4 text-[11px] leading-relaxed text-[#5d7694]">This opens your email app with the project details addressed to hello@afuchat.com.</p>
      </motion.form>
    </section>
    <Footer />
  </div>;
}