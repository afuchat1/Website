'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Book, Code2, Globe, Lock, Terminal, Zap } from 'lucide-react';
import DeveloperSection from '@/components/home/DeveloperSection';
import { illSecDeveloper } from '@/data/illustrations';
import Footer from '@/components/layout/Footer';

const resources = [
  { icon: Terminal, label: 'REST API', desc: 'Full CRUD access to every AfuChat product. JSON responses, predictable errors.', color: '#8be7c4' },
  { icon: Code2, label: 'GraphQL', desc: 'Flexible queries for complex data needs, with subscriptions for live feeds.', color: '#9d8cff' },
  { icon: Globe, label: 'WebSockets', desc: 'Real time event streaming for chat, notifications, and live data.', color: '#4da8ff' },
  { icon: Book, label: 'SDKs', desc: 'Official client libraries for React, Node.js, Python, iOS, and Android.', color: '#f5b84b' },
  { icon: Lock, label: 'AfuMail SSO', desc: 'OAuth 2.0 and SAML 2.0 authentication through AfuMail.', color: '#ff7e9c' },
  { icon: Zap, label: 'Webhooks', desc: 'Push notifications to your server with reliable delivery and retry logic.', color: '#e7a4ff' },
];

export default function Developers() {
  return <div className="studio-shell">
    <section className="max-container studio-section grid items-center gap-12 lg:grid-cols-[1fr_.82fr] lg:gap-24">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <p className="studio-kicker mb-6 text-[#8be7c4]">Developer platform / Build on AfuChat</p>
        <h1 className="max-w-3xl text-[clamp(3.4rem,7.5vw,7rem)] font-semibold leading-[.88] tracking-[-.075em] text-[#e6f1ff]">Make the<br /><span className="text-[#8be7c4]">connection.</span></h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-[#91a8c4] sm:text-lg">Flexible APIs for building on top of our standalone services, whether you need cloud storage, real time messaging, or AI processing.</p>
        <div className="mt-9 flex flex-wrap gap-3"><a href="https://developers.afuchat.com" target="_blank" rel="noopener noreferrer" className="studio-button studio-button-primary">Read documentation <ArrowUpRight className="h-4 w-4" /></a><a href="https://github.com/afuchat1/website" target="_blank" rel="noopener noreferrer" className="studio-button studio-button-ghost">View on GitHub</a></div>
      </motion.div>
      <div className="border border-white/10 bg-[#0b1b31]/50 p-6"><img src={illSecDeveloper} alt="AfuChat developer platform" className="w-full" /></div>
    </section>
    <section className="border-y border-white/[.08] bg-[#081529]/55"><div className="max-container studio-section"><div className="mb-10"><p className="studio-kicker mb-5 text-[#8be7c4]">Documentation</p><h2 className="text-3xl font-semibold text-[#e6f1ff] sm:text-4xl">A clear path from idea<br />to production.</h2></div><div className="grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">{resources.map(({ icon: Icon, label, desc, color }, index) => <motion.div key={label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }} className="border-b border-white/10 p-6 md:border-l md:first:border-l-0"><Icon className="h-5 w-5" style={{ color }} strokeWidth={1.5} /><h3 className="mt-9 text-sm font-semibold text-[#e6f1ff]">{label}</h3><p className="mt-3 text-sm leading-relaxed text-[#6f89a7]">{desc}</p></motion.div>)}</div></div></section>
    <DeveloperSection />
    <Footer />
  </div>;
}