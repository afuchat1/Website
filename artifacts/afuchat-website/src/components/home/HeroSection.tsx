import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'wouter';
import { Mail } from 'lucide-react';
import { PRODUCT_DATA } from '@/data/products';

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } }
  };

  // Filter products for the orbit rings
  const innerRingProducts = PRODUCT_DATA.slice(1, 5);
  const outerRingProducts = PRODUCT_DATA.slice(5, 9);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden section-bg-base">
      {/* Ambient background glow */}
      <div className="orb-primary w-[800px] h-[800px] top-1/4 right-[-20%]"></div>
      <div className="orb-secondary w-[600px] h-[600px] bottom-[-10%] left-[-10%]"></div>
      <div className="texture-grid opacity-[0.02]"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left max-w-2xl"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(31,149,255,0.3)] bg-[rgba(31,149,255,0.08)]">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Introducing the AfuChat Ecosystem</span>
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-headline mb-6 text-white whitespace-pre-line">
              One identity.<br />Every service.
            </motion.h1>

            <motion.p variants={itemVariants} className="subheadline mb-10 max-w-xl">
              Create one AfuMail account. Instantly unlock AfuChat, AfuAI, AfuCloud, AfuMovies, AfuMall, AfuNews, AfuBlog — every service, zero extra sign-ups.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <Link href="/products/mail" className="w-full sm:w-auto h-14 px-8 inline-flex items-center justify-center bg-primary text-white font-medium rounded-full hover:bg-[#3FA5FF] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(31,149,255,0.3)]">
                Create AfuMail →
              </Link>
              <Link href="/ecosystem" className="w-full sm:w-auto h-14 px-8 inline-flex items-center justify-center border border-[rgba(255,255,255,0.2)] text-white font-medium rounded-full hover:bg-[rgba(255,255,255,0.05)] transition-all">
                Explore ecosystem
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050A0F] bg-[#1a2332] flex items-center justify-center overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=transparent`} alt="avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span>Trusted by millions worldwide</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Diagram */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center aspect-square"
          >
            {/* Center Core: AfuMail */}
            <div className="absolute z-30 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-[0_0_40px_rgba(31,149,255,0.4)] relative">
                <div className="absolute inset-0 rounded-2xl bg-primary opacity-20 blur-md animate-pulse-glow"></div>
                <Mail className="w-10 h-10 text-primary relative z-10" />
              </div>
              <span className="mt-4 font-bold text-white tracking-tight">AfuMail Core</span>
            </div>

            {/* Inner Ring */}
            <div className="absolute w-[280px] h-[280px] rounded-full border border-[rgba(31,149,255,0.15)] z-20">
              {!shouldReduceMotion && (
                <div className="absolute inset-0 animate-orbit">
                  {innerRingProducts.map((product, i) => {
                    const Icon = product.icon;
                    const angle = (i * 360) / innerRingProducts.length;
                    return (
                      <div 
                        key={product.id}
                        className="absolute w-12 h-12 -ml-6 -mt-6 rounded-xl glass-card flex items-center justify-center"
                        style={{ 
                          left: '50%', top: '50%',
                          transform: `rotate(${angle}deg) translateY(-140px) rotate(-${angle}deg)`
                        }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Outer Ring */}
            <div className="absolute w-[440px] h-[440px] rounded-full border border-[rgba(255,255,255,0.05)] z-10">
              {!shouldReduceMotion && (
                <div className="absolute inset-0 animate-orbit-outer">
                  {outerRingProducts.map((product, i) => {
                    const Icon = product.icon;
                    const angle = (i * 360) / outerRingProducts.length;
                    return (
                      <div 
                        key={product.id}
                        className="absolute w-14 h-14 -ml-7 -mt-7 rounded-xl glass-card flex items-center justify-center"
                        style={{ 
                          left: '50%', top: '50%',
                          transform: `rotate(${angle}deg) translateY(-220px) rotate(-${angle}deg)`
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: product.accentHex }} />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Connecting lines for static view (fallback) */}
            {shouldReduceMotion && (
              <>
                {innerRingProducts.map((product, i) => {
                  const Icon = product.icon;
                  const angle = (i * 360) / innerRingProducts.length;
                  return (
                    <div 
                      key={product.id}
                      className="absolute w-12 h-12 -ml-6 -mt-6 rounded-xl glass-card flex items-center justify-center z-30"
                      style={{ 
                        left: '50%', top: '50%',
                        transform: `rotate(${angle}deg) translateY(-140px) rotate(-${angle}deg)`
                      }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  );
                })}
              </>
            )}

            {/* Subtle glow behind the whole diagram */}
            <div className="absolute inset-0 bg-primary opacity-[0.03] blur-[120px] rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
