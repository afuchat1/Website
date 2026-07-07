import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function DeveloperSection() {
  return (
    <section className="py-32 section-bg-dark relative overflow-hidden border-t border-[rgba(255,255,255,0.05)]">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="section-headline mb-6">
              Build on AfuChat's<br />platform.
            </h2>
            <p className="subheadline mb-10">
              Integrate the AfuMail identity layer into your own applications. Give your users instant access to the entire AfuChat ecosystem with three lines of code.
            </p>

            <ul className="space-y-6 mb-12">
              {[
                "Drop-in OAuth 2.0 authentication",
                "Access to user social graphs (with permission)",
                "Read/write access to AfuCloud storage"
              ].map((prop, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-[rgba(22,199,132,0.1)] rounded-full p-1">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-white font-medium">{prop}</span>
                </li>
              ))}
            </ul>

            <Link href="/developers" className="inline-flex items-center gap-2 text-primary font-medium hover:text-white transition-colors group">
              Read the developer docs 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Code Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary opacity-[0.05] blur-[100px] rounded-full"></div>
            
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl relative border-[rgba(255,255,255,0.1)]">
              {/* Window Controls */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[rgba(0,0,0,0.4)] border-b border-[rgba(255,255,255,0.05)]">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-4 text-xs text-slate-500 font-mono">auth.ts</span>
              </div>
              
              {/* Code Content */}
              <div className="p-6 overflow-x-auto text-sm font-mono leading-loose bg-[#0d1117]">
                <pre>
<span className="text-[#ff7b72]">import</span> <span className="text-white">{'{'}</span> <span className="text-[#d2a8ff]">AfuAuth</span> <span className="text-white">{'}'}</span> <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'@afuchat/sdk'</span><span className="text-white">;</span>

<span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">auth</span> <span className="text-[#ff7b72]">=</span> <span className="text-[#ff7b72]">new</span> <span className="text-[#d2a8ff]">AfuAuth</span><span className="text-white">({'{'}</span>
  <span className="text-[#79c0ff]">clientId</span><span className="text-white">:</span> <span className="text-[#a5d6ff]">'your-app-id'</span>
<span className="text-white">{'}'});</span>

<span className="text-[#8b949e]">{"// One AfuMail login → access to all services"}</span>
<span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">user</span> <span className="text-[#ff7b72]">=</span> <span className="text-[#ff7b72]">await</span> <span className="text-[#79c0ff]">auth</span><span className="text-white">.</span><span className="text-[#d2a8ff]">signIn</span><span className="text-white">();</span>

<span className="text-[#79c0ff]">console</span><span className="text-white">.</span><span className="text-[#d2a8ff]">log</span><span className="text-white">(</span><span className="text-[#79c0ff]">user</span><span className="text-white">.</span><span className="text-[#79c0ff]">services</span><span className="text-white">);</span>
<span className="text-[#8b949e]">{"// ['chat', 'ai', 'cloud', 'movies', ...]"}</span>
                </pre>
              </div>

              {/* Gradient overlays to soften edges */}
              <div className="absolute top-12 left-0 right-0 h-4 bg-gradient-to-b from-[#0d1117] to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0d1117] to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
