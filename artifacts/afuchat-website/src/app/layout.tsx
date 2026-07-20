import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import CookieConsent from '@/components/layout/CookieConsent';
import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

const BASE_URL = 'https://afuchat.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'AfuChat — Powerful tools. Standalone brilliance.',
    template: '%s | AfuChat',
  },
  description:
    'AfuChat Technologies builds eight independent digital products — AfuMail, AfuChat, AfuAI, AfuCloud, AfuMovies, AfuMall, AfuNews, and AfuBlog. Use one, use them all.',
  keywords: [
    'AfuChat', 'AfuMail', 'AfuAI', 'AfuCloud', 'AfuMovies', 'AfuMall', 'AfuNews', 'AfuBlog',
    'messaging', 'cloud storage', 'AI assistant', 'email', 'streaming', 'shopping',
  ],
  authors: [{ name: 'AfuChat Technologies Limited', url: BASE_URL }],
  creator: 'AfuChat Technologies Limited',
  publisher: 'AfuChat Technologies Limited',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'AfuChat',
    title: 'AfuChat — Powerful tools. Standalone brilliance.',
    description:
      'Eight independent digital products that work perfectly apart and even better together.',
    images: [
      {
        url: '/assets/afuchat_logo_transparent.png',
        width: 1200,
        height: 630,
        alt: 'AfuChat — Independent tools for everyone',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@afuchat',
    creator: '@afuchat',
    title: 'AfuChat — Powerful tools. Standalone brilliance.',
    description:
      'Eight independent digital products that work perfectly apart and even better together.',
    images: ['/assets/afuchat_logo_transparent.png'],
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  alternates: { canonical: BASE_URL },
  category: 'technology',
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AfuChat Technologies Limited',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/assets/afuchat_logo_transparent.png`,
    width: 512,
    height: 512,
  },
  sameAs: [
    'https://github.com/afuchat1/Website',
    'https://uk.trustpilot.com/review/afuchat.com',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: `${BASE_URL}/contact`,
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AfuChat',
  url: BASE_URL,
  description:
    'Eight independent digital products: AfuMail, AfuChat, AfuAI, AfuCloud, AfuMovies, AfuMall, AfuNews, and AfuBlog.',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/products/{search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} style={{ background: '#040c1e' }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <CookieConsent />
      </body>
    </html>
  );
}
