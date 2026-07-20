import type { Metadata } from 'next';
import AfuAIView from '@/views/AfuAIPage';

const BASE_URL = 'https://afuchat.com';

export const metadata: Metadata = {
  title: 'AfuAI — Intelligence, Built In',
  description:
    'AfuAI is your personal smart assistant — context-aware, deeply integrated, and powered by live web search. Automated workflows, voice recognition, and real-time AI at your fingertips.',
  keywords: ['AfuAI', 'AI assistant', 'artificial intelligence', 'AfuChat AI', 'smart assistant', 'voice recognition'],
  alternates: { canonical: `${BASE_URL}/products/afuai` },
  openGraph: {
    title: 'AfuAI — Intelligence, Built In | AfuChat',
    description:
      'Your personal smart assistant. Context-aware, deeply integrated, and powered by live web search.',
    url: `${BASE_URL}/products/afuai`,
    images: [
      {
        url: '/illustrations/ill-svc-afuai.webp',
        width: 1200,
        height: 630,
        alt: 'AfuAI — your personal intelligent assistant',
      },
    ],
  },
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AfuAI',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web, Android, iOS',
  description:
    'Your personal smart assistant, context-aware and deeply integrated with live web search, automated workflows, and voice recognition.',
  url: `${BASE_URL}/products/afuai`,
  image: `${BASE_URL}/illustrations/icon3d-afuai.webp`,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  provider: { '@type': 'Organization', name: 'AfuChat Technologies Limited', url: BASE_URL },
  featureList: ['Contextual Help', 'Automated Workflows', 'Voice Recognition', 'Live Web Search'],
};

export default function AfuAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <AfuAIView />
    </>
  );
}
