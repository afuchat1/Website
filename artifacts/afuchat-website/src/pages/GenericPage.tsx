import { motion } from 'framer-motion';

interface GenericPageProps {
  title: string;
  type: string;
}

export default function GenericPage({ title }: GenericPageProps) {
  return (
    <div className="min-h-[70vh] pt-40 pb-20 flex flex-col items-center">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-headline mb-8"
        >
          {title}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-12 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-[rgba(255,255,255,0.05)] mx-auto mb-6 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
          <p className="text-slate-400">
            The content for the {title} page is currently being drafted. Check back later for updates.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
