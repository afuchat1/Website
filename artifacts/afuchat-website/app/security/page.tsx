import type { Metadata } from 'next';
import GenericPage from '@/pages/GenericPage';

export const metadata: Metadata = {
  title: 'Security — AfuChat',
  description: 'Security at AfuChat — AES-256 encryption at rest, TLS 1.3 in transit, zero-knowledge architecture, 2FA, and a responsible vulnerability disclosure programme.',
  alternates: { canonical: 'https://web.afuchat.com/security' },
};
export default function Page() { return <GenericPage title="Security" type="security" />; }
