import { useEffect } from 'react';
import { useCart } from '../context/CartContext';

export function SideCart() {
  const { lines, isOpen, close, subtotal, setQuantity, remove, itemCount } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-on-surface/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={close}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-surface-container-lowest shadow-elevated transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <header className="flex items-center justify-between border-b border-outline-variant/30 px-6 py-5">
          <div>
            <h2 className="font-display text-headline-md text-on-surface">Your Harvest</h2>
            <p className="text-label-sm text-on-surface-variant">
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close cart"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container transition"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant/40">
                shopping_basket
              </span>
              <p className="font-display text-headline-md text-on-surface">Your basket is empty</p>
              <p className="text-body-md text-on-surface-variant max-w-xs">
                Browse the harvest and add some farm-fresh goodness to your table.
              </p>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-outline-variant/30">
              {lines.map((line) => (
                <li key={line.product.id} className="flex gap-4 py-4">
                  <img
                    src={line.product.image}
                    alt={line.product.name}
                    className="h-20 w-20 flex-shrink-0 rounded-lg object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-body-lg font-semibold text-on-surface">
                          {line.product.name}
                        </h3>
                        <p className="text-label-sm text-on-surface-variant">
                          ${line.product.price.toFixed(2)} / {line.product.unit}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(line.product.id)}
                        aria-label={`Remove ${line.product.name}`}
                        className="text-on-surface-variant/60 hover:text-primary"
                      >
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-outline-variant/40">
                        <button
                          type="button"
                          onClick={() => setQuantity(line.product.id, line.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="inline-flex h-8 w-8 items-center justify-center text-on-surface-variant hover:text-primary"
                        >
                          <span className="material-symbols-outlined text-[18px]">remove</span>
                        </button>
                        <span className="min-w-6 text-center text-label-lg font-semibold text-on-surface">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(line.product.id, line.quantity + 1)}
                          aria-label="Increase quantity"
                          className="inline-flex h-8 w-8 items-center justify-center text-on-surface-variant hover:text-primary"
                        >
                          <span className="material-symbols-outlined text-[18px]">add</span>
                        </button>
                      </div>
                      <span className="text-label-lg font-semibold text-primary">
                        ${(line.product.price * line.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <footer className="border-t border-outline-variant/30 bg-surface-container-low px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-label-lg text-on-surface-variant">Subtotal</span>
              <span className="font-display text-headline-md text-on-surface">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="mb-4 text-label-sm text-on-surface-variant">
              Delivery calculated at checkout. Free shipping over $50.
            </p>
            <button type="button" className="btn-primary w-full">
              <span className="material-symbols-outlined text-[20px]">shopping_cart_checkout</span>
              Checkout
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
