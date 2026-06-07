import { useEffect, useRef, useState, type ReactNode } from 'react';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  as?: 'div' | 'section' | 'article' | 'span';
};

/**
 * Adds `.is-active` once the element scrolls into view.
 * Pairs with the `.reveal-on-scroll` rule in index.css for the fade-up animation.
 */
export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.15,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            window.setTimeout(() => setActive(true), delay);
            target.classList.add('is-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -60px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement & HTMLElement>}
      className={`reveal-on-scroll ${active ? 'is-active' : ''} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
