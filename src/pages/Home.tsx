import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { TiltCard } from '../components/TiltCard';
import { Counter } from '../components/Counter';
import { ProductCard } from '../components/ProductCard';
import { products, testimonials, stats, trustBarItems } from '../data/content';

const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDKS_7DKfAP84eYupYD1n1nTwgUTqfi0zLEtPy-MnnQsNxw1DU9pXL-fLMqKiSVr29uCE9Y9-0AN_hnuoUjn-z-aGqa7Fyd_dXZMZr9aKFT3-T1hIFTlSWNtoYnjf2IvV8b5K1UypGQzkbJh2Jj0AHFhljsDRxQzrIazIUHVSYwDYI5e2xcntCT-otHqUNINDo8vkXiPmnxs21Q3RapMrFuZ6zmbE1TFRN7634D42w821y5EdGlx2ZQZ9tk7_vvypCnTvb-xRuuCyA';

const bestSellers = products.slice(0, 3);

const features = [
  {
    icon: 'agriculture',
    title: 'Harvested at Dawn',
    body: 'Picked while the dew is still on it. On your table the same morning.',
  },
  {
    icon: 'local_shipping',
    title: 'Same-Day Delivery',
    body: 'Six-hour farm-to-door promise. Free over $50, no middlemen.',
  },
  {
    icon: 'verified',
    title: 'Certified Organic',
    body: '100% organic certified, traceable to the field it grew in.',
  },
];

