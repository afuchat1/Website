import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import { Mail } from 'lucide-react';
import { Link } from 'wouter';

export default function EcosystemSection() {
  const products = PRODUCT_DATA.filter(p => p.id !== 'afumail');

  return (
    <section className="section-pad bg-[#F8FAFC] overflow-hidden">
      <div className="max-container container-pad">
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight"
          >
            Built around your identity.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#64748B]"
          >
            AfuMail is the hub. Every service connects to it.
          </motion.p>
        </div>

        {/* Desktop Hub Diagram (Hidden on Mobile) */}
        <div className="hidden md:flex relative w-full max-w-[800px] aspect-square mx-auto items-center justify-center">
          {/* Central Hub */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute z-20 w-28 h-28 bg-white rounded-2xl border-2 border-[#1F95FF] shadow-lg flex flex-col items-center justify-center"
          >
            <Mail className="w-8 h-8 text-[#1F95FF] mb-2" />
            <span className="font-bold text-[#0F172A] text-sm">AfuMail</span>
            <span className="text-[10px] text-[#1F95FF] font-medium px-2 py-0.5 bg-[#EBF5FF] rounded-full mt-1">Identity Hub</span>
          </motion.div>

          {/* Surrounding Nodes */}
          {products.map((product, i) => {
            const angle = (i * (360 / products.length)) * (Math.PI / 180);
            const radius = 280; // Distance from center
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const Icon = product.icon;

            return (
              <Link href={product.path} key={product.id}>
              <motion.div
                initial={{ opacity: 0, x: 0, y: 0 }}
                whileInView={{ opacity: 1, x, y }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                className="absolute z-10 w-20 h-20 bg-white rounded-xl border border-[#E2E8F0] shadow-sm flex flex-col items-center justify-center group hover:scale-110 transition-transform cursor-pointer"
                style={{ '--p-color': product.color } as any}
              >
                {/* Connection Line */}
                <div 
                  className="absolute inset-0 z-[-1] pointer-events-none origin-center"
                >
                  <svg className="absolute w-[800px] h-[800px] -left-[360px] -top-[360px] overflow-visible">
                    <line 
                      x1="400" y1="400" 
                      x2={400 - x} y2={400 - y} 
                      stroke="#E2E8F0" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4"
                      className="group-hover:stroke-[var(--p-color)] group-hover:stroke-[2px] transition-colors duration-300"
                    />
                  </svg>
                </div>
                
                <Icon className="w-6 h-6 mb-1" style={{ color: product.color }} />
                <span className="text-xs font-medium text-[#0F172A]">{product.name}</span>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--p-color)] rounded-xl transition-colors pointer-events-none opacity-50" />
              </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Mobile List View (Hidden on Desktop) */}
        <div className="md:hidden flex flex-col items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-[200px] p-6 bg-white border-2 border-[#1F95FF] rounded-2xl shadow-md flex flex-col items-center text-center relative z-10"
          >
            <Mail className="w-8 h-8 text-[#1F95FF] mb-2" />
            <h3 className="font-bold text-[#0F172A]">AfuMail</h3>
            <span className="text-xs text-[#1F95FF] bg-[#EBF5FF] px-3 py-1 rounded-full mt-2">Identity Hub</span>
          </motion.div>
          
          <div className="w-0.5 h-8 bg-gradient-to-b from-[#1F95FF] to-[#E2E8F0] -my-4 relative z-0" />

          <div className="w-full grid grid-cols-2 gap-4">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={product.path}>
                    <div className="bg-white border border-[#E2E8F0] p-4 rounded-xl flex flex-col items-center text-center hover:border-[var(--p-color)] transition-colors" style={{ '--p-color': product.color } as any}>
                      <Icon className="w-6 h-6 mb-2" style={{ color: product.color }} />
                      <span className="text-sm font-semibold text-[#0F172A]">{product.name}</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}