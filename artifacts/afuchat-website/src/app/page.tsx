import type { Metadata } from 'next';
import HomeView from '@/views/Home';

export const metadata: Metadata = {
  title: 'ATL Uganda | AfuChat Technologies Limited — Digital Products & Technology',
  description:
    'ATL Uganda (AfuChat Technologies Limited) builds digital products across communication, email, cloud, and AI, and helps organizations turn useful ideas into working digital experiences.',
  alternates: { canonical: 'https://afuchat.com/' },
  openGraph: {
    title: 'AfuChat Technologies, Building useful digital products',
    description:
      'We build our own products and help businesses and organizations turn useful ideas into working digital experiences.',
    url: 'https://afuchat.com/',
    images: [
      {
        url: '/assets/afuchat_logo_transparent.png',
        width: 1200,
        height: 630,
        alt: 'ATL Uganda — AfuChat Technologies Limited',
      },
    ],
  },
};

export default function HomePage() {
  return <HomeView />;
}
