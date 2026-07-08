import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '@/data/products';
import { Link } from 'wouter';
import { illSecEcosystem, illSecCta } from '@/data/illustrations';

export default function Ecosystem() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero */}
      <div className="max-container container-pad pt-12 pb-10 sm:pt-20 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3">Platform Ecosystem</p>
            <h1 className="text-[32px] leading-[1.1] sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-5 tracking-tight">
              Everything connected.<br />One account.
            </h1>
            <p className="text-base sm:text-lg text-white/55 max-w-xl leading-relaxed mb-6 sm:mb-8">
              AfuChat is not a single app — it's a living ecosystem. Eight specialized services share one identity, one payment method, and one place to manage them all.
            </p>
            <Link href="/signup" className="flex items-center justify-center sm:inline-flex px-7 py-3.5 bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity">
              Create your free account →
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <img src={illSecEcosystem} alt="Connected ecosystem" className="w-full max-w-[280px] sm:max-w-lg mx-auto drop-shadow-2xl mt-6 sm:mt-0" />
          </motion.div>
        </div>
      </div>

      {/* How it works */}
      <div className="max-container container-pad py-12 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 sm:mb-16">
          <p className="text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-[28px] leading-[1.2] sm:text-4xl font-bold text-white mb-4 tracking-tight">AfuMail is the hub</h2>
          <p className="text-white/55 text-base sm:text-lg max-w-2xl leading-relaxed">
            Every AfuChat service is designed to stand alone but thrive together. Your AfuMail address is your universal passport — it carries your identity, preferences, and payment information across the entire platform.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16">
          {[
            { step: '01', title: 'One Identity', body: 'Your AfuMail address is your single login across all services. No remembering eight different usernames or passwords. Change your password in one place and every service updates instantly.' },
            { step: '02', title: 'Shared Intelligence', body: 'AfuAI learns from how you use the whole ecosystem, not just one app. It can pull your recent AfuCloud files into a chat, summarize AfuNews while you write an AfuBlog post, or remind you of a message from AfuChat.' },
            { step: '03', title: 'Unified Billing', body: 'Premium features across all services are managed from a single subscription. Upgrade once and your benefits apply everywhere — no separate invoices, no payment details stored in eight different places.' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <span className="text-[40px] sm:text-5xl font-extrabold text-white/10 block mb-3 sm:mb-4">{item.step}</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-white/50 sm:text-white/48 text-[13px] sm:text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* All services */}
      <div className="max-container container-pad py-12 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 sm:mb-16">
          <p className="text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3">The Eight Services</p>
          <h2 className="text-[28px] leading-[1.2] sm:text-4xl font-bold text-white mb-4 tracking-tight">Every service, explained</h2>
          <p className="text-white/55 text-base sm:text-lg max-w-2xl leading-relaxed">
            Each product is built for a specific purpose and perfected for it. Together they form a complete digital life platform.
          </p>
        </motion.div>
        <div className="flex flex-col gap-6 sm:gap-8">
          {PRODUCT_DATA.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 items-start sm:items-center bg-white/5 sm:bg-transparent p-5 sm:p-0 rounded-2xl sm:rounded-none"
            >
              <div className="flex items-center gap-4">
                <img src={product.icon3d} alt={`${product.name} icon`} className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0" />
                <div>
                  <h3 className="text-base font-bold text-white">{product.name}</h3>
                  <p className="text-[11px] sm:text-xs font-medium mt-0.5" style={{ color: product.color }}>{product.tagline}</p>
                </div>
              </div>
              <p className="md:col-span-2 text-[13px] sm:text-sm text-white/50 leading-relaxed">{product.description}</p>
              <Link href={product.path} className="text-[13px] sm:text-sm font-medium hover:underline inline-flex items-center mt-2 sm:mt-0" style={{ color: product.color }}>
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-container container-pad py-16 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div className="order-2 lg:order-1 text-center sm:text-left">
            <h2 className="text-[28px] leading-[1.2] sm:text-4xl font-bold text-white mb-4 tracking-tight">Ready to connect everything?</h2>
            <p className="text-white/55 text-base sm:text-lg mb-8 leading-relaxed">Create your free AfuMail account and step into an ecosystem built for the way you actually live and work.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap">
              <Link href="/signup" className="flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto">
                Create free account →
              </Link>
              <Link href="/products" className="flex items-center justify-center text-white/60 sm:text-white/50 font-medium text-sm py-3.5 hover:text-white transition-colors border border-white/10 sm:border-transparent rounded-full sm:rounded-none w-full sm:w-auto">
                Browse products →
              </Link>
            </div>
          </div>
          <img src={illSecCta} alt="Get started with AfuChat" className="order-1 lg:order-2 w-full max-w-[200px] sm:max-w-xs mx-auto drop-shadow-2xl" />
        </motion.div>
      </div>
    </div>
  );
}
