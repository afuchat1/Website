import { motion } from 'framer-motion';
import { Mail, Plus } from 'lucide-react';

export function FutureSection() {
  return (
    <section className="py-40 section-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[1000px] h-[1000px] bg-primary opacity-[0.03] blur-[150px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-headline mb-6"
        >
          The ecosystem is<br />just beginning.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="subheadline max-w-2xl mx-auto mb-20"
        >
          New services will join. Your AfuMail identity travels with you to every future product — automatically. No migration, no new passwords.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center"
        >
          {/* Core */}
          <div className="absolute z-30">
            <div className="w-16 h-16 rounded-xl bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] flex items-center justify-center shadow-[0_0_30px_rgba(31,149,255,0.2)]">
              <Mail className="w-8 h-8 text-white opacity-80" />
            </div>
          </div>

          {/* Existing nodes faint ring */}
          <div className="absolute w-[200px] h-[200px] rounded-full border border-[rgba(255,255,255,0.05)] z-20"></div>

          {/* Future nodes ring */}
          <div className="absolute w-[400px] h-[400px] rounded-full border border-[rgba(255,255,255,0.1)] z-10 border-dashed">
            <div className="absolute inset-0 animate-orbit-outer">
              {[0, 120, 240].map((angle, i) => (
                <div 
                  key={i}
                  className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.02)] backdrop-blur-sm flex items-center justify-center"
                  style={{ 
                    left: '50%', top: '50%',
                    transform: `rotate(${angle}deg) translateY(-200px) rotate(-${angle}deg)`
                  }}
                >
                  <Plus className="w-5 h-5 text-slate-500" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#030709] via-transparent to-transparent z-40 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
