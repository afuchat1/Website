import { Mail, MessageCircle, Cloud, Sparkles, LucideIcon } from 'lucide-react';
import {
  illSvcAfumail,
  illSvcAfuchat,
  illSvcAfucloud,
  illSvcAfuai,
} from './illustrations';

export type ProductIcon = LucideIcon;

export interface ProductData {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
  path: string;
  icon: ProductIcon;
  illustration: string;
}

export const PRODUCT_DATA: ProductData[] = [
  {
    id: "afuchat",
    name: "AfuChat",
    tagline: "Connect. Share. Belong.",
    category: "Social & communication",
    description: "A social communication platform for messaging, communities, posts, stories, profiles, digital identity, and more.",
    features: ["Messaging", "Social feeds", "Communities & groups"],
    color: "#1F95FF",
    bgColor: "#EBF5FF",
    path: "/products/afuchat",
    icon: MessageCircle,
    illustration: illSvcAfuchat,
  },
  {
    id: "afumail",
    name: "AfuMail",
    tagline: "Email built around your identity.",
    category: "Email",
    description: "An email service built as part of the Afu ecosystem, giving people a dedicated digital address and a foundation for connected Afu services.",
    features: ["Email", "Digital identity", "Afu ecosystem"],
    color: "#2563EB",
    bgColor: "#EFF6FF",
    path: "/products/afumail",
    icon: Mail,
    illustration: illSvcAfumail,
  },
  {
    id: "afucloud",
    name: "AfuCloud",
    tagline: "Your files, part of your ecosystem.",
    category: "Cloud",
    description: "Cloud storage and media infrastructure built to make files and digital content easier to store, access, and use across Afu products.",
    features: ["Cloud storage", "Media handling", "Afu ecosystem"],
    color: "#0EA5E9",
    bgColor: "#E0F2FE",
    path: "/products/afucloud",
    icon: Cloud,
    illustration: illSvcAfucloud,
  },
  {
    id: "engagera",
    name: "Engagera",
    tagline: "AI that works with the live web.",
    category: "AI",
    description: "An AI platform with live web search, AI chat, image generation, code execution, streaming, and a developer SDK.",
    features: ["Live web search", "AI chat", "Developer SDK"],
    color: "#8B5CF6",
    bgColor: "#F5F3FF",
    path: "/products/engagera",
    icon: Sparkles,
    illustration: illSvcAfuai,
  },
];
