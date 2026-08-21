
'use client';
import Link from 'next/link';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import IdentitySection from '@/components/home/IdentitySection';
import FeaturesSection from '@/components/home/FeaturesSection';
import DeveloperSection from '@/components/home/DeveloperSection';
import CtaSection from '@/components/home/CtaSection';
import { openCookiePreferences } from '@/lib/cookieConsent';
import { PRODUCT_DATA } from '@/data/products';

const _FL = '/assets/afuchat_logo_transparent.png';
const _FT = '/assets/trustpilot_logo.png';
const _AFUCHAT_PLAY_URL = 'https://com-afuchat-afuapp.en.uptodown.com/android';
const _AFUCHAT_DOWNLOAD_BADGE = 'https://stc.utdstc.com/img/mediakit/download-gio-big-b.png';
const _AFUCHAT_GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.afuchat.afuapp';
const _GOOGLE_PLAY_BADGE = '/assets/google_play_badge.png';
const _FP = PRODUCT_DATA;
function PageFooter() {
  const yr = new Date().getFullYear();
  return (
    <footer className="relative">
      <div className="max-container container-pad pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10 md:mb-14">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5"><img src={_FL} alt="AfuChat" className="h-8 w-auto" /><span className="text-white font-bold text-lg">AfuChat</span></Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5">Independent products.<br />Built for the world.</p>
            <div className="flex flex-col items-start gap-3 mb-5">
              <a href="https://www.trustpilot.com/review/afuchat.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity flex items-center"><img src={_FT} alt="Trustpilot" className="h-8 w-auto" loading="lazy" /></a>
              <div className="flex items-center gap-3 flex-wrap">
                <a href={_AFUCHAT_PLAY_URL} target="_blank" rel="noopener noreferrer" aria-label="Download the AfuChat app on Uptodown" className="flex flex-col gap-1">
                  <span className="text-white/55 text-[10px] font-semibold uppercase tracking-widest">Download AfuChat</span>
                  <img src={_AFUCHAT_DOWNLOAD_BADGE} alt="Download AfuChat from Uptodown" className="h-10 w-auto" loading="lazy" />
                </a>
                <a href={_AFUCHAT_GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" aria-label="Download the AfuChat app on Google Play" className="flex flex-col gap-1">
                  <span className="text-white/55 text-[10px] font-semibold uppercase tracking-widest">Google Play</span>
                  <img src={_GOOGLE_PLAY_BADGE} alt="Get the AfuChat app on Google Play" className="h-10 w-auto" loading="lazy" />
                </a>
              </div>
            </div>
            <p className="text-white/22 text-xs">AfuChat Technologies Limited</p>
          </div>
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">Products</h4>
            <ul className="flex flex-col gap-3.5">{_FP.slice(0,4).map(p=><li key={p.id}><Link href={p.path} className="flex items-center gap-2.5 text-white/38 hover:text-white text-sm transition-colors"><span className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0" style={{ color: p.color, backgroundColor: `${p.color}18` }}><p.icon className="w-3 h-3" strokeWidth={1.8} aria-hidden="true" /></span>{p.name}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">More</h4>
            <ul className="flex flex-col gap-3.5">{_FP.slice(4).map(p=><li key={p.id}><Link href={p.path} className="flex items-center gap-2.5 text-white/38 hover:text-white text-sm transition-colors"><span className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0" style={{ color: p.color, backgroundColor: `${p.color}18` }}><p.icon className="w-3 h-3" strokeWidth={1.8} aria-hidden="true" /></span>{p.name}</Link></li>)}</ul>
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

export default function Home() {
  return (
    <div className="relative flex flex-col w-full">
      <HeroSection />
      <ProductsSection />
      <ReviewsSection />
      <IdentitySection />
      <FeaturesSection />
      <DeveloperSection />
      <CtaSection />
      <PageFooter />
    </div>
  );
}
