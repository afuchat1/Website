import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Star } from 'lucide-react';
import { TRUSTPILOT_PROFILE_URL, TRUSTPILOT_REVIEWS, TRUSTPILOT_SUMMARY } from '@/data/trustpilot';
import trustpilotLogo from '@assets/image_1783529159179.png';

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
          className={`w-4 h-4 ${star <= rating ? 'text-[#00b67a] fill-[#00b67a]' : 'text-white/15 fill-white/15'}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero */}
      <div className="max-container container-pad pt-16 pb-12 sm:pt-24 sm:pb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-pink-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3">Customer Stories</p>
          <h1 className="text-[32px] leading-[1.1] sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Real reviews,<br />straight from Trustpilot.
          </h1>
          <p className="text-base sm:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed mb-6">
            We don't write these ourselves — every review below is public and verifiable on Trustpilot.
          </p>
          <a
            href={TRUSTPILOT_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition-colors"
          >
            <img src={trustpilotLogo} alt="Trustpilot" className="h-4 w-auto" />
            <span className="text-white font-bold text-sm">{TRUSTPILOT_SUMMARY.rating.toFixed(1)}</span>
            <span className="text-white/40 text-xs">{TRUSTPILOT_SUMMARY.reviewCount} reviews on Trustpilot</span>
          </a>
        </motion.div>
      </div>

      {/* Reviews Grid */}
      <div className="max-container container-pad pb-20 sm:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TRUSTPILOT_REVIEWS.map((review, i) => (
            <motion.a
              key={review.url}
              href={review.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors flex flex-col h-full"
            >
              <Stars rating={review.rating} />
              <p className="text-white font-bold text-lg mt-5 mb-3 leading-snug">{review.title}</p>
              <p className="text-white/70 text-[15px] leading-relaxed mb-8 flex-1">"{review.quote}"</p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="w-10 h-10 rounded-full shrink-0 bg-gradient-to-br from-[#1F7AFF] to-[#6C63FF] flex items-center justify-center text-white text-sm font-bold">
                  {initials(review.author)}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{review.author}</p>
                  <p className="text-white/40 text-xs mt-0.5">{review.country} · {review.date}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-container container-pad pb-20 sm:pb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center bg-white/5 border border-white/10 rounded-3xl p-10 sm:p-16">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight leading-tight">Join millions of happy users.</h2>
          <p className="text-white/55 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Create an account in 30 seconds and start using any of our standalone products today.
          </p>
          <Link href="/signup" className="inline-block px-8 py-4 bg-gradient-to-r from-[#1F7AFF] to-[#6C63FF] text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity">
            Create free account →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
