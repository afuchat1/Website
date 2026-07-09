import type { Metadata } from 'next';
import PartnersClient from '@/pages/Partners';

export const metadata: Metadata = {
  title: 'Partner Program — AfuChat',
  description:
    'Join the AfuChat partner ecosystem. Integration, channel, and strategic partnership programmes for companies of all sizes looking to grow alongside our products.',
  alternates: { canonical: 'https://web.afuchat.com/partners' },
};

export default function Page() {
  return <PartnersClient />;
}
