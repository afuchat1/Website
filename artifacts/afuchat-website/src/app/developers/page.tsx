import type { Metadata } from 'next';
import DevelopersView from '@/views/Developers';

const BASE_URL = 'https://afuchat.com';

export const metadata: Metadata = {
  title: 'Developer Platform — Build on AfuChat',
  description:
    'AfuChat developer platform: REST API, GraphQL, WebSockets, SDKs for React, Node.js, Python, iOS, and Android. AfuMail SSO, webhooks, and real-time event streaming.',
  keywords: [
    'AfuChat API', 'developer platform', 'REST API', 'GraphQL', 'WebSockets',
    'AfuMail SSO', 'OAuth', 'SAML', 'SDK', 'developer tools',
  ],
  alternates: { canonical: `${BASE_URL}/developers` },
  openGraph: {
    title: 'AfuChat Developer Platform — Build in Hours, Not Weeks',
    description: 'REST API, GraphQL, WebSockets, SDKs for every major platform. Real-time events and AfuMail SSO.',
    url: `${BASE_URL}/developers`,
    images: [
      {
        url: '/illustrations/ill-sec-developer.webp',
        width: 1200,
        height: 630,
        alt: 'AfuChat developer platform — APIs and SDKs',
      },
    ],
  },
};

const apiJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebAPI',
  name: 'AfuChat Developer API',
  description:
    'REST and GraphQL APIs, real-time WebSocket events, and open-source SDKs for every major platform.',
  url: 'https://developers.afuchat.com',
  provider: { '@type': 'Organization', name: 'AfuChat Technologies Limited', url: BASE_URL },
  documentation: 'https://developers.afuchat.com',
};

export default function DevelopersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(apiJsonLd) }} />
      <DevelopersView />
    </>
  );
}
