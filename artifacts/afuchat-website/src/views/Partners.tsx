'use client';
import { motion } from 'framer-motion';
import { illSecEcosystem, illSecContact } from '@/data/illustrations';
import { ShieldCheck, Target, Rocket, Users } from 'lucide-react';
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

export default function Partners() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero */}
      <div className="max-container container-pad pt-12 pb-10 sm:pt-20 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-[#F59E0B] font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3">Partner Program</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight leading-tight">
              Build the future<br />with us.
            </h1>
            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Join the AfuChat Partner Program to integrate your technology, reach millions of users, or resell our standalone products to enterprise clients. We&apos;re looking for partners who value craft, speed, and privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#apply" className="inline-flex items-center justify-center px-7 py-3.5 bg-[#F59E0B] text-white font-bold text-sm rounded-full hover:bg-[#D97706] transition-colors">
                Apply to partner
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3.5 text-white/60 font-medium text-sm border border-white/10 rounded-full hover:text-white transition-colors">
                Contact team
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className="flex justify-center">
            <img src={illSecEcosystem} alt="AfuChat partner ecosystem" className="w-full max-w-md drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Why partner */}
      <div className="max-container container-pad py-16 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">Why partner with AfuChat?</h2>
          <p className="text-white/55 text-base">We provide our partners with technical support, marketing resources, and revenue-sharing opportunities to build mutually beneficial relationships.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          {[
            { icon: Users,      color: '#F59E0B', label: 'Global Reach',       desc: 'Gain exposure to millions of verified users across our product portfolio.' },
            { icon: Target,     color: '#1F95FF', label: 'Co-Marketing',       desc: 'Benefit from joint campaigns, case studies, and feature announcements.' },
            { icon: ShieldCheck,color: '#16C784', label: 'Technical Support',  desc: 'Get direct access to our engineering team and dedicated partner APIs.' },
            { icon: Rocket,     color: '#6C63FF', label: 'Revenue Share',      desc: 'Earn competitive commissions through our reseller and affiliate programs.' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <item.icon className="w-7 h-7 mb-3" style={{ color: item.color }} />
              <p className="text-white font-semibold text-sm mb-2">{item.label}</p>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partnership tracks */}
      <div className="max-container container-pad py-16 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-[#F59E0B] font-semibold text-xs uppercase tracking-widest mb-3">Programs</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Partnership Tracks</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
          {[
            { title: 'Technology Partners', color: '#1F95FF', desc: 'Integrate your software with our APIs. Best for SaaS tools, identity providers, and developers building extensions.', link: 'Apply now →' },
            { title: 'Reseller Partners',   color: '#16C784', desc: 'Sell our enterprise products to your clients. Perfect for MSPs, IT consultancies, and system integrators.',         link: 'Apply now →' },
            { title: 'Media Partners',      color: '#F59E0B', desc: 'Collaborate on content distribution via AfuNews and AfuMovies. For publishers and creators.',                        link: 'Apply now →' },
          ].map((track, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: track.color }}>{track.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{track.desc}</p>
              <a href="#apply" className="text-sm font-semibold transition-colors hover:opacity-80" style={{ color: track.color }}>{track.link}</a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Apply form */}
      <div id="apply" className="max-container container-pad py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div>
            <h2 className="text-[28px] leading-[1.2] sm:text-3xl font-bold text-white mb-4 tracking-tight">Ready to partner?</h2>
            <p className="text-white/55 text-base mb-8 leading-relaxed">Tell us about your organization and how we can work together. Our team will get back to you within 2 business days.</p>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Company Name" className="bg-black/20 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#F59E0B]" />
              <input type="email" placeholder="Work Email" className="bg-black/20 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#F59E0B]" />
              <select defaultValue="" style={{ colorScheme: 'dark' }} className="bg-black/20 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#F59E0B] appearance-none">
                <option value="" disabled>Partnership Type</option>
                <option value="tech">Technology Partner</option>
                <option value="reseller">Reseller Partner</option>
                <option value="media">Media Partner</option>
              </select>
              <textarea placeholder="How would you like to partner?" rows={4} className="bg-black/20 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#F59E0B] resize-none"></textarea>
              <button type="button" className="px-6 py-3.5 bg-[#F59E0B] text-white font-bold rounded-full hover:bg-[#D97706] transition-colors mt-2">
                Submit Application
              </button>
            </form>
          </div>
          <div className="hidden lg:flex justify-center">
            <img src={illSecContact} alt="Contact us" className="w-full max-w-[300px] drop-shadow-2xl" loading="lazy" decoding="async" />
          </div>
        </motion.div>
      </div>
      <PageFooter />
    </div>
  );
}
