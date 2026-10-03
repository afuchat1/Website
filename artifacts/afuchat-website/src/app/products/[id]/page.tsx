import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCT_DATA } from '@/data/products';
import ProductPageView from '@/views/ProductPage';

const BASE_URL = 'https://afuchat.com';
const AFUCLOUD_URL = 'https://cloud.afuchat.com';
const AFUCLOUD_SEO_TITLE = 'AfuCloud Image Storage API';
const AFUCLOUD_SEO_DESCRIPTION = 'AfuCloud is an image storage API for developers to upload, organize, and deliver images, store files in object storage, and connect custom domains. Start free.';

export function generateStaticParams() {
  return PRODUCT_DATA.map(p => ({ id: p.id }));
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCT_DATA.find(p => p.id === id);
  if (!product) return { title: 'Product Not Found' };
  const isAfuCloud = product.id === 'afucloud';
  const title = isAfuCloud ? AFUCLOUD_SEO_TITLE : `${product.name}, ${product.tagline}`;
  const description = isAfuCloud ? AFUCLOUD_SEO_DESCRIPTION : product.description;
  const openGraphTitle = `${title} | AfuChat Technologies`;
  const imageAlt = isAfuCloud
    ? 'AfuCloud image storage and delivery illustration'
    : `${product.name} by AfuChat Technologies`;

  return {
    title,
    description,
    keywords: isAfuCloud
      ? ['AfuCloud', 'image storage API', 'image delivery API', 'object storage', 'custom domains', 'developer cloud storage', 'AfuChat Technologies']
      : [product.name, product.category, 'AfuChat Technologies', ...product.features],
    alternates: { canonical: `${BASE_URL}${product.path}` },
    openGraph: {
      title: openGraphTitle,
      description,
      url: `${BASE_URL}${product.path}`,
      images: [{
        url: product.illustration,
        width: isAfuCloud ? 900 : 1200,
        height: isAfuCloud ? 900 : 630,
        alt: imageAlt,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphTitle,
      description,
      images: [product.illustration],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = PRODUCT_DATA.find(p => p.id === id);
  if (!product) notFound();
  const isAfuCloud = product.id === 'afucloud';

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    applicationCategory: isAfuCloud ? 'DeveloperApplication' : getCategorySchema(product.category),
    operatingSystem: isAfuCloud ? 'Web' : 'Web, Android, iOS',
    description: product.description,
    url: `${BASE_URL}${product.path}`,
    image: `${BASE_URL}${product.illustration}`,
    provider: { '@type': 'Organization', name: 'AfuChat Technologies Limited', url: BASE_URL },
    featureList: product.features,
    ...(isAfuCloud ? { sameAs: [AFUCLOUD_URL] } : {}),
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
