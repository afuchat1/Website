import { illSecDeveloper } from "@/data/illustrations";
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function DeveloperSection() {
  const points = [
    "Standalone APIs — Integrate only the services you need",
    "Real-time event subscriptions via WebSocket and webhooks",
    "REST + GraphQL APIs for complete control",
    "Official SDKs for React, Node.js, Python, iOS, Android",
  ];

  return (
    <section className="section-pad relative">
      <div className="relative z-10 max-container container-pad">
        {/* Top illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex justify-center mb-10 sm:mb-16"
        >
          <img src={illSecDeveloper} alt="AfuChat developer platform" className="w-full max-w-[240px] sm:max-w-sm drop-shadow-2xl" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-green-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3"
            >Developer Platform</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 tracking-tight leading-tight"
            >Build on AfuChat.<br />Reach millions.</motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-white/55 mb-8 sm:mb-10 leading-relaxed"
            >Integrate robust, standalone APIs to tap into our powerful infrastructure. Build alongside world-class tools.</motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="flex flex-col gap-4 sm:gap-5 mb-8 sm:mb-10"
            >
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/65">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 mt-1.5" />
                  <span className="leading-snug sm:leading-normal">{point}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center sm:text-left"
            >
              <Link href="/developers" className="inline-block py-3 sm:py-0 text-green-400 font-semibold text-sm hover:text-green-300 transition-colors border border-green-400/20 sm:border-transparent rounded-full sm:rounded-none">Read the docs →</Link>
              <Link href="/developers" className="inline-block py-3 sm:py-0 text-white/60 sm:text-white/40 font-medium text-sm hover:text-white/70 transition-colors border border-white/10 sm:border-transparent rounded-full sm:rounded-none">View SDKs →</Link>
            </motion.div>
          </div>

          {/* Right: code block — dark surface, no heavy border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.5 }}
            className="w-full rounded-2xl overflow-hidden shadow-xl mt-4 sm:mt-0"
            style={{ background: 'rgba(4,16,10,0.90)' }}
          >
            <div className="flex items-center gap-2 px-4 py-3" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#EF4444]" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#F59E0B]" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10B981]" />
              <span className="ml-4 text-[10px] sm:text-xs font-mono text-white/35">auth.ts</span>
            </div>
            <div className="p-4 sm:p-6 overflow-x-auto">
              <pre className="text-[11px] sm:text-sm font-mono leading-relaxed whitespace-pre-wrap sm:whitespace-pre"><code>
<span className="text-[#FF7B72]">import</span>{' '}<span className="text-white">{'{ AfuCloud, AfuChat }'}</span>{' '}<span className="text-[#FF7B72]">from</span>{' '}<span className="text-[#A5D6FF]">'@afuchat/sdk'</span><span className="text-white">;</span>{'\n\n'}
<span className="text-[#8B949E]">// Initialize standalone clients</span>{'\n'}
<span className="text-[#FF7B72]">const</span>{' '}<span className="text-[#79C0FF]">cloud</span>{' '}<span className="text-white">= </span><span className="text-[#FF7B72]">new</span>{' '}<span className="text-[#FFA657]">AfuCloud</span><span className="text-white">{'({'}</span>{' '}<span className="text-[#79C0FF]">apiKey</span><span className="text-white">: </span><span className="text-[#A5D6FF]">'sk_123...'</span>{' '}<span className="text-white">{'}'});</span>{'\n'}
<span className="text-[#FF7B72]">const</span>{' '}<span className="text-[#79C0FF]">chat</span>{' '}<span className="text-white">= </span><span className="text-[#FF7B72]">new</span>{' '}<span className="text-[#FFA657]">AfuChat</span><span className="text-white">{'({'}</span>{' '}<span className="text-[#79C0FF]">apiKey</span><span className="text-white">: </span><span className="text-[#A5D6FF]">'sk_456...'</span>{' '}<span className="text-white">{'}'});</span>{'\n\n'}
<span className="text-[#8B949E]">// Use exactly what you need</span>{'\n'}
<span className="text-[#FF7B72]">const</span>{' '}<span className="text-[#79C0FF]">file</span>{' '}<span className="text-white">= </span><span className="text-[#FF7B72]">await</span>{' '}<span className="text-[#79C0FF]">cloud</span><span className="text-white">.</span><span className="text-[#D2A8FF]">upload</span><span className="text-white">(</span><span className="text-[#79C0FF]">data</span><span className="text-white">);</span>{'\n'}
<span className="text-[#FF7B72]">await</span>{' '}<span className="text-[#79C0FF]">chat</span><span className="text-white">.</span><span className="text-[#D2A8FF]">sendMessage</span><span className="text-white">({'{'}</span>{' '}<span className="text-[#79C0FF]">text</span><span className="text-white">: </span><span className="text-[#A5D6FF]">'File ready!'</span><span className="text-white">, </span><span className="text-[#79C0FF]">attachments</span><span className="text-white">: [</span><span className="text-[#79C0FF]">file</span><span className="text-white">.</span><span className="text-[#79C0FF]">id</span><span className="text-white">] {'}'});</span>
              </code></pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
