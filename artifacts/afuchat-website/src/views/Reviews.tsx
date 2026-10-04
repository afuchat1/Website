

'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { openCookiePreferences } from '@/lib/cookieConsent';
import { PRODUCT_DATA } from '@/data/products';
import ProductIcon from '@/components/products/ProductIcon';
import { TRUSTPILOT_PROFILE_URL } from '@/data/trustpilot';
import { TRUSTPILOT_REVIEW_SNAPSHOT, TRUSTPILOT_REVIEWS } from '@/data/trustpilot-reviews';
import ReviewCarousel from '@/components/home/ReviewCarousel';

const _FL = '/assets/afuchat_logo_transparent.png';
const _FT = '/assets/trustpilot_logo.png';
const _FG = '/assets/google_play_badge.png';
const _AFUCHAT_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.afuchat.mobile';
const _AFUCLOUD_URL = 'https://cloud.afuchat.com';
const _FP = PRODUCT_DATA;
function PageFooter() {
  const yr = new Date().getFullYear();
  return (
    <footer className="relative">
      <div className="max-container container-pad pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10 md:mb-14">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5"><img src={_FL} alt="AfuChat" className="h-8 w-auto" /><span className="text-white font-bold text-lg">AfuChat</span></Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5">Useful products.<br />Built from Uganda.</p>
            <div className="flex items-center gap-3 flex-wrap mb-5">
              <a href="https://www.trustpilot.com/review/afuchat.com" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-white/90 transition-colors rounded-full px-3 py-1.5 flex items-center"><img src={_FT} alt="Trustpilot" className="h-10 w-auto" loading="lazy" /></a>
              <a href={_AFUCHAT_PLAY_URL} target="_blank" rel="noopener noreferrer" aria-label="Download the AfuChat app on Google Play" className="flex flex-col gap-1">
                <span className="text-white/55 text-[10px] font-semibold uppercase tracking-widest">Download AfuChat</span>
                <img src={_FG} alt="Get the AfuChat app on Google Play" className="h-10 w-auto" loading="lazy" />
              </a>
            </div>
            <p className="text-white/22 text-xs">AfuChat Technologies Limited</p>
          </div>
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">Products</h4>
            <ul className="flex flex-col gap-3.5">{_FP.slice(0,4).map(p=><li key={p.id}><Link href={p.path} className="flex items-center gap-2.5 text-white/38 hover:text-white text-sm transition-colors"><ProductIcon product={p} containerClassName="w-6 h-6 rounded-lg" iconClassName="w-3.5 h-3.5" />{p.name}</Link></li>)}<li><a href={_AFUCLOUD_URL} target="_blank" rel="noopener noreferrer" className="ml-8 text-white/35 hover:text-white text-xs transition-colors">Open AfuCloud ↗</a></li></ul>
          </div>
          <div>
            <h4 className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-5">More</h4>
            <ul className="flex flex-col gap-3.5">{_FP.slice(4).map(p=><li key={p.id}><Link href={p.path} className="flex items-center gap-2.5 text-white/38 hover:text-white text-sm transition-colors"><ProductIcon product={p} containerClassName="w-6 h-6 rounded-lg" iconClassName="w-3.5 h-3.5" />{p.name}</Link></li>)}</ul>
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
export default function Reviews() {
  return (
    <div className="relative flex flex-col w-full">
      <section className="section-pad">
        <div className="max-container container-pad">
          {/* Hero */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              className="text-pink-400 font-semibold text-xs uppercase tracking-widest mb-4"
            >Customer Stories</motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4"
            >Real reviews,<br />straight from Trustpilot.</motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
              className="text-white/60 max-w-lg mx-auto mb-6"
            >Review text comes from public listings. Individual Trustpilot links are used when available; the profile link opens the full current list.</motion.p>
            <motion.a
              href={TRUSTPILOT_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
              aria-label="Read AfuChat reviews on Trustpilot"
              className="inline-flex items-center gap-2.5 bg-white rounded-full px-4 py-2 hover:bg-white/90 transition-colors"
            >
              <img src={_FT} alt="Trustpilot" className="h-6 w-auto" loading="lazy" />
              <span className="text-[#0F172A] font-bold text-sm">View Trustpilot profile</span>
            </motion.a>
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-white/55">
            <span className="text-white font-bold">{TRUSTPILOT_REVIEW_SNAPSHOT.rating.toFixed(1)} / 5</span>
            <span aria-hidden="true">·</span>
            <span>{TRUSTPILOT_REVIEW_SNAPSHOT.totalReviews} reviews on Trustpilot</span>
          </div>

          <div className="mb-20">
            <ReviewCarousel reviews={TRUSTPILOT_REVIEWS} label="All Trustpilot reviews" />
          </div>

        </div>
      </section>
      <PageFooter />
    </div>
  );
}
