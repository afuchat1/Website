import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import { Link } from 'wouter';
import type React from 'react';

export default function ProductsSection() {
  const featuredProducts = PRODUCT_DATA.slice(0, 8);

  return (
    <section
      className="section-pad relative"
      style={{
        background: `
          radial-gradient(ellipse at 25% 55%, rgba(100,30,200,0.32) 0%, transparent 50%),
          radial-gradient(ellipse at 75% 30%, rgba(20,60,180,0.28) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 90%, rgba(0,140,180,0.15) 0%, transparent 45%),
          #07091e
        `,
      }}
    >
      <div className="relative z-10 max-container container-pad">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3"
            >
              The Full Suite
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-tight"
            >
              Everything you need<br />in one ecosystem.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/55 mb-6 leading-relaxed"
            >
              Eight powerful services. One AfuMail account. No juggling passwords across different platforms.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <Link href="/products" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/8 border border-white/15 text-white font-medium text-sm hover:bg-white/14 transition-colors">
                View all products →
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/ill-community2.jpg"
              alt="Connected community"
              className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl shadow-purple-900/30 border border-white/8"
            />
          </motion.div>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.06 }}
              >
                <Link href={product.path}>
                  <div
                    className="h-full bg-white/6 border border-white/10 rounded-2xl p-5 hover:border-white/30 hover:bg-white/12 transition-all duration-200 cursor-pointer"
                    style={{ '--p-color': product.color } as React.CSSProperties}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${product.color}18`, border: `1px solid ${product.color}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: product.color }} />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5">{product.name}</h3>
                    <p className="text-xs text-white/45 leading-relaxed">{product.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
