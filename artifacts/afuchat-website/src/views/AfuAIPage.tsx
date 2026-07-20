
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { Globe, MessageSquare, Zap, Copy, Check, ArrowRight, Github } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';
import { supabase } from '@/lib/supabase';
import { fetchTokenStats, type TokenStats } from '@/lib/engagera';
import { openCookiePreferences } from '@/lib/cookieConsent';

/* ─────────────────────────────────────────────
   SUPABASE LIVE DATA
───────────────────────────────────────────── */
interface PoolStatus {
  pool_start: string;
  pool_end: string;
  current_time: string;
  is_pool_active: boolean;
  timezone: string;
}

/** Format a raw token count → human-readable (e.g. 3.66M, 12.4K) */
function fmtTokens(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000)     return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
}

function useEngageraStatus() {
  const [pool,   setPool]   = useState<PoolStatus | null>(null);
  const [tokens, setTokens] = useState<TokenStats | null>(null);
  const [tick,   setTick]   = useState(0);

  const refresh = useCallback(async () => {
    const [{ data: poolData }, stats] = await Promise.all([
      supabase.rpc('get_pool_status'),
      fetchTokenStats().catch(() => null),
    ]);
    if (poolData) setPool(poolData as PoolStatus);
    if (stats) setTokens(stats);
  }, []);

  useEffect(() => { refresh(); }, [refresh]);
  // poll every 60 s — token stats update slowly
  useEffect(() => { const id = setInterval(() => { refresh(); setTick(t => t + 1); }, 60_000); return () => clearInterval(id); }, [refresh]);
  // countdown tick every second
  useEffect(() => { const id = setInterval(() => setTick(t => t + 1), 1_000); return () => clearInterval(id); }, []);

  const [resetIn, setResetIn] = useState<string | null>(null);

  useEffect(() => {
    if (!pool) { setResetIn(null); return; }
    const compute = () => {
      const ms = new Date(pool.pool_end).getTime() - Date.now();
      if (ms <= 0) { setResetIn('—'); return; }
      const h = Math.floor(ms / 3_600_000);
      const m = Math.floor((ms % 3_600_000) / 60_000);
      const s = Math.floor((ms % 60_000) / 1_000);
      setResetIn(`${h}h ${String(m).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`);
    };
    compute();
    const id = setInterval(compute, 1_000);
    return () => clearInterval(id);
  }, [pool]);

  return { pool, tokens, resetIn };
}

