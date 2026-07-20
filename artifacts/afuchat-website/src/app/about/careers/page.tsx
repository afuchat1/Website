import type { Metadata } from 'next';
import GenericPageView from '@/views/GenericPage';

const BASE_URL = 'https://afuchat.com';

export const metadata: Metadata = {
  title: 'Careers — Join AfuChat',
  description:
    'Join AfuChat Technologies Limited and help build independent digital products used by people around the world. Explore open roles in engineering, design, and product.',
  alternates: { canonical: `${BASE_URL}/about/careers` },
  openGraph: {
    title: 'Careers at AfuChat',
    description: 'Help build independent digital products used by people around the world.',
    url: `${BASE_URL}/about/careers`,
    images: [{ url: '/illustrations/ill-sec-careers.webp', width: 1200, height: 630, alt: 'Careers at AfuChat' }],
  },
};

const jobPostingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Open Roles at AfuChat',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'AfuChat Technologies Limited',
    url: BASE_URL,
    logo: `${BASE_URL}/assets/afuchat_logo_transparent.png`,
  },
  jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressCountry: 'GB' } },
  employmentType: 'FULL_TIME',
  description: 'Join AfuChat Technologies Limited and help build world-class digital products.',
};

export default function CareersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }} />
      <GenericPageView title="Careers" type="careers" />
    </>
  );
}
