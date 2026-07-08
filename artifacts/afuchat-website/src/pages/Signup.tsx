import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Mail, ArrowRight, Check } from 'lucide-react';
import logo from '@assets/afuchat_logo_transparent.png';

export default function Signup() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Simple header */}
      <header className="border-b border-[#E2E8F0] px-4 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={logo} alt="AfuChat" className="h-8 w-auto" />
            <span className="font-bold text-[#0F172A] text-lg">AfuChat</span>
          </div>
        </Link>
        <span className="text-sm text-[#64748B]">
          Already have an account?{' '}
          <Link href="/login" className="text-[#1F95FF] font-medium hover:underline">Log in</Link>
        </span>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          {/* Icon */}
          <div className="w-14 h-14 bg-[#EBF5FF] rounded-2xl flex items-center justify-center mb-6">
            <Mail className="w-7 h-7 text-[#1F95FF]" />
          </div>

          <h1 className="text-3xl font-bold text-[#0F172A] mb-2 tracking-tight">
            Create your AfuMail
          </h1>
          <p className="text-[#64748B] mb-8">
            One account unlocks the entire AfuChat ecosystem — AfuChat, AfuCloud, AfuAI, and more.
          </p>

          {/* Benefits */}
          <ul className="space-y-2 mb-8">
            {[
              'One login for all 8 AfuChat services',
              'End-to-end encrypted by default',
              'Free forever — no credit card needed',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#0F172A]">
                <span className="flex-shrink-0 w-5 h-5 bg-[#DCFCE7] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#16C784]" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Form placeholder */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-1.5">Full name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#1F95FF] focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-1.5">AfuMail address</label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="yourname"
                  className="flex-1 px-4 py-3 border border-[#E2E8F0] rounded-l-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#1F95FF] focus:border-transparent transition"
                />
                <span className="px-4 py-3 bg-[#F8FAFC] border border-l-0 border-[#E2E8F0] rounded-r-xl text-[#64748B] text-sm flex items-center">
                  @afumail.com
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-1.5">Password</label>
              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#1F95FF] focus:border-transparent transition"
              />
            </div>
            <button
              type="button"
              className="w-full px-6 py-3.5 bg-[#1F95FF] hover:bg-[#0F7AE0] text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              Create AfuMail account
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#94A3B8] text-center mt-6">
            By creating an account you agree to our{' '}
            <Link href="/legal/terms" className="underline hover:text-[#64748B]">Terms of Service</Link>{' '}
            and{' '}
            <Link href="/legal/privacy" className="underline hover:text-[#64748B]">Privacy Policy</Link>.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
