'use client';
import { motion } from 'framer-motion';
import { Terminal, Book, Code2, Globe, Zap, Lock } from 'lucide-react';
import DeveloperSection from '@/components/home/DeveloperSection';
import { illSecDeveloper } from '@/data/illustrations';
import Footer from '@/components/layout/Footer';

const resources = [
  { icon: Terminal, label: 'REST API',      desc: 'Full CRUD access to every AfuChat product. JSON responses, predictable error handling.',         color: '#16C784' },
  { icon: Code2,    label: 'GraphQL',       desc: 'Flexible queries for complex data needs. Subscriptions for real-time feeds.',                     color: '#6C63FF' },
  { icon: Globe,    label: 'WebSockets',    desc: 'Real-time event streaming for chat, notifications, and live data.',                               color: '#1F95FF' },
  { icon: Book,     label: 'SDKs',          desc: 'Official client libraries for React, Node.js, Python, iOS, and Android.',                        color: '#F59E0B' },
  { icon: Lock,     label: 'AfuMail SSO',   desc: 'Let your users sign in with their AfuMail account. OAuth 2.0 and SAML 2.0 supported.',            color: '#EF4444' },
  { icon: Zap,      label: 'Webhooks',      desc: 'Push notifications to your server when events occur. Reliable delivery with retry logic.',        color: '#EC4899' },
];

export default function Developers() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero */}
      <div className="max-container container-pad pt-12 pb-10 sm:pt-20 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-green-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3">Developer Platform</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight leading-tight">
              Build for millions.<br />Ship in hours.
            </h1>
            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              The AfuChat developer platform gives you flexible APIs to build on top of our standalone services — whether you need cloud storage, real-time messaging, or AI processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://developers.afuchat.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity">
                Read documentation
              </a>
              <a href="https://github.com/afuchat1/website" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-7 py-3.5 text-white/60 font-medium text-sm border border-white/10 rounded-full hover:text-white transition-colors">
                View on GitHub
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className="flex justify-center">
            <img src={illSecDeveloper} alt="AfuChat developer platform" className="w-full max-w-md drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Resources grid */}
      <div className="max-container container-pad py-16 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <p className="text-green-400 font-semibold text-xs uppercase tracking-widest mb-3">Documentation</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Everything you need to build.</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {resources.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <r.icon className="w-7 h-7 mb-3" style={{ color: r.color }} />
              <p className="text-white font-semibold text-sm mb-2">{r.label}</p>
              <p className="text-white/40 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <DeveloperSection />
      <Footer />
    </div>
  );
}
