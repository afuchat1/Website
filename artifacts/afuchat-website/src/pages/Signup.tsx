import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Check } from 'lucide-react';
import { illSecIdentity } from '@/data/illustrations';

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: what you get */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-4">One account for everything</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight leading-tight">
              Your AfuMail is<br />your digital key.
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              Millions of people use a single AfuMail account to access all eight AfuChat services without juggling passwords, switching apps, or managing separate subscriptions.
            </p>
            <div className="flex flex-col gap-6">
              {[
                { title: 'One login, eight services', body: 'AfuChat, AfuCloud, AfuAI, AfuMovies, AfuMall, AfuNews, AfuBlog — all opened with a single sign-in.' },
                { title: 'End-to-end encrypted', body: 'Your messages, files, and searches are encrypted by default. We cannot read them — ever.' },
                { title: 'Free forever, no card needed', body: 'The core tier of every AfuChat service is free. No trial period, no hidden fees, no expiry.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-[#16C784] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{item.title}</p>
                    <p className="text-white/40 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            <img src={illSecIdentity} alt="Create your AfuMail identity" className="w-28 h-28 object-contain mb-5" />
            <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">Create your AfuMail</h1>
            <p className="text-white/45 mb-8 text-sm">Fill in your details below and join millions of people already in the ecosystem.</p>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">Full name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-2xl text-white placeholder-white/25 text-sm focus:outline-none focus:ring-1 focus:ring-[#1F95FF] transition"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">AfuMail address</label>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="yourname"
                    className="flex-1 px-4 py-3 rounded-l-2xl text-white placeholder-white/25 text-sm focus:outline-none focus:ring-1 focus:ring-[#1F95FF] transition"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}
                  />
                  <span className="px-4 py-3 text-white/35 text-sm flex items-center rounded-r-2xl"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderLeft: 'none' }}>
                    @afumail.com
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">Password</label>
                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full px-4 py-3 rounded-2xl text-white placeholder-white/25 text-sm focus:outline-none focus:ring-1 focus:ring-[#1F95FF] transition"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}
                />
              </div>
              <button
                type="button"
                className="w-full px-6 py-3.5 bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] hover:opacity-90 text-white font-bold rounded-full transition-colors flex items-center justify-center gap-2 text-sm mt-2"
              >
                Create AfuMail account
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-white/25 text-center mt-5">
              Already have an account?{' '}
              <Link href="/login" className="text-[#1F95FF] font-medium hover:underline">Log in</Link>
            </p>
            <p className="text-xs text-white/20 text-center mt-2">
              By creating an account you agree to our{' '}
              <Link href="/legal/terms" className="underline hover:text-white/40">Terms of Service</Link>{' '}
              and{' '}
              <Link href="/legal/privacy" className="underline hover:text-white/40">Privacy Policy</Link>.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
