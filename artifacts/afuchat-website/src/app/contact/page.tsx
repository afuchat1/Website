import type { Metadata } from 'next';
import Contact from '@/views/Contact';

export const metadata: Metadata = {
  title: 'Contact AfuChat Technologies',
  description: 'Tell AfuChat Technologies about the website, application, mobile product, e-commerce platform, or custom digital solution you want to build.',
  alternates: { canonical: 'https://afuchat.com/contact' },
};
export default function Page() { return <Contact />; }
