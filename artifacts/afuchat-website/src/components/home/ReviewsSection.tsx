import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TRUSTPILOT_PROFILE_URL, TRUSTPILOT_REVIEWS, TRUSTPILOT_SUMMARY, type TrustpilotReview } from '@/data/trustpilot';
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

function ReviewCard({ review }: { review: TrustpilotReview }) {
  return (
    <a
      href={review.url}
      target="_blank"
      rel="noopener noreferrer"
      className="shrink-0 w-[320px] sm:w-[360px] bg-white/5 border border-white/10 p-6 sm:p-7 rounded-3xl hover:bg-white/10 transition-colors flex flex-col"
    >
      <Stars rating={review.rating} />
      <p className="text-white font-semibold text-[15px] mt-4 mb-2 leading-snug">{review.title}</p>
      <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">"{review.quote}"</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-9 h-9 rounded-full shrink-0 bg-gradient-to-br from-[#1F7AFF] to-[#6C63FF] flex items-center justify-center text-white text-xs font-bold">
          {initials(review.author)}
        </div>
        <div className="min-w-0">
          <p className="text-white font-bold text-sm truncate">{review.author}</p>
          <p className="text-white/40 text-xs mt-0.5">{review.country} · {review.date}</p>
        </div>
      </div>
    </a>
  );
}

export default function ReviewsSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="relative z-10 max-container container-pad">
        <div className="text-center mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-pink-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3"
          >Wall of Love</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5"
          >Loved by real people.</motion.h2>
          <motion.a
            href={TRUSTPILOT_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${TRUSTPILOT_SUMMARY.rating.toFixed(1)} stars on Trustpilot, ${TRUSTPILOT_SUMMARY.reviewCount} reviews`}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center rounded-2xl bg-white p-3 sm:p-3.5 shadow-lg shadow-black/20 transition-shadow hover:shadow-xl"
          >
            <img src={trustpilotLogo} alt="Trustpilot" className="h-8 sm:h-10 w-auto" />
          </motion.a>
        </div>
      </div>

      {/* Sliding marquee track — each half is an identical, self-contained flex
          group (including its own right-side gap via padding) so translating
          by exactly one half's width loops with zero pop. */}
      <div className="relative z-10 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <motion.div
          className="flex w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0 pr-6 sm:pr-8 gap-6 sm:gap-8">
              {TRUSTPILOT_REVIEWS.map((review, i) => (
                <ReviewCard key={`${half}-${review.author}-${i}`} review={review} />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
