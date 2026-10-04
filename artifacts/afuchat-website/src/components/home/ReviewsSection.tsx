'use client';
import { motion } from 'framer-motion';
import { TRUSTPILOT_PROFILE_URL } from '@/data/trustpilot';
import { TRUSTPILOT_REVIEWS } from '@/data/trustpilot-reviews';

const TRUSTPILOT_LOGO = '/assets/trustpilot_logo.png';

export default function ReviewsSection() {
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
            aria-label="Read AfuChat reviews on Trustpilot"
            className="bg-white hover:bg-white/90 transition-colors rounded-full px-4 py-2 flex items-center gap-2 self-start sm:self-auto"
          >
            <img src={TRUSTPILOT_LOGO} alt="Trustpilot" className="h-8 sm:h-10 w-auto" loading="lazy" decoding="async" />
          </motion.a>
        </div>
      </div>

      <div className="max-container container-pad grid grid-cols-1 md:grid-cols-3 gap-5">
        {TRUSTPILOT_REVIEWS.filter(review => review.quote).slice(0, 3).map((review, index) => (
          <motion.article
            key={review.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6 flex flex-col"
          >
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="inline-flex gap-1" role="img" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, star) => (
                  <span key={star} aria-hidden="true" className={star < review.rating ? 'text-[#00B67A]' : 'text-white/20'}>
                    ★
                  </span>
                ))}
              </span>
              <time dateTime={review.dateTime} className="text-xs text-white/40">{review.date}</time>
            </div>
            <blockquote className="text-sm sm:text-base text-white/70 leading-relaxed">
              “{review.quote}”
            </blockquote>
            <a
              href={review.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto pt-5 text-xs font-semibold text-[#00B67A] hover:text-white transition-colors"
            >
              Read on Trustpilot <span aria-hidden="true">↗</span>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
