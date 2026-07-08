import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import logo from '@assets/afuchat_logo_transparent.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Products", href: "/products" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Developers", href: "/developers" },
    { label: "Company", href: "/about" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E2E8F0] transition-shadow duration-200 ${scrolled ? 'shadow-sm' : ''}`}
    >
      <div className="max-container container-pad h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} alt="AfuChat Logo" className="h-8 w-auto" />
          <span className="font-bold text-[#0F172A] text-lg">AfuChat</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link 
            href="/login"
            className="text-sm font-medium text-[#0F172A] border border-[#E2E8F0] rounded-lg px-4 py-2 hover:bg-[#F8FAFC] transition-colors"
          >
            Log in
          </Link>
          <Link 
            href="/signup"
            className="text-sm font-medium text-white bg-[#1F95FF] rounded-lg px-4 py-2 hover:bg-[#0F7AE0] transition-colors"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden p-2 -mr-2 text-[#0F172A]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-[#E2E8F0] shadow-lg flex flex-col">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="px-4 py-3 text-base font-medium text-[#0F172A] hover:bg-[#F8FAFC]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 px-4 pb-6">
            <Link 
              href="/login"
              className="text-center font-medium text-[#0F172A] border border-[#E2E8F0] rounded-lg px-4 py-3 active:bg-[#F8FAFC]"
            >
              Log in
            </Link>
            <Link 
              href="/signup"
              className="text-center font-medium text-white bg-[#1F95FF] rounded-lg px-4 py-3 active:bg-[#0F7AE0]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}