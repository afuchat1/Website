import {
  HeartHandshake,
  Layers3,
  Radio,
  ShoppingBag,
  Store,
  type LucideIcon,
} from 'lucide-react';

export interface ProjectData {
  id: string;
  name: string;
  category: string;
  description: string;
  focus: string[];
  url: string;
  icon: LucideIcon;
  accent: string;
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'amazon-shoe-collection',
    name: 'Amazon Shoe Collection',
    category: 'E-commerce / Footwear',
    description: 'A client e-commerce project focused on presenting footwear clearly and creating a responsive shopping experience.',
    focus: ['Online footwear', 'Product discovery', 'Responsive web'],
    url: 'https://amazonshoecollection.com/',
    icon: ShoppingBag,
    accent: '#F59E0B',
  },
  {
    id: 'honey-bee-ministries',
    name: 'Honey Bee Ministries Uganda',
    category: 'Organization website',
    description: 'A client website that gives an organization a clear, welcoming online presence and an accessible place to share information.',
    focus: ['Organization information', 'Content presentation', 'Responsive web'],
    url: 'https://honeybeeministriesug.org/',
    icon: HeartHandshake,
    accent: '#14B8A6',
  },
  {
    id: 'sabula-shoe-spot',
    name: 'Sabula Shoe Spot',
    category: 'B2B e-commerce',
    description: 'A B2B footwear commerce project built around product categories, wholesale discovery, and retailer-focused ordering.',
    focus: ['Wholesale footwear', 'Product catalog', 'WhatsApp ordering'],
    url: 'https://www.sabulashoespot.com/',
    icon: Store,
    accent: '#F97316',
  },
  {
    id: 'mindset-media-radio',
    name: 'Mindset Media Radio',
    category: 'Media / Radio / News',
    description: 'A digital media and radio project for sharing live listening, news, stories, and Luganda content across devices.',
    focus: ['Live listening', 'News and stories', 'Responsive media'],
    url: 'https://www.mmradioug.org/',
    icon: Radio,
    accent: '#8B5CF6',
  },
  {
    id: 'shanny',
    name: 'Shanny',
    category: 'Custom digital project',
    description: 'A custom digital project built and hosted within the Afu ecosystem.',
    focus: ['Custom experience', 'Product-minded build', 'Afu ecosystem'],
    url: 'https://shanny.afuchat.com/',
    icon: Layers3,
    accent: '#1F95FF',
  },
];