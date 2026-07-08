import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Sparkles, RefreshCw } from 'lucide-react';

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
    desc: 'Start on your phone, finish on desktop. Your ecosystem state synchronises instantly.',
    icon: RefreshCw,
    color: '#6C63FF',
  },
];

export default function FeaturesSection() {
  return (
    <section className="section-pad">
      <div className="max-container container-pad">
        <div className="text-center mb-14 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight"
          >
            Why AfuChat?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.09 }}
                className="bg-white p-8 rounded-2xl border border-[#E2E8F0] flex flex-col items-start"
              >
                {/* bare icon — no background box */}
                <Icon className="w-6 h-6 mb-5" style={{ color: f.color }} />
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{f.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