export function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-surface-container-low pt-12 pb-20 md:pt-20 md:pb-32">
        {/* Noise grain overlay — subtle texture, 21st.dev style */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.06] mix-blend-multiply"
          style={{ backgroundImage: "url('/noise.svg')", backgroundSize: '200px 200px' }}
        />
        {/* Soft gradient glow blob — adds depth behind content */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/3 z-0 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-0 z-0 h-[360px] w-[360px] rounded-full bg-tertiary/25 blur-3xl"
        />

        <div className="container-x relative z-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <span className="eyebrow">From the village · To your table</span>
              <h1 className="mt-3 font-display text-display-lg text-on-surface">
                Farm-Fresh Goodness,
                <br />
                <span className="bg-gradient-to-r from-primary via-tertiary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                  Delivered to Your Door
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-body-lg text-on-surface-variant">
                Discover the season's best from 150 local farms — hand-picked, packed with care,
                and on your table within hours of harvest. Real food, real close.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/products" className="btn-primary">
                  <span className="material-symbols-outlined text-[20px]">shopping_basket</span>
                  Start Your Harvest
                </Link>
                <Link to="/about" className="btn-secondary">
                  Our Story
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-label-sm text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    local_shipping
                  </span>
                  Free delivery over $50
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">eco</span>
                  100% organic certified
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <TiltCard max={5} scale={1.02}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-elevated">
                  <img
                    src={heroImage}
                    alt="Sunrise over the PalleFreshFoods farm"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 via-transparent to-transparent" />
                </div>
              </TiltCard>

              <div className="absolute -bottom-6 left-4 hidden sm:flex items-center gap-3 rounded-2xl bg-surface-container-lowest px-5 py-3 shadow-elevated md:left-12">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary">
                  <span className="material-symbols-outlined text-[20px]">eco</span>
                </span>
                <div>
                  <p className="text-label-sm uppercase tracking-wider text-on-surface-variant">
                    Today
                  </p>
                  <p className="font-display text-body-lg font-semibold text-on-surface">
                    Harvested at dawn
                  </p>
                </div>
              </div>

              <div className="absolute -top-4 right-4 hidden md:flex items-center gap-2 rounded-full bg-tertiary-container px-4 py-2 text-tertiary shadow-elevated">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="text-label-lg font-semibold">100% Organic</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TRUST BAR — scrolling marquee */}
      <section className="overflow-hidden border-y border-outline-variant/30 bg-primary py-5 text-on-primary">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...trustBarItems, ...trustBarItems, ...trustBarItems].map((item, i) => (
            <div key={i} className="mx-8 flex items-center gap-3 text-body-lg font-medium">
              <span className="material-symbols-outlined text-[20px]">eco</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <ScrollReveal>
            <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="eyebrow">This week's pick</span>
                <h2 className="mt-3 font-display text-headline-lg text-on-surface md:text-display-lg">
                  Our Best Sellers
                </h2>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-label-lg font-semibold text-primary hover:underline"
              >
                Shop the full harvest
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bestSellers.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 100}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-surface-container-low py-20 md:py-28">
        <div className="container-x">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <span className="eyebrow">Why choose us</span>
              <h2 className="mt-3 font-display text-headline-lg text-on-surface md:text-display-lg">
                Cultivating Trust,
                <br />
                <span className="text-primary">Delivering Quality</span>
              </h2>
              <p className="mt-6 text-body-lg text-on-surface-variant">
                For more than a decade we've been the bridge between village farms and family
                tables. No warehouses, no week-old vegetables, no shortcuts. Just honest food from
                people you can meet.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-surface-container-lowest p-6 shadow-soft"
                  >
                    <p className="font-display text-display-lg text-primary leading-none">
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-3 text-label-lg uppercase tracking-wider text-on-surface-variant">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex flex-col gap-5">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-5 rounded-2xl bg-surface-container-lowest p-6 shadow-soft transition hover:shadow-elevated"
                  >
                    <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-on-primary">
                      <span className="material-symbols-outlined text-[26px]">{feature.icon}</span>
                    </span>
                    <div>
                      <h3 className="font-display text-headline-md text-on-surface">
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 text-body-md text-on-surface-variant">
                        {feature.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="eyebrow">From our table to yours</span>
              <h2 className="mt-3 font-display text-headline-lg text-on-surface md:text-display-lg">
                Shared from the Table
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-body-lg text-on-surface-variant">
                Real families, real meals, real difference.
              </p>
            </div>
          </ScrollReveal>

          <div className="-mx-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-thin md:overflow-hidden">
            <div className="flex gap-6 md:grid md:grid-cols-3 md:gap-8">
              {testimonials.map((t) => (
                <ScrollReveal key={t.id}>
                  <article className="flex w-[85vw] flex-shrink-0 snap-center flex-col gap-5 rounded-2xl bg-surface-container-low p-8 shadow-soft md:w-auto">
                    <div className="flex items-center gap-1 text-tertiary">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[20px]">
                          star
                        </span>
                      ))}
                    </div>
                    <span className="material-symbols-outlined text-5xl text-primary/30">
                      format_quote
                    </span>
                    <p className="text-body-lg leading-relaxed text-on-surface">
                      {t.quote}
                    </p>
                    <div className="mt-auto flex items-center gap-3 border-t border-outline-variant/30 pt-5">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-display text-body-lg font-semibold text-on-surface">
                          {t.name}
                        </p>
                        <p className="text-label-sm text-on-surface-variant">{t.role}</p>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="bg-background pb-24 pt-8 md:pb-32">
        <div className="container-x">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-on-primary shadow-elevated md:px-16 md:py-20">
              <span className="material-symbols-outlined absolute -right-6 -top-6 text-[200px] opacity-10">
                eco
              </span>
              <span className="material-symbols-outlined absolute -bottom-6 -left-6 text-[180px] opacity-10">
                agriculture
              </span>
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-on-primary/15 px-4 py-1.5 text-label-sm font-semibold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  Newsletter
                </span>
                <h2 className="mt-6 font-display text-headline-lg md:text-display-lg">
                  Join the Harvest Circle
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-body-lg opacity-90">
                  Get weekly recipes, harvest updates, and exclusive farm-box offers — straight
                  from our fields to your inbox.
                </p>
                <form
                  onSubmit={handleSubscribe}
                  className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                >
                  <label htmlFor="home-newsletter" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="home-newsletter"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={subscribed ? 'You’re in! \uD83C\uDF31' : 'Your email address'}
                    disabled={subscribed}
                    className="flex-1 rounded-full bg-on-primary/10 border border-on-primary/30 px-6 py-3.5 text-body-md text-on-primary placeholder:text-on-primary/60 outline-none focus:bg-on-primary/20"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-on-primary px-7 py-3.5 text-label-lg font-semibold text-primary transition hover:scale-105"
                  >
                    {subscribed ? 'Subscribed' : 'Subscribe'}
                    <span className="material-symbols-outlined text-[18px]">
                      {subscribed ? 'check_circle' : 'arrow_forward'}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
