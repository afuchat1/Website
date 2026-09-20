import type { Metadata } from 'next';
import SiteChrome from '@/components/layout/SiteChrome';
import '@/app/globals.css';

const BASE_URL = 'https://afuchat.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'AfuChat Technologies, Building useful digital products',
    template: '%s | AfuChat Technologies',
  },
  description:
    'AfuChat Technologies builds products across communication, email, cloud, and AI, while helping businesses and organizations turn useful ideas into working digital experiences.',
  keywords: [
    'AfuChat', 'AfuMail', 'AfuCloud', 'Engagera', 'AfuChat Technologies',
    'web development', 'mobile applications', 'AI', 'digital products',
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
    siteName: 'AfuChat Technologies',
    title: 'AfuChat Technologies, Building useful digital products',
    description: 'We build our own products and help organizations turn useful ideas into working digital experiences.',
    images: [{ url: '/assets/afuchat_logo_transparent.png', width: 1200, height: 630, alt: 'AfuChat Technologies' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@afuchat',
    creator: '@afuchat',
    title: 'AfuChat Technologies, Building useful digital products',
    description: 'Products and digital solutions built by AfuChat Technologies.',
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
  logo: { '@type': 'ImageObject', url: `${BASE_URL}/assets/afuchat_logo_transparent.png`, width: 512, height: 512 },
  sameAs: ['https://github.com/afuchat1/Website', 'https://uk.trustpilot.com/review/afuchat.com'],
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', url: `${BASE_URL}/contact` },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AfuChat Technologies',
  url: BASE_URL,
  description: 'AfuChat Technologies builds products across communication, email, cloud, and AI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning style={{ background: '#040c1e' }}>
      <body suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
