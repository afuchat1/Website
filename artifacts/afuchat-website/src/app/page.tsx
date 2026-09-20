import type { Metadata } from 'next';
import HomeView from '@/views/Home';

export const metadata: Metadata = {
  title: 'AfuChat Technologies, Building useful digital products',
  description:
    'AfuChat Technologies builds its own digital products across communication, email, cloud, and AI, while helping businesses and organizations turn useful ideas into working digital experiences.',
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
        alt: 'AfuChat Technologies',
      },
    ],
  },
};

export default function HomePage() {
  return <HomeView />;
}
