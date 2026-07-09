import type { Metadata } from 'next';
import GenericPage from '@/pages/GenericPage';

export const metadata: Metadata = {
  title: 'Brand — AfuChat',
  description: 'AfuChat brand guidelines — logo usage, colour palette, typography, and approved assets for partners and press.',
  alternates: { canonical: 'https://web.afuchat.com/about/brand' },
};
export default function Page() { return <GenericPage title="Brand" type="brand" />; }
