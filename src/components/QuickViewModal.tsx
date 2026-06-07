import { useEffect } from 'react';
import type { Product } from '../types';

type QuickViewProps = {
  product: Product | null;
  onClose: () => void;
};

export function QuickView({ product, onClose }: QuickViewProps) {
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quickview-title"
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-surface-container-lowest shadow-elevated animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-on-surface shadow-soft transition hover:scale-110"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto bg-surface-container-low">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-tertiary-container px-3 py-1 text-label-sm font-semibold text-tertiary">
                <span className="material-symbols-outlined text-[14px]">star</span>
                {product.badge}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-5 p-8">
            <div>
              <p className="text-label-sm uppercase tracking-widest text-primary">{product.category}</p>
              <h2 id="quickview-title" className="mt-1 font-display text-headline-lg text-on-surface">
                {product.name}
              </h2>
              <p className="mt-1 text-sm text-on-surface-variant">From {product.origin}</p>
            </div>

            <p className="text-body-md text-on-surface-variant leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
