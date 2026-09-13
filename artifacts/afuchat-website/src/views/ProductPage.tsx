'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Check, Copy, MoveUpRight } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';
import { illSecCta, illSecDeveloper, illSecEcosystem, illSecHero } from '@/data/illustrations';
import Footer from '@/components/layout/Footer';
import { notFound } from 'next/navigation';

const ENGAGERA_CODE = {
  search: `import Engagera from "@afuchat1/engagera";

const client = new Engagera({ apiKey: "eng_..." });
const result = await client.afubot.search("SpaceX Starship latest launch");

console.log(result.answer);
result.sources.forEach(source => {
  console.log(source.title, source.url, source.snippet);
});`,
  chat: `import Engagera from "@afuchat1/engagera";

const client = new Engagera({ apiKey: "eng_..." });
const reply = await client.chat.create({
  messages: [
    { role: "user", content: "What happened in tech this week?" },
  ],
  model: "engagera-pro", // or "engagera-auto"
});

console.log(reply.content);
console.log(reply.sources);`,
  stream: `import Engagera from "@afuchat1/engagera";

const client = new Engagera({ apiKey: "eng_..." });
for await (const event of client.chat.stream({
  messages: [{ role: "user", content: "Explain quantum computing" }],
  model: "engagera-pro",
})) {
  if (event.type === "delta") process.stdout.write(event.text);
  if (event.type === "done") console.log(event.sources);
}`,
} as const;

function NpmVersion() {
  const [version, setVersion] = useState<string | null>(null);
  useEffect(() => {
    fetch('/api/npm-version')
      .then((response) => response.json())
      .then((data) => setVersion(data.version ?? null))
      .catch(() => undefined);
  }, []);
  return version ? `v${version}` : 'latest';
}

function Reveal({ children, className = '', delay = 0, distance = 22 }: { children: React.ReactNode; className?: string; delay?: number; distance?: number }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: distance }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16, margin: '0px 0px -8% 0px' }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.65, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CodeCard({ label, code, delay = 0 }: { label: string; code: string; delay?: number }) {
  const [copied, setCopied] = useState(false);
  const reducedMotion = useReducedMotion();
  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.65, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className="engagera-code-card relative overflow-hidden rounded-2xl border border-[#dce7f2] bg-[#07172d] shadow-[0_18px_50px_rgba(18,47,82,.12)]"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="studio-kicker text-[10px] text-[#9db1c8]">{label}</span>
        <button onClick={copy} className="flex items-center gap-1.5 text-[11px] text-white/55 hover:text-white" aria-label={`Copy ${label} example`}>
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 text-[12px] leading-relaxed text-[#dce8f7]"><code>{code}</code></pre>
    </motion.div>
  );
}

