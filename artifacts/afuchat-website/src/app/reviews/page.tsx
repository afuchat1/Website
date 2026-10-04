import type { Metadata } from 'next';
import ReviewsView from '@/views/Reviews';

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

export default function ReviewsPage() {
  return <ReviewsView />;
}
