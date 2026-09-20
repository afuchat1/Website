import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCT_DATA } from '@/data/products';
import ProductPageView from '@/views/ProductPage';

const BASE_URL = 'https://afuchat.com';

export function generateStaticParams() {
  return PRODUCT_DATA.map(p => ({ id: p.id }));
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCT_DATA.find(p => p.id === id);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name}, ${product.tagline}`,
    description: product.description,
    keywords: [product.name, product.category, 'AfuChat Technologies', ...product.features],
    alternates: { canonical: `${BASE_URL}${product.path}` },
    openGraph: {
      title: `${product.name}, ${product.tagline} | AfuChat Technologies`,
      description: product.description,
      url: `${BASE_URL}${product.path}`,
      images: [{ url: product.illustration, width: 1200, height: 630, alt: `${product.name} by AfuChat Technologies` }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = PRODUCT_DATA.find(p => p.id === id);
  if (!product) notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    applicationCategory: getCategorySchema(product.category),
    operatingSystem: 'Web, Android, iOS',
    description: product.description,
    url: `${BASE_URL}${product.path}`,
    image: `${BASE_URL}${product.illustration}`,
    provider: { '@type': 'Organization', name: 'AfuChat Technologies Limited', url: BASE_URL },
    featureList: product.features,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <ProductPageView id={id} />
    </>
  );
}

function getCategorySchema(category: string): string {
  const map: Record<string, string> = {
    'Mail': 'CommunicationApplication',
    'Social & communication': 'SocialNetworkingApplication',
    'AI': 'UtilitiesApplication',
    'Cloud': 'UtilitiesApplication',
  };
  return map[category] ?? 'WebApplication';
}
