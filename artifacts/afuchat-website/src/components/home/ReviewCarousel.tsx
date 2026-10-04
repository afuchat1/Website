'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { TrustpilotReview } from '@/data/trustpilot-reviews';

type ReviewCarouselProps = {
  reviews: TrustpilotReview[];
  label?: string;
};

function ReviewStars({ rating }: { rating: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <span className="inline-flex gap-1 text-[1.35rem] leading-none sm:text-2xl" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, star) => (
        <span
          key={star}
          aria-hidden="true"
          className={star < rating ? 'text-[#00B67A]' : 'text-slate-300 dark:text-slate-600'}
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
  const trackRef = useRef<HTMLDivElement>(null);
  const verifiedReviews = reviews.filter((review) => review.reviewerName.trim().length > 0);
  const [paused, setPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  const moveByCard = useCallback((direction: -1 | 1) => {
    const track = trackRef.current;
    const firstItem = track?.querySelector<HTMLElement>('[data-review-item]');
    if (!track || !firstItem) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 1) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const step = firstItem.getBoundingClientRect().width + gap;
    const atStart = track.scrollLeft <= 2;
    const atEnd = track.scrollLeft >= maxScroll - 2;
    const nextScroll = direction > 0 && atEnd
      ? 0
      : direction < 0 && atStart
        ? maxScroll
        : Math.max(0, Math.min(maxScroll, track.scrollLeft + direction * step));

    track.scrollTo({
      left: nextScroll,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (paused || prefersReducedMotion || verifiedReviews.length < 2) return;
    const timer = window.setInterval(() => moveByCard(1), 6500);
    return () => window.clearInterval(timer);
  }, [moveByCard, paused, prefersReducedMotion, verifiedReviews.length]);

  if (verifiedReviews.length === 0) return null;

  return (
    <section
      aria-label={label}
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        const nextTarget = event.relatedTarget as Node | null;
        if (!nextTarget || !event.currentTarget.contains(nextTarget)) setPaused(false);
      }}
    >
      <div
        ref={trackRef}
        className="review-carousel-track flex snap-x snap-mandatory gap-5 overflow-x-auto"
        role="group"
        aria-label={`${label} carousel`}
      >
        {verifiedReviews.map((review) => {
          const reviewText = review.quote ?? review.title;
          return (
            <article
              key={review.id}
              data-review-item
              className="review-carousel-item min-w-0 snap-start"
            >
              <p className="text-lg font-medium leading-8 text-slate-800 dark:text-slate-100 sm:text-xl">
                {reviewText && <>{reviewText}{' '}</>}
                <a
                  href={review.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline font-semibold text-emerald-700 underline decoration-emerald-700/40 underline-offset-4 transition-colors hover:text-emerald-900 dark:text-emerald-300 dark:decoration-emerald-300/50 dark:hover:text-emerald-100"
                >
                  {review.sourceLabel ?? 'Read this review on Trustpilot'} <span aria-hidden="true">↗</span>
                </a>
              </p>
              <footer className="mt-3 flex items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-400">
                <p className="min-w-0 truncate">
                  <span className="font-semibold text-slate-900 dark:text-slate-200">
                    {review.reviewerName}
                  </span>
                  <span aria-hidden="true" className="mx-2">·</span>
                  <time dateTime={review.dateTime}>{review.date}</time>
                </p>
                {review.rating !== undefined && <ReviewStars rating={review.rating} />}
              </footer>
            </article>
          );
        })}
      </div>

      {verifiedReviews.length > 1 && (
        <div className="mt-5 flex justify-end">
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => moveByCard(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => moveByCard(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .review-carousel-track {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .review-carousel-track::-webkit-scrollbar {
          display: none;
        }
        .review-carousel-item {
          flex: 0 0 86%;
        }
        @media (min-width: 640px) {
          .review-carousel-item {
            flex-basis: 48%;
          }
        }
      `}</style>
    </section>
  );
}