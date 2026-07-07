import { EcosystemSection } from '@/components/home/EcosystemSection';
import { motion } from 'framer-motion';

export default function Ecosystem() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 max-w-7xl pt-12 pb-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-headline mb-6"
        >
          The connected<br />digital universe.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="subheadline max-w-2xl"
        >
          Explore how our applications work together to create a seamless experience across all your devices.
        </motion.p>
      </div>
      
      <div className="pb-32">
        <EcosystemSection />
      </div>
    </div>
  );
}
