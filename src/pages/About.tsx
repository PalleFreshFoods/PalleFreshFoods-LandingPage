import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { Counter } from '../components/Counter';
import { timelineEvents, teamMembers, ecosystemBento } from '../data/content';

const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA2nkq9iPf1HQTin73FXh3g9C1EwPbg1ZGHoZs9Vfzxxt23HA30DgrZsv_ES0FF4EJrDe49nVQ25IgT2CpNuhP9pKqbrAcrPIlfIGjjIi_xsBtid7ywOVl3aA2E9-pfOvvMmaX0Ob1zugCEhh6TgsUFMqHxPhWRGFSNk-IEIjqZv_s52M4gc4WJstjzMgIk7fXkEbkpqih7Yq4QYTk1dNYJnR05Yo1cJnYTAyLYyDg5tT3Yhb19XQk0R4BazBiGfhrEf5f-MOLqcbo';

const sourcingImage =
  'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&h=700&fit=crop';

const accentColor: Record<string, string> = {
  primary: 'bg-primary text-on-primary',
  secondary: 'bg-secondary text-on-primary',
  tertiary: 'bg-tertiary text-tertiary-fixed-dim',
};

export function About() {
  const [sliderValue, setSliderValue] = useState(50);
  const waterSaved = Math.round(sliderValue * 4.2);
  const co2Offset = Math.round(sliderValue * 0.18 * 10) / 10;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-on-surface text-on-primary">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sunrise over the PalleFreshFoods farm"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-on-surface/40 via-on-surface/30 to-on-surface/80" />
        </div>
        <div className="container-x relative flex min-h-[480px] flex-col justify-end py-20 md:min-h-[560px]">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-on-primary/15 px-4 py-1.5 text-label-sm font-semibold uppercase tracking-wider backdrop-blur">
              <span className="material-symbols-outlined text-[16px]">eco</span>
              Our Story
            </span>
            <h1 className="mt-4 max-w-3xl font-display text-display-lg text-on-primary">
              Our Roots, Your Health
            </h1>
            <p className="mt-5 max-w-xl text-body-lg text-on-primary/85">
              A network of 150 farmers, one shared promise: honest, fresh food for every family.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SOURCING — 2-col */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <span className="eyebrow">Where it starts</span>
              <h2 className="mt-3 font-display text-headline-lg text-on-surface md:text-display-lg">
                From a single backyard to 150 farms
              </h2>
              <p className="mt-6 text-body-lg text-on-surface-variant">
                PalleFreshFoods began in 2012 with a half-acre behind Sarah Palle’s grandmother’s
                house. Today we partner with 150 smallholder farms across the region ’ a network
                of growers who share a single promise: no synthetic fertilisers, no
                shortcuts, no week-old produce.
              </p>
              <p className="mt-4 text-body-lg text-on-surface-variant">
                Every farm is independently audited. Every harvest is traceable. Every box carries
                the name of the field it came from ’ because honest food deserves an honest story.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative overflow-hidden rounded-3xl shadow-elevated">
                <img
                  src={sourcingImage}
                  alt="A local farmer tending the rows"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-surface-container-lowest/95 p-5 backdrop-blur shadow-soft md:bottom-8 md:left-8 md:right-auto md:max-w-xs">
                  <p className="text-label-sm uppercase tracking-wider text-primary">
                    Since 2012
                  </p>
                  <p className="mt-1 font-display text-headline-md text-on-surface">
                    One promise, 150 farms
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-surface-container-low py-20 md:py-28">
        <div className="container-x">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="eyebrow">The journey</span>
              <h2 className="mt-3 font-display text-headline-lg text-on-surface md:text-display-lg">
                A decade of cultivation
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-outline-variant/40 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-16">
              {timelineEvents.map((event, i) => (
                <ScrollReveal key={event.year} delay={i * 100}>
                  <div
                    className={`relative flex flex-col gap-6 pl-16 md:flex-row md:items-center md:gap-12 md:pl-0 ${
                      i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="absolute left-3 top-1 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-on-primary md:left-1/2 md:-translate-x-1/2">
                      <span className="material-symbols-outlined text-[16px]">eco</span>
                    </div>

                    <div className="md:w-1/2">
                      <span className="font-display text-headline-lg text-primary">
                        {event.year}
                      </span>
                      <h3 className="mt-2 font-display text-headline-md text-on-surface">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-body-md text-on-surface-variant">{event.body}</p>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FARM-TO-TABLE INFOGRAPHIC */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="eyebrow">The path</span>
              <h2 className="mt-3 font-display text-headline-lg text-on-surface md:text-display-lg">
                Farm to table, in six hours
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-body-lg text-on-surface-variant">
                A direct pipeline from the field to your kitchen ’ no warehouses, no cold chain
                gaps, no middlemen.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-5">
            {[
              { icon: 'agriculture', label: 'Harvested' },
              { icon: 'inventory_2', label: 'Packed' },
              { icon: 'local_shipping', label: 'In Transit' },
              { icon: 'door_front', label: 'At Your Door' },
              { icon: 'restaurant', label: 'On Your Table' },
            ].map((step, i, arr) => (
              <ScrollReveal key={step.label} delay={i * 80}>
                <div className="relative flex flex-col items-center gap-3 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary shadow-soft md:h-20 md:w-20">
                    <span className="material-symbols-outlined text-[28px] md:text-[32px]">
                      {step.icon}
                    </span>
                  </div>
                  <p className="text-label-lg font-semibold text-on-surface">{step.label}</p>
                  {i < arr.length - 1 && (
                    <span className="material-symbols-outlined absolute -right-3 top-7 hidden text-on-surface-variant/30 md:block md:top-9">
                      chevron_right
                    </span>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM FLIP CARDS */}
      <section className="bg-surface-container-low py-20 md:py-28">
        <div className="container-x">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="eyebrow">The cultivators</span>
              <h2 className="mt-3 font-display text-headline-lg text-on-surface md:text-display-lg">
                The hands behind the harvest
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-body-lg text-on-surface-variant">
                Farmers, scientists, and logistics nerds ’ obsessed with how your food gets to
                you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <div className="group h-[420px] [perspective:1000px]">
                  <div className="relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 overflow-hidden rounded-3xl [backface-visibility:hidden]">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-on-surface/90 via-on-surface/40 to-transparent p-6 text-on-primary">
                        <h3 className="font-display text-headline-md">{member.name}</h3>
                        <p className="text-label-sm uppercase tracking-wider opacity-80">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center gap-4 rounded-3xl bg-primary p-8 text-on-primary [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <span className="material-symbols-outlined text-5xl opacity-50">
                        format_quote
                      </span>
                      <p className="text-body-lg leading-relaxed">{member.bio}</p>
                      <div className="mt-4 border-t border-on-primary/30 pt-4">
                        <p className="font-display text-body-lg font-semibold">{member.name}</p>
                        <p className="text-label-sm uppercase tracking-wider opacity-80">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ECO-SYSTEM BENTO */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="eyebrow">Our eco-system</span>
              <h2 className="mt-3 font-display text-headline-lg text-on-surface md:text-display-lg">
                A living harvest
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-body-lg text-on-surface-variant">
                Three pillars that make every PalleFreshFoods box the most responsible choice on
                your table.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {ecosystemBento.map((pillar) => (
              <ScrollReveal
                key={pillar.title}
                className={`${pillar.span} relative overflow-hidden rounded-3xl bg-surface-container-low shadow-soft transition hover:shadow-elevated`}
              >
                <div className="grid h-full grid-cols-1 md:grid-cols-2">
                  <div className="relative aspect-[16/10] md:aspect-auto">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${accentColor[pillar.accent]} w-fit`}
                    >
                      <span className="material-symbols-outlined text-[24px]">{pillar.icon}</span>
                    </span>
                    <h3 className="font-display text-headline-md text-on-surface">
                      {pillar.title}
                    </h3>
                    <p className="text-body-md text-on-surface-variant">{pillar.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT CALCULATOR */}
      <section className="bg-surface-container-low py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-surface-container-lowest shadow-elevated">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <span className="eyebrow">Your impact</span>
                <h2 className="mt-3 font-display text-headline-lg text-on-surface">
                  How much could you save?
                </h2>
                <p className="mt-4 text-body-md text-on-surface-variant">
                  Drag the slider to see how switching to PalleFreshFoods cuts water use and carbon
                  versus the supermarket supply chain.
                </p>

                <div className="mt-8">
                  <label
                    htmlFor="impact-slider"
                    className="flex items-center justify-between text-label-lg font-semibold text-on-surface"
                  >
                    <span>Boxes per month</span>
                    <span className="rounded-full bg-primary px-3 py-1 text-on-primary">
                      {sliderValue}
                    </span>
                  </label>
                  <input
                    id="impact-slider"
                    type="range"
                    min={1}
                    max={150}
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-outline-variant/40 accent-primary"
                    style={{
                      background: `linear-gradient(to right, #0d631b 0%, #0d631b ${((sliderValue - 1) / 149) * 100}%, rgba(0,0,0,0.1) ${((sliderValue - 1) / 149) * 100}%, rgba(0,0,0,0.1) 100%)`,
                    }}
                  />
                  <div className="mt-2 flex justify-between text-label-sm text-on-surface-variant">
                    <span>1 box</span>
                    <span>150 boxes</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5 bg-primary p-8 text-on-primary md:p-12">
                <h3 className="font-display text-headline-md">Your monthly impact</h3>
                <div className="rounded-2xl bg-on-primary/10 p-6 backdrop-blur">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-on-primary/15">
                      <span className="material-symbols-outlined text-[24px]">water_drop</span>
                    </span>
                    <div>
                      <p className="text-label-sm uppercase tracking-wider opacity-80">
                        Water saved
                      </p>
                      <p className="font-display text-display-lg leading-none">
                        <Counter target={waterSaved} suffix=" L" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-on-primary/10 p-6 backdrop-blur">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-on-primary/15">
                      <span className="material-symbols-outlined text-[24px]">co2</span>
                    </span>
                    <div>
                      <p className="text-label-sm uppercase tracking-wider opacity-80">
                        CO₂ offset
                      </p>
                      <p className="font-display text-display-lg leading-none">
                        <Counter
                          target={co2Offset}
                          duration={1500}
                          suffix=" kg"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-label-sm opacity-80">
                  Compared to conventional supermarket supply chains. Source: 2024 lifecycle audit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background pb-24 pt-12 md:pb-32">
        <div className="container-x">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-on-primary shadow-elevated md:px-16 md:py-20">
              <span className="material-symbols-outlined absolute -right-8 -top-8 text-[200px] opacity-10">
                eco
              </span>
              <div className="relative">
                <h2 className="font-display text-headline-lg md:text-display-lg">
                  Taste the difference
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-body-lg opacity-90">
                  Start with one box. We think you’ll come back for the whole harvest.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 rounded-full bg-on-primary px-7 py-3.5 text-label-lg font-semibold text-primary transition hover:scale-105"
                  >
                    <span className="material-symbols-outlined text-[20px]">shopping_basket</span>
                    Start Your Harvest
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-on-primary/40 px-7 py-3.5 text-label-lg font-semibold text-on-primary transition hover:bg-on-primary/10"
                  >
                    Visit the Farm
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
