import { motion } from 'framer-motion';
import { Mail, ShieldCheck, LayoutGrid } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Create your AfuMail',
    desc: 'One simple sign-up process to establish your primary digital identity.',
    icon: Mail,
    color: '#1F95FF',
  },
  {
    id: 2,
    title: 'Identity verified',
    desc: 'Bank-grade security and two-factor authentication keep your account safe.',
    icon: ShieldCheck,
    color: '#16C784',
  },
  {
    id: 3,
    title: 'All services unlocked',
    desc: 'Instantly access chat, cloud storage, AI, entertainment and more without logging in again.',
    icon: LayoutGrid,
    color: '#6C63FF',
  },
];

export default function IdentitySection() {
  return (
    <section className="section-pad bg-white">
      <div className="max-container container-pad">
        <div className="text-center mb-14 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-3 tracking-tight"
          >
            Sign up once. Access everything.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#64748B] max-w-xl mx-auto"
          >
            AfuMail is your universal key. Create it once — every product in the ecosystem unlocks automatically.
          </motion.p>
        </div>

        <div className="relative">
          {/* connector line — desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px bg-[#E2E8F0]" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.18 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step number badge with icon */}
                  <div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-[#E2E8F0] bg-white shadow-sm z-10"
                  >
                    <Icon className="w-7 h-7" style={{ color: step.color }} />
                    <span
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center"
                      style={{ background: step.color }}
                    >
                      {step.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">{step.title}</h3>
                  <p className="text-[#64748B] leading-relaxed text-sm max-w-xs mx-auto">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
