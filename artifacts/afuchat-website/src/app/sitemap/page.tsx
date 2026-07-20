import type { Metadata } from 'next';
import GenericPageView from '@/views/GenericPage';

export const metadata: Metadata = {
  title: 'Site Map — AfuChat',
  description:
    'Browse all pages on the AfuChat website. Find products, company information, developer resources, legal documents, and more.',
  alternates: { canonical: 'https://afuchat.com/sitemap' },
  openGraph: {
    title: 'Site Map — AfuChat',
    description: 'Find every page on the AfuChat website.',
    url: 'https://afuchat.com/sitemap',
    images: [{ url: '/illustrations/ill-sec-sitemap.webp', width: 1200, height: 630, alt: 'AfuChat site map' }],
  },
};

export default function SitemapPage() {
  return <GenericPageView title="Sitemap" type="sitemap" />;
}
