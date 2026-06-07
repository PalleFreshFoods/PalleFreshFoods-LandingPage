import type { Product } from '../types';

type ProductCardProps = {
  product: Product;
  onQuickView?: (product: Product) => void;
  variant?: 'grid' | 'compact';
};

const categoryIcon: Record<string, string> = {
  Fruits: 'nutrition',
  Vegetables: 'eco',
  Dairy: 'water_drop',
  Greens: 'spa',
};

export function ProductCard({ product, onQuickView, variant = 'grid' }: ProductCardProps) {
  const handleCardClick = () => {
    onQuickView?.(product);
  };

  return (
    <article
      onClick={handleCardClick}
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1.5 cursor-pointer ${
        variant === 'compact' ? 'h-full' : ''
      }`}
    >
      {/* Rotating gradient ring on hover — sits behind card, only visible on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px z-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'conic-gradient(from 0deg, #0d631b, #f3c01a, #2e7d32, #f3c01a, #0d631b)',
          animation: 'border-spin 4s linear infinite',
        }}
      />
      {/* Inner surface — sits on top of the ring, leaving 1px of color visible */}
      <div className="pointer-events-none absolute inset-px z-[1] rounded-[15px] bg-surface-container-lowest" />

      <div className="relative z-[2] flex flex-1 flex-col">
        <div className="relative aspect-square overflow-hidden bg-surface-container-low">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Shine sweep — diagonal highlight that wipes across the image on hover */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
          />

          {/* Top-left badge — seasonal / A2 / etc. */}
          {product.badge && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-tertiary-container px-2.5 py-1 text-label-sm font-semibold text-tertiary shadow-soft">
              <span className="material-symbols-outlined text-[14px]">star</span>
              {product.badge}
            </span>
          )}

          {/* Bottom-center category pill — slides up on hover */}
          <div className="pointer-events-none absolute inset-x-3 bottom-3 flex justify-center opacity-0 transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-on-surface/85 px-3 py-1.5 text-label-sm font-semibold text-surface-container-lowest backdrop-blur-sm">
              <span className="material-symbols-outlined text-[14px]">
                {categoryIcon[product.category] ?? 'eco'}
              </span>
              View details
            </span>
          </div>
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
        </div>
      </div>
    </article>
  );
}
