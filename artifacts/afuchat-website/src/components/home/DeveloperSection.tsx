import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { CheckCircle2 } from 'lucide-react';

export default function DeveloperSection() {
  const points = [
    "Unified Authentication SDK",
    "Real-time event subscriptions",
    "Cross-product data APIs",
    "Webhooks & REST + GraphQL",
  ];

  return (
    <section
      className="section-pad relative"
      style={{
        background: `
          radial-gradient(ellipse at 60% 30%, rgba(10,80,40,0.50) 0%, transparent 55%),
          radial-gradient(ellipse at 20% 70%, rgba(5,50,80,0.30) 0%, transparent 50%),
          #04100a
        `,
      }}
    >
      <div className="relative z-10 max-container container-pad">

        {/* Illustration banner at top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <img
            src="/ill-devheader.jpg"
            alt="Developer platform"
            className="w-full max-w-2xl rounded-3xl shadow-2xl shadow-black/50 border border-white/8"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <div className="flex flex-col items-start">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-green-400 font-semibold text-sm uppercase tracking-widest mb-3"
            >
              Developer Platform
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight leading-tight"
            >
              Build on AfuChat.<br />Reach millions.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/55 mb-8 leading-relaxed"
            >
              Integrate with a single API to tap into millions of verified AfuMail users across the entire ecosystem.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex flex-col gap-3 mb-10 w-full"
            >
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#16C784] flex-shrink-0" />
                  {point}
                </li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-3"
            >
              <Link href="/developers" className="px-6 py-3 bg-[#16C784] text-white text-sm font-bold rounded-xl hover:bg-[#12A870] transition-colors">
                Read the docs →
              </Link>
              <Link href="/developers" className="px-6 py-3 bg-white/8 border border-white/15 text-white text-sm font-medium rounded-xl hover:bg-white/14 transition-colors">
                View SDKs
              </Link>
            </motion.div>
          </div>

          {/* Right: code block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="w-full rounded-2xl overflow-hidden shadow-xl border border-green-500/15"
            style={{ background: 'rgba(4,16,10,0.85)', backdropFilter: 'blur(16px)' }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
              <div className="w-3 h-3 rounded-full bg-[#10B981]" />
              <span className="ml-4 text-xs font-mono text-white/35">auth.ts</span>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm font-mono leading-relaxed whitespace-pre-wrap">
                <code>
                  <span className="text-[#FF7B72]">import</span>{' '}
                  <span className="text-white">{'{ AfuAuth }'}</span>{' '}
                  <span className="text-[#FF7B72]">from</span>{' '}
                  <span className="text-[#A5D6FF]">'@afuchat/sdk'</span>
                  <span className="text-white">;</span>{'\n\n'}
                  <span className="text-[#8B949E]">// One AfuMail login → all 8 services</span>{'\n'}
                  <span className="text-[#FF7B72]">const</span>{' '}
                  <span className="text-[#79C0FF]">auth</span>{' '}
                  <span className="text-white">= </span>
                  <span className="text-[#FF7B72]">new</span>{' '}
                  <span className="text-[#FFA657]">AfuAuth</span>
                  <span className="text-white">{'({'}</span>{' '}
                  <span className="text-[#79C0FF]">appId</span>
                  <span className="text-white">: </span>
                  <span className="text-[#A5D6FF]">'your-app'</span>{' '}
                  <span className="text-white">{'}'});</span>{'\n'}
                  <span className="text-[#FF7B72]">const</span>{' '}
                  <span className="text-[#79C0FF]">session</span>{' '}
                  <span className="text-white">= </span>
                  <span className="text-[#FF7B72]">await</span>{' '}
                  <span className="text-[#79C0FF]">auth</span>
                  <span className="text-white">.</span>
                  <span className="text-[#D2A8FF]">signIn</span>
                  <span className="text-white">();</span>{'\n\n'}
                  <span className="text-[#8B949E]">// Access any AfuChat service</span>{'\n'}
                  <span className="text-[#FF7B72]">const</span>{' '}
                  <span className="text-[#79C0FF]">cloud</span>{' '}
                  <span className="text-white">= </span>
                  <span className="text-[#FF7B72]">await</span>{' '}
                  <span className="text-[#79C0FF]">auth</span>
                  <span className="text-white">.</span>
                  <span className="text-[#D2A8FF]">service</span>
                  <span className="text-white">(</span>
                  <span className="text-[#A5D6FF]">'afucloud'</span>
                  <span className="text-white">);</span>{'\n'}
                  <span className="text-[#FF7B72]">const</span>{' '}
                  <span className="text-[#79C0FF]">ai</span>{' '}
                  <span className="text-white">= </span>
                  <span className="text-[#FF7B72]">await</span>{' '}
                  <span className="text-[#79C0FF]">auth</span>
                  <span className="text-white">.</span>
                  <span className="text-[#D2A8FF]">service</span>
                  <span className="text-white">(</span>
                  <span className="text-[#A5D6FF]">'afuai'</span>
                  <span className="text-white">);</span>
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
