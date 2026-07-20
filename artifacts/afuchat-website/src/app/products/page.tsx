import type { Metadata } from 'next';
import ProductsView from '@/views/Products';
import { PRODUCT_DATA } from '@/data/products';

const BASE_URL = 'https://afuchat.com';

export const metadata: Metadata = {
  title: 'All Products — Eight Tools, One Ecosystem',
  description:
    'Explore eight standalone digital products: AfuMail, AfuChat, AfuAI, AfuCloud, AfuMovies, AfuMall, AfuNews, and AfuBlog. Each built to excel independently, better together.',
  keywords: [
    'AfuMail', 'AfuChat', 'AfuAI', 'AfuCloud', 'AfuMovies', 'AfuMall', 'AfuNews', 'AfuBlog',
    'digital products', 'software suite', 'AfuChat products',
  ],
  alternates: { canonical: `${BASE_URL}/products` },
  openGraph: {
    title: 'All AfuChat Products — Eight Tools, One Ecosystem',
    description:
      'Explore eight standalone digital products. Each built to excel independently, better together.',
    url: `${BASE_URL}/products`,
    images: [
      {
        url: '/illustrations/ill-sec-products.webp',
        width: 1200,
        height: 630,
        alt: 'AfuChat product suite — eight independent tools',
      },
    ],
  },
};

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'AfuChat Products',
  description: 'Eight independent digital products by AfuChat Technologies',
  numberOfItems: PRODUCT_DATA.length,
  itemListElement: PRODUCT_DATA.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
    description: p.description,
    url: `${BASE_URL}${p.path}`,
    image: `${BASE_URL}${p.icon3d}`,
  })),
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <ProductsView />
    </>
  );
}
