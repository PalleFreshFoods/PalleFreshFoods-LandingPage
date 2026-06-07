import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { navLinks } from '../../data/content';

const isActivePath = (href: string, current: string) => {
  if (href === '/') return current === '/';
  return current === href || current.startsWith(`${href}/`);
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, open } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? 'glass border-b border-outline-variant/30 shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="PalleFreshFoods home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-[22px]">eco</span>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-body-lg font-bold text-on-surface">PalleFreshFoods</span>
              <span className="text-label-sm text-primary -mt-0.5">Village Fresh</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={() =>
                  `relative px-4 py-2 text-label-lg uppercase tracking-wider transition-colors ${
                    isActivePath(link.href, location.pathname)
                      ? 'text-primary'
                      : 'text-on-surface-variant hover:text-primary'
                  }`
                }
              >
                {link.label}
                {isActivePath(link.href, location.pathname) && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-primary" />
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={open}
              aria-label={`Open cart, ${itemCount} items`}
              className="relative hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container transition"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-tertiary-container px-1 text-[11px] font-bold text-tertiary">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              type="button"
              aria-label="Account"
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container transition"
            >
              <span className="material-symbols-outlined">account_circle</span>
            </button>

            <Link
              to="/products"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-label-lg font-semibold text-on-primary transition hover:scale-105 hover:shadow-elevated"
            >
              Order Now
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition"
            >
              <span className="material-symbols-outlined">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-outline-variant/30 bg-surface-container-lowest shadow-soft">
            <nav className="container-x flex flex-col py-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={() =>
                    `flex items-center justify-between border-b border-outline-variant/20 py-4 text-body-lg font-medium ${
                      isActivePath(link.href, location.pathname)
                        ? 'text-primary'
                        : 'text-on-surface'
                    }`
                  }
                >
                  {link.label}
                  <span className="material-symbols-outlined text-on-surface-variant">
                    chevron_right
                  </span>
                </NavLink>
              ))}
              <Link
                to="/products"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-body-md font-semibold text-on-primary"
              >
                Order Now
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </nav>
          </div>
        )}
      </header>
      {/* Spacer so content doesn't slide under the fixed header */}
      <div className="h-20" aria-hidden="true" />
    </>
  );
}
