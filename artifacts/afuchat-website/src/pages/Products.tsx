import { PRODUCT_DATA } from '@/data/products';
import { Link } from 'wouter';

export default function Products() {
  return (
    <div className="w-full pb-20">
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-container container-pad py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6">Our Products</h1>
          <p className="text-lg sm:text-xl text-[#64748B] max-w-3xl mx-auto">
            Explore the complete suite of AfuChat services, designed to work together seamlessly.
          </p>
        </div>
      </div>

      <div className="max-container container-pad pt-16 sm:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCT_DATA.map((product) => {
            const Icon = product.icon;
            return (
              <Link key={product.id} href={product.path}>
                <div 
                  className="bg-white border border-[#E2E8F0] rounded-[20px] p-8 h-full hover:shadow-lg transition-all duration-300 group"
                >
                  <Icon className="w-8 h-8 mb-6" style={{ color: product.color }} />
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{product.name}</h3>
                  <p className="text-[#1F95FF] font-medium text-sm mb-4">{product.tagline}</p>
                  <p className="text-[#64748B] mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="text-sm text-[#0F172A] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: product.color }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}