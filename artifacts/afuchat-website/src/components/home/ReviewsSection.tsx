'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TRUSTPILOT_PROFILE_URL, TRUSTPILOT_REVIEWS, TRUSTPILOT_SUMMARY, type TrustpilotReview } from '@/data/trustpilot';

const TRUSTPILOT_LOGO = '/assets/trustpilot_logo.png';

function initials(name: string) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]?.toUpperCase()).join('');
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${star <= rating ? 'fill-[#00B67A] text-[#00B67A]' : 'text-white/20'}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: TrustpilotReview }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[340px] bg-white/4 rounded-2xl p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1F7AFF] to-[#6C63FF] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {initials(review.author)}
          </div>
          <div>
            <p className="text-white/80 text-sm font-semibold leading-none mb-0.5">{review.author}</p>
            <p className="text-white/30 text-xs leading-none">{review.date}</p>
          </div>
        </div>
        <Stars rating={review.rating} />
      </div>
      <p className="text-white/55 text-sm leading-relaxed">{review.quote}</p>
    </div>
  );
}

export default function ReviewsSection() {
  const doubled = [...TRUSTPILOT_REVIEWS, ...TRUSTPILOT_REVIEWS];

  return (
    <section className="py-16 sm:py-20 overflow-hidden">
      <div className="max-container container-pad mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/35 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3"
            >
              Reviews
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
            >
              Loved by real users.
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href={TRUSTPILOT_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${TRUSTPILOT_SUMMARY.rating.toFixed(1)} stars on Trustpilot, ${TRUSTPILOT_SUMMARY.reviewCount} reviews`}
            className="bg-white/8 hover:bg-white/12 transition-colors rounded-full px-4 py-2 flex items-center gap-2 self-start sm:self-auto"
          >
            <img src={TRUSTPILOT_LOGO} alt="Trustpilot" className="h-8 sm:h-10 w-auto" loading="lazy" decoding="async" />
          </motion.a>
        </div>
      </div>

      {/* Infinite marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#040c1e] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#040c1e] to-transparent z-10 pointer-events-none" />
        <div className="flex gap-4 animate-[marquee_40s_linear_infinite] w-max">
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
