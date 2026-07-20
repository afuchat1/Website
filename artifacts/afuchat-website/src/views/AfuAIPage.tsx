'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Sparkles, Globe, MessageSquare, Zap, ArrowRight, Copy, Check, ExternalLink, Terminal } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';
import Footer from '@/components/layout/Footer';

/* ─── tiny copy-button ─── */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white/40 hover:text-white/70"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

/* ─── code block ─── */
function CodeBlock({ code, lang = 'ts' }: { code: string; lang?: string }) {
  return (
    <div className="relative rounded-xl bg-[#0d1117] border border-white/[0.06] overflow-hidden font-mono text-[13px] leading-relaxed">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-2 text-white/25 text-[11px]">{lang}</span>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-white/75 whitespace-pre">{code}</pre>
      </div>
      <CopyButton text={code} />
    </div>
  );
}

/* ─── tab switcher ─── */
const tabs = [
  { id: 'search', label: 'Web Search', icon: Globe },
  { id: 'chat',   label: 'AI Chat',    icon: MessageSquare },
  { id: 'stream', label: 'Streaming',  icon: Zap },
];

const CODE: Record<string, string> = {
  search: `import Engagera from "@afuchat1/engagera";

const client = new Engagera({ apiKey: "eng_..." });

// AfuBot crawls the live web and returns cited sources
const result = await client.afubot.search(
  "SpaceX Starship latest launch"
);

console.log(result.answer);   // synthesised answer
result.sources.forEach(s => {
  console.log(s.title, s.url, s.image);
});`,

  chat: `import Engagera from "@afuchat1/engagera";

const client = new Engagera({ apiKey: "eng_..." });

// Full AI completion — AfuBot invoked automatically
const reply = await client.chat.create({
  messages: [
    { role: "system",  content: "You are a helpful assistant." },
    { role: "user",    content: "What happened in tech this week?" },
  ],
});

console.log(reply.content);   // AI answer
console.log(reply.sources);   // live pages AfuBot crawled`,

  stream: `import Engagera from "@afuchat1/engagera";

const client = new Engagera({ apiKey: "eng_..." });

// Token-by-token SSE streaming
for await (const event of client.chat.stream({
  messages: [
    { role: "user", content: "Explain quantum computing" },
  ],
})) {
  if (event.type === "delta")  process.stdout.write(event.text);
  if (event.type === "done")   console.log("\\n", event.sources);
}`,
};

/* ─── capabilities ─── */
const capabilities = [
  {
    icon: Globe,
    title: 'AfuBot — Live Web Crawler',
    desc: 'Spiders live pages in real-time, extracts structured data — titles, images, snippets — and returns cited sources in every response.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    icon: MessageSquare,
    title: 'AI Completions',
    desc: 'General-purpose AI that can internally invoke AfuBot for fresh context. Multi-turn conversations with full message history.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Zap,
    title: 'Token-by-token Streaming',
    desc: 'Server-sent events deliver tokens as they are generated. Build responsive UIs that feel instant, not batch-processed.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
];

/* ─── page ─── */
export default function AfuAIPage() {
  const [activeTab, setActiveTab] = useState('search');
  const product = PRODUCT_DATA.find(p => p.id === 'afuai')!;
  const otherProducts = PRODUCT_DATA.filter(p => p.id !== 'afuai').slice(0, 4);

  return (
    <div className="w-full min-h-screen">

      {/* ── Hero ── */}
      <section className="max-container container-pad pt-8 pb-16 sm:pt-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-[11px] font-semibold uppercase tracking-widest">AfuAI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-[1.05]">
              Intelligence,<br />
              <span className="text-amber-400">built in.</span>
            </h1>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              AfuAI powers a new generation of products that think, search, and respond in real time — starting with Engagera, our live AI chat and search platform.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://engagera.afuchat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition-colors"
              >
                Try Engagera <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.npmjs.com/package/@afuchat1/engagera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 font-semibold text-sm transition-colors"
              >
                <Terminal className="w-4 h-4" /> SDK on npm
              </a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={product.illustration}
              alt="AfuAI"
              className="w-full max-w-sm drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Engagera product showcase ── */}
      <section className="border-t border-white/[0.06] py-20 sm:py-28">
        <div className="max-container container-pad">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-amber-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3">First product</p>
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Meet Engagera.
              </h2>
              <a
                href="https://engagera.afuchat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors mb-1"
              >
                engagera.afuchat.com <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            {/* left — description + capabilities */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-white/50 text-base leading-relaxed mb-10">
                Engagera gives you access to advanced AI models with live web search, image generation, and code execution — all in one clean interface. Powered by AfuBot, our proprietary web crawler that reads the live web so the AI is never working from stale data.
              </p>
              <div className="flex flex-col gap-5">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className={`w-10 h-10 rounded-xl ${cap.bg} flex items-center justify-center flex-shrink-0`}>
                      <cap.icon className={`w-5 h-5 ${cap.color}`} />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{cap.title}</p>
                      <p className="text-white/40 text-sm leading-relaxed">{cap.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* right — product preview frame */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden shadow-2xl shadow-black/40">
                {/* browser chrome */}
                <div className="flex items-center gap-3 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/50" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <span className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/35 text-[11px] font-mono">
                      <Globe className="w-3 h-3" />
                      engagera.afuchat.com
                    </div>
                  </div>
                  <a
                    href="https://engagera.afuchat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/25 hover:text-white/50 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                {/* preview content */}
                <div className="bg-black p-6 min-h-[260px] flex flex-col items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white/50" />
                  </div>
                  <div className="text-center">
                    <p className="text-white text-lg font-semibold mb-1">How can I help you today?</p>
                    <p className="text-white/35 text-sm max-w-xs">
                      Advanced AI with live web search, image generation, code, and more.
                    </p>
                  </div>
                  <div className="w-full max-w-sm mt-2">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                      <span className="text-white/25 text-sm flex-1">Message Engagera...</span>
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-white/40" />
                      </div>
                    </div>
                    <p className="text-center text-white/20 text-[10px] mt-2">Guest mode · 5 free messages</p>
                  </div>
                </div>
                {/* cta bar */}
                <div className="px-4 py-3 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-white/30 text-xs">engagera.afuchat.com</span>
                  <a
                    href="https://engagera.afuchat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-colors"
                  >
                    Open <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SDK section ── */}
      <section className="border-t border-white/[0.06] py-20 sm:py-28">
        <div className="max-container container-pad">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-amber-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3">Developer SDK</p>
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Build with Engagera.
              </h2>
              <a
                href="https://www.npmjs.com/package/@afuchat1/engagera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-sm transition-colors mb-1"
              >
                @afuchat1/engagera <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-white/45 text-base leading-relaxed mt-4 max-w-xl">
              The official TypeScript SDK. Two primitives — <span className="text-white/70 font-medium">AfuBot</span> for live web search and <span className="text-white/70 font-medium">Chat</span> for AI completions — that compose into anything.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* left: install + tab nav */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              {/* install */}
              <div>
                <p className="text-white/35 text-xs font-medium uppercase tracking-widest mb-2">Install</p>
                <CodeBlock lang="bash" code="npm install @afuchat1/engagera" />
              </div>

              {/* tabs */}
              <div>
                <p className="text-white/35 text-xs font-medium uppercase tracking-widest mb-3">Examples</p>
                <div className="flex flex-col gap-1.5">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                        activeTab === tab.id
                          ? 'bg-amber-500/15 border border-amber-500/25 text-amber-300'
                          : 'text-white/40 hover:text-white/70 hover:bg-white/[0.03]'
                      }`}
                    >
                      <tab.icon className="w-4 h-4 flex-shrink-0" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* npm badge */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 flex items-center gap-3 mt-auto">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <Terminal className="w-4 h-4 text-red-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-white/70 text-xs font-semibold">@afuchat1/engagera</p>
                  <p className="text-white/30 text-[11px]">v0.1.2 · MIT · TypeScript</p>
                </div>
                <a
                  href="https://www.npmjs.com/package/@afuchat1/engagera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-white/25 hover:text-white/50 transition-colors flex-shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* right: code */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:col-span-3"
            >
              <CodeBlock code={CODE[activeTab]} lang="typescript" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Ecosystem ── */}
      <section className="border-t border-white/[0.06] py-16">
        <div className="max-container container-pad">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="font-semibold text-xs uppercase tracking-widest mb-3 text-white/30">Ecosystem</p>
            <h2 className="text-2xl font-bold text-white tracking-tight">Works even better together.</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6">
            {otherProducts.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link href={p.path} className="flex items-center gap-3 group">
                  <img src={p.icon3d} alt={`${p.name} icon`} className="w-9 h-9 object-contain flex-shrink-0" loading="lazy" decoding="async" />
                  <span className="text-sm text-white/50 group-hover:text-white transition-colors">{p.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
