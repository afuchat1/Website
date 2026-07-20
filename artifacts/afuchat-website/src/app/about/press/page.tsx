import type { Metadata } from 'next';
import GenericPageView from '@/views/GenericPage';

export const metadata: Metadata = {
  title: 'Press — AfuChat',
  description:
    'Press resources, media kit, and news about AfuChat Technologies Limited. Download logos, brand guidelines, and get in touch with our communications team.',
  alternates: { canonical: 'https://afuchat.com/about/press' },
  openGraph: {
    title: 'Press Resources — AfuChat',
    description: 'Media kit, logos, brand guidelines, and press contact for AfuChat Technologies.',
    url: 'https://afuchat.com/about/press',
    images: [{ url: '/illustrations/ill-sec-press.webp', width: 1200, height: 630, alt: 'AfuChat press resources' }],
  },
};

export default function PressPage() {
  return <GenericPageView title="Press" type="press" />;
}
