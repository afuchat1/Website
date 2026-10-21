import type { Metadata } from 'next';
import WorkPageView from '@/views/Work';

const BASE_URL = 'https://www.afuchat.com';

export const metadata: Metadata = {
  title: 'Our Work | AfuChat Technologies',
  description:
    'Explore the digital products and software experiences built by AfuChat Technologies, spanning communication, email, cloud services, AI, and software engineering.',
  alternates: { canonical: `${BASE_URL}/work` },
  openGraph: {
    title: 'Our Work | AfuChat Technologies',
    description:
      'Explore AfuChat Technologies products and practical software capabilities.',
    url: `${BASE_URL}/work`,
    type: 'website',
    images: [
      {
        url: '/illustrations/ill-sec-products.webp',
        width: 1200,
        height: 630,
        alt: 'AfuChat Technologies — Our Work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work | AfuChat Technologies',
    description: 'Explore AfuChat Technologies products and software capabilities.',
    images: ['/illustrations/ill-sec-products.webp'],
  },
};

export default function WorkPage() {
  return <WorkPageView />;
}
