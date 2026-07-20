import type { Metadata } from 'next';
import { PRODUCT_DATA } from '@/data/products';
import ProductPageClient from '@/views/ProductPage';

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCT_DATA.find(p => p.id === id);
  if (!product) return { title: 'Not Found — AfuChat' };
  return {
    title: `${product.name} — ${product.tagline} | AfuChat`,
    description: `${product.description} Features: ${product.features.join(', ')}. Part of the AfuChat product ecosystem.`,
    alternates: { canonical: `https://afuchat.com${product.path}` },
  };
}

export function generateStaticParams() {
  return PRODUCT_DATA.map(p => ({ id: p.id }));
}

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  return <ProductPageClient id={id} />;
}
