'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { TrustpilotReview } from '@/data/trustpilot-reviews';

type ReviewCarouselProps = {
  reviews: TrustpilotReview[];
  label?: string;
};

function initialsFor(name?: string) {
  if (!name) return 'TP';
  if (name === 'Trustpilot reviewer') return 'TP';
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() ?? '')
    .join('');
}

function ReviewStars({ rating }: { rating: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <span className="inline-flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, star) => (
        <span
          key={star}
          aria-hidden="true"
          className={star < rating ? 'text-[#00B67A]' : 'text-white/20'}
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
    if (paused || prefersReducedMotion || reviews.length < 2) return;
    const timer = window.setInterval(() => moveByCard(1), 6500);
    return () => window.clearInterval(timer);
  }, [moveByCard, paused, prefersReducedMotion, reviews.length]);

  if (reviews.length === 0) return null;

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
        {reviews.map((review) => {
          const reviewerName = review.reviewerName ?? 'Trustpilot reviewer';
          const reviewText = review.quote ?? review.title;
          return (
            <article
              key={review.id}
              data-review-card
              className="review-carousel-card flex flex-col snap-start rounded-2xl p-5 sm:p-6"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-500/15 text-sm font-bold text-blue-200 ring-1 ring-white/10"
                  >
                    {initialsFor(review.reviewerName)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">{reviewerName}</p>
                  </div>
                </div>
                {review.rating !== undefined && <ReviewStars rating={review.rating} />}
              </div>
              {reviewText && (
                <blockquote className="text-sm leading-relaxed text-white/70">
                  {reviewText}
                </blockquote>
              )}
              <a
                href={review.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-5 text-xs font-semibold text-[#00B67A] transition-colors hover:text-white"
              >
                {review.sourceLabel ?? 'Read this review on Trustpilot'} <span aria-hidden="true">↗</span>
              </a>
            </article>
          );
        })}
      </div>

      {reviews.length > 1 && (
        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-xs text-white/35">Swipe or use the arrows to browse</p>
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
          min-height: 250px;
          border: 1px solid rgba(255, 255, 255, 0.78);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.82),
            rgba(255, 255, 255, 0.58)
          );
          -webkit-backdrop-filter: blur(22px);
          backdrop-filter: blur(22px);
          box-shadow:
            0 18px 45px rgba(15, 23, 42, 0.09),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
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