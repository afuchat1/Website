import { motion } from 'framer-motion';
import { Mail, ShieldCheck, Zap } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';

export function IdentitySection() {
  return (
    <section className="py-32 section-bg-base relative overflow-hidden">
      <div className="orb-primary w-[600px] h-[600px] top-1/2 left-[-20%] opacity-50"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="section-headline mb-6"
          >
            Sign up once.<br />Access everything.
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-[rgba(255,255,255,0.05)] -translate-y-1/2 z-0">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Connector Line (Mobile) */}
          <div className="block lg:hidden absolute top-[10%] bottom-[10%] left-1/2 w-[2px] bg-[rgba(255,255,255,0.05)] -translate-x-1/2 z-0">
            <motion.div 
              className="w-full bg-primary"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="z-10 flex flex-col items-center w-full lg:w-1/3"
          >
            <div className="w-24 h-24 rounded-2xl bg-[#030709] border border-[rgba(255,255,255,0.1)] flex items-center justify-center mb-6 shadow-xl relative">
              <div className="absolute -inset-2 bg-primary opacity-20 blur-xl rounded-full"></div>
              <Mail className="w-10 h-10 text-white relative z-10" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Create AfuMail</h3>
            <p className="text-slate-400 text-center text-sm px-4">Claim your unique @afu.chat identity. Fast, secure, and permanently yours.</p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5 }}
            className="z-10 flex flex-col items-center w-full lg:w-1/3 mt-12 lg:mt-0"
          >
            <div className="w-24 h-24 rounded-2xl bg-[#030709] border border-primary flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(31,149,255,0.2)] relative">
              <ShieldCheck className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Identity Verified</h3>
            <p className="text-slate-400 text-center text-sm px-4">Military-grade encryption locks in your identity across the entire network.</p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 1 }}
            className="z-10 flex flex-col items-center w-full lg:w-1/3 mt-12 lg:mt-0"
          >
            <div className="w-32 h-32 relative mb-2 flex items-center justify-center">
              <div className="absolute inset-0 bg-success opacity-20 blur-2xl rounded-full"></div>
              <Zap className="w-12 h-12 text-success relative z-10" />
              
              {/* Mini icons exploding out */}
              {PRODUCT_DATA.slice(1, 6).map((product, i) => {
                const Icon = product.icon;
                const angle = (i * 360) / 5;
                const rad = angle * (Math.PI / 180);
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: Math.sin(rad) * 60, 
                      y: -Math.cos(rad) * 60 
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 + (i * 0.1) }}
                    className="absolute w-8 h-8 rounded-lg bg-[#07101A] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shadow-lg"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </motion.div>
                );
              })}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 mt-4">Everything Unlocked</h3>
            <p className="text-slate-400 text-center text-sm px-4">Instant access to Chat, Cloud, AI, and every other AfuChat service.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