/* ─────────────────────────────────────────────
   COPY BUTTON
───────────────────────────────────────────── */
function CopyBtn({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  const copy = () => { navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 2000); };
  return (
    <button onClick={copy} className="absolute top-3 right-3 p-1.5 text-white/25 hover:text-white/55 transition-colors">
      {done ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

/* ─────────────────────────────────────────────
   CODE BLOCK
───────────────────────────────────────────── */
function Code({ code, lang = 'typescript' }: { code: string; lang?: string }) {
  return (
    <div className="relative rounded-lg bg-[#0d1117] overflow-hidden font-mono text-[12.5px] leading-relaxed">
      <div className="flex items-center gap-1.5 px-4 py-2 border-b border-white/[0.05]">
        <span className="w-2.5 h-2.5 rounded-full bg-white/8" /><span className="w-2.5 h-2.5 rounded-full bg-white/8" /><span className="w-2.5 h-2.5 rounded-full bg-white/8" />
        <span className="ml-2 text-white/18 text-[10px] font-sans">{lang}</span>
      </div>
      <div className="p-4 overflow-x-auto"><pre className="text-white/65 whitespace-pre">{code}</pre></div>
      <CopyBtn text={code} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   BRAND ICONS (inline SVG / img)
───────────────────────────────────────────── */
function NpmIcon({ className = 'h-3.5 w-auto' }: { className?: string }) {
  return (
    <img src="/assets/npm-brand.svg" alt="npm" className={className} />
  );
}
function EngageraIcon({ className = 'w-4 h-4 rounded' }: { className?: string }) {
  return <img src="/assets/engagera-favicon.png" alt="Engagera" className={className} />;
}
function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return <Github className={className} />;
}

/* ─────────────────────────────────────────────
   CODE EXAMPLES
───────────────────────────────────────────── */
const TABS = [
  { id: 'search', label: 'Web Search', icon: Globe },
  { id: 'chat',   label: 'AI Chat',    icon: MessageSquare },
  { id: 'stream', label: 'Streaming',  icon: Zap },
];
const CODE: Record<string, string> = {
  search:
`import Engagera from "@afuchat1/engagera";

const client = new Engagera({ apiKey: "eng_..." });

// AfuBot crawls the live web and returns cited sources
const result = await client.afubot.search(
  "SpaceX Starship latest launch"
);

console.log(result.answer);
result.sources.forEach(s => {
  console.log(s.title, s.url, s.image, s.snippet);
});`,

  chat:
`import Engagera from "@afuchat1/engagera";

const client = new Engagera({ apiKey: "eng_..." });

const reply = await client.chat.create({
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user",   content: "What happened in tech this week?" },
  ],
  model: "engagera-pro", // or "engagera-auto"
});

console.log(reply.content);  // AI answer
console.log(reply.sources);  // live pages AfuBot crawled`,

  stream:
`import Engagera from "@afuchat1/engagera";

const client = new Engagera({ apiKey: "eng_..." });

// Token-by-token SSE — build responsive streaming UIs
for await (const event of client.chat.stream({
  messages: [{ role: "user", content: "Explain quantum computing" }],
  model: "engagera-pro",
})) {
  if (event.type === "delta") process.stdout.write(event.text);
  if (event.type === "done")  console.log("\\n", event.sources);
}`,
};

/* ─────────────────────────────────────────────
   INLINE FOOTER
───────────────────────────────────────────── */
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
      <div className="max-container container-pad pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10 md:mb-12">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4"><img src={_FL} alt="AfuChat" className="h-7 w-auto" /><span className="text-white font-bold text-base">AfuChat</span></Link>
            <p className="text-white/38 text-sm leading-relaxed mb-4">Independent products.<br />Built for the world.</p>
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <a href="https://www.trustpilot.com/review/afuchat.com" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-white/90 transition-colors rounded-full px-3 py-1.5 flex items-center"><img src={_FT} alt="Trustpilot" className="h-4 w-auto" loading="lazy" /></a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"><img src={_FG} alt="Get it on Google Play" className="h-9 w-auto" loading="lazy" /></a>
            </div>
            <p className="text-white/20 text-xs">AfuChat Technologies Limited</p>
          </div>
          <div>
            <h4 className="text-white/40 font-semibold text-[10px] uppercase tracking-widest mb-4">Products</h4>
            <ul className="flex flex-col gap-3">{_FP.slice(0,4).map(p=><li key={p.n}><Link href={p.p} className="flex items-center gap-2 text-white/35 hover:text-white text-sm transition-colors"><img src={p.i} alt="" className="w-4 h-4 object-contain" loading="lazy"/>{p.n}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className="text-white/40 font-semibold text-[10px] uppercase tracking-widest mb-4">More</h4>
            <ul className="flex flex-col gap-3">{_FP.slice(4).map(p=><li key={p.n}><Link href={p.p} className="flex items-center gap-2 text-white/35 hover:text-white text-sm transition-colors"><img src={p.i} alt="" className="w-4 h-4 object-contain" loading="lazy"/>{p.n}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className="text-white/40 font-semibold text-[10px] uppercase tracking-widest mb-4">Company</h4>
            <ul className="flex flex-col gap-3">{[{l:'About',h:'/about'},{l:'Developers',h:'/developers'},{l:'Partners',h:'/partners'},{l:'Careers',h:'/about/careers'}].map(x=><li key={x.h}><Link href={x.h} className="text-white/35 hover:text-white text-sm transition-colors">{x.l}</Link></li>)}</ul>
          </div>
        </div>
        <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">© {yr} AfuChat Technologies Limited. All rights reserved.</p>
          <div className="flex items-center gap-5">{[{l:'Privacy',h:'/legal/privacy'},{l:'Terms',h:'/legal/terms'},{l:'Cookies',h:'/legal/cookies'}].map(x=><Link key={x.h} href={x.h} className="text-white/22 hover:text-white/55 text-xs transition-colors">{x.l}</Link>)}<button onClick={openCookiePreferences} className="text-white/22 hover:text-white/55 text-xs transition-colors">Manage Cookies</button></div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function AfuAIPage() {
  const [tab, setTab] = useState('search');
  const { pool, tokens, resetIn } = useEngageraStatus();
  const product = PRODUCT_DATA.find(p => p.id === 'afuai')!;
  const others  = PRODUCT_DATA.filter(p => p.id !== 'afuai').slice(0, 6);

  return (
    <div className="w-full min-h-screen">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="max-container container-pad pt-10 pb-14 sm:pt-16 sm:pb-20">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-amber-400 text-[10px] font-semibold uppercase tracking-widest mb-4">AfuAI</p>
            <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.05] mb-4">
              Intelligence,<br /><span className="text-amber-400">built in.</span>
            </h1>
            <p className="text-white/45 text-base leading-relaxed mb-7 max-w-[420px]">
              AfuAI powers a new generation of products that think, search, and respond in real time. Starting with Engagera — live AI chat, web search, and image generation.
            </p>

            {/* CTA row — favicon-only links */}
            <div className="flex flex-wrap items-center gap-5 mb-8">
              <a href="https://engagera.afuchat.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm transition-colors">
                <EngageraIcon />
                Try Engagera
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.npmjs.com/package/@afuchat1/engagera" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 font-medium text-sm transition-colors">
                <NpmIcon className="h-3 w-auto" />
                SDK
              </a>
              <a href="https://github.com/afuchat1/EngageraAi" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 font-medium text-sm transition-colors">
                <GithubIcon className="w-3.5 h-3.5" />
                Source
              </a>
            </div>

            {/* Live status strip */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-white/30 font-mono">
              {pool ? (
                <>
                  <span className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${pool.is_pool_active ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
                    <span className={pool.is_pool_active ? 'text-green-400/80' : 'text-red-400/80'}>
                      Pool {pool.is_pool_active ? 'active' : 'inactive'}
                    </span>
                  </span>
                  <span className="text-white/15">·</span>
                  <span>Resets {resetIn ?? '…'}</span>
                  <span className="text-white/15">·</span>
                  {tokens !== null && (
                    <span className="flex items-center gap-1.5">
                      <span className="text-[#1F95FF]/80 font-semibold tabular-nums">{fmtTokens(tokens.total_tokens)}</span>
                      <span className="text-white/20">tokens used</span>
                    </span>
                  )}
                </>
              ) : (
                <span className="text-white/20">Fetching live status…</span>
              )}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12, duration: 0.45 }}
            className="flex justify-center">
            <img src={product.illustration} alt="AfuAI" className="w-full max-w-[320px] drop-shadow-2xl" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          ENGAGERA PRODUCT
      ══════════════════════════════════════ */}
      <section className="max-container container-pad pb-14 sm:pb-20">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-white/25 text-[10px] font-semibold uppercase tracking-widest mb-3">First product</p>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Meet Engagera.</h2>
            <a href="https://engagera.afuchat.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/25 hover:text-white/55 text-xs transition-colors">
              <EngageraIcon className="w-3.5 h-3.5 rounded" />
              engagera.afuchat.com
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">

          {/* left — description + capabilities */}
          <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-white/42 text-sm leading-relaxed mb-10 max-w-md">
              Engagera gives access to advanced AI models with live web search, image generation, and code execution — all in one clean interface. Powered by AfuBot, our proprietary web crawler that reads the live web so the AI is never working from stale data.
            </p>
            <div className="flex flex-col gap-7">
              {[
                { icon: Globe,         color: '#F59E0B', title: 'AfuBot — Live Web Crawler',
                  desc: 'Spiders live pages in real-time. Extracts og:images, titles, and text snippets. Returns structured citations in every response — no hallucinated URLs.' },
                { icon: MessageSquare, color: '#60A5FA', title: 'AI Completions',
                  desc: 'Multi-turn conversations across all supported models. AfuBot is invoked automatically when the query needs fresh web context, with zero configuration.' },
                { icon: Zap,           color: '#A78BFA', title: 'Token-by-token Streaming',
                  desc: 'Full SSE streaming. Tokens arrive as they are generated. Source citations appended on the done event so UI can render results progressively.' },
              ].map((c, i) => (
                <motion.div key={c.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="flex gap-4">
                  <c.icon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: c.color }} />
                  <div>
                    <p className="text-white text-sm font-semibold mb-1">{c.title}</p>
                    <p className="text-white/38 text-[13px] leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* right — product spec */}
          <motion.div initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="flex flex-col gap-8">

            <div>
              <p className="text-white/20 text-[10px] uppercase tracking-widest font-semibold mb-3">Platform</p>
              <div className="flex items-center gap-3 mb-2">
                <EngageraIcon className="w-7 h-7 rounded-lg" />
                <p className="text-white text-xl font-bold">Engagera</p>
              </div>
              <p className="text-white/35 text-[13px] leading-relaxed mb-4">Advanced AI models · Live web search · Image generation · Code execution</p>
              <a href="https://engagera.afuchat.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors">
                Open Engagera <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div>
              <p className="text-white/20 text-[10px] uppercase tracking-widest font-semibold mb-3">Access tiers</p>
              <div className="flex flex-col gap-2 text-[13px]">
                {[
                  { tier: 'Guest',   detail: '5 free messages · No account needed · All models' },
                  { tier: 'Free',    detail: 'Extended limits · Conversation history · API access' },
                  { tier: 'Pro',     detail: 'Unlimited · Priority inference · Higher rate limits' },
                ].map(r => (
                  <div key={r.tier} className="flex items-baseline gap-3">
                    <span className="text-white/55 font-medium w-10 shrink-0">{r.tier}</span>
                    <span className="text-white/30">{r.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-white/20 text-[10px] uppercase tracking-widest font-semibold mb-3">Models</p>
              <div className="flex flex-col gap-2 text-[13px]">
                {[
                  { model: 'engagera-pro',  detail: 'Flagship · Full web search · Highest accuracy' },
                  { model: 'engagera-auto', detail: 'Fast · Efficient · Everyday tasks' },
                ].map(r => (
                  <div key={r.model} className="flex items-baseline gap-3">
                    <span className="text-white/55 font-mono font-medium text-xs shrink-0">{r.model}</span>
                    <span className="text-white/30">{r.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* live pool status panel */}
            <div>
              <p className="text-white/20 text-[10px] uppercase tracking-widest font-semibold mb-3">Live status</p>
              {pool ? (
                <div className="flex flex-col gap-2 text-[13px]">
                  <div className="flex items-center gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${pool.is_pool_active ? 'bg-green-400 animate-pulse' : 'bg-white/25'}`} />
                    <span className="text-white/55">Token pool</span>
                    <span className={pool.is_pool_active ? 'text-green-400 font-medium' : 'text-white/30'}>
                      {pool.is_pool_active ? 'active' : 'inactive'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 shrink-0" />
                    <span className="text-white/55">Resets in</span>
                    <span className="text-white/55 font-mono">{resetIn ?? '—'}</span>
                  </div>
                  {tokens !== null && (
                    <>
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 shrink-0" />
                        <span className="text-white/55">Tokens used</span>
                        <span className="text-[#1F95FF]/80 font-mono font-semibold tabular-nums">{fmtTokens(tokens.total_tokens)}</span>
                      </div>
                      <div className="flex items-center gap-3 pl-4">
                        <span className="w-1.5 shrink-0" />
                        <span className="text-white/30 text-[12px]">↳ Input</span>
                        <span className="text-white/38 font-mono tabular-nums text-[12px]">{fmtTokens(tokens.input_tokens)}</span>
                      </div>
                      <div className="flex items-center gap-3 pl-4">
                        <span className="w-1.5 shrink-0" />
                        <span className="text-white/30 text-[12px]">↳ Output</span>
                        <span className="text-white/38 font-mono tabular-nums text-[12px]">{fmtTokens(tokens.output_tokens)}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 shrink-0" />
                        <span className="text-white/35 text-[12px]">API requests</span>
                        <span className="text-white/40 font-mono tabular-nums text-[12px]">{tokens.request_count.toLocaleString()}</span>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <p className="text-white/20 text-[13px]">Loading…</p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SDK
      ══════════════════════════════════════ */}
      <section className="max-container container-pad pb-14 sm:pb-20">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
          <p className="text-white/25 text-[10px] font-semibold uppercase tracking-widest mb-3">Developer SDK</p>
          <div className="flex flex-wrap items-baseline gap-5 mb-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Build with Engagera.</h2>
            <div className="flex items-center gap-4">
              <a href="https://www.npmjs.com/package/@afuchat1/engagera" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/28 hover:text-white/60 text-xs transition-colors">
                <NpmIcon className="h-2.5 w-auto" />
                @afuchat1/engagera
              </a>
              <a href="https://github.com/afuchat1/EngageraAi" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/28 hover:text-white/60 text-xs transition-colors">
                <GithubIcon className="w-3 h-3" />
                afuchat1/EngageraAi
              </a>
            </div>
          </div>
          <p className="text-white/38 text-sm leading-relaxed max-w-xl">
            Official TypeScript SDK. Two primitives —{' '}
            <span className="text-white/60 font-medium">AfuBot</span> for live web search and{' '}
            <span className="text-white/60 font-medium">Chat</span> for AI completions — built to compose.
            Supports Node.js, Bun, Deno, and edge runtimes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-10">

          {/* left panel */}
          <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-col gap-7">

            <div>
              <p className="text-white/20 text-[10px] uppercase tracking-widest font-semibold mb-2">Install</p>
              <Code lang="bash" code="npm i @afuchat1/engagera" />
            </div>

            <div>
              <p className="text-white/20 text-[10px] uppercase tracking-widest font-semibold mb-3">Examples</p>
              <div className="flex flex-col">
                {TABS.map(t => (
                  <button key={t.id} onClick={() => setTab(t.id)}
                    className={`flex items-center gap-2.5 py-2.5 border-l-2 pl-3.5 text-[13px] font-medium transition-all text-left ${
                      tab === t.id ? 'border-amber-400 text-white' : 'border-transparent text-white/30 hover:text-white/55 hover:border-white/15'
                    }`}>
                    <t.icon className="w-3.5 h-3.5 shrink-0" />
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-white/20 text-[10px] uppercase tracking-widest font-semibold mb-2">Package</p>
              <div className="text-[12px] space-y-1">
                <div className="flex items-center gap-2">
                  <NpmIcon className="h-2.5 w-auto opacity-60" />
                  <span className="text-white/35 font-mono">v0.1.2</span>
                </div>
                <p className="text-white/25">MIT License · TypeScript</p>
                <p className="text-white/25">ESM + CJS · Edge-compatible</p>
              </div>
            </div>
          </motion.div>

          {/* right — code */}
          <motion.div key={tab} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }}>
            <Code code={CODE[tab]} lang="typescript" />
          </motion.div>
        </div>

        {/* API quick-ref — developer detail */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {[
            { ns: 'client.afubot.search(query)', ret: 'Promise<{ answer, searchQuery, sources[] }>',
              note: 'Synchronous web crawl. Returns a synthesised answer plus an array of cited sources with url, title, image, and snippet.' },
            { ns: 'client.chat.create({ messages })', ret: 'Promise<{ content, sources[] }>',
              note: 'Non-streaming completion. Internally invokes AfuBot when the query needs live data. Accepts system/user/assistant turns.' },
            { ns: 'client.chat.stream({ messages })', ret: 'AsyncIterable<{ type, text, sources }>',
              note: 'Token-by-token SSE. Yields delta events while generating and a final done event with the source citations.' },
          ].map(r => (
            <div key={r.ns}>
              <p className="text-white/60 font-mono text-[11px] mb-1">{r.ns}</p>
              <p className="text-amber-400/70 font-mono text-[10px] mb-2">{r.ret}</p>
              <p className="text-white/30 text-[12px] leading-relaxed">{r.note}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          ECOSYSTEM
      ══════════════════════════════════════ */}
      <section className="max-container container-pad pb-14 sm:pb-16">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-white/25 text-[10px] font-semibold uppercase tracking-widest mb-3">Ecosystem</p>
          <h2 className="text-xl font-bold text-white tracking-tight mb-7">Works even better together.</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-4">
            {others.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link href={p.path} className="flex items-center gap-2.5 group">
                  <img src={p.icon3d} alt={p.name} className="w-8 h-8 object-contain shrink-0" loading="lazy" />
                  <span className="text-[13px] text-white/38 group-hover:text-white transition-colors">{p.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <PageFooter />
    </div>
  );
}
