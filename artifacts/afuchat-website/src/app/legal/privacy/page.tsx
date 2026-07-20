import type { Metadata } from 'next';
import GenericPageView from '@/views/GenericPage';

export const metadata: Metadata = {
  title: 'Privacy Policy — AfuChat',
  description:
    'AfuChat Technologies Limited privacy policy. How we collect, use, store, and protect your personal data across all AfuChat products.',
  alternates: { canonical: 'https://afuchat.com/legal/privacy' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Privacy Policy — AfuChat Technologies Limited',
    description: 'How we collect, use, store, and protect your personal data.',
    url: 'https://afuchat.com/legal/privacy',
  },
};

export default function PrivacyPage() {
  return <GenericPageView title="Privacy Policy" type="privacy" />;
}
