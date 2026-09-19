import {
  Mail, MessageCircle, BrainCircuit, Play,
  LucideIcon
} from 'lucide-react';
import {
  illSvcAfumail, illSvcAfuchat, illSvcAfumovies, illSvcEngagera,
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
  website: string;
  github?: string;
  icon: ProductIcon;
  illustration: string;
}

export const PRODUCT_DATA: ProductData[] = [
  {
    id: "afumail",
    name: "AfuMail",
    tagline: "Your identity. Your gateway.",
    category: "Communication / Email",
    description: "An email and digital communication product developed within the Afu ecosystem.",
    features: ["Email", "Digital communication"],
    color: "#1F95FF",
    bgColor: "#EBF5FF",
    path: "/products/afumail",
    website: "https://email.afuchat.com/",
    github: "https://github.com/afuchat1/AfuMaill",
    icon: Mail,
    illustration: illSvcAfumail,
  },
  {
    id: "afuchat",
    name: "AfuChat",
    tagline: "Connect. Share. Belong.",
    category: "Social & Communication Platform",
    description: "The company's flagship social communication platform.",
    features: ["Messaging", "Social feeds", "Posts", "Stories", "Communities and groups", "User profiles", "AI features", "Digital identity", "ACoin", "Payment-related functionality", "Mini-app and product ecosystem functionality"],
    color: "#1F95FF",
    bgColor: "#EEF7FF",
    path: "/products/afuchat",
    website: "https://afuchat.com/",
    github: "https://github.com/afuchat1/AfuChat-Supa",
    icon: MessageCircle,
    illustration: illSvcAfuchat,
  },
  {
    id: "engagera",
    name: "Engagera",
    tagline: "AI technology within the Afu ecosystem.",
    category: "AI Technology",
    description: "An AI-focused product within the Afu ecosystem.",
    features: ["AI technology", "Afu ecosystem"],
    color: "#1F95FF",
    bgColor: "#EEF7FF",
    path: "/products/engagera",
    website: "https://engagera.afuchat.com/",
    github: "https://github.com/afuchat1/EngageraAi",
    icon: BrainCircuit,
    illustration: illSvcEngagera,
  },
  {
    id: "afumovies",
    name: "AfuMovies",
    tagline: "Entertainment and discovery.",
    category: "Entertainment / Movie Discovery",
    description: "An entertainment and movie discovery product within the Afu ecosystem.",
    features: ["Entertainment", "Movie discovery"],
    color: "#1F95FF",
    bgColor: "#EEF7FF",
    path: "/products/afumovies",
    website: "https://movies.afuchat.com/",
    icon: Play,
    illustration: illSvcAfumovies,
  }
];
