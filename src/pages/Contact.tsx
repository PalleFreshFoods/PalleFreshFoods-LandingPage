import { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { contactInfo, openingHours } from '../data/content';

const mapImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD_PDJLSgrbBn5Y62s2feuuK8cayx2mMuNUlre92HPxn0xacQIk-LBU-p_x05FT4GoiUYfCk3IAwdpSXcF2aN-kXqn87Po0U_UhHzb8wAwyH0V4m216svWRzMkzyAM_KVsnc4CIeepRAZOH7TUjGsIjOweI1iqy2vvZbOE4rAGlHsPzIE9t9RpuFW1q-Q3J7bsfK_qklxHm9wEL8itX88WRBuJy0R20RCPkJUAJOC3fmq5k9LvRRiVFjpLKy-yhBO4JKrWrwzE9_6E';

const accentBg: Record<string, string> = {
  call: 'bg-primary text-on-primary',
  mail: 'bg-tertiary text-tertiary-fixed-dim',
  location_on: 'bg-secondary text-on-primary',
};

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email.includes('@') || !form.message) return;
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-surface-container-low pb-20 pt-20 md:pt-24">
        <div className="container-x text-center">
          <ScrollReveal>
            <span className="eyebrow">Get in touch</span>
            <h1 className="mx-auto mt-3 max-w-3xl font-display text-display-lg text-on-surface">
              Let’s Grow Together
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-body-lg text-on-surface-variant">
              Questions about delivery, products, or your order? Reach us anytime ’ a real
              cultivator usually replies within an hour.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FORM + INFO CARDS */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
            {/* FORM */}
            <ScrollReveal className="lg:col-span-3">
              <div className="rounded-3xl bg-surface-container-lowest p-8 shadow-soft md:p-10">
                <h2 className="font-display text-headline-md text-on-surface">
                  {sent ? 'Message sent ’ thank you!' : 'Plant your query'}
                </h2>
                <p className="mt-2 text-body-md text-on-surface-variant">
                  {sent
                    ? 'We’ll be in touch within an hour. In the meantime, explore the harvest.'
                    : 'Fill in the form and a real human will get back to you within an hour.'}
                </p>

                {!sent ? (
                  <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Field
                        label="Your name"
                        id="contact-name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                      <Field
                        label="Email"
                        id="contact-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Field
                      label="Subject"
                      id="contact-subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                    />
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block text-label-lg font-semibold text-on-surface"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="What’s on your mind?"
                        className="w-full rounded-2xl border border-outline-variant/40 bg-surface-container-low px-5 py-3.5 text-body-md text-on-surface outline-none placeholder:text-on-surface-variant/60 focus:border-primary focus:bg-white"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full sm:w-auto sm:self-start">
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      Send message
                    </button>
                  </form>
                ) : (
                  <div className="mt-8 flex flex-col items-start gap-4">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-container text-primary">
                      <span className="material-symbols-outlined text-[28px]">check_circle</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="text-label-lg font-semibold text-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* INFO CARDS */}
            <div className="flex flex-col gap-5 lg:col-span-2">
              {contactInfo.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <div className="flex items-start gap-4 rounded-2xl bg-surface-container-low p-5 shadow-soft">
                    <span
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl ${accentBg[item.icon] ?? 'bg-primary text-on-primary'}`}
                    >
                      <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                    </span>
                    <div>
                      <p className="text-label-sm uppercase tracking-wider text-on-surface-variant">
                        {item.title}
                      </p>
                      <p className="mt-1 font-display text-body-lg font-semibold text-on-surface">
                        {item.primary}
                      </p>
                      {item.secondary && (
                        <p className="mt-0.5 text-label-sm text-on-surface-variant">
                          {item.secondary}
                        </p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              <ScrollReveal delay={250}>
                <div className="rounded-2xl bg-surface-container-low p-5 shadow-soft">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-on-primary">
                      <span className="material-symbols-outlined text-[22px]">schedule</span>
                    </span>
                    <div>
                      <p className="text-label-sm uppercase tracking-wider text-on-surface-variant">
                        Opening hours
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {openingHours.map((h) => (
                      <li key={h.day} className="flex justify-between text-body-md text-on-surface">
                        <span>{h.day}</span>
                        <span className="text-on-surface-variant">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-background pb-24">
        <div className="container-x">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl shadow-elevated">
              <img
                src={mapImage}
                alt="Satellite view of the farm location"
                className="h-[400px] w-full object-cover md:h-[480px]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 via-transparent to-secondary/30">
                <div className="relative">
                  <span className="absolute inset-0 -m-2 animate-pulse-ring rounded-full bg-primary opacity-30" />
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary shadow-elevated">
                    <span className="material-symbols-outlined text-[28px]">location_on</span>
                  </span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-surface-container-lowest/95 p-5 backdrop-blur shadow-soft md:bottom-8 md:left-8 md:right-auto md:max-w-sm">
                <p className="text-label-sm uppercase tracking-wider text-primary">Visit</p>
                <p className="mt-1 font-display text-body-lg font-semibold text-on-surface">
                  12 Harvest Lane, Greenfield
                </p>
                <p className="mt-1 text-label-sm text-on-surface-variant">
                  Farm tours every Saturday at 10 AM
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

type FieldProps = {
  label: string;
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

function Field({ label, id, name, type = 'text', value, onChange, required }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-label-lg font-semibold text-on-surface">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-outline-variant/40 bg-surface-container-low px-5 py-3.5 text-body-md text-on-surface outline-none placeholder:text-on-surface-variant/60 focus:border-primary focus:bg-white"
      />
    </div>
  );
}
