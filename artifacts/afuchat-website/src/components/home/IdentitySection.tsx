import { illSecIdentity, illSecSecurity } from "@/data/illustrations";
import { motion } from 'framer-motion';
import { Mail, ShieldCheck, LayoutGrid } from 'lucide-react';

const steps = [
  { id: 1, title: 'Create your AfuMail', desc: 'A fast, secure, beautiful email experience that stands perfectly on its own.', icon: Mail, color: '#1F95FF' },
  { id: 2, title: 'Bank-grade security', desc: 'Two-factor authentication and AES-256 encryption keep your communications strictly private.', icon: ShieldCheck, color: '#16C784' },
  { id: 3, title: 'Optional SSO', desc: 'If you want to use other AfuChat products, your AfuMail serves as a frictionless, secure login.', icon: LayoutGrid, color: '#6C63FF' },
];

export default function IdentitySection() {
  return (
    <section className="section-pad relative">
      <div className="relative z-10 max-container container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Left: illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6 sm:gap-8 order-1 lg:order-1 mb-2 sm:mb-0"
          >
            <img src={illSecIdentity} alt="AfuMail identity and single sign-on" className="w-full max-w-[240px] sm:max-w-md drop-shadow-2xl" />
            <div className="flex items-center gap-4 w-full max-w-[280px] sm:max-w-md bg-white/5 sm:bg-transparent p-4 sm:p-0 rounded-2xl sm:rounded-none">
              <img src={illSecSecurity} alt="Security shield" className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">Bank-grade security</p>
                <p className="text-white/50 sm:text-white/40 text-[11px] sm:text-xs mt-0.5 leading-tight sm:leading-normal">AES-256 encryption · 2FA · Zero-knowledge architecture</p>
              </div>
            </div>
          </motion.div>

          {/* Right: flat steps */}
          <div className="order-2 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3"
            >AfuMail</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-tight"
            >
              Secure email.<br />Seamless access.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-white/55 mb-10 sm:mb-12 leading-relaxed"
            >
              AfuMail is a world-class email service. And if you choose to explore our other tools, it acts as a secure, universal key to sign in instantly.
            </motion.p>

            <div className="flex flex-col gap-8 sm:gap-10">
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
