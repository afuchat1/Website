import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Sparkles, RefreshCw, Zap, Globe } from 'lucide-react';

const features = [
  {
    title: 'One Account Everywhere',
    desc: 'Move seamlessly between chat, cloud, and media without entering another password.',
    icon: ShieldCheck,
    color: '#1F95FF',
  },
  {
    title: 'End-to-End Security',
    desc: 'Your data is encrypted by default. We cannot see your messages, files, or searches.',
    icon: Lock,
    color: '#16C784',
  },
  {
    title: 'AI-Powered',
    desc: 'AfuAI is woven into every product — write better, find files faster, work smarter.',
    icon: Sparkles,
    color: '#F59E0B',
  },
  {
    title: 'Always in Sync',
    desc: 'Start on your phone, finish on desktop. Your ecosystem synchronises instantly.',
    icon: RefreshCw,
    color: '#6C63FF',
  },
  {
    title: 'Blazing Fast',
    desc: 'Global infrastructure ensures sub-100ms response times anywhere in the world.',
    icon: Zap,
    color: '#EC4899',
  },
  {
    title: 'Global Reach',
    desc: 'Available in 50+ countries with localized content and multilingual support.',
    icon: Globe,
    color: '#14B8A6',
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="section-pad relative"
      style={{
        backgroundImage: "url('/bg-features.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 max-container container-pad">

        {/* Header + server illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

          {/* Illustration left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <img
              src="/ill-servers.png"
              alt="Cloud server infrastructure"
              className="w-full max-w-sm drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(0,150,255,0.25))' }}
            />
          </motion.div>

          {/* Text right */}
          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-3"
            >
              Platform Advantages
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 leading-tight"
            >
              Why millions choose<br />AfuChat.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/60 leading-relaxed"
            >
              Built from the ground up for security, speed, and simplicity — everything you need, nothing you don't.
            </motion.p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.07 }}
                className="bg-white/7 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/25 hover:bg-white/12 transition-all flex items-start gap-4"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${f.color}20`, border: `1px solid ${f.color}35` }}
                >
                  <Icon className="w-5 h-5" style={{ color: f.color }} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">{f.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
