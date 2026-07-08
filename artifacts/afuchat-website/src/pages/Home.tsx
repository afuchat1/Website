import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import EcosystemSection from '@/components/home/EcosystemSection';
import IdentitySection from '@/components/home/IdentitySection';
import FeaturesSection from '@/components/home/FeaturesSection';
import DeveloperSection from '@/components/home/DeveloperSection';
import DownloadSection from '@/components/home/DownloadSection';
import CtaSection from '@/components/home/CtaSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ProductsSection />
      <EcosystemSection />
      <IdentitySection />
      <FeaturesSection />
      <DeveloperSection />
      <DownloadSection />
      <CtaSection />
    </div>
  );
}