import EcosystemSection from '@/components/home/EcosystemSection';

export default function Ecosystem() {
  return (
    <div className="w-full">
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="max-container container-pad py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6">The AfuChat Ecosystem</h1>
          <p className="text-lg sm:text-xl text-[#64748B] max-w-3xl mx-auto">
            Discover how our services connect to create a seamless digital experience, all powered by a single secure identity.
          </p>
        </div>
      </div>
      <EcosystemSection />
    </div>
  );
}