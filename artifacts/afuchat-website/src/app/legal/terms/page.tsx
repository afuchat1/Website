import type { Metadata } from 'next';
import GenericPageView from '@/views/GenericPage';

export const metadata: Metadata = {
  title: 'Terms of Service — AfuChat',
  description:
    'AfuChat Technologies Limited terms of service. Your rights, responsibilities, and our obligations when you use any of our eight products.',
  alternates: { canonical: 'https://afuchat.com/legal/terms' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Terms of Service — AfuChat Technologies Limited',
    description: 'Your rights and responsibilities when using AfuChat products.',
    url: 'https://afuchat.com/legal/terms',
  },
};

export default function TermsPage() {
  return <GenericPageView title="Terms of Service" type="terms" />;
}
