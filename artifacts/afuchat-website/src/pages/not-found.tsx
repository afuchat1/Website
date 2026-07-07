import { Link } from 'wouter';
import { motion } from 'framer-motion';
import logo from '@assets/afuchat_logo_transparent.png';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center pt-20 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center flex flex-col items-center"
      >
        <img src={logo} alt="AfuChat Logo" className="w-16 h-16 object-contain mb-8 opacity-50 grayscale" />
        
        <h1 className="text-6xl font-bold text-white tracking-tight mb-4">404</h1>
        <p className="text-xl text-slate-400 mb-10 max-w-md">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link href="/" className="h-12 px-8 inline-flex items-center justify-center bg-white text-[#0B1220] font-bold rounded-full hover:bg-slate-200 transition-colors">
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
