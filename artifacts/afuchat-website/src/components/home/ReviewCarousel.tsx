'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    const firstCard = track?.querySelector<HTMLElement>('[data-review-card]');
    if (!track || !firstCard) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 1) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const step = firstCard.getBoundingClientRect().width + gap;
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
              data-review-card
              className="review-carousel-card flex flex-col snap-start p-6 sm:p-8"
            >
              <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 pb-4 dark:border-slate-600/70">
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800 ring-1 ring-emerald-600/20 dark:bg-emerald-400/15 dark:text-emerald-200 dark:ring-emerald-300/20"
                  >
                    {initialsFor(review.reviewerName)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-base font-semibold text-slate-900 dark:text-white">
                      {review.reviewerName}
                    </p>
                    <time
                      dateTime={review.dateTime}
                      className="mt-0.5 block text-xs font-medium text-slate-500 dark:text-slate-400"
                    >
                      {review.date}
                    </time>
                  </div>
                </div>
                {review.rating !== undefined && <ReviewStars rating={review.rating} />}
              </div>
              {reviewText && (
                <blockquote className="flex-1 py-5 text-lg font-medium leading-8 text-slate-800 dark:text-slate-100 sm:text-xl">
                  {reviewText}
                </blockquote>
              )}
              <a
                href={review.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto border-t border-slate-200/80 pt-4 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-900 dark:border-slate-600/70 dark:text-emerald-300 dark:hover:text-emerald-100"
              >
                {review.sourceLabel ?? 'Read this review on Trustpilot'} <span aria-hidden="true">↗</span>
              </a>
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
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => moveByCard(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
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
        .review-carousel-card {
          flex: 0 0 86%;
          min-height: 320px;
          border-radius: 0;
          border: 1px solid rgba(100, 116, 139, 0.38);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.98),
            rgba(239, 246, 255, 0.94)
          );
          -webkit-backdrop-filter: blur(12px) saturate(150%);
          backdrop-filter: blur(12px) saturate(150%);
          box-shadow:
            0 12px 32px rgba(15, 23, 42, 0.09),
            inset 0 1px 0 rgba(255, 255, 255, 0.96);
        }
        @media (prefers-color-scheme: dark) {
          .review-carousel-card {
            border-color: rgba(148, 163, 184, 0.38);
            background: linear-gradient(
              135deg,
              rgba(30, 41, 59, 0.97),
              rgba(15, 23, 42, 0.94)
            );
            -webkit-backdrop-filter: blur(12px) saturate(145%);
            backdrop-filter: blur(12px) saturate(145%);
            box-shadow:
              0 12px 32px rgba(0, 0, 0, 0.24),
              inset 0 1px 0 rgba(255, 255, 255, 0.12);
          }
        }
        @media (min-width: 640px) {
          .review-carousel-card {
            flex-basis: 48%;
          }
        }
      `}</style>
    </section>
  );
}