import { motion } from 'framer-motion';
import { Mail, ShieldCheck, LayoutGrid } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Create your AfuMail',
    desc: 'One simple sign-up establishes your primary digital identity across the entire ecosystem.',
    icon: Mail,
    color: '#1F95FF',
  },
  {
    id: 2,
    title: 'Identity verified instantly',
    desc: 'Bank-grade security and two-factor authentication keep your account protected.',
    icon: ShieldCheck,
    color: '#16C784',
  },
  {
    id: 3,
    title: 'All services unlocked',
    desc: 'Chat, cloud storage, AI, entertainment and more — all open without another login.',
    icon: LayoutGrid,
    color: '#6C63FF',
  },
];

export default function IdentitySection() {
  return (
    <section
      className="section-pad relative"
      style={{
        backgroundImage: "url('/bg-identity.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-container container-pad">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <img
              src="/ill-auth.jpg"
              alt="Two-factor authentication illustration"
              className="w-full max-w-md rounded-3xl shadow-2xl shadow-black/60 border border-white/10"
            />
            {/* Trust badge */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
              <img src="/ill-shield.png" alt="Security shield" className="w-10 h-10 object-contain" />
              <div>
                <p className="text-white font-semibold text-sm">Bank-grade security</p>
                <p className="text-white/50 text-xs">AES-256 encryption · 2FA · Zero-knowledge</p>
              </div>
            </div>
          </motion.div>

          {/* Right: steps */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3"
            >
              AfuMail Identity
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
            >
              Sign up once.<br />Access everything.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/60 mb-10 leading-relaxed"
            >
              AfuMail is your universal key — create it once and every product in the ecosystem unlocks automatically.
            </motion.p>

            <div className="flex flex-col gap-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white/8 border border-white/12 hover:bg-white/12 transition-colors"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${step.color}22`, border: `1px solid ${step.color}44` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: step.color }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold px-1.5 py-0.5 rounded text-white/60" style={{ background: `${step.color}30` }}>0{step.id}</span>
                        <h3 className="text-base font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
