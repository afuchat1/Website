'use client';
import { motion } from 'framer-motion';
import { TRUSTPILOT_PROFILE_URL } from '@/data/trustpilot';
import { TRUSTPILOT_REVIEWS } from '@/data/trustpilot-reviews';
import ReviewCarousel from '@/components/home/ReviewCarousel';

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

      <div className="max-container container-pad">
        <ReviewCarousel
          reviews={TRUSTPILOT_REVIEWS.filter(review => review.quote).slice(0, 3)}
          label="AfuChat customer reviews"
        />
      </div>
    </section>
  );
}
