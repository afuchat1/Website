import type { Metadata } from 'next';
import GenericPage from '@/views/GenericPage';

export const metadata: Metadata = {
  title: 'Press — AfuChat',
  description: 'AfuChat press resources — logo assets, product screenshots, executive bios, and media contact information for journalists and content creators.',
  alternates: { canonical: 'https://afuchat.com/about/press' },
};
export default function Page() { return <GenericPage title="Press" type="press" />; }
