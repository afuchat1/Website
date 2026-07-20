import type { Metadata } from 'next';
import PartnersView from '@/views/Partners';

const BASE_URL = 'https://afuchat.com';

export const metadata: Metadata = {
  title: 'Partner Program — AfuChat',
  description:
    'Join the AfuChat partner program. Technology, reseller, and media partnership tracks for businesses, SaaS tools, MSPs, IT consultancies, and content creators.',
  keywords: [
    'AfuChat partners', 'technology partnership', 'reseller program', 'media partnership',
    'AfuChat integration', 'partner program',
  ],
  alternates: { canonical: `${BASE_URL}/partners` },
  openGraph: {
    title: 'AfuChat Partner Program',
    description: 'Technology, reseller, and media partnership tracks. Apply to become an AfuChat partner.',
    url: `${BASE_URL}/partners`,
    images: [{ url: '/illustrations/ill-sec-ecosystem.webp', width: 1200, height: 630, alt: 'AfuChat partner program' }],
  },
};

export default function PartnersPage() {
  return <PartnersView />;
}
