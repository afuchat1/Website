import type { LucideIcon } from 'lucide-react';
import type { ProductData } from '@/data/products';

type ProductIconProps = {
  product: Pick<ProductData, 'icon' | 'name'>;
  containerClassName?: string;
  iconClassName?: string;
};

export default function ProductIcon({
  product,
  containerClassName = 'w-10 h-10 rounded-xl',
  iconClassName = 'w-5 h-5',
}: ProductIconProps) {
  const Icon = product.icon as LucideIcon;

  return (
    <span
      className={`relative inline-flex items-center justify-center shrink-0 overflow-hidden border transition-transform duration-200 group-hover:scale-105${containerClassName ? ` ${containerClassName}` : ''}`}
      style={{
        color: 'currentColor',
        backgroundColor: 'transparent',
        borderColor: 'currentColor',
        boxShadow: 'none',
      }}
      aria-label={`${product.name} icon`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-[3px] rounded-[inherit] pointer-events-none"
        style={{
          backgroundColor: 'transparent',
          border: '1px solid currentColor',
        }}
      />
      <Icon className={`relative z-10 ${iconClassName}`} strokeWidth={2.15} aria-hidden="true" />
    </span>
  );
}
