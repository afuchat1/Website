import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Use regular <img> tags without Next.js optimization (simpler migration)
    unoptimized: true,
  },
  // Allow cross-origin requests in dev (Replit preview proxy sits on a
  // *.replit.dev / *.janeway.replit.dev subdomain, and also proxies via
  // 127.0.0.1) — '*' alone doesn't match those as a wildcard pattern, so
  // list the actual patterns Next expects.
  allowedDevOrigins: ['*.replit.dev', '*.janeway.replit.dev', '127.0.0.1', 'localhost'],
};

export default nextConfig;
