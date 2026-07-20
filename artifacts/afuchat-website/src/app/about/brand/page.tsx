import type { Metadata } from 'next';
import GenericPageView from '@/views/GenericPage';

export const metadata: Metadata = {
  title: 'Brand Resources — AfuChat',
  description:
    'Official AfuChat brand guidelines, logos, color palettes, typography, and design resources for media, partners, and developers.',
  alternates: { canonical: 'https://afuchat.com/about/brand' },
  openGraph: {
    title: 'Brand Resources — AfuChat',
    description: 'Official logos, color palettes, typography, and design guidelines.',
    url: 'https://afuchat.com/about/brand',
    images: [{ url: '/illustrations/ill-sec-brand.webp', width: 1200, height: 630, alt: 'AfuChat brand resources' }],
  },
};

export default function BrandPage() {
  return <GenericPageView title="Brand" type="brand" />;
}
