import { Link } from 'wouter';
import { Twitter, Linkedin, Github } from 'lucide-react';
import logo from '@assets/afuchat_logo_transparent.png';

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0] pt-16 pb-8">
      <div className="max-container container-pad">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img src={logo} alt="AfuChat Logo" className="h-8 w-auto" />
              <span className="font-bold text-[#0F172A] text-xl">AfuChat</span>
            </Link>
            <p className="text-[#64748B] text-sm max-w-sm">
              One identity. Every service. Zero friction. The complete ecosystem for your digital life.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-[#64748B] hover:text-[#1F95FF] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#64748B] hover:text-[#1F95FF] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#64748B] hover:text-[#1F95FF] transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="font-semibold text-[#0F172A] mb-4">Products</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/products/afumail" className="text-sm text-[#64748B] hover:text-[#1F95FF] transition-colors">AfuMail</Link></li>
              <li><Link href="/products/afuchat" className="text-sm text-[#64748B] hover:text-[#1F95FF] transition-colors">AfuChat</Link></li>
              <li><Link href="/products/afuai" className="text-sm text-[#64748B] hover:text-[#1F95FF] transition-colors">AfuAI</Link></li>
              <li><Link href="/products/afucloud" className="text-sm text-[#64748B] hover:text-[#1F95FF] transition-colors">AfuCloud</Link></li>
              <li><Link href="/products" className="text-sm text-[#64748B] hover:text-[#1F95FF] transition-colors font-medium">View all →</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#0F172A] mb-4">Platform</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/ecosystem" className="text-sm text-[#64748B] hover:text-[#1F95FF] transition-colors">Ecosystem</Link></li>
              <li><Link href="/developers" className="text-sm text-[#64748B] hover:text-[#1F95FF] transition-colors">Developers</Link></li>
              <li><Link href="/developers" className="text-sm text-[#64748B] hover:text-[#1F95FF] transition-colors">API Docs</Link></li>
              <li><a href="#" className="text-sm text-[#64748B] hover:text-[#1F95FF] transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#0F172A] mb-4">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-sm text-[#64748B] hover:text-[#1F95FF] transition-colors">About</Link></li>
              <li><Link href="/about/careers" className="text-sm text-[#64748B] hover:text-[#1F95FF] transition-colors">Careers</Link></li>
              <li><Link href="/about/press" className="text-sm text-[#64748B] hover:text-[#1F95FF] transition-colors">Press</Link></li>
              <li><Link href="/about/brand" className="text-sm text-[#64748B] hover:text-[#1F95FF] transition-colors">Brand Assets</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748B]">
            © {new Date().getFullYear()} AfuChat Technologies Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy" className="text-sm text-[#64748B] hover:text-[#1F95FF] transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="text-sm text-[#64748B] hover:text-[#1F95FF] transition-colors">Terms</Link>
            <Link href="/legal/cookies" className="text-sm text-[#64748B] hover:text-[#1F95FF] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}