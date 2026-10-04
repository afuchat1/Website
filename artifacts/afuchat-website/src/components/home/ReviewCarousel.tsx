'use client';

import type { TrustpilotReview } from '@/data/trustpilot-reviews';

type ReviewCarouselProps = {
  reviews: TrustpilotReview[];
  label?: string;
};

function initialsFor(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

function ReviewStars({ rating }: { rating: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, star) => (
        <span
          key={star}
          aria-hidden="true"
          className={`grid h-5 w-5 place-items-center text-sm leading-none ${
            star < rating
              ? 'bg-[#00B67A] text-white'
              : 'bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-300'
          }`}
        >
          ★
        </span>
      ))}
    </span>
  );
}

export default function ReviewCarousel({
  reviews,
  label = 'Customer reviews',
}: ReviewCarouselProps) {
  const verifiedReviews = reviews.filter((review) => review.reviewerName.trim().length > 0);

  if (verifiedReviews.length === 0) return null;

  return (
    <section
      aria-label={label}
      className="w-full"
    >
      <div
        className="review-marquee-viewport w-full overflow-hidden"
        role="group"
        aria-label={`${label} carousel`}
      >
        <div className="review-marquee-track flex w-max">
          {[false, true].map((isDuplicate) => (
            <div
              key={isDuplicate ? 'duplicate' : 'reviews'}
              className="review-marquee-group flex shrink-0 items-start gap-5 pr-5"
              aria-hidden={isDuplicate}
            >
              {verifiedReviews.map((review) => {
                const reviewText = review.quote ?? review.title;
                return (
                  <article
                    key={`${isDuplicate ? 'duplicate-' : ''}${review.id}`}
                    className="review-marquee-item flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/20 sm:p-7"
                  >
                    <div className="mb-5 flex items-center justify-between gap-3">
                      {review.rating !== undefined && <ReviewStars rating={review.rating} />}
                      <time
                        dateTime={review.dateTime}
                        className="text-xs font-medium text-slate-500 dark:text-slate-400"
                      >
                        {review.date}
                      </time>
                    </div>
                    <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
                      {reviewText && <>{reviewText}{' '}</>}
                      <a
                        href={review.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={isDuplicate ? -1 : undefined}
                        className="inline font-semibold text-emerald-700 underline decoration-emerald-700/40 underline-offset-4 transition-colors hover:text-emerald-900 dark:text-emerald-300 dark:decoration-emerald-300/50 dark:hover:text-emerald-100"
                      >
                        {review.sourceLabel ?? 'Read this review on Trustpilot'} <span aria-hidden="true">↗</span>
                      </a>
                    </p>
                    <footer className="mt-5 flex items-center gap-3 border-t border-slate-200 pt-4 dark:border-slate-700">
                      <span
                        aria-hidden="true"
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800 ring-1 ring-emerald-600/20 dark:bg-emerald-400/15 dark:text-emerald-200 dark:ring-emerald-300/20"
                      >
                        {initialsFor(review.reviewerName)}
                      </span>
                      <p className="min-w-0 truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {review.reviewerName}
                      </p>
                    </footer>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .review-marquee-viewport {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .review-marquee-viewport::-webkit-scrollbar {
          display: none;
        }
        .review-marquee-track {
          animation: review-marquee-slide 48s linear infinite;
          will-change: transform;
        }
        .review-marquee-viewport:hover .review-marquee-track,
        .review-marquee-viewport:focus-within .review-marquee-track,
        .review-marquee-viewport:active .review-marquee-track {
          animation-play-state: paused;
        }
        .review-marquee-item {
          flex: 0 0 min(84vw, 24rem);
        }
        @keyframes review-marquee-slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (min-width: 640px) {
          .review-marquee-item {
            flex-basis: min(44vw, 24rem);
          }
        }
        @media (min-width: 1024px) {
          .review-marquee-item {
            flex-basis: min(30vw, 24rem);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .review-marquee-viewport {
            overflow-x: auto;
          }
          .review-marquee-track {
            animation: none;
            transform: none;
          }
          .review-marquee-group[aria-hidden='true'] {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}