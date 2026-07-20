import type { Metadata } from 'next';
import GenericPage from '@/views/GenericPage';

export const metadata: Metadata = {
  title: 'About — AfuChat',
  description: 'AfuChat Technologies Limited — building powerful standalone digital tools accessible to everyone. Learn who we are, our mission, and how we build.',
  alternates: { canonical: 'https://afuchat.com/about' },
};
export default function Page() { return <GenericPage title="About" type="about" />; }
