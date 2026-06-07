import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export function FloatingCart() {
  const { itemCount, subtotal, toggle } = useCart();
  const [bounce, setBounce] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  useEffect(() => {
    if (!hydrated) return;
    setBounce(true);
    const t = window.setTimeout(() => setBounce(false), 600);
    return () => window.clearTimeout(t);
  }, [itemCount, hydrated]);

  if (!hydrated) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Open cart, ${itemCount} items`}
      className={`fixed bottom-6 right-6 z-40 group flex items-center gap-3 rounded-full bg-primary text-white pl-4 pr-5 py-3 shadow-elevated transition-transform hover:scale-105 ${bounce ? 'animate-bounce-slow' : ''}`}
    >
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <span className="material-symbols-outlined text-[22px]">shopping_cart</span>
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-tertiary-container px-1 text-[11px] font-bold text-tertiary">
            {itemCount}
          </span>
        )}
      </span>
      <span className="hidden sm:flex flex-col items-start leading-tight">
        <span className="text-[11px] uppercase tracking-widest opacity-80">Cart</span>
        <span className="text-sm font-semibold">${subtotal.toFixed(2)}</span>
      </span>
    </button>
  );
}
