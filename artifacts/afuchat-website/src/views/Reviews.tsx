'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import Footer from '@/components/layout/Footer';
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
    <motion.a
      href={review.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition-colors flex flex-col group"
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
    </motion.a>
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
            >We don't write these ourselves — every review below is public and verifiable on Trustpilot.</motion.p>
            <motion.a
              href={TRUSTPILOT_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition-colors"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#00b67a"><path d="M12 1.5l3.09 6.26L22 8.76l-5 4.87 1.18 6.87L12 17.27l-6.18 3.23L7 13.63 2 8.76l6.91-1L12 1.5z"/></svg>
              <span className="text-white font-bold text-sm">{TRUSTPILOT_SUMMARY.rating.toFixed(1)}</span>
              <Stars rating={Math.round(TRUSTPILOT_SUMMARY.rating)} />
              <span className="text-white/40 text-xs">{TRUSTPILOT_SUMMARY.reviewCount} reviews on Trustpilot</span>
            </motion.a>
          </div>

          {/* Review grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {TRUSTPILOT_REVIEWS.map((review, i) => (
              <ReviewCard key={review.author} review={review} index={i} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 sm:p-14 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Join millions of happy users.</h2>
            <p className="text-white/60 mb-8 max-w-md mx-auto">Create an account in 30 seconds and start using any of our standalone products today.</p>
            <a href="https://web.afuchat.com/signup" className="btn-primary inline-flex">Create free account →</a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
