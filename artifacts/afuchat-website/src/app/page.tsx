import type { Metadata } from 'next';
import HomeClient from '@/views/Home';

export const metadata: Metadata = {
  title: 'AfuChat Technologies Limited | Digital Products, Web and Mobile Applications',
  description:
    'AfuChat Technologies Limited is a Ugandan technology company building digital products, websites, web applications, mobile applications, e-commerce platforms, AI products, and custom digital solutions.',
  alternates: { canonical: 'https://afuchat.com/' },
};

export default function Page() {
  return <HomeClient />;
}
