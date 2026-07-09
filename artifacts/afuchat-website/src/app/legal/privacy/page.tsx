import type { Metadata } from 'next';
import GenericPage from '@/views/GenericPage';

export const metadata: Metadata = {
  title: 'Privacy Policy — AfuChat',
  description: 'AfuChat Privacy Policy — how we collect, use, and protect your data. We never sell your personal information to third parties.',
  alternates: { canonical: 'https://web.afuchat.com/legal/privacy' },
};
export default function Page() { return <GenericPage title="Privacy Policy" type="privacy" />; }
