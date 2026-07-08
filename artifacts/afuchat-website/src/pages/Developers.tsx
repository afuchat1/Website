import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Terminal, Book, Code2, Globe, Zap, Lock } from 'lucide-react';
import DeveloperSection from '@/components/home/DeveloperSection';
import { illSecDeveloper } from '@/data/illustrations';

const resources = [
  { icon: Terminal, color: '#6C63FF', title: 'API Reference', desc: 'Complete REST and GraphQL documentation for all 8 products with live code examples.', link: 'Read APIs →' },
  { icon: Book, color: '#1F95FF', title: 'Guides & Tutorials', desc: 'Step-by-step instructions for SSO, payment integration, real-time subscriptions, and data sync.', link: 'View Guides →' },
  { icon: Code2, color: '#10B981', title: 'SDKs & Libraries', desc: 'Official client libraries for React, Node.js, Python, iOS, and Android — all open source.', link: 'Get SDKs →' },
];

const capabilities = [
  { icon: Globe, color: '#1F95FF', title: 'Universal Auth', desc: 'One OAuth flow that authenticates users across all eight AfuChat services. No separate integrations required.' },
  { icon: Zap, color: '#F59E0B', title: 'Real-Time Events', desc: 'Subscribe to WebSocket streams for messages, file changes, AI responses and more across the full platform.' },
  { icon: Lock, color: '#16C784', title: 'Zero-Knowledge APIs', desc: 'Access user data with explicit consent scopes. We never expose raw credentials — only permissioned tokens.' },
];

export default function Developers() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero */}
      <div className="max-container container-pad pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-green-400 font-semibold text-xs uppercase tracking-widest mb-3">Developer Platform</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight leading-tight">
              Build for millions.<br />Ship in hours.
            </h1>
            <p className="text-lg text-white/55 max-w-xl leading-relaxed mb-8">
              The AfuChat developer platform gives you a single API to access millions of verified AfuMail users — along with their identity, preferences, files, and AI context — all with explicit consent.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="px-6 py-3 bg-[#16C784] text-white font-semibold text-sm rounded-full hover:bg-[#12b070] transition-colors">
                Read documentation
              </Link>
              <Link href="#" className="px-6 py-3 border border-white/15 text-white/60 font-medium text-sm rounded-full hover:border-white/30 hover:text-white transition-colors">
                View on GitHub
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
            <img src={illSecDeveloper} alt="Developer platform" className="w-full max-w-md mx-auto drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Resources */}
      <div className="max-container container-pad py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <p className="text-green-400 font-semibold text-xs uppercase tracking-widest mb-3">Documentation</p>
          <h2 className="text-3xl font-bold text-white tracking-tight">Everything you need to build</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {resources.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Icon className="w-6 h-6 mb-4" style={{ color: r.color }} />
                <h3 className="text-base font-bold text-white mb-2">{r.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">{r.desc}</p>
                <a href="#" className="text-sm font-semibold hover:underline transition-colors" style={{ color: r.color }}>{r.link}</a>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Platform capabilities */}
      <div className="max-container container-pad py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <p className="text-green-400 font-semibold text-xs uppercase tracking-widest mb-3">Platform Capabilities</p>
          <h2 className="text-3xl font-bold text-white tracking-tight">What you get access to</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Icon className="w-6 h-6 mb-4" style={{ color: c.color }} />
                <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Code section */}
      <DeveloperSection />

      {/* Quickstart */}
      <div className="max-container container-pad py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <p className="text-green-400 font-semibold text-xs uppercase tracking-widest mb-3">Quickstart</p>
          <h2 className="text-3xl font-bold text-white tracking-tight">From zero to production in 4 steps</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { n: '01', title: 'Register your app', body: 'Create a developer account and register your application to receive your Client ID and secret.' },
            { n: '02', title: 'Add the SDK', body: 'Install the AfuChat SDK with npm, pip, or CocoaPods. All platforms share the same conceptual API.' },
            { n: '03', title: 'Implement OAuth', body: 'Use our drop-in auth component or build your own flow against the standard OAuth 2.0 endpoints.' },
            { n: '04', title: 'Call any service', body: 'With a valid session token, every AfuChat service API is available. No further authentication required.' },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <span className="text-5xl font-extrabold text-white/10 block mb-4">{s.n}</span>
              <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
