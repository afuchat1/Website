import type { LucideIcon } from 'lucide-react';
import type { ProductData } from '@/data/products';

type ProductIconProps = {
  product: Pick<ProductData, 'icon' | 'name' | 'logo'>;
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
      role="img"
      className={`inline-flex items-center justify-center shrink-0${containerClassName ? ` ${containerClassName}` : ''}`}
      style={{ color: 'currentColor' }}
      aria-label={`${product.name} icon`}
    >
      {product.logo ? (
        <img
          src={product.logo}
          alt=""
          aria-hidden="true"
          className={`relative z-10 object-contain ${iconClassName}`}
        />
      ) : (
        <Icon className={`relative z-10 ${iconClassName}`} strokeWidth={2.15} aria-hidden="true" />
      )}
    </span>
  );
}
