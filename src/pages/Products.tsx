import { useMemo, useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ProductCard } from '../components/ProductCard';
import { QuickView } from '../components/QuickViewModal';
import { products } from '../data/content';
import type { Product, ProductCategory } from '../types';

const filters: Array<ProductCategory | 'All'> = [
  'All',
  'Fruits',
  'Vegetables',
  'Dairy',
  'Greens',
];

export function Products() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<ProductCategory | 'All'>('All');
  const [quickView, setQuickView] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = active === 'All' || p.category === active;
      const matchesQuery =
        query.trim() === '' ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.origin.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, active]);

  return (
    <>
      {/* HEADER */}
      <section className="relative overflow-hidden bg-surface-container-low pb-20 pt-20 md:pt-24">
        <div className="container-x">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <span className="eyebrow">This week’s harvest</span>
              <h1 className="mt-3 font-display text-display-lg text-on-surface">
                The Premium Harvest
              </h1>
              <p className="mt-5 max-w-lg text-body-lg text-on-surface-variant">
                Hand-picked from 150 local farms, packed the same morning, and at your door before
                the day is out.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <label htmlFor="product-search" className="relative block">
                <span className="sr-only">Search the harvest</span>
                <span className="material-symbols-outlined pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  search
                </span>
                <input
                  id="product-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search the harvest..."
                  className="w-full rounded-full bg-surface-container-lowest border border-outline-variant/40 py-4 pl-14 pr-6 text-body-md text-on-surface outline-none shadow-soft placeholder:text-on-surface-variant/60 focus:border-primary"
                />
              </label>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={250}>
            <div className="mt-10 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  className={`rounded-full px-5 py-2.5 text-label-lg font-semibold transition ${
                    active === filter
                      ? 'bg-primary text-on-primary shadow-soft'
                      : 'bg-surface-container-lowest text-on-surface-variant hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-x">
          {filtered.length === 0 ? (
            <div className="rounded-2xl bg-surface-container-low py-20 text-center">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant/40">
                search_off
              </span>
              <p className="mt-4 font-display text-headline-md text-on-surface">
                Nothing in the basket matches that
              </p>
              <p className="mt-2 text-body-md text-on-surface-variant">
                Try a different search or filter.
              </p>
            </div>
          ) : (
            <>
              <p className="mb-8 text-label-lg text-on-surface-variant">
                Showing <span className="font-semibold text-on-surface">{filtered.length}</span>{' '}
                {filtered.length === 1 ? 'item' : 'items'}
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={setQuickView}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <QuickView product={quickView} onClose={() => setQuickView(null)} />
    </>
  );
}
