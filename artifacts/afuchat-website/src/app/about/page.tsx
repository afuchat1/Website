import type { Metadata } from 'next';
import GenericPageView from '@/views/GenericPage';

const BASE_URL = 'https://afuchat.com';

export const metadata: Metadata = {
  title: 'About AfuChat — Who We Are',
  description:
    'AfuChat Technologies Limited builds eight independent digital products that empower people everywhere. Learn about our mission, values, and how we build software that respects users.',
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: 'About AfuChat — Who We Are',
    description:
      'AfuChat Technologies builds eight independent digital products. Learn about our mission and values.',
    url: `${BASE_URL}/about`,
    images: [{ url: '/illustrations/ill-sec-about.webp', width: 1200, height: 630, alt: 'About AfuChat Technologies' }],
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About AfuChat Technologies',
  url: `${BASE_URL}/about`,
  description: 'AfuChat Technologies Limited builds eight independent digital products.',
  mainEntity: {
    '@type': 'Organization',
    name: 'AfuChat Technologies Limited',
    url: BASE_URL,
    description:
      'A technology company founded with a single belief: powerful tools should be accessible to everyone.',
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
      <GenericPageView title="About" type="about" />
    </>
  );
}
