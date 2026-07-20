import type { NextConfig } from 'next';

const devDomain = process.env.REPLIT_DEV_DOMAIN ?? '';

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  trailingSlash: false,
  allowedDevOrigins: [
    'localhost',
    '127.0.0.1',
    '*.replit.dev',
    '*.worf.replit.dev',
    '*.janeway.replit.dev',
    '*.kirk.replit.dev',
    '*.picard.replit.dev',
    ...(devDomain ? [devDomain] : []),
  ],
};

export default nextConfig;
