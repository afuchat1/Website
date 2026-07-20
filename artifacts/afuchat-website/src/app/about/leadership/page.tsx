import type { Metadata } from 'next';
import GenericPageView from '@/views/GenericPage';

export const metadata: Metadata = {
  title: 'Leadership — AfuChat',
  description:
    'Meet the team behind AfuChat Technologies. Our leadership brings together decades of experience in consumer internet, enterprise software, and applied AI.',
  alternates: { canonical: 'https://afuchat.com/about/leadership' },
  openGraph: {
    title: 'Leadership — AfuChat',
    description: 'Meet the team behind AfuChat Technologies.',
    url: 'https://afuchat.com/about/leadership',
    images: [{ url: '/illustrations/ill-sec-leadership.webp', width: 1200, height: 630, alt: 'AfuChat leadership team' }],
  },
};

export default function LeadershipPage() {
  return <GenericPageView title="Leadership" type="leadership" />;
}
