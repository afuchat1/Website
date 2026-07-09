import type { Metadata } from 'next';
import GenericPage from '@/views/GenericPage';

export const metadata: Metadata = {
  title: 'Terms of Service — AfuChat',
  description: 'AfuChat Terms of Service — the rules and responsibilities that govern your use of our products and platform.',
  alternates: { canonical: 'https://web.afuchat.com/legal/terms' },
};
export default function Page() { return <GenericPage title="Terms of Service" type="terms" />; }
