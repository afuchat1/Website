'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PRODUCT_DATA } from '@/data/products';
import { illSecEcosystem } from '@/data/illustrations';
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
import { notFound } from 'next/navigation';

export default function ProductPage({ id }: { id: string }) {
  const product = PRODUCT_DATA.find(p => p.id === id);
  if (!product) notFound();
  const Icon = product!.icon;
  const otherProducts = PRODUCT_DATA.filter(p => p.id !== product!.id).slice(0, 4);

  return (
    <div className="w-full min-h-screen">
      {/* Hero */}
      <div className="max-container container-pad pt-6 pb-12 sm:pt-14 sm:pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <Icon className="hidden sm:block w-8 h-8 mb-6" style={{ color: product!.color }} />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-1 tracking-tight">{product!.name}</h1>
              <p className="text-[11px] uppercase tracking-widest font-bold text-white/30 mb-4">{product!.category}</p>
              <p className="text-lg sm:text-xl font-semibold mb-4 leading-snug" style={{ color: product!.color }}>{product!.tagline}</p>
              <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-8 max-w-md">{product!.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {product!.features.map(f => (
                  <span key={f} className="px-3 py-1.5 rounded-full text-xs font-semibold text-white/70 bg-white/8">{f}</span>
                ))}
              </div>
              <a
                href="https://web.afuchat.com/register"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity"
                style={{ background: `linear-gradient(135deg, ${product!.color}, #6C63FF)` }}
              >
                Get started free →
              </a>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                src={product!.illustration}
                alt={product!.name}
                className="w-full max-w-sm drop-shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Other products */}
      <div className="max-container container-pad py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <p className="font-semibold text-xs uppercase tracking-widest mb-3 text-white/40">Ecosystem</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <h2 className="text-2xl font-bold text-white tracking-tight">Works even better together.</h2>
            <img src={illSecEcosystem} alt="AfuChat ecosystem" className="w-full max-w-xs drop-shadow-2xl hidden lg:block" loading="lazy" decoding="async" />
          </div>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6">
          {otherProducts.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <Link href={p.path}>
                <div className="flex items-center gap-3 group">
                  <img src={p.icon3d} alt={`${p.name} icon`} className="w-9 h-9 object-contain flex-shrink-0" loading="lazy" decoding="async" />
                  <span className="text-sm text-white/50 group-hover:text-white transition-colors">{p.name}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <PageFooter />
    </div>
  );
}
