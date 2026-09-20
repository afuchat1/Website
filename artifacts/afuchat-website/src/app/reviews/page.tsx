import type { Metadata } from 'next';
import ReviewsView from '@/views/Reviews';
import { TRUSTPILOT_SUMMARY, TRUSTPILOT_REVIEWS } from '@/data/trustpilot';

const BASE_URL = 'https://afuchat.com';

export const metadata: Metadata = {
  title: 'Reviews, AfuChat Technologies',
  description: `See what users say about AfuChat Technologies and its products.`,
  keywords: ['AfuChat reviews', 'AfuChat Trustpilot', 'AfuChat Technologies reviews', 'user reviews'],
  alternates: { canonical: `${BASE_URL}/reviews` },
  openGraph: {
    title: 'AfuChat Technologies Reviews',
    description: 'User feedback about AfuChat Technologies and its products.',
    url: `${BASE_URL}/reviews`,
    images: [{ url: '/assets/trustpilot_logo.png', width: 1200, height: 630, alt: 'AfuChat Technologies reviews' }],
  },
};

const reviewsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'AfuChat',
  description: 'Products and digital services by AfuChat Technologies',
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
    reviewRating: { '@type': 'Rating', ratingValue: r.rating.toString(), bestRating: '5' },
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
