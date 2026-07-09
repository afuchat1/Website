import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Use regular <img> tags without Next.js optimization (simpler migration)
    unoptimized: true,
  },
  // Allow cross-origin requests in dev (Replit preview proxy)
  allowedDevOrigins: ['*'],
};

export default nextConfig;
