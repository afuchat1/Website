'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Terminal, Book, Code2, Globe, Zap, Lock } from 'lucide-react';
import DeveloperSection from '@/components/home/DeveloperSection';
import { illSecDeveloper } from '@/data/illustrations';
import { openCookiePreferences } from '@/lib/cookieConsent';

const _FL = '/assets/afuchat_logo_transparent.png';
const _FT = '/assets/trustpilot_logo.png';
const _FG = '/assets/google_play_badge.png';
const _FP = [
  { n: 'AfuMail',   p: '/products/afumail',   i: '/illustrations/icon3d-afumail.webp' },
  { n: 'AfuChat',   p: '/products/afuchat',   i: '/illustrations/icon3d-afuchat.webp' },
  { n: 'AfuAI',     p: '/products/afuai',     i: '/illustrations/icon3d-afuai.webp' },
  { n: 'AfuCloud',  p: '/products/afucloud',  i: '/illustrations/icon3d-afucloud.webp' },
  { n: 'AfuMovies', p: '/products/afumovies', i: '/illustrations/icon3d-afumovies.webp' },
  { n: 'AfuMall',   p: '/products/afumall',   i: '/illustrations/icon3d-afumall.webp' },
  { n: 'AfuNews',   p: '/products/afunews',   i: '/illustrations/icon3d-afunews.webp' },
  { n: 'AfuBlog',   p: '/products/afublog',   i: '/illustrations/icon3d-afublog.webp' },
];
function PageFooter() {
  const yr = new Date().getFullYear();
  return (
    <footer className="relative">
      <div className="max-container container-pad pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10 md:mb-14">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5"><img src={_FL} alt="AfuChat" className="h-8 w-auto" /><span className="text-white font-bold text-lg">AfuChat</span></Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5">Independent products.<br />Built for the world.</p>
            <div className="flex items-center gap-3 flex-wrap mb-5">
              <a href="https://www.trustpilot.com/review/afuchat.com" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-white/90 transition-colors rounded-full px-3 py-1.5 flex items-center"><img src={_FT} alt="Trustpilot" className="h-5 w-auto" loading="lazy" /></a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"><img src={_FG} alt="Get it on Google Play" className="h-10 w-auto" loading="lazy" /></a>
            </div>
            <p className="text-white/22 text-xs">AfuChat Technologies Limited</p>
          </div>
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">Products</h4>
            <ul className="flex flex-col gap-3.5">{_FP.slice(0,4).map(p=><li key={p.n}><Link href={p.p} className="flex items-center gap-2.5 text-white/38 hover:text-white text-sm transition-colors"><img src={p.i} alt="" className="w-5 h-5 object-contain" loading="lazy"/>{p.n}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">More</h4>
            <ul className="flex flex-col gap-3.5">{_FP.slice(4).map(p=><li key={p.n}><Link href={p.p} className="flex items-center gap-2.5 text-white/38 hover:text-white text-sm transition-colors"><img src={p.i} alt="" className="w-5 h-5 object-contain" loading="lazy"/>{p.n}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">Company</h4>
            <ul className="flex flex-col gap-3">{[{l:'About',h:'/about'},{l:'Developers',h:'/developers'},{l:'Partners',h:'/partners'},{l:'Careers',h:'/about/careers'}].map(x=><li key={x.h}><Link href={x.h} className="text-white/38 hover:text-white text-sm transition-colors">{x.l}</Link></li>)}</ul>
          </div>
        </div>
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/22 text-xs">© {yr} AfuChat Technologies Limited. All rights reserved.</p>
          <div className="flex items-center gap-5">{[{l:'Privacy Policy',h:'/legal/privacy'},{l:'Terms of Service',h:'/legal/terms'},{l:'Cookie Policy',h:'/legal/cookies'}].map(x=><Link key={x.h} href={x.h} className="text-white/28 hover:text-white/60 text-xs transition-colors">{x.l}</Link>)}<button onClick={openCookiePreferences} className="text-white/28 hover:text-white/60 text-xs transition-colors">Manage Cookies</button></div>
        </div>
      </div>
    </footer>
  );
}

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
      <PageFooter />
    </div>
  );
}
