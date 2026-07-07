import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '@assets/afuchat_logo_transparent.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed top-0 inset-x-0 z-50 h-[60px] flex items-center transition-all duration-300 ${
          isScrolled 
            ? 'bg-[rgba(5,10,15,0.8)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img src={logo} alt="AfuChat Logo" className="w-6 h-6 object-contain" />
            <span className="text-white font-bold tracking-tight text-lg group-hover:text-primary transition-colors">
              AfuChat
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/products" className="text-[14px] text-slate-400 hover:text-white transition-colors">Products</Link>
            <Link href="/ecosystem" className="text-[14px] text-slate-400 hover:text-white transition-colors">Ecosystem</Link>
            <Link href="/developers" className="text-[14px] text-slate-400 hover:text-white transition-colors">Developers</Link>
            <Link href="/about" className="text-[14px] text-slate-400 hover:text-white transition-colors">Company</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-[14px] text-white hover:text-primary transition-colors font-medium">
              Sign in
            </Link>
            <Link href="/signup" className="h-8 px-4 inline-flex items-center justify-center bg-primary text-white text-[14px] font-medium rounded-full hover:bg-[#3FA5FF] transition-colors">
              Get started
            </Link>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050A0F] pt-[60px] px-6">
          <div className="flex flex-col gap-6 pt-8">
            <Link href="/products" className="text-2xl text-white font-medium">Products</Link>
            <Link href="/ecosystem" className="text-2xl text-white font-medium">Ecosystem</Link>
            <Link href="/developers" className="text-2xl text-white font-medium">Developers</Link>
            <Link href="/about" className="text-2xl text-white font-medium">Company</Link>
            <div className="h-[1px] bg-border my-4" />
            <Link href="/login" className="text-xl text-slate-400 font-medium">Sign in</Link>
            <Link href="/signup" className="text-xl text-primary font-medium">Get started</Link>
          </div>
        </div>
      )}
    </>
  );
}
