

'use client';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { openCookiePreferences } from '@/lib/cookieConsent';

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
import { TRUSTPILOT_PROFILE_URL, TRUSTPILOT_REVIEWS, TRUSTPILOT_SUMMARY, type TrustpilotReview } from '@/data/trustpilot';


function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-[#00b67a] fill-[#00b67a]' : 'text-white/20 fill-white/20'}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: TrustpilotReview; index: number }) {
  return (
    <a
      href={review.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 w-[320px] sm:w-[360px] bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition-colors flex flex-col group"
    >
      <Stars rating={review.rating} />
      <p className="text-white font-semibold text-lg mt-4 mb-2 leading-snug">{review.title}</p>
      <p className="text-white/70 text-sm leading-relaxed flex-1">"{review.quote}"</p>
      <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full shrink-0 bg-gradient-to-br from-[#1F7AFF] to-[#6C63FF] flex items-center justify-center text-white text-xs font-bold">
            {initials(review.author)}
          </div>
          <div>
            <p className="text-white font-bold text-sm">{review.author}</p>
            <p className="text-white/40 text-xs mt-0.5">{review.country} · {review.date}</p>
          </div>
        </div>
        <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors shrink-0" />
      </div>
    </a>
  );
}

export default function Reviews() {
  const mid = Math.ceil(TRUSTPILOT_REVIEWS.length / 2);
  const firstRow = TRUSTPILOT_REVIEWS.slice(0, mid);
  const secondRow = TRUSTPILOT_REVIEWS.slice(mid);

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
            >We don't write these ourselves — every review below is public and verifiable on Trustpilot.</motion.p>
            <motion.a
              href={TRUSTPILOT_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2.5 bg-white rounded-full px-4 py-2 hover:bg-white/90 transition-colors"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#00b67a"><path d="M12 1.5l3.09 6.26L22 8.76l-5 4.87 1.18 6.87L12 17.27l-6.18 3.23L7 13.63 2 8.76l6.91-1L12 1.5z"/></svg>
              <span className="text-[#0F172A] font-bold text-sm">{TRUSTPILOT_SUMMARY.rating.toFixed(1)}</span>
              <Stars rating={Math.round(TRUSTPILOT_SUMMARY.rating)} />
              <span className="text-[#0F172A]/50 text-xs">{TRUSTPILOT_SUMMARY.reviewCount} reviews on Trustpilot</span>
            </motion.a>
          </div>

          {/* Sliding review rows — two rows drifting in opposite directions */}
          <div className="flex flex-col gap-6 mb-20 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#040c1e] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#040c1e] to-transparent z-10 pointer-events-none" />
              <div className="flex gap-6 w-max animate-[marquee_50s_linear_infinite] px-4 sm:px-6 lg:px-8">
                {[...firstRow, ...firstRow].map((review, i) => (
                  <ReviewCard key={`row1-${i}`} review={review} index={i} />
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#040c1e] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#040c1e] to-transparent z-10 pointer-events-none" />
              <div className="flex gap-6 w-max animate-[marquee-reverse_50s_linear_infinite] px-4 sm:px-6 lg:px-8">
                {[...secondRow, ...secondRow].map((review, i) => (
                  <ReviewCard key={`row2-${i}`} review={review} index={i} />
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 sm:p-14 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Join millions of happy users.</h2>
            <p className="text-white/60 mb-8 max-w-md mx-auto">Create an account in 30 seconds and start using any of our standalone products today.</p>
            <a href="https://web.afuchat.com/register" className="btn-primary inline-flex">Create free account →</a>
          </motion.div>
        </div>
      </section>
      <PageFooter />
    </div>
  );
}
