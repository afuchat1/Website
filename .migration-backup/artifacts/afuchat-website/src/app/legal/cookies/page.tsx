import type { Metadata } from 'next';
import GenericPage from '@/views/GenericPage';

export const metadata: Metadata = {
  title: 'Cookie Policy — AfuChat',
  description: 'AfuChat Cookie Policy — what cookies we use, why we use them, and how you can control your preferences.',
  alternates: { canonical: 'https://afuchat.com/legal/cookies' },
};
export default function Page() { return <GenericPage title="Cookie Policy" type="cookies" />; }
