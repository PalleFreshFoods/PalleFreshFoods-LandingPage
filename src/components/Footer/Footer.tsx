import { useState } from 'react';
import { Link } from 'react-router-dom';
import { footerColumns } from '../../data/content';

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const isPath = (href: string) => href.startsWith('/');

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary">
                <span className="material-symbols-outlined text-[22px]">eco</span>
              </span>
              <span className="font-display text-body-lg font-bold text-on-surface">
                PalleFreshFoods
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-body-md text-on-surface-variant">
              From the village to your table. Honest food grown by 150 local farms and delivered
              the same day.
            </p>

            <form onSubmit={handleSubscribe} className="mt-6 flex max-w-sm gap-2">
              <label htmlFor="footer-newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="footer-newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={subscribed ? 'Thanks for subscribing!' : 'Your email'}
                disabled={subscribed}
                className="flex-1 rounded-full bg-surface-container-lowest border border-outline-variant/40 px-5 py-3 text-body-md text-on-surface placeholder:text-on-surface-variant/60 outline-none focus:border-primary"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-on-primary transition hover:scale-110"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {subscribed ? 'check_circle' : 'send'}
                </span>
              </button>
            </form>

            <div className="mt-8 flex items-center gap-3" aria-label="Social media">
              <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-lowest text-on-surface-variant hover:bg-primary hover:text-on-primary transition">
                <SocialIcon>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </SocialIcon>
              </a>
              <a href="#" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-lowest text-on-surface-variant hover:bg-primary hover:text-on-primary transition">
                <SocialIcon>
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </SocialIcon>
              </a>
              <a href="#" aria-label="Twitter" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-lowest text-on-surface-variant hover:bg-primary hover:text-on-primary transition">
                <SocialIcon>
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </SocialIcon>
              </a>
              <a href="#" aria-label="YouTube" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-lowest text-on-surface-variant hover:bg-primary hover:text-on-primary transition">
                <SocialIcon>
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </SocialIcon>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-8 md:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-label-lg font-semibold uppercase tracking-wider text-on-surface">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {isPath(link.href) ? (
                        <Link
                          to={link.href}
                          className="text-body-md text-on-surface-variant hover:text-primary transition"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-body-md text-on-surface-variant hover:text-primary transition"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-outline-variant/30 pt-8 sm:flex-row">
          <p className="text-label-sm text-on-surface-variant">
            © 2024 PalleFreshFoods. Grown with love, delivered with care.
          </p>
          <div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px] text-primary">eco</span>
            <span>Carbon-neutral delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
