import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import { Link } from 'wouter';

export default function EcosystemSection() {
  const products = PRODUCT_DATA.slice(0, 8);

  return (
    <section
      className="section-pad overflow-hidden relative"
      style={{
        background: `
          radial-gradient(ellipse at 80% 50%, rgba(14,80,200,0.35) 0%, transparent 55%),
          radial-gradient(ellipse at 15% 30%, rgba(80,30,200,0.25) 0%, transparent 50%),
          #060e22
        `,
      }}
    >
      <div className="relative z-10 max-container container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3"
            >
              Platform Ecosystem
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight leading-tight"
            >
              One identity.<br />Eight powerful services.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/55 mb-8 leading-relaxed"
            >
              AfuMail sits at the center of everything. Sign in once and every service — chat, AI, cloud, entertainment and more — is instantly available.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="grid grid-cols-2 gap-3"
            >
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <Link href={product.path} key={product.id}>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/6 border border-white/10 hover:bg-white/12 hover:border-white/25 transition-all cursor-pointer group">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${product.color}22` }}>
                        <Icon className="w-4 h-4" style={{ color: product.color }} />
                      </div>
                      <span className="text-sm font-medium text-white/75 group-hover:text-white transition-colors">{product.name}</span>
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <img
              src="/ill-social.jpg"
              alt="AfuChat connected ecosystem"
              className="w-full max-w-lg rounded-2xl shadow-2xl shadow-blue-900/40 border border-white/8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
