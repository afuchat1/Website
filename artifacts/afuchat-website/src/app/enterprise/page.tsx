import type { Metadata } from 'next';
import GenericPageView from '@/views/GenericPage';

const BASE_URL = 'https://afuchat.com';

export const metadata: Metadata = {
  title: 'Enterprise — AfuChat for Teams & Organizations',
  description:
    'Enterprise-grade AfuChat products with advanced security controls, custom domains, SSO, audit logging, SOC 2 Type II compliance, and dedicated infrastructure.',
  keywords: [
    'AfuChat enterprise', 'enterprise software', 'SOC 2', 'SAML SSO', 'SCIM', 'enterprise security', 'B2B',
  ],
  alternates: { canonical: `${BASE_URL}/enterprise` },
  openGraph: {
    title: 'AfuChat Enterprise — Security, Compliance, Control',
    description: 'Advanced security, SOC 2 Type II, SSO, SCIM provisioning, and dedicated infrastructure.',
    url: `${BASE_URL}/enterprise`,
    images: [{ url: '/illustrations/ill-sec-enterprise.webp', width: 1200, height: 630, alt: 'AfuChat Enterprise' }],
  },
};

export default function EnterprisePage() {
  return <GenericPageView title="Enterprise" type="enterprise" />;
}
