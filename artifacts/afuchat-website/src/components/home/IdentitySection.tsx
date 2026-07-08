import { illSecIdentity, illSecSecurity } from "@/data/illustrations";
import { motion } from 'framer-motion';
import { Mail, ShieldCheck, LayoutGrid } from 'lucide-react';

const steps = [
  { id: 1, title: 'Create your AfuMail', desc: 'One simple sign-up establishes your primary digital identity across the entire ecosystem.', icon: Mail, color: '#1F95FF' },
  { id: 2, title: 'Identity verified instantly', desc: 'Bank-grade two-factor authentication and AES-256 encryption keep every account protected.', icon: ShieldCheck, color: '#16C784' },
  { id: 3, title: 'All services unlocked', desc: 'Chat, cloud storage, AI, entertainment and more — all open without another login or password.', icon: LayoutGrid, color: '#6C63FF' },
];

export default function IdentitySection() {
  return (
    <section className="section-pad relative">
      <div className="relative z-10 max-container container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-8"
          >
            <img src={illSecIdentity} alt="AfuMail identity and single sign-on" className="w-full max-w-md drop-shadow-2xl" />
            <div className="flex items-center gap-4 w-full max-w-md">
              <img src={illSecSecurity} alt="Security shield" className="w-14 h-14 object-contain flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">Bank-grade security</p>
                <p className="text-white/40 text-xs mt-0.5">AES-256 encryption · 2FA · Zero-knowledge architecture</p>
              </div>
            </div>
          </motion.div>

          {/* Right: flat steps */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3"
            >AfuMail Identity</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
            >
              Sign up once.<br />Access everything.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-lg text-white/55 mb-12 leading-relaxed"
            >
              AfuMail is your universal key. Create it once and every product in the AfuChat ecosystem unlocks automatically.
            </motion.p>

            <div className="flex flex-col gap-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                    className="flex items-start gap-5"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <Icon className="w-6 h-6" style={{ color: step.color }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-bold" style={{ color: step.color }}>0{step.id}</span>
                        <h3 className="text-base font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-white/48 text-sm leading-relaxed">{step.desc}</p>
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
