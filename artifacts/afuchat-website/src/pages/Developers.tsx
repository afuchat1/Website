import { DeveloperSection } from '@/components/home/DeveloperSection';
import { motion } from 'framer-motion';
import { Book, Code, Webhook, Box } from 'lucide-react';

export default function Developers() {
  const resources = [
    { title: "Documentation", desc: "Complete guides for integrating AfuChat services.", icon: Book },
    { title: "API Reference", desc: "Endpoints, request/response schemas, and errors.", icon: Code },
    { title: "Webhooks", desc: "Real-time event streams for your applications.", icon: Webhook },
    { title: "SDKs", desc: "Official libraries for JS, Python, Go, and Ruby.", icon: Box },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] mb-8">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">AfuChat Developer Platform</span>
          </div>
          <h1 className="hero-headline mb-6 text-white">Build the future.</h1>
          <p className="subheadline">
            Robust APIs and SDKs to build powerful applications on top of the AfuChat identity layer.
          </p>
        </motion.div>
      </div>

      <DeveloperSection />

      <div className="container mx-auto px-6 max-w-7xl pt-32">
        <h2 className="text-3xl font-bold text-white mb-12">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, i) => {
            const Icon = res.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 cursor-pointer"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{res.title}</h3>
                <p className="text-slate-400 text-sm">{res.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
