import type { Metadata } from 'next';
import ProductsClient from '@/views/Products';

export const metadata: Metadata = {
  title: 'Products — AfuChat Technologies',
  description:
    'Explore AfuChat\'s suite of eight independent digital products — AfuMail, AfuChat, AfuAI, AfuCloud, AfuMovies, AfuMall, AfuNews, and AfuBlog. Use one, use them all.',
  alternates: { canonical: 'https://afuchat.com/products' },
};

export default function Page() {
  return <ProductsClient />;
}
