'use client';
import Link from 'next/link';
import { openCookiePreferences } from '@/lib/cookieConsent';
import { ArrowLeft } from 'lucide-react';

const _FL = '/assets/afuchat_logo_transparent.png';
const _FT = '/assets/trustpilot_logo.png';
const _FG = '/assets/google_play_badge.png';
const _FP = [
  { n: 'AfuMail',   p: '/products/afumail',   i: '/illustrations/icon3d-afumail.webp' },
  { n: 'AfuChat',   p: '/products/afuchat',   i: '/illustrations/icon3d-afuchat.webp' },
  { n: 'AfuAI',     p: '/products/afuai',     i: '/illustrations/icon3d-afuai.webp' },
  { n: 'AfuCloud',  p: '/products/afucloud',  i: '/illustrations/icon3d-afucloud.webp' },
  { n: 'AfuMovies', p: '/products/afumovies', i: '/illustrations/icon3d-afumovies.webp' },
  { n: 'AfuMall',   p: '/products/afumall',   i: '/illustrations/icon3d-afumall.webp' },
  { n: 'AfuNews',   p: '/products/afunews',   i: '/illustrations/icon3d-afunews.webp' },
  { n: 'AfuBlog',   p: '/products/afublog',   i: '/illustrations/icon3d-afublog.webp' },
];
function PageFooter() {
  const yr = new Date().getFullYear();
  return (
    <footer className="relative">
      <div className="max-container container-pad pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10 md:mb-14">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5"><img src={_FL} alt="AfuChat" className="h-8 w-auto" /><span className="text-white font-bold text-lg">AfuChat</span></Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5">Independent products.<br />Built for the world.</p>
            <div className="flex items-center gap-3 flex-wrap mb-5">
              <a href="https://www.trustpilot.com/review/afuchat.com" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-white/90 transition-colors rounded-full px-3 py-1.5 flex items-center"><img src={_FT} alt="Trustpilot" className="h-5 w-auto" loading="lazy" /></a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"><img src={_FG} alt="Get it on Google Play" className="h-10 w-auto" loading="lazy" /></a>
            </div>
            <p className="text-white/22 text-xs">AfuChat Technologies Limited</p>
          </div>
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">Products</h4>
            <ul className="flex flex-col gap-3.5">{_FP.slice(0,4).map(p=><li key={p.n}><Link href={p.p} className="flex items-center gap-2.5 text-white/38 hover:text-white text-sm transition-colors"><img src={p.i} alt="" className="w-5 h-5 object-contain" loading="lazy"/>{p.n}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">More</h4>
            <ul className="flex flex-col gap-3.5">{_FP.slice(4).map(p=><li key={p.n}><Link href={p.p} className="flex items-center gap-2.5 text-white/38 hover:text-white text-sm transition-colors"><img src={p.i} alt="" className="w-5 h-5 object-contain" loading="lazy"/>{p.n}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">Company</h4>
            <ul className="flex flex-col gap-3">{[{l:'About',h:'/about'},{l:'Developers',h:'/developers'},{l:'Partners',h:'/partners'},{l:'Careers',h:'/about/careers'}].map(x=><li key={x.h}><Link href={x.h} className="text-white/38 hover:text-white text-sm transition-colors">{x.l}</Link></li>)}</ul>
          </div>
        </div>
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/22 text-xs">© {yr} AfuChat Technologies Limited. All rights reserved.</p>
          <div className="flex items-center gap-5">{[{l:'Privacy Policy',h:'/legal/privacy'},{l:'Terms of Service',h:'/legal/terms'},{l:'Cookie Policy',h:'/legal/cookies'}].map(x=><Link key={x.h} href={x.h} className="text-white/28 hover:text-white/60 text-xs transition-colors">{x.l}</Link>)}<button onClick={openCookiePreferences} className="text-white/28 hover:text-white/60 text-xs transition-colors">Manage Cookies</button></div>
        </div>
      </div>
    </footer>
  );
}

export default function NotFoundPage() {
  return (
    <div className="w-full">
      <div className="max-container container-pad flex flex-col items-center justify-center py-40 text-center gap-6">
        <p className="text-white/20 text-[10px] uppercase tracking-widest font-semibold">404</p>
        <h1 className="text-3xl font-bold text-white tracking-tight">Page not found</h1>
        <p className="text-white/40 max-w-sm text-sm leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </div>
      <PageFooter />
    </div>
  );
}
