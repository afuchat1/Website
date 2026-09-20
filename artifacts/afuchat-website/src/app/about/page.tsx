import type { Metadata } from 'next';
import GenericPageView from '@/views/GenericPage';

const BASE_URL = 'https://afuchat.com';

export const metadata: Metadata = {
  title: 'About AfuChat Technologies, Who We Are',
  description:
    'AfuChat Technologies Limited is a product and engineering company building its own digital products and helping organizations turn useful ideas into working digital experiences.',
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: 'About AfuChat Technologies, Who We Are',
    description:
      'AfuChat Technologies builds products across communication, email, cloud, and AI. Learn about our work, mission, and values.',
    url: `${BASE_URL}/about`,
    images: [{ url: '/illustrations/ill-sec-about.webp', width: 1200, height: 630, alt: 'About AfuChat Technologies' }],
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About AfuChat Technologies',
  url: `${BASE_URL}/about`,
  description: 'AfuChat Technologies Limited builds digital products and practical technology for people, businesses, and organizations.',
  mainEntity: {
    '@type': 'Organization',
    name: 'AfuChat Technologies Limited',
    url: BASE_URL,
    description:
      'A technology company focused on building useful products and practical digital systems.',
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
