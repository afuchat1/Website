import type { Metadata } from 'next';
import PartnersClient from '@/views/Partners';

export const metadata: Metadata = {
  title: 'Partner Program — AfuChat',
  description:
    'Join the AfuChat partner ecosystem. Integration, channel, and strategic partnership programmes for companies of all sizes looking to grow alongside our products.',
  alternates: { canonical: 'https://afuchat.com/partners' },
};

export default function Page() {
  return <PartnersClient />;
}
