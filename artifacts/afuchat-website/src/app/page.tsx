import type { Metadata } from 'next';
import HomeClient from '@/views/Home';

export const metadata: Metadata = {
  title: 'AfuChat — Powerful tools. Standalone brilliance. Zero friction.',
  description:
    'Whether you need blazingly fast chat, secure cloud storage, or an intelligent assistant — AfuChat gives you eight standalone products that work perfectly apart and even better together.',
  alternates: { canonical: 'https://afuchat.com/' },
};

export default function Page() {
  return <HomeClient />;
}
