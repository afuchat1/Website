import type { Metadata } from 'next';
import ProductsView from '@/views/Products';
import { PRODUCT_DATA } from '@/data/products';

const BASE_URL = 'https://afuchat.com';

export const metadata: Metadata = {
  title: 'Products, AfuChat Technologies',
  description:
    'Explore the products built by AfuChat Technologies: AfuChat, AfuMail, AfuCloud, and Engagera.',
  keywords: ['AfuChat', 'AfuMail', 'AfuCloud', 'Engagera', 'AfuChat Technologies', 'digital products'],
  alternates: { canonical: `${BASE_URL}/products` },
  openGraph: {
    title: 'Products, AfuChat Technologies',
    description: 'Communication, email, cloud, and AI products built by AfuChat Technologies.',
    url: `${BASE_URL}/products`,
    images: [
      {
        url: '/illustrations/ill-sec-products.webp',
        width: 1200,
        height: 630,
        alt: 'AfuChat Technologies products',
      },
    ],
  },
};

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'AfuChat Technologies Products',
  description: 'Products built by AfuChat Technologies',
  numberOfItems: PRODUCT_DATA.length,
  itemListElement: PRODUCT_DATA.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
    description: p.description,
    url: `${BASE_URL}${p.path}`,
    image: `${BASE_URL}${p.illustration}`,
  })),
};

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <ProductsView />
    </>
  );
}
