import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import '@/index.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AfuChat Technologies Limited — Digital Products, Web & Mobile Applications',
  description:
    'AfuChat Technologies Limited builds digital products and custom web and mobile experiences for its own ecosystem and for organizations.',
  metadataBase: new URL('https://afuchat.com'),
  openGraph: { siteName: 'AfuChat', type: 'website', images: [{ url: '/og-default.png' }] },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} style={{ background: '#040c1e' }}>
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
