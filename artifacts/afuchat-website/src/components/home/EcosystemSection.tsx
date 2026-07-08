import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import { Mail } from 'lucide-react';
import { Link } from 'wouter';

export default function EcosystemSection() {
  const products = PRODUCT_DATA.filter(p => p.id !== 'afumail');

  return (
    <section
      className="section-pad overflow-hidden relative"
      style={{
        backgroundImage: "url('/bg-ecosystem.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-container container-pad">
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Built around your identity.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-blue-200/80"
          >
            AfuMail is the hub. Every service connects to it.
          </motion.p>
        </div>

        {/* Desktop Hub Diagram */}
        <div className="hidden md:flex relative w-full max-w-[800px] aspect-square mx-auto items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute z-20 w-28 h-28 bg-white/10 backdrop-blur-md rounded-2xl border border-[#1F95FF]/60 shadow-lg shadow-blue-500/20 flex flex-col items-center justify-center"
          >
            <Mail className="w-8 h-8 text-[#1F95FF] mb-2" />
            <span className="font-bold text-white text-sm">AfuMail</span>
            <span className="text-[10px] text-[#60BDFF] font-medium px-2 py-0.5 bg-[#1F95FF]/20 rounded-full mt-1">Identity Hub</span>
          </motion.div>

          {products.map((product, i) => {
            const angle = (i * (360 / products.length)) * (Math.PI / 180);
            const radius = 280;
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
                  className="absolute z-10 w-20 h-20 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-sm flex flex-col items-center justify-center group hover:scale-110 transition-transform cursor-pointer hover:border-white/50"
                  style={{ '--p-color': product.color } as any}
                >
                  <div className="absolute inset-0 z-[-1] pointer-events-none origin-center">
                    <svg className="absolute w-[800px] h-[800px] -left-[360px] -top-[360px] overflow-visible">
                      <line
                        x1="400" y1="400"
                        x2={400 - x} y2={400 - y}
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                    </svg>
                  </div>
                  <Icon className="w-6 h-6 mb-1" style={{ color: product.color }} />
                  <span className="text-xs font-medium text-white/90">{product.name}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Mobile List View */}
        <div className="md:hidden flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-[200px] p-6 bg-white/10 backdrop-blur-md border-2 border-[#1F95FF]/50 rounded-2xl shadow-md flex flex-col items-center text-center"
          >
            <Mail className="w-8 h-8 text-[#1F95FF] mb-2" />
            <h3 className="font-bold text-white">AfuMail</h3>
            <span className="text-xs text-[#60BDFF] bg-[#1F95FF]/20 px-3 py-1 rounded-full mt-2">Identity Hub</span>
          </motion.div>

          <div className="w-0.5 h-8 bg-gradient-to-b from-[#1F95FF] to-white/10 -my-4" />

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
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl flex flex-col items-center text-center hover:border-white/50 transition-colors">
                      <Icon className="w-6 h-6 mb-2" style={{ color: product.color }} />
                      <span className="text-sm font-semibold text-white">{product.name}</span>
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
