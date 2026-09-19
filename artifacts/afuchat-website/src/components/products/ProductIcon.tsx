import type { LucideIcon } from 'lucide-react';
import type { ProductData } from '@/data/products';

type ProductIconProps = {
  product: Pick<ProductData, 'color' | 'icon' | 'name'>;
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
        color: product.color,
        backgroundColor: `${product.color}12`,
        borderColor: `${product.color}35`,
        boxShadow: `inset 0 1px 0 ${product.color}28`,
      }}
      aria-label={`${product.name} icon`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-[3px] rounded-[inherit] pointer-events-none"
        style={{
          backgroundColor: `${product.color}0A`,
          border: `1px solid ${product.color}18`,
        }}
      />
      <Icon className={`relative z-10 ${iconClassName}`} strokeWidth={2.15} aria-hidden="true" />
    </span>
  );
}
