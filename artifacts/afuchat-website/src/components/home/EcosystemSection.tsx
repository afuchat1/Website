import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';
import { Link } from 'wouter';

export function EcosystemSection() {
  // Center core is AfuMail, surrounding are others
  const surroundingProducts = PRODUCT_DATA.filter(p => p.id !== 'mail');

  return (
    <section className="py-32 section-bg-light relative overflow-hidden">
      <div className="texture-grid opacity-[0.03]"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="section-headline mb-6"
          >
            Every service,<br />one identity.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="subheadline"
          >
            The AfuChat Ecosystem is deeply integrated. Data flows securely and seamlessly between applications, entirely authenticated by your core AfuMail identity.
          </motion.p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-square md:aspect-[16/10] flex items-center justify-center">
          {/* Static detailed map for interactivity */}
          <div className="relative w-full h-full">
            {/* Center Node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group cursor-pointer">
              <Link href="/products/mail">
                <div className="w-24 h-24 rounded-3xl bg-white flex flex-col items-center justify-center shadow-[0_0_60px_rgba(31,149,255,0.3)] transition-transform duration-300 group-hover:scale-110">
                  <Mail className="w-10 h-10 text-primary mb-1" />
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Core</span>
                </div>
              </Link>
            </div>

            {/* Connecting SVG Lines */}
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-30" overflow="visible">
              {surroundingProducts.map((_, i) => {
                const angle = (i * 360) / surroundingProducts.length;
                const rad = angle * (Math.PI / 180);
                // Adjust radius based on screen size (estimate)
                const rx = 300 * Math.sin(rad);
                const ry = -200 * Math.cos(rad);
                
                return (
                  <g key={i}>
                    <line 
                      x1="50%" y1="50%" 
                      x2={`calc(50% + ${rx}px)`} y2={`calc(50% + ${ry}px)`} 
                      stroke="white" 
                      strokeWidth="1" 
                      strokeDasharray="4 4"
                    />
                    <circle 
                      cx={`calc(50% + ${rx * 0.5}px)`} 
                      cy={`calc(50% + ${ry * 0.5}px)`} 
                      r="2" 
                      fill="#1F95FF"
                    >
                      <animate attributeName="opacity" values="0;1;0" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                );
              })}
            </svg>

            {/* Orbiting Nodes */}
            {surroundingProducts.map((product, i) => {
              const Icon = product.icon;
              const angle = (i * 360) / surroundingProducts.length;
              const rad = angle * (Math.PI / 180);
              const rx = 300 * Math.sin(rad);
              const ry = -200 * Math.cos(rad);

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, type: "spring" }}
                  className="absolute z-20 group"
                  style={{
                    left: `calc(50% + ${rx}px)`,
                    top: `calc(50% + ${ry}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <Link href={product.path}>
                    <div className="relative">
                      <div className="glass-card w-16 h-16 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2" style={{ '--color-border-hover': product.accentHex } as any}>
                        <Icon className="w-7 h-7 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(to bottom right, ${product.accentHex}, #ffffff)` }} />
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-max">
                        <div className="bg-[#030709] border border-[rgba(255,255,255,0.1)] px-4 py-2 rounded-lg shadow-2xl flex flex-col items-center">
                          <span className="text-white font-semibold text-sm mb-1">{product.name}</span>
                          <span className="text-slate-400 text-xs">{product.tagline}</span>
                        </div>
                      </div>
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
