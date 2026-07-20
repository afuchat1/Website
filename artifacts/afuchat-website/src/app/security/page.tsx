import type { Metadata } from 'next';
import GenericPageView from '@/views/GenericPage';

const BASE_URL = 'https://afuchat.com';

export const metadata: Metadata = {
  title: 'Security — AfuChat',
  description:
    'AfuChat is built security-first with AES-256 encryption at rest, TLS 1.3 in transit, zero-knowledge architecture, and a dedicated security team. Your data is protected by design.',
  keywords: [
    'AfuChat security', 'AES-256', 'zero-knowledge', 'end-to-end encryption', 'TLS 1.3',
    'data security', 'privacy', 'secure messaging',
  ],
  alternates: { canonical: `${BASE_URL}/security` },
  openGraph: {
    title: 'AfuChat Security — Built Security-First',
    description: 'AES-256 encryption, zero-knowledge architecture, TLS 1.3, and a dedicated security team.',
    url: `${BASE_URL}/security`,
    images: [{ url: '/illustrations/ill-sec-security.webp', width: 1200, height: 630, alt: 'AfuChat security architecture' }],
  },
};

export default function SecurityPage() {
  return <GenericPageView title="Security" type="security" />;
}
