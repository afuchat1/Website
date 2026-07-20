'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Globe, MessageSquare, Zap, Copy, Check, ExternalLink, ArrowRight } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';
import { openCookiePreferences } from '@/lib/cookieConsent';

/* ─── inline footer ─── */
const LOGO_SRC = '/assets/afuchat_logo_transparent.png';
const TRUSTPILOT_LOGO = '/assets/trustpilot_logo.png';
const GOOGLE_PLAY_BADGE = '/assets/google_play_badge.png';
const FOOTER_PRODUCTS = [
  { name: 'AfuMail',   path: '/products/afumail',   icon: '/illustrations/icon3d-afumail.webp' },
  { name: 'AfuChat',   path: '/products/afuchat',   icon: '/illustrations/icon3d-afuchat.webp' },
  { name: 'AfuAI',     path: '/products/afuai',     icon: '/illustrations/icon3d-afuai.webp' },
  { name: 'AfuCloud',  path: '/products/afucloud',  icon: '/illustrations/icon3d-afucloud.webp' },
  { name: 'AfuMovies', path: '/products/afumovies', icon: '/illustrations/icon3d-afumovies.webp' },
  { name: 'AfuMall',   path: '/products/afumall',   icon: '/illustrations/icon3d-afumall.webp' },
  { name: 'AfuNews',   path: '/products/afunews',   icon: '/illustrations/icon3d-afunews.webp' },
  { name: 'AfuBlog',   path: '/products/afublog',   icon: '/illustrations/icon3d-afublog.webp' },
];
function PageFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative">
      <div className="max-container container-pad pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10 md:mb-14">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <img src={LOGO_SRC} alt="AfuChat" className="h-8 w-auto" />
              <span className="text-white font-bold text-lg">AfuChat</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5">Independent products.<br />Built for the world.</p>
            <div className="flex items-center gap-3 flex-wrap mb-5">
              <a href="https://www.trustpilot.com/review/afuchat.com" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-white/90 transition-colors rounded-full px-3 py-1.5 flex items-center">
                <img src={TRUSTPILOT_LOGO} alt="Trustpilot" className="h-5 w-auto" loading="lazy" />
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img src={GOOGLE_PLAY_BADGE} alt="Get it on Google Play" className="h-10 w-auto" loading="lazy" />
              </a>
            </div>
            <p className="text-white/22 text-xs">AfuChat Technologies Limited</p>
          </div>
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">Products</h4>
            <ul className="flex flex-col gap-3.5">
              {FOOTER_PRODUCTS.slice(0, 4).map(p => (
                <li key={p.name}><Link href={p.path} className="flex items-center gap-2.5 text-white/38 hover:text-white text-sm transition-colors"><img src={p.icon} alt="" className="w-5 h-5 object-contain" loading="lazy" />{p.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">More</h4>
            <ul className="flex flex-col gap-3.5">
              {FOOTER_PRODUCTS.slice(4).map(p => (
                <li key={p.name}><Link href={p.path} className="flex items-center gap-2.5 text-white/38 hover:text-white text-sm transition-colors"><img src={p.icon} alt="" className="w-5 h-5 object-contain" loading="lazy" />{p.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {[{ label: 'About', href: '/about' }, { label: 'Developers', href: '/developers' }, { label: 'Partners', href: '/partners' }, { label: 'Careers', href: '/about/careers' }].map(l => (
                <li key={l.href}><Link href={l.href} className="text-white/38 hover:text-white text-sm transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/22 text-xs">© {year} AfuChat Technologies Limited. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {[{ label: 'Privacy Policy', href: '/legal/privacy' }, { label: 'Terms of Service', href: '/legal/terms' }, { label: 'Cookie Policy', href: '/legal/cookies' }].map(l => (
              <Link key={l.href} href={l.href} className="text-white/28 hover:text-white/60 text-xs transition-colors">{l.label}</Link>
            ))}
            <button onClick={openCookiePreferences} className="text-white/28 hover:text-white/60 text-xs transition-colors">Manage Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── copy button ─── */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <button onClick={copy} className="absolute top-3 right-3 p-1.5 rounded text-white/30 hover:text-white/60 transition-colors">
      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

/* ─── code block ─── */
function CodeBlock({ code, lang = 'typescript' }: { code: string; lang?: string }) {
  return (
    <div className="relative rounded-lg bg-[#0d1117] overflow-hidden font-mono text-[13px] leading-relaxed">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06]">
        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <span className="ml-2 text-white/20 text-[11px]">{lang}</span>
      </div>
      <div className="p-5 overflow-x-auto">
        <pre className="text-white/70 whitespace-pre">{code}</pre>
      </div>
      <CopyButton text={code} />
    </div>
  );
}

/* ─── tab data ─── */
const TABS = [
  { id: 'search', label: 'Web Search',  icon: Globe },
  { id: 'chat',   label: 'AI Chat',     icon: MessageSquare },
  { id: 'stream', label: 'Streaming',   icon: Zap },
];
const CODE: Record<string, string> = {
  search: `import Engagera from "@afuchat1/engagera";

const client = new Engagera({ apiKey: "eng_..." });

const result = await client.afubot.search(
  "SpaceX Starship latest launch"
);

console.log(result.answer);
result.sources.forEach(s => {
  console.log(s.title, s.url, s.image);
});`,
  chat: `import Engagera from "@afuchat1/engagera";

const client = new Engagera({ apiKey: "eng_..." });

const reply = await client.chat.create({
  messages: [
    { role: "system",  content: "You are a helpful assistant." },
    { role: "user",    content: "What happened in tech this week?" },
  ],
});

console.log(reply.content);
console.log(reply.sources);`,
  stream: `import Engagera from "@afuchat1/engagera";

const client = new Engagera({ apiKey: "eng_..." });

for await (const event of client.chat.stream({
  messages: [{ role: "user", content: "Explain quantum computing" }],
})) {
  if (event.type === "delta") process.stdout.write(event.text);
  if (event.type === "done")  console.log("\\n", event.sources);
}`,
};

/* ─── main page ─── */
export default function AfuAIPage() {
  const [activeTab, setActiveTab] = useState('search');
  const product = PRODUCT_DATA.find(p => p.id === 'afuai')!;
  const otherProducts = PRODUCT_DATA.filter(p => p.id !== 'afuai').slice(0, 4);

  return (
    <div className="w-full min-h-screen">

      {/* ── Hero ── */}
      <section className="max-container container-pad pt-10 pb-20 sm:pt-20 sm:pb-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-amber-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-5">AfuAI</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white mb-5 tracking-tight leading-[1.05]">
              Intelligence,<br /><span className="text-amber-400">built in.</span>
            </h1>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              AfuAI powers a new generation of products that think, search, and respond in real time — starting with Engagera, our live AI chat and search platform.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <a href="https://engagera.afuchat.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm transition-colors">
                Try Engagera <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://www.npmjs.com/package/@afuchat1/engagera" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 font-medium text-sm transition-colors">
                SDK on npm <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.5 }}
            className="flex justify-center">
            <img src={product.illustration} alt="AfuAI" className="w-full max-w-sm drop-shadow-2xl" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Engagera ── */}
      <section className="border-t border-white/[0.06] py-20 sm:py-28">
        <div className="max-container container-pad">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-white/30 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-4">First product</p>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Meet Engagera.</h2>
              <a href="https://engagera.afuchat.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/35 hover:text-white/65 text-sm transition-colors">
                engagera.afuchat.com <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-white/45 text-base leading-relaxed mb-14">
                Engagera gives you access to advanced AI models with live web search, image generation, and code execution. Powered by AfuBot — our proprietary web crawler — the AI reads the live web so it never works from stale data.
              </p>

              <div className="flex flex-col gap-10">
                {[
                  { icon: Globe,         color: '#F59E0B', title: 'AfuBot — Live Web Crawler', desc: 'Spiders live pages in real-time, extracts structured data — titles, images, snippets — and returns cited sources in every response.' },
                  { icon: MessageSquare, color: '#60A5FA', title: 'AI Completions',             desc: 'General-purpose AI that internally invokes AfuBot for fresh context. Multi-turn conversations with full message history.' },
                  { icon: Zap,           color: '#A78BFA', title: 'Token-by-token Streaming',   desc: 'Server-sent events deliver tokens as they are generated. Build responsive interfaces that feel instant, not batch-processed.' },
                ].map((cap, i) => (
                  <motion.div key={cap.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-5">
                    <cap.icon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: cap.color }} />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1.5">{cap.title}</p>
                      <p className="text-white/40 text-sm leading-relaxed">{cap.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-white/25 text-xs uppercase tracking-widest font-semibold mb-3">Platform</p>
                  <p className="text-white text-2xl font-bold mb-2">Engagera</p>
                  <p className="text-white/40 text-sm leading-relaxed mb-5">Advanced AI models · Live web search · Image generation · Code execution</p>
                  <a href="https://engagera.afuchat.com" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm transition-colors">
                    Open Engagera <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="border-t border-white/[0.06] pt-8">
                  <p className="text-white/25 text-xs uppercase tracking-widest font-semibold mb-3">Access</p>
                  <ul className="flex flex-col gap-3 text-sm text-white/50">
                    <li className="flex items-center gap-3"><ArrowRight className="w-3.5 h-3.5 text-white/20 flex-shrink-0" /> Guest mode — 5 free messages, no account required</li>
                    <li className="flex items-center gap-3"><ArrowRight className="w-3.5 h-3.5 text-white/20 flex-shrink-0" /> Free account — extended access to all AI models</li>
                    <li className="flex items-center gap-3"><ArrowRight className="w-3.5 h-3.5 text-white/20 flex-shrink-0" /> Pro — unlimited messages, priority inference</li>
                  </ul>
                </div>
                <div className="border-t border-white/[0.06] pt-8">
                  <p className="text-white/25 text-xs uppercase tracking-widest font-semibold mb-3">Models</p>
                  <ul className="flex flex-col gap-3 text-sm text-white/50">
                    <li className="flex items-center gap-3"><ArrowRight className="w-3.5 h-3.5 text-white/20 flex-shrink-0" /> Engagera Pro — flagship with live web access</li>
                    <li className="flex items-center gap-3"><ArrowRight className="w-3.5 h-3.5 text-white/20 flex-shrink-0" /> Engagera Auto — fast, efficient, everyday tasks</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SDK ── */}
      <section className="border-t border-white/[0.06] py-20 sm:py-28">
        <div className="max-container container-pad">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <p className="text-white/30 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-4">Developer SDK</p>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Build with Engagera.</h2>
              <a href="https://www.npmjs.com/package/@afuchat1/engagera" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/30 hover:text-white/60 text-sm transition-colors">
                @afuchat1/engagera <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-white/40 text-base mt-4 max-w-xl leading-relaxed">
              The official TypeScript SDK. Two primitives —{' '}
              <span className="text-white/65 font-medium">AfuBot</span> for live web search and{' '}
              <span className="text-white/65 font-medium">Chat</span> for AI completions — that compose into anything.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* left */}
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <p className="text-white/25 text-[10px] uppercase tracking-widest font-semibold mb-3">Install</p>
                <CodeBlock lang="bash" code="npm install @afuchat1/engagera" />
              </div>
              <div>
                <p className="text-white/25 text-[10px] uppercase tracking-widest font-semibold mb-4">Examples</p>
                <div className="flex flex-col">
                  {TABS.map(tab => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 py-3 border-l-2 pl-4 text-sm font-medium transition-all text-left ${
                        activeTab === tab.id
                          ? 'border-amber-400 text-white'
                          : 'border-transparent text-white/35 hover:text-white/60 hover:border-white/20'
                      }`}>
                      <tab.icon className="w-4 h-4 flex-shrink-0" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="border-t border-white/[0.06] pt-6">
                <p className="text-white/50 text-xs font-medium mb-1">@afuchat1/engagera</p>
                <p className="text-white/25 text-xs">v0.1.2 · MIT License · TypeScript</p>
              </div>
            </motion.div>

            {/* right — code */}
            <motion.div key={activeTab} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }}
              className="lg:col-span-3">
              <CodeBlock code={CODE[activeTab]} lang="typescript" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Ecosystem ── */}
      <section className="border-t border-white/[0.06] py-16">
        <div className="max-container container-pad">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-white/30 font-semibold text-xs uppercase tracking-widest mb-3">Ecosystem</p>
            <h2 className="text-2xl font-bold text-white tracking-tight">Works even better together.</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6">
            {otherProducts.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <Link href={p.path} className="flex items-center gap-3 group">
                  <img src={p.icon3d} alt={p.name} className="w-9 h-9 object-contain flex-shrink-0" loading="lazy" />
                  <span className="text-sm text-white/45 group-hover:text-white transition-colors">{p.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
