import type { Product } from '../types';
import { useCart } from '../context/CartContext';

type ProductCardProps = {
  product: Product;
  onQuickView?: (product: Product) => void;
  variant?: 'grid' | 'compact';
};

export function ProductCard({ product, onQuickView, variant = 'grid' }: ProductCardProps) {
  const { add } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    add(product);
  };

  const handleCardClick = () => {
    onQuickView?.(product);
  };

  return (
    <article
      onClick={handleCardClick}
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-soft transition-all hover:shadow-elevated hover:-translate-y-1 cursor-pointer ${
        variant === 'compact' ? 'h-full' : ''
      }`}
    >
      <div className="relative aspect-square overflow-hidden bg-surface-container-low">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {product.badge && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-tertiary-container px-2.5 py-1 text-label-sm font-semibold text-tertiary">
            <span className="material-symbols-outlined text-[14px]">star</span>
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={handleAdd}
          aria-label={`Add ${product.name} to cart`}
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 shadow-soft transition-all group-hover:opacity-100 hover:scale-110"
        >
          <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-label-sm uppercase tracking-widest text-on-surface-variant">
            {product.category}
          </p>
          <h3 className="mt-1 font-display text-headline-md text-on-surface">
            {product.name}
          </h3>
        </div>

        <p className="line-clamp-2 text-body-md text-on-surface-variant">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-headline-md text-primary">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-label-sm text-on-surface-variant">/ {product.unit}</span>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-2 text-label-lg font-semibold text-primary transition hover:bg-primary hover:text-on-primary"
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
