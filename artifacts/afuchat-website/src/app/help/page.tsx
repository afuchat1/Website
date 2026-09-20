import type { Metadata } from 'next';
import GenericPageView from '@/views/GenericPage';

const BASE_URL = 'https://afuchat.com';

export const metadata: Metadata = {
  title: 'Help Center, AfuChat Technologies',
  description:
    'Help and support for AfuChat, AfuMail, AfuCloud, and Engagera.',
  keywords: ['AfuChat help', 'AfuMail support', 'AfuCloud', 'Engagera', 'support', 'documentation'],
  alternates: { canonical: `${BASE_URL}/help` },
  openGraph: {
    title: 'AfuChat Technologies Help Center',
    description: 'Documentation, support, and useful information about our products.',
    url: `${BASE_URL}/help`,
    images: [{ url: '/illustrations/ill-sec-help.webp', width: 1200, height: 630, alt: 'AfuChat Technologies help center' }],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'AfuChat Technologies Help Center',
  url: `${BASE_URL}/help`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What products does AfuChat Technologies build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AfuChat Technologies builds AfuChat, AfuMail, AfuCloud, and Engagera.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the products be used independently?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Each product has its own purpose and can be used independently, while the products can also work together as the Afu ecosystem grows.',
      },
    },
  ],
};

export default function HelpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GenericPageView title="Help" type="help" />
    </>
  );
}
