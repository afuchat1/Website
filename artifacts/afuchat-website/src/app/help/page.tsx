import type { Metadata } from 'next';
import GenericPage from '@/views/GenericPage';

export const metadata: Metadata = {
  title: 'Help Center — AfuChat',
  description: 'AfuChat Help Center — account setup, billing, security, and troubleshooting guides for all AfuChat products. Support responds within 4 hours on business days.',
  alternates: { canonical: 'https://web.afuchat.com/help' },
};
export default function Page() { return <GenericPage title="Help Center" type="help" />; }
