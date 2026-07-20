'use client';
import { motion } from 'framer-motion';
import { illSecEcosystem, illSecContact } from '@/data/illustrations';
import { ShieldCheck, Target, Rocket, Users } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';

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
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <p className="text-[#F59E0B] font-semibold text-xs uppercase tracking-widest mb-3">Why Partner</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Why build with us?</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
          {[
            { icon: Users,       color: '#1F95FF', title: 'Millions of users',    desc: 'Tap into our growing user base across eight standalone products.' },
            { icon: ShieldCheck, color: '#16C784', title: 'Trusted platform',     desc: 'Our products are built with security and privacy at the core.' },
            { icon: Rocket,      color: '#F59E0B', title: 'Fast go-to-market',    desc: 'Integration APIs and SDKs let you ship in days, not months.' },
            { icon: Target,      color: '#EC4899', title: 'Dedicated support',    desc: 'A dedicated partner success manager for every approved partner.' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <item.icon className="w-7 h-7 mb-3" style={{ color: item.color }} />
              <p className="text-white font-semibold text-sm mb-2">{item.title}</p>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Programs */}
      <div className="max-container container-pad py-16 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
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
      <Footer />
    </div>
  );
}
