import type { Metadata } from 'next';
import ProductsClient from '@/views/Products';

export const metadata: Metadata = {
  title: 'Products: AfuChat Technologies',
  description:
    'Explore the AfuChat Technologies product portfolio: AfuChat, AfuMail, Engagera, and AfuMovies.',
  alternates: { canonical: 'https://afuchat.com/products' },
};

export default function Page() {
  return <ProductsClient />;
}
