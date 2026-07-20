import type { Metadata } from 'next';
import ReviewsView from '@/views/Reviews';
import { TRUSTPILOT_SUMMARY, TRUSTPILOT_REVIEWS } from '@/data/trustpilot';

const BASE_URL = 'https://afuchat.com';

export const metadata: Metadata = {
  title: 'Reviews — Loved by Real Users',
  description: `AfuChat has a ${TRUSTPILOT_SUMMARY.rating} star rating on Trustpilot from ${TRUSTPILOT_SUMMARY.reviewCount} verified reviews. See what real users say about AfuMail, AfuChat, AfuAI, AfuCloud, and more.`,
  keywords: ['AfuChat reviews', 'AfuChat Trustpilot', 'AfuChat rating', 'user reviews'],
  alternates: { canonical: `${BASE_URL}/reviews` },
  openGraph: {
    title: `AfuChat Reviews — ${TRUSTPILOT_SUMMARY.rating} Stars on Trustpilot`,
    description: `${TRUSTPILOT_SUMMARY.reviewCount} verified reviews. Real users share their experiences with AfuChat products.`,
    url: `${BASE_URL}/reviews`,
    images: [{ url: '/assets/trustpilot_logo.png', width: 1200, height: 630, alt: 'AfuChat Trustpilot reviews' }],
  },
};

const reviewsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'AfuChat',
  description: 'Eight independent digital products by AfuChat Technologies',
  url: BASE_URL,
  image: `${BASE_URL}/assets/afuchat_logo_transparent.png`,
  brand: { '@type': 'Brand', name: 'AfuChat Technologies Limited' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: TRUSTPILOT_SUMMARY.rating.toString(),
    bestRating: '5',
    worstRating: '1',
    reviewCount: TRUSTPILOT_SUMMARY.reviewCount.toString(),
  },
  review: TRUSTPILOT_REVIEWS.map(r => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.author },
    datePublished: r.date,
    reviewBody: r.quote,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating.toString(),
      bestRating: '5',
    },
    url: r.url,
  })),
};

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }} />
      <ReviewsView />
    </>
  );
}
