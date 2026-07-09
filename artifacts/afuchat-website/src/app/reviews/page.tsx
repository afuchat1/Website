import type { Metadata } from 'next';
import ReviewsClient from '@/views/Reviews';

export const metadata: Metadata = {
  title: 'Reviews — AfuChat',
  description: 'Real customer reviews for AfuChat, sourced directly from Trustpilot. See what people say about our products.',
  alternates: { canonical: 'https://web.afuchat.com/reviews' },
};

export default function Page() {
  return <ReviewsClient />;
}
