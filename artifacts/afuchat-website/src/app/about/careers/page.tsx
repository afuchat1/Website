import type { Metadata } from 'next';
import GenericPage from '@/views/GenericPage';

export const metadata: Metadata = {
  title: 'Careers — AfuChat',
  description: 'Build the future at AfuChat. Join small autonomous teams shipping products used by millions. Remote-friendly with hubs in Hong Kong, Singapore, and London.',
  alternates: { canonical: 'https://afuchat.com/about/careers' },
};
export default function Page() { return <GenericPage title="Careers" type="careers" />; }
