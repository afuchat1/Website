import { useParams, Link } from 'wouter';
import { PRODUCT_DATA } from '@/data/products';
import NotFound from '@/pages/not-found';
import { ArrowLeft } from 'lucide-react';

export default function ProductPage() {
  const params = useParams();
  const product = PRODUCT_DATA.find(p => p.id === params.id);

  if (!product) {
    return <NotFound />;
  }

  const Icon = product.icon;

  return (
    <div className="w-full pb-20">
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-container container-pad py-12 sm:py-20">
          <Link href="/products" className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#0F172A] font-medium mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <Icon className="w-16 h-16 shrink-0" style={{ color: product.color }} />
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-3">{product.name}</h1>
              <p className="text-xl sm:text-2xl font-medium" style={{ color: product.color }}>
                {product.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-container container-pad pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Overview</h2>
            <p className="text-lg text-[#64748B] leading-relaxed mb-12">
              {product.description} Integrates perfectly with the rest of the AfuChat ecosystem via your unified AfuMail account.
            </p>

            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.features.map((feature, i) => (
                <div key={i} className="bg-white border border-[#E2E8F0] p-6 rounded-xl">
                  <span className="font-bold text-2xl mb-3 block" style={{ color: product.color }}>{i + 1}.</span>
                  <h3 className="font-bold text-[#0F172A]">{feature}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 sticky top-24">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Ready to start?</h3>
              <p className="text-[#64748B] mb-6">Get access to {product.name} and 7 other premium services with one free account.</p>
              <Link 
                href="/signup" 
                className="w-full block text-center py-3 px-4 rounded-xl text-white font-semibold transition-colors"
                style={{ backgroundColor: product.color }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}