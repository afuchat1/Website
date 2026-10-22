import type { Metadata } from 'next';
import JoinTeam from '@/views/JoinTeam';

const BASE_URL = 'https://www.afuchat.com';

export const metadata: Metadata = {
  title: 'Join the Team | Developers & Co-Founders',
  description:
    'Explore engineering and product departments, download contributor guides, and express interest in joining AfuChat Technologies Limited as a developer, technical lead or potential co-founder.',
  alternates: { canonical: `${BASE_URL}/about/careers` },
  openGraph: {
    title: 'Join AfuChat Technologies | Developers & Co-Founders',
    description:
      'Help build AfuChat products. Explore contribution departments, read the guides and introduce yourself to the team.',
    url: `${BASE_URL}/about/careers`,
    images: [{ url: '/illustrations/ill-sec-careers.webp', width: 1200, height: 630, alt: 'Join AfuChat Technologies' }],
  },
};

export default function CareersPage() {
  return <JoinTeam />;
}
