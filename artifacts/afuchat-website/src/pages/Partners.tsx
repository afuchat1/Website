import { motion } from 'framer-motion';
import { illSecEcosystem, illSecContact } from '@/data/illustrations';
import { ShieldCheck, Target, Rocket, Users } from 'lucide-react';
import { Link } from 'wouter';

export default function Partners() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero */}
      <div className="max-container container-pad pt-12 pb-10 sm:pt-20 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-[#F59E0B] font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3">Partner Program</p>
            <h1 className="text-[32px] leading-[1.1] sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-5 tracking-tight">
              Build the future<br />with us.
            </h1>
            <p className="text-base sm:text-lg text-white/55 max-w-xl leading-relaxed mb-6 sm:mb-8">
              Join the AfuChat Partner Program to integrate your technology, reach millions of users, or resell our standalone products to enterprise clients. We're looking for partners who value craft, speed, and privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#apply" className="flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-[#F59E0B] to-[#F97316] text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity">
                Apply to partner
              </a>
              <a href="mailto:partners@afuchat.com" className="flex items-center justify-center px-7 py-3.5 bg-white/10 text-white font-bold text-sm rounded-full hover:bg-white/15 transition-colors border border-white/10">
                Contact team
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <img src={illSecEcosystem} alt="Partner network" className="w-full max-w-[280px] sm:max-w-lg mx-auto drop-shadow-2xl mt-6 sm:mt-0" />
          </motion.div>
        </div>
      </div>

      {/* Why partner */}
      <div className="max-container container-pad py-12 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 sm:mb-16">
          <h2 className="text-[28px] leading-[1.2] sm:text-4xl font-bold text-white mb-4 tracking-tight">Why partner with AfuChat?</h2>
          <p className="text-white/55 text-base sm:text-lg max-w-2xl leading-relaxed">
            We provide our partners with technical support, marketing resources, and revenue-sharing opportunities to build mutually beneficial relationships.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Global Reach", desc: "Gain exposure to millions of verified users across our product portfolio.", icon: Users },
            { title: "Co-Marketing", desc: "Benefit from joint campaigns, case studies, and feature announcements.", icon: Rocket },
            { title: "Technical Support", desc: "Get direct access to our engineering team and dedicated partner APIs.", icon: ShieldCheck },
            { title: "Revenue Share", desc: "Earn competitive commissions through our reseller and affiliate programs.", icon: Target }
          ].map((feature, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <feature.icon className="w-8 h-8 text-[#F59E0B] mb-4" />
              <h3 className="text-white font-bold mb-2">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partnership Tracks */}
      <div className="max-container container-pad py-12 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 sm:mb-16 text-center">
          <p className="text-[#F59E0B] font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3">Programs</p>
          <h2 className="text-[28px] leading-[1.2] sm:text-4xl font-bold text-white mb-4 tracking-tight">Partnership Tracks</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Technology Partners", color: "#1F95FF", desc: "Integrate your software with our APIs. Best for SaaS tools, identity providers, and developers building extensions." },
            { title: "Reseller Partners", color: "#16C784", desc: "Sell our enterprise products to your clients. Perfect for MSPs, IT consultancies, and system integrators." },
            { title: "Media Partners", color: "#EC4899", desc: "Collaborate on content distribution via AfuNews and AfuMovies. For publishers and creators." }
          ].map((track, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-b from-white/10 to-transparent p-[1px] rounded-3xl">
              <div className="bg-[#0A1224] h-full p-8 rounded-[23px]">
                <h3 className="text-xl font-bold text-white mb-4" style={{ color: track.color }}>{track.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8">{track.desc}</p>
                <a href="#apply" className="text-sm font-semibold hover:underline" style={{ color: track.color }}>Apply now →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div id="apply" className="max-container container-pad py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12">
          <div>
            <h2 className="text-[28px] leading-[1.2] sm:text-3xl font-bold text-white mb-4 tracking-tight">Ready to partner?</h2>
            <p className="text-white/55 text-base mb-8 leading-relaxed">Tell us about your organization and how we can work together. Our team will get back to you within 2 business days.</p>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Company Name" className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#F59E0B]" />
              <input type="email" placeholder="Work Email" className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#F59E0B]" />
              <select className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F59E0B] appearance-none">
                <option value="">Partnership Type</option>
                <option value="tech">Technology Partner</option>
                <option value="reseller">Reseller Partner</option>
                <option value="media">Media Partner</option>
              </select>
              <textarea placeholder="How would you like to partner?" rows={4} className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#F59E0B] resize-none"></textarea>
              <button type="button" className="px-6 py-3.5 bg-[#F59E0B] text-white font-bold rounded-xl hover:bg-[#D97706] transition-colors mt-2">
                Submit Application
              </button>
            </form>
          </div>
          <div className="flex justify-center hidden lg:flex">
            <img src={illSecContact} alt="Contact us" className="w-full max-w-[300px] drop-shadow-2xl" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}