import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { CheckCircle2 } from 'lucide-react';

export default function DeveloperSection() {
  const points = [
    "Unified Authentication SDK",
    "Real-time event subscriptions",
    "Cross-product data APIs"
  ];

  return (
    <section className="section-pad bg-white">
      <div className="max-container container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="flex flex-col items-start">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6 tracking-tight"
            >
              Build on AfuChat.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="text-lg text-[#64748B] mb-8"
            >
              Leverage the power of the AfuChat ecosystem. Integrate your applications with a single API to tap into millions of verified AfuMail users.
            </motion.p>

            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 mb-10"
            >
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-[#0F172A] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#16C784]" />
                  {point}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                href="/developers" 
                className="px-6 py-3 bg-[#0F172A] text-white text-base font-semibold rounded-xl hover:bg-[#1E293B] transition-colors inline-block"
              >
                Read the docs →
              </Link>
            </motion.div>
          </div>

          {/* Right Code Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full bg-[#0F172A] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1E293B] border-b border-[#334155]">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
              <div className="w-3 h-3 rounded-full bg-[#10B981]" />
              <span className="ml-4 text-xs font-mono text-[#94A3B8]">auth.ts</span>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm font-mono leading-relaxed whitespace-pre-wrap">
                <code className="text-[#E2E8F0]">
                  <span className="text-[#FF7B72]">import</span> {'{ '}AfuAuth{' }'} <span className="text-[#FF7B72]">from</span> <span className="text-[#A5D6FF]">'@afuchat/sdk'</span>;<br/>
                  <br/>
                  <span className="text-[#8B949E]">// One AfuMail login → all services</span><br/>
                  <span className="text-[#FF7B72]">const</span> auth = <span className="text-[#FF7B72]">new</span> AfuAuth({'{'} appId: <span className="text-[#A5D6FF]">'your-app'</span> {'}'});<br/>
                  <span className="text-[#FF7B72]">const</span> session = <span className="text-[#FF7B72]">await</span> auth.signIn();<br/>
                  <br/>
                  <span className="text-[#8B949E]">// user is now signed into all 8 services</span><br/>
                  console.log(session.user.afumail);
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}