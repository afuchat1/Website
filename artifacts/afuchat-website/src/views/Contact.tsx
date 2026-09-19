'use client';

import { ArrowUpRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { illSecContact } from '@/data/illustrations';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function Contact() {
  return <div className="studio-shell atmosphere-page">
    <section className="page-hero max-container studio-section grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <div className="accent-bar mb-7" />
        <p className="studio-kicker mb-6">Start a project / 01</p>
        <h1 className="max-w-2xl text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[.88] tracking-[-.075em] text-[#e6f1ff]">Tell us what<br />you&apos;re <span className="text-[#4da8ff]">building.</span></h1>
        <p className="mt-8 max-w-md text-base leading-relaxed text-[#91a8c4]">Share a little about the product, website, application, or digital solution you have in mind. We&apos;ll use your note to start the right conversation.</p>
        <a href="mailto:hello@afuchat.com" className="mt-9 inline-flex items-center gap-3 text-sm text-[#91a8c4] hover:text-white"><span className="flex h-9 w-9 items-center justify-center border border-[#4da8ff]/40 text-[#4da8ff]"><Mail className="h-4 w-4" /></span>hello@afuchat.com</a>
        <img src={illSecContact} alt="" aria-hidden="true" loading="lazy" className="page-hero-art mt-10 w-56 opacity-75 sm:w-72" />
      </motion.div>
      <motion.form action="mailto:hello@afuchat.com" method="post" encType="text/plain" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }} className="color-panel rounded-[1.7rem] p-6 sm:p-9">
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
    <section className="atmosphere-band">
      <div className="max-container studio-section-tight">
        <ScrollReveal className="mb-10">
          <p className="studio-kicker mb-5 text-[#d76750]">What happens next</p>
          <h2 className="max-w-2xl text-3xl font-semibold text-[#e6f1ff] sm:text-4xl">A good first conversation is already part of the work.</h2>
        </ScrollReveal>
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            ['01', 'We read the brief', 'We look for the real audience, the desired outcome, and the constraint that matters most.'],
            ['02', 'We find the shape', 'You get a focused response with a possible approach, scope, and next step.'],
            ['03', 'We make it useful', 'If the fit is right, a small team turns the first idea into something people can use.'],
          ].map(([number, title, detail], index) => (
            <ScrollReveal key={number} delay={index * .08} className="scroll-line">
              <p className="studio-mono text-xs text-[#d76750]">{number}</p>
              <h3 className="mt-3 text-sm font-semibold text-[#e6f1ff]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6f89a7]">{detail}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>;
}