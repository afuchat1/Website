import { HeroSection } from '@/components/home/HeroSection';
import { EcosystemSection } from '@/components/home/EcosystemSection';
import { IdentitySection } from '@/components/home/IdentitySection';
import { ProductsSection } from '@/components/home/ProductsSection';
import { DeveloperSection } from '@/components/home/DeveloperSection';
import { SecuritySection } from '@/components/home/SecuritySection';
import { FutureSection } from '@/components/home/FutureSection';
import { CtaSection } from '@/components/home/CtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IdentitySection />
      <EcosystemSection />
      <ProductsSection />
      <SecuritySection />
      <DeveloperSection />
      <FutureSection />
      <CtaSection />
    </>
  );
}
