import type { Metadata } from 'next';
import GenericPage from '@/views/GenericPage';

export const metadata: Metadata = {
  title: 'Sitemap — AfuChat',
  description: 'A complete directory of every page across the AfuChat corporate website — products, company information, developer resources, and legal documentation.',
  alternates: { canonical: 'https://afuchat.com/sitemap' },
};
export default function Page() { return <GenericPage title="Sitemap" type="sitemap" />; }
