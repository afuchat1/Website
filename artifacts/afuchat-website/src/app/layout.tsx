import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AfuChat Technologies Limited | Digital Products, Web and Mobile Applications',
  description:
    'AfuChat Technologies Limited builds digital products and custom web and mobile experiences for its own ecosystem and for organizations.',
  metadataBase: new URL('https://afuchat.com'),
  openGraph: { siteName: 'AfuChat Technologies Limited', type: 'website', images: [{ url: '/og-default.png' }] },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: [{ url: '/assets/atl-logo.svg', type: 'image/svg+xml' }],
    shortcut: '/assets/atl-logo.svg',
    apple: '/assets/atl-logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} style={{ background: 'var(--page-bg)' }}>
      <body>
        <div className="site-frame">
          <Navbar />
          <main className="pt-[72px]">{children}</main>
        </div>
      </body>
    </html>
  );
}
