import type { Metadata } from 'next';
import HomeView from '@/views/Home';

export const metadata: Metadata = {
  title: 'AfuChat — Powerful tools. Standalone brilliance. Zero friction.',
  description:
    'Whether you need blazingly fast chat, secure cloud storage, or an intelligent assistant — pick what you need. They work perfectly apart, and even better together.',
  alternates: { canonical: 'https://afuchat.com/' },
  openGraph: {
    title: 'AfuChat — Powerful tools. Standalone brilliance. Zero friction.',
    description:
      'Whether you need blazingly fast chat, secure cloud storage, or an intelligent assistant — pick what you need.',
    url: 'https://afuchat.com/',
    images: [
      {
        url: '/assets/afuchat_logo_transparent.png',
        width: 1200,
        height: 630,
        alt: 'AfuChat homepage — independent tools for everyone',
      },
    ],
  },
};

export default function HomePage() {
  return <HomeView />;
}
