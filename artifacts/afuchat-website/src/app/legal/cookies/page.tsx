import type { Metadata } from 'next';
import GenericPageView from '@/views/GenericPage';

export const metadata: Metadata = {
  title: 'Cookie Policy — AfuChat',
  description:
    'How AfuChat uses cookies and similar technologies. Understand the four categories of cookies we use and manage your preferences at any time.',
  alternates: { canonical: 'https://afuchat.com/legal/cookies' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Cookie Policy — AfuChat',
    description: 'How AfuChat uses cookies. Manage your cookie preferences.',
    url: 'https://afuchat.com/legal/cookies',
  },
};

export default function CookiesPage() {
  return <GenericPageView title="Cookie Policy" type="cookies" />;
}
