import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import logo from '@assets/afuchat_logo_transparent.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const navLinks = [
    { label: 'Products',    href: '/products' },
    { label: 'Ecosystem',   href: '/ecosystem' },
    { label: 'Developers',  href: '/developers' },
    { label: 'Company',     href: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200
        border-b border-white/30
        ${scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm shadow-blue-900/10'
          : 'bg-white/60 backdrop-blur-lg'
        }`}
    >
      <div className="max-container container-pad h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} alt="AfuChat Logo" className="h-8 w-auto" />
          <span className="font-bold text-[#0A2540] text-lg">AfuChat</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#2D5A7A] hover:text-[#0A2540] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-[#0A2540] border border-white/60 bg-white/40
                       rounded-lg px-4 py-2 hover:bg-white/60 transition-colors backdrop-blur-sm"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm font-medium text-white bg-[#1F95FF] rounded-lg px-4 py-2
                       hover:bg-[#0F7AE0] transition-colors shadow-md shadow-blue-500/25"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-[#0A2540]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 border-b border-white/30
                        bg-white/85 backdrop-blur-xl shadow-lg flex flex-col">
          <div className="flex flex-col py-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-3 text-base font-medium text-[#0A2540] hover:bg-white/40"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 px-4 pb-6">
            <Link
              href="/login"
              className="text-center font-medium text-[#0A2540] border border-white/50
                         bg-white/30 rounded-lg px-4 py-3"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-center font-medium text-white bg-[#1F95FF] rounded-lg px-4 py-3"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
