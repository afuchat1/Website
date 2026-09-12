import type { Metadata } from 'next';
import Work from '@/views/Work';

export const metadata: Metadata = {
  title: 'Selected Work — AfuChat Technologies',
  description: 'Selected client websites and digital projects built by AfuChat Technologies Limited.',
  alternates: { canonical: 'https://afuchat.com/work' },
};

export default function WorkPage() {
  return <Work />;
}