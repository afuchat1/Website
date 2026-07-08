import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import IdentitySection from '@/components/home/IdentitySection';
import FeaturesSection from '@/components/home/FeaturesSection';
import DeveloperSection from '@/components/home/DeveloperSection';
import CtaSection from '@/components/home/CtaSection';
import Footer from '@/components/layout/Footer';
import PageSEO from '@/components/seo/PageSEO';

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AfuChat Technologies Limited',
  url: 'https://afuchat.com',
  logo: 'https://afuchat.com/favicon.png',
  description: 'AfuChat Technologies Limited builds independent digital products for everyone — AfuMail, AfuChat, AfuAI, AfuCloud, AfuMovies, AfuMall, AfuNews, and AfuBlog.',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'business@afuchat.com',
    contactType: 'customer support',
  },
};

// Flat dark background — matches every other page on the site (no ambient
// colour-blob wash behind the hero/sections).
export default function Home() {
  return (
    <div className="relative flex flex-col w-full">
      <PageSEO
        title="AfuChat — Powerful Tools. Standalone Brilliance."
        description="AfuChat Technologies Limited builds independent digital products for everyone — AfuMail, AfuChat, AfuAI, AfuCloud, AfuMovies, AfuMall, AfuNews, and AfuBlog. One account, zero friction."
        canonical="/"
        jsonLd={orgSchema}
      />
      <HeroSection />
      <ProductsSection />
      <ReviewsSection />
      <IdentitySection />
      <FeaturesSection />
      <DeveloperSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
