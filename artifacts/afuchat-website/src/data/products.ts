import { Mail, MessageCircle, Sparkles, Cloud, Clapperboard, ShoppingBag, Newspaper, FileText, Code2 } from 'lucide-react';

export const PRODUCT_DATA = [
  {
    id: 'mail',
    name: 'AfuMail',
    tagline: 'Universal Identity & Communication',
    description: 'The center of your digital ecosystem. Secure email that acts as your passport to all AfuChat services.',
    icon: Mail,
    color: 'from-[#1F95FF] to-[#00D4FF]',
    accentHex: '#1F95FF',
    path: '/products/mail',
    features: ['Universal Single Sign-On', 'End-to-End Encryption', 'Zero-Spam Architecture']
  },
  {
    id: 'chat',
    name: 'AfuChat',
    tagline: 'Next-Generation Social',
    description: 'Connect with friends, family, and communities with crystal-clear voice, video, and text.',
    icon: MessageCircle,
    color: 'from-[#6C63FF] to-[#1F95FF]',
    accentHex: '#6C63FF',
    path: '/products/chat',
    features: ['Real-time Translation', 'HD Voice & Video', 'Community Spaces']
  },
  {
    id: 'ai',
    name: 'AfuAI',
    tagline: 'Artificial Intelligence, Personalized',
    description: 'A deeply integrated intelligence layer that helps you write, search, and create across the ecosystem.',
    icon: Sparkles,
    color: 'from-[#00D4FF] to-[#16C784]',
    accentHex: '#00D4FF',
    path: '/products/ai',
    features: ['Context-Aware Generation', 'Seamless Integration', 'Privacy-First ML']
  },
  {
    id: 'cloud',
    name: 'AfuCloud',
    tagline: 'Infinite Storage',
    description: 'Secure, lightning-fast cloud storage that automatically syncs across all your AfuChat applications.',
    icon: Cloud,
    color: 'from-[#1F95FF] to-[#6C63FF]',
    accentHex: '#1F95FF',
    path: '/products/cloud',
    features: ['Instant Synchronization', 'Advanced File Recovery', 'Shared Workspaces']
  },
  {
    id: 'movies',
    name: 'AfuMovies',
    tagline: 'Premium Entertainment',
    description: 'Discover and stream high-quality entertainment natively connected to your social graph.',
    icon: Clapperboard,
    color: 'from-[#6C63FF] to-[#00D4FF]',
    accentHex: '#6C63FF',
    path: '/products/movies',
    features: ['4K Streaming', 'Watch Parties', 'AI Recommendations']
  },
  {
    id: 'mall',
    name: 'AfuMall',
    tagline: 'Frictionless Commerce',
    description: 'A global marketplace where you can purchase digital and physical goods securely with one click.',
    icon: ShoppingBag,
    color: 'from-[#16C784] to-[#1F95FF]',
    accentHex: '#16C784',
    path: '/products/mall',
    features: ['One-Click Checkout', 'Verified Sellers', 'Global Logistics']
  },
  {
    id: 'news',
    name: 'AfuNews',
    tagline: 'Curated Information',
    description: 'Stay informed with real-time news tailored to your interests without the noise.',
    icon: Newspaper,
    color: 'from-[#00D4FF] to-[#6C63FF]',
    accentHex: '#00D4FF',
    path: '/products/news',
    features: ['Ad-Free Reading', 'Fact-Checked Sources', 'Topic Following']
  },
  {
    id: 'blog',
    name: 'AfuBlog',
    tagline: 'Publishing Platform',
    description: 'Share your thoughts with the world using an elegant, distraction-free writing environment.',
    icon: FileText,
    color: 'from-[#1F95FF] to-[#16C784]',
    accentHex: '#1F95FF',
    path: '/products/blog',
    features: ['Markdown Support', 'Audience Analytics', 'Custom Domains']
  },
  {
    id: 'developers',
    name: 'Developer Platform',
    tagline: 'Build the Future',
    description: 'Robust APIs and SDKs to build powerful applications on top of the AfuChat identity layer.',
    icon: Code2,
    color: 'from-[#6C63FF] to-[#16C784]',
    accentHex: '#6C63FF',
    path: '/developers',
    features: ['OAuth 2.0 Auth', 'Real-time Webhooks', 'Comprehensive Docs']
  }
];
