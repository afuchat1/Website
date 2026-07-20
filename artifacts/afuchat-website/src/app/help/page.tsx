import type { Metadata } from 'next';
import GenericPageView from '@/views/GenericPage';

const BASE_URL = 'https://afuchat.com';

export const metadata: Metadata = {
  title: 'Help Center — AfuChat',
  description:
    'Get help with AfuChat products. Browse documentation, FAQs, and support resources for AfuMail, AfuChat, AfuAI, AfuCloud, AfuMovies, AfuMall, AfuNews, and AfuBlog.',
  keywords: ['AfuChat help', 'support', 'documentation', 'FAQ', 'AfuChat guide', 'customer support'],
  alternates: { canonical: `${BASE_URL}/help` },
  openGraph: {
    title: 'AfuChat Help Center',
    description: 'Documentation, FAQs, and support for all AfuChat products.',
    url: `${BASE_URL}/help`,
    images: [{ url: '/illustrations/ill-sec-help.webp', width: 1200, height: 630, alt: 'AfuChat help center' }],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'AfuChat Help Center',
  url: `${BASE_URL}/help`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get started with AfuChat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Create a free account at web.afuchat.com. One account gives you access to all eight AfuChat products instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use AfuChat products independently?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every AfuChat product — AfuMail, AfuChat, AfuAI, AfuCloud, AfuMovies, AfuMall, AfuNews, and AfuBlog — is designed to work perfectly on its own.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AfuChat free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AfuChat offers free accounts with access to all products. Premium plans are available with additional features.',
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
