import { Link } from 'wouter';
import logo from '@assets/afuchat_logo_transparent.png';

export function Footer() {
  return (
    <footer className="bg-[#030709] border-t border-[rgba(255,255,255,0.06)] pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 inline-flex">
              <img src={logo} alt="AfuChat Logo" className="w-6 h-6 object-contain" />
              <span className="text-white font-bold tracking-tight text-lg">AfuChat</span>
            </Link>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed mb-6">
              One identity. Every service. Building the unified digital ecosystem for the modern world.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-slate-400 hover:text-white hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.961h-1.95z"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-slate-400 hover:text-white hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Products</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/products/mail" className="text-sm text-slate-400 hover:text-white transition-colors">AfuMail</Link></li>
              <li><Link href="/products/chat" className="text-sm text-slate-400 hover:text-white transition-colors">AfuChat</Link></li>
              <li><Link href="/products/ai" className="text-sm text-slate-400 hover:text-white transition-colors">AfuAI</Link></li>
              <li><Link href="/products/cloud" className="text-sm text-slate-400 hover:text-white transition-colors">AfuCloud</Link></li>
              <li><Link href="/products" className="text-sm text-primary hover:text-white transition-colors">View all →</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Developers</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/developers" className="text-sm text-slate-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/developers" className="text-sm text-slate-400 hover:text-white transition-colors">API Reference</Link></li>
              <li><Link href="/developers" className="text-sm text-slate-400 hover:text-white transition-colors">SDKs</Link></li>
              <li><Link href="/developers" className="text-sm text-slate-400 hover:text-white transition-colors">Webhooks</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/about/careers" className="text-sm text-slate-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/about/press" className="text-sm text-slate-400 hover:text-white transition-colors">Press</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/legal/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/legal/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/security" className="text-sm text-slate-400 hover:text-white transition-colors">Security</Link></li>
              <li><Link href="/sitemap" className="text-sm text-slate-400 hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[rgba(255,255,255,0.06)] gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} AfuChat Technologies Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-success"></span> All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
