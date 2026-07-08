import { 
  Mail, MessageCircle, Sparkles, Cloud, Play, ShoppingBag, Newspaper, PenLine, 
  LucideIcon 
} from 'lucide-react';

export type ProductIcon = LucideIcon;

export interface ProductData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
  path: string;
  icon: ProductIcon;
}

export const PRODUCT_DATA: ProductData[] = [
  {
    id: "afumail",
    name: "AfuMail",
    tagline: "Your identity. Your gateway.",
    description: "The core of the AfuChat ecosystem. One secure identity for all your services.",
    features: ["Single Sign-On", "Advanced Anti-Spam", "Custom Domains"],
    color: "#1F95FF",
    bgColor: "#EBF5FF",
    path: "/products/afumail",
    icon: Mail
  },
  {
    id: "afuchat",
    name: "AfuChat",
    tagline: "Connect. Share. Belong.",
    description: "Lightning-fast messaging with end-to-end encryption and rich media sharing.",
    features: ["HD Video Calls", "Group Channels", "Instant Translation"],
    color: "#6C63FF",
    bgColor: "#F0EFFF",
    path: "/products/afuchat",
    icon: MessageCircle
  },
  {
    id: "afuai",
    name: "AfuAI",
    tagline: "Intelligence, built in.",
    description: "Your personal smart assistant, context-aware and deeply integrated.",
    features: ["Contextual Help", "Automated Workflows", "Voice Recognition"],
    color: "#F59E0B",
    bgColor: "#FEF3C7",
    path: "/products/afuai",
    icon: Sparkles
  },
  {
    id: "afucloud",
    name: "AfuCloud",
    tagline: "Your files, everywhere.",
    description: "Secure, reliable, and blazingly fast cloud storage for all your devices.",
    features: ["Auto-Sync", "Zero-Knowledge Encryption", "Smart Organization"],
    color: "#0EA5E9",
    bgColor: "#E0F2FE",
    path: "/products/afucloud",
    icon: Cloud
  },
  {
    id: "afumovies",
    name: "AfuMovies",
    tagline: "Watch anything, anywhere.",
    description: "Stream the latest blockbusters and indie classics in pristine 4K HDR.",
    features: ["4K HDR Streaming", "Offline Viewing", "Personalized Recommendations"],
    color: "#EF4444",
    bgColor: "#FEE2E2",
    path: "/products/afumovies",
    icon: Play
  },
  {
    id: "afumall",
    name: "AfuMall",
    tagline: "Shop smarter.",
    description: "A curated marketplace featuring premium brands and seamless checkout.",
    features: ["One-Click Checkout", "Verified Sellers", "Global Shipping"],
    color: "#F97316",
    bgColor: "#FFEDD5",
    path: "/products/afumall",
    icon: ShoppingBag
  },
  {
    id: "afunews",
    name: "AfuNews",
    tagline: "Stay informed.",
    description: "Personalized news feed aggregating top global publishers.",
    features: ["Real-Time Alerts", "Unbiased Reporting", "Read Offline"],
    color: "#10B981",
    bgColor: "#D1FAE5",
    path: "/products/afunews",
    icon: Newspaper
  },
  {
    id: "afublog",
    name: "AfuBlog",
    tagline: "Write your story.",
    description: "A distraction-free publishing platform for creators and thinkers.",
    features: ["Beautiful Typography", "Audience Analytics", "Monetization Options"],
    color: "#8B5CF6",
    bgColor: "#EDE9FE",
    path: "/products/afublog",
    icon: PenLine
  }
];