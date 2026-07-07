import { motion } from 'framer-motion';
import { Lock, Fingerprint, EyeOff, ServerOff } from 'lucide-react';

export function SecuritySection() {
  const features = [
    {
      title: "End-to-End Encrypted",
      desc: "Your data is encrypted on your device. We can't read your messages, even if we wanted to.",
      icon: Lock
    },
    {
      title: "Zero-Knowledge Architecture",
      desc: "AfuCloud files are mathematically inaccessible to anyone without your private keys.",
      icon: EyeOff
    },
    {
      title: "Biometric Integration",
      desc: "AfuMail auth ties directly to your device's secure enclave (FaceID/TouchID).",
      icon: Fingerprint
    },
    {
      title: "Decentralized Nodes",
      desc: "No single point of failure. Infrastructure distributed across secure global datacenters.",
      icon: ServerOff
    }
  ];

  return (
    <section className="py-32 section-bg-base relative overflow-hidden">
      <div className="orb-secondary w-[800px] h-[800px] top-1/2 right-[-20%] opacity-30"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Features */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="section-headline mb-6">
              Privacy by<br />mathematics.
            </h2>
            <p className="subheadline mb-12">
              Trust shouldn't be required. We've built the AfuChat ecosystem on cryptographic principles that make mass surveillance impossible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.2)] flex items-center justify-center mb-4 text-secondary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-white font-bold mb-2">{f.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex items-center justify-center aspect-square"
          >
            {/* Custom Shield SVG Component */}
            <div className="relative w-64 h-80 z-20">
              <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_50px_rgba(108,99,255,0.3)]">
                <path d="M100 2L18 35V110C18 165 52 214 100 238C148 214 182 165 182 110V35L100 2Z" fill="rgba(108,99,255,0.05)" stroke="url(#paint0_linear)" strokeWidth="2"/>
                <path d="M100 22L34 49V112C34 157 62 198 100 218C138 198 166 157 166 112V49L100 22Z" fill="rgba(108,99,255,0.1)" stroke="url(#paint1_linear)" strokeWidth="1"/>
                <path d="M125 90V75C125 61.1929 113.807 50 100 50C86.1929 50 75 61.1929 75 75V90M65 90H135V160H65V90Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="100" cy="125" r="8" fill="white"/>
                <path d="M100 133V145" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                
                <defs>
                  <linearGradient id="paint0_linear" x1="100" y1="2" x2="100" y2="238" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6C63FF"/>
                    <stop offset="1" stopColor="#1F95FF" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="100" y1="22" x2="100" y2="218" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0.5"/>
                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Background animated rings */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-secondary"
                  style={{
                    width: `${i * 120 + 200}px`,
                    height: `${i * 120 + 200}px`,
                    opacity: 0.2 - (i * 0.05)
                  }}
                  animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                  transition={{ 
                    rotate: { duration: 20 + (i * 5), ease: "linear", repeat: Infinity },
                    scale: { duration: 4, ease: "easeInOut", repeat: Infinity, delay: i }
                  }}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