function EngageraDetails() {
  const npmVersion = NpmVersion();
  return (
    <>
      <section className="engagera-section engagera-platform-section border-y border-white/[.08] bg-[#081529]/55">
        <div className="engagera-section-art engagera-platform-art" aria-hidden="true">
          <img src={illSecEcosystem} alt="" loading="lazy" />
        </div>
        <div className="engagera-orb engagera-orb-amber" aria-hidden="true" />
        <div className="max-container studio-section-tight">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="studio-kicker mb-4 text-[#f59e0b]">Engagera platform</p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#e6f1ff] sm:text-4xl">AI tools that are ready to use.</h2>
            </div>
            <a href="https://engagera.afuchat.com" target="_blank" rel="noopener noreferrer" className="engagera-button studio-button text-white" style={{ background: '#f59e0b' }}>
              Open Engagera <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <Reveal>
              <p className="max-w-2xl text-base leading-relaxed text-[#91a8c4]">
                Engagera gives developers access to advanced AI models with live web search, image generation, code execution, and responsive streaming in one clean interface. AfuBot adds current web context and structured citations when an answer needs fresh information.
              </p>
              <div className="mt-9 grid gap-7 sm:grid-cols-3">
                {[
                  ['AfuBot', 'Live web crawling with titles, snippets, images, and cited URLs.'],
                  ['AI chat', 'Multi-turn completions across Engagera Pro and Auto models.'],
                  ['Streaming', 'Token-by-token SSE events for responsive applications.'],
                ].map(([title, detail], index) => (
                  <Reveal key={title} delay={0.08 + index * 0.08} className="engagera-feature">
                    <p className="text-lg font-semibold text-[#e6f1ff]">{title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#6f89a7]">{detail}</p>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal className="engagera-access-card rounded-2xl border border-white/10 bg-[#0c1d35]/75 p-6" delay={0.1}>
              <p className="studio-kicker mb-4 text-[#9d8cff]">How to get access</p>
              <ol className="space-y-5">
                {[
                  ['1', 'Open Engagera', 'Create an account or sign in at engagera.afuchat.com.'],
                  ['2', 'Create an API key', 'Open Developer settings and create a key beginning with eng_.'],
                  ['3', 'Install the SDK', 'Run npm i @afuchat1/engagera, then pass the key to the client.'],
                ].map(([number, title, detail]) => (
                  <li key={number} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f59e0b]/15 text-xs font-semibold text-[#f59e0b]">{number}</span>
                    <div>
                      <p className="text-sm font-semibold text-[#e6f1ff]">{title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-[#6f89a7]">{detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-6 rounded-xl bg-[#07172d] px-4 py-3 font-mono text-xs text-[#f5b84b]">
                npm i @afuchat1/engagera
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-12 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-2">
            <div>
              <p className="studio-kicker mb-4 text-[#5d7694]">Access tiers</p>
              <div className="engagera-list space-y-3">
                {[
                  ['Guest', '5 free messages · no account needed · all models'],
                  ['Free', 'Extended limits · conversation history · API access'],
                  ['Pro', 'Unlimited · priority inference · higher rate limits'],
                ].map(([name, detail]) => (
                  <div key={name} className="engagera-list-row flex gap-4 text-sm">
                    <span className="w-14 shrink-0 font-medium text-[#e6f1ff]">{name}</span>
                    <span className="text-[#6f89a7]">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="studio-kicker mb-4 text-[#5d7694]">Models</p>
              <div className="engagera-list space-y-3 text-sm">
                <div className="engagera-list-row"><span className="font-mono text-[#e6f1ff]">engagera-pro</span><span className="ml-4 text-[#6f89a7]">Flagship · full web search · highest accuracy</span></div>
                <div className="engagera-list-row"><span className="font-mono text-[#e6f1ff]">engagera-auto</span><span className="ml-4 text-[#6f89a7]">Fast · efficient · everyday tasks</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="engagera-section engagera-developer-section relative">
        <div className="engagera-section-art engagera-developer-art" aria-hidden="true">
          <img src={illSecDeveloper} alt="" loading="lazy" />
        </div>
        <div className="engagera-orb engagera-orb-mint" aria-hidden="true" />
        <div className="max-container studio-section-tight">
        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="studio-kicker mb-4 text-[#5d7694]">Developer SDK</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#e6f1ff]">Build with Engagera.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#6f89a7]">Official TypeScript SDK for Node.js, Bun, Deno, and edge runtimes. Use AfuBot for live search and Chat for completions.</p>
          </div>
          <div className="flex items-center gap-4 text-xs text-[#6f89a7]">
            <a href="https://www.npmjs.com/package/@afuchat1/engagera" target="_blank" rel="noopener noreferrer" className="hover:text-white"><span className="font-semibold text-[#f59e0b]">npm</span> @afuchat1/engagera {npmVersion}</a>
            <a href="https://github.com/afuchat1/EngageraAi" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub <ArrowUpRight className="inline h-3 w-3" /></a>
          </div>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          <CodeCard label="Web search" code={ENGAGERA_CODE.search} delay={0.04} />
          <CodeCard label="AI chat" code={ENGAGERA_CODE.chat} delay={0.12} />
          <CodeCard label="Streaming" code={ENGAGERA_CODE.stream} delay={0.2} />
        </div>
        <Reveal className="mt-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
          {[
            ['client.afubot.search(query)', 'Promise<{ answer, searchQuery, sources[] }>', 'Synchronous web crawl with a synthesized answer and cited sources.'],
            ['client.chat.create({ messages })', 'Promise<{ content, sources[] }>', 'Non-streaming completion with optional live web context.'],
            ['client.chat.stream({ messages })', 'AsyncIterable<{ type, text, sources }>', 'SSE delta events followed by a final done event with citations.'],
          ].map(([name, result, detail]) => (
            <div key={name} className="engagera-reference-card">
              <p className="font-mono text-xs text-[#e6f1ff]">{name}</p>
              <p className="mt-2 font-mono text-[10px] text-[#f59e0b]">{result}</p>
              <p className="mt-2 text-xs leading-relaxed text-[#6f89a7]">{detail}</p>
            </div>
          ))}
        </Reveal>
        <Reveal className="engagera-cta-band mt-16 grid items-center gap-8 overflow-hidden rounded-[2rem] bg-[#0b1b31] px-7 py-8 sm:px-10 lg:grid-cols-[1fr_auto_auto]">
          <div className="relative z-10">
            <p className="studio-kicker mb-4 text-[#8be7c4]">Ready when you are</p>
            <h3 className="max-w-xl text-2xl font-semibold tracking-tight text-[#e6f1ff] sm:text-3xl">Ship your next AI feature with a live web context.</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#91a8c4]">Start in the hosted app, create a key, and move from your first request to production code with the same SDK.</p>
          </div>
          <img src={illSecCta} alt="" loading="lazy" aria-hidden="true" className="engagera-cta-art" />
          <a href="https://engagera.afuchat.com" target="_blank" rel="noopener noreferrer" className="engagera-button studio-button relative z-10 bg-[#f59e0b] text-white">Start building <ArrowUpRight className="h-4 w-4" /></a>
        </Reveal>
        </div>
      </section>
    </>
  );
}

export default function ProductPage({ id }: { id: string }) {
  const product = PRODUCT_DATA.find((item) => item.id === id);
  if (!product) notFound();
  const reducedMotion = useReducedMotion();
  const Icon = product!.icon;
  const otherProducts = PRODUCT_DATA.filter((item) => item.id !== product!.id).slice(0, 4);
  return <div className={product!.id === 'engagera' ? 'studio-shell engagera-page' : 'studio-shell atmosphere-page'}>
    <section className={`max-container studio-section grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-24 ${product!.id === 'engagera' ? 'engagera-hero-section' : 'page-hero'}`}>
      {product!.id === 'engagera' && <div className="engagera-section-art engagera-hero-art" aria-hidden="true"><img src={illSecHero} alt="" /></div>}
      <motion.div initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={reducedMotion ? { duration: 0 } : undefined}>
        <div className="mb-7 flex items-center gap-3"><Icon className="h-6 w-6" style={{ color: product!.color }} strokeWidth={1.5} /><span className="studio-kicker text-[9px] text-[#5d7694]">{product!.category}</span></div>
        <h1 className="text-[clamp(3.4rem,7vw,6.7rem)] font-semibold leading-[.88] tracking-[-.075em] text-[#e6f1ff]">{product!.name}</h1>
        <p className="mt-7 max-w-lg text-xl font-medium leading-snug" style={{ color: product!.color }}>{product!.tagline}</p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[#91a8c4]">{product!.description}</p>
        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">{product!.features.map((feature) => <span key={feature} className="flex items-center gap-2 text-xs text-[#91a8c4]"><Check className="h-3.5 w-3.5" style={{ color: product!.color }} />{feature}</span>)}</div>
         <div className="mt-9 flex flex-wrap gap-3">
           <a href={product!.website} target="_blank" rel="noopener noreferrer" className="studio-button text-white" style={{ background: product!.color }}>Visit product <ArrowUpRight className="h-4 w-4" /></a>
           {product!.github && <a href={product!.github} target="_blank" rel="noopener noreferrer" className="studio-button studio-button-ghost">View on GitHub</a>}
         </div>
      </motion.div>
         <motion.div initial={reducedMotion ? false : { opacity: 0, scale: .93 }} animate={{ opacity: 1, scale: 1 }} transition={reducedMotion ? { duration: 0 } : { delay: .1 }} className="page-hero-art relative"><div className="mb-7 flex justify-between pb-4 text-[10px] text-[#5d7694] studio-mono"><span>{product!.name.toUpperCase()} / PRODUCT VIEW</span><span>ACTIVE</span></div><img src={product!.illustration} alt={product!.name} className="max-h-[560px] w-full scale-[1.06] object-contain drop-shadow-2xl" /></motion.div>
    </section>
      {product!.id === 'engagera' ? <EngageraDetails /> : <section className="atmosphere-band"><div className="max-container studio-section-tight grid items-center gap-12 lg:grid-cols-[.65fr_1fr] lg:gap-24"><div><div className="accent-bar mb-7" /><p className="studio-kicker mb-5 text-[#9d8cff]">AfuChat Technologies / Company product</p><h2 className="text-3xl font-semibold leading-tight text-[#e6f1ff] sm:text-4xl">Part of the Afu ecosystem.</h2><p className="mt-5 max-w-md text-sm leading-relaxed text-[#6f89a7]">AfuChat Technologies develops products across communication, email, AI technology, and entertainment.</p></div><img src={illSecEcosystem} alt="AfuChat Technologies product ecosystem" loading="lazy" className="mx-auto w-full max-w-md" /></div></section>}
    <section className="max-container studio-section-tight"><div className="mb-8 flex items-center justify-between"><p className="studio-kicker text-[#5d7694]">Continue exploring</p><Link href="/products" className="studio-link flex items-center gap-2 text-xs">Product index <ArrowUpRight className="h-3.5 w-3.5" /></Link></div><div className="grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">{otherProducts.map((item) => { const OtherIcon = item.icon; return <Link key={item.id} href={item.path} className="group flex items-center gap-3 border-b border-white/10 px-1 py-5 sm:border-l sm:px-5 first:sm:border-l-0"><OtherIcon className="h-5 w-5" style={{ color: item.color }} strokeWidth={1.5} /><span className="text-sm text-[#91a8c4] group-hover:text-white">{item.name}</span><MoveUpRight className="ml-auto h-3.5 w-3.5 text-[#5d7694] group-hover:text-[#4da8ff]" /></Link>; })}</div></section>
    <Footer />
  </div>;
}