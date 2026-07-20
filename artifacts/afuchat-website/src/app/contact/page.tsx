import type { Metadata } from 'next';
import GenericPageView from '@/views/GenericPage';

const BASE_URL = 'https://afuchat.com';

export const metadata: Metadata = {
  title: 'Contact — AfuChat',
  description:
    "Get in touch with the AfuChat team. We're here to help with product questions, partnerships, press inquiries, and enterprise sales.",
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: 'Contact AfuChat',
    description: "We're here to help with product questions, partnerships, and enterprise sales.",
    url: `${BASE_URL}/contact`,
    images: [{ url: '/illustrations/ill-sec-contact.webp', width: 1200, height: 630, alt: 'Contact AfuChat' }],
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact AfuChat',
  url: `${BASE_URL}/contact`,
  mainEntity: {
    '@type': 'Organization',
    name: 'AfuChat Technologies Limited',
    url: BASE_URL,
    contactPoint: [
      { '@type': 'ContactPoint', contactType: 'customer support', url: `${BASE_URL}/contact` },
      { '@type': 'ContactPoint', contactType: 'sales', url: `${BASE_URL}/enterprise` },
      { '@type': 'ContactPoint', contactType: 'press', url: `${BASE_URL}/about/press` },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <GenericPageView title="Contact" type="contact" />
    </>
  );
}
