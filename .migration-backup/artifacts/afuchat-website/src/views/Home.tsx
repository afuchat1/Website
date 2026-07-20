'use client';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import IdentitySection from '@/components/home/IdentitySection';
import FeaturesSection from '@/components/home/FeaturesSection';
import DeveloperSection from '@/components/home/DeveloperSection';
import CtaSection from '@/components/home/CtaSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="relative flex flex-col w-full">
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
