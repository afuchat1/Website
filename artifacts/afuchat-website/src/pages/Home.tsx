import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import EcosystemSection from '@/components/home/EcosystemSection';
import IdentitySection from '@/components/home/IdentitySection';
import FeaturesSection from '@/components/home/FeaturesSection';
import DeveloperSection from '@/components/home/DeveloperSection';
import DownloadSection from '@/components/home/DownloadSection';
import CtaSection from '@/components/home/CtaSection';
import DigitalFlowDivider from '@/components/home/DigitalFlowDivider';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <DigitalFlowDivider topColor="#040c1e" bottomColor="#07091e" />
      <ProductsSection />
      <DigitalFlowDivider topColor="#07091e" bottomColor="#060e22" />
      <EcosystemSection />
      <DigitalFlowDivider topColor="#060e22" bottomColor="#050d1f" />
      <IdentitySection />
      <DigitalFlowDivider topColor="#050d1f" bottomColor="#050f14" />
      <FeaturesSection />
      <DigitalFlowDivider topColor="#050f14" bottomColor="#04100a" />
      <DeveloperSection />
      <DigitalFlowDivider topColor="#04100a" bottomColor="#060d24" />
      <DownloadSection />
      <DigitalFlowDivider topColor="#060d24" bottomColor="#060d24" />
      <CtaSection />
    </div>
  );
}
