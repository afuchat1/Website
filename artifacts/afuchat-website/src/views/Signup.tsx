'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { illSecIdentity } from '@/data/illustrations';
import Footer from '@/components/layout/Footer';

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-container container-pad py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Form side */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4">Get started free</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight leading-tight">
              One account.<br />Every product.
            </h1>
            <p className="text-white/45 mb-8 text-[13px] sm:text-sm text-center sm:text-left">Fill in your details below and join millions of people already using AfuMail.</p>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">Full name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-2xl text-white placeholder-white/25 text-[13px] sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#1F95FF] transition"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}
                />
              </div>
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">AfuMail address</label>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="yourname"
                    className="flex-1 px-4 py-3 sm:py-3.5 rounded-l-2xl text-white placeholder-white/25 text-[13px] sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#1F95FF] transition w-full"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}
                  />
                  <span className="px-3 sm:px-4 py-3 sm:py-3.5 text-white/35 text-[11px] sm:text-sm flex items-center rounded-r-2xl whitespace-nowrap"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderLeft: 'none' }}>
                    @afumail.com
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">Password</label>
                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-2xl text-white placeholder-white/25 text-[13px] sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#1F95FF] transition"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}
                />
              </div>
              <button
                type="button"
                className="w-full px-6 py-4 sm:py-3.5 bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] hover:opacity-90 text-white font-bold rounded-full transition-colors flex items-center justify-center gap-2 text-[13px] sm:text-sm mt-2 sm:mt-4"
              >
                Create AfuMail account
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-white/25 text-xs text-center sm:text-left mt-4">
              Already have an account?{' '}
              <Link href="/login" className="text-white/50 hover:text-white transition-colors underline underline-offset-2">Log in</Link>
            </p>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="hidden lg:flex flex-col items-center gap-8"
          >
            <img src={illSecIdentity} alt="AfuMail identity" className="w-full max-w-xs drop-shadow-2xl" />
            <div className="flex flex-col gap-3 w-full max-w-xs">
              {[
                'Access every AfuChat product',
                'End-to-end encrypted by default',
                'No credit card required',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-white/55 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
