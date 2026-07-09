import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import '@/index.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AfuChat — Powerful tools. Standalone brilliance.',
  description:
    'AfuChat Technologies builds eight independent digital products — AfuMail, AfuChat, AfuAI, AfuCloud, AfuMovies, AfuMall, AfuNews, and AfuBlog. Use one, use them all.',
  metadataBase: new URL('https://web.afuchat.com'),
  openGraph: { siteName: 'AfuChat', type: 'website', images: [{ url: '/og-default.png' }] },
  twitter: { card: 'summary_large_image' },
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
