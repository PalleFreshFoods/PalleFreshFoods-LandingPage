import { useEffect, useRef, useState, type ReactNode } from 'react';

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  max?: number; // max degrees of tilt
  scale?: number;
};

/**
 * 3D tilt card. Wraps children in a `perspective` container and applies
 * rotateX/rotateY/scale on the inner wrapper based on cursor position.
 */
export function TiltCard({ children, className = '', max = 6, scale = 1.02 }: TiltCardProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const parent = el.parentElement;
    if (!parent) return;

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * max * 2;
      const rotateX = -(y - 0.5) * max * 2;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    };

    const onEnter = () => setActive(true);
    const onLeave = () => {
      setActive(false);
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    parent.addEventListener('mousemove', onMove);
    parent.addEventListener('mouseenter', onEnter);
    parent.addEventListener('mouseleave', onLeave);

    return () => {
      parent.removeEventListener('mousemove', onMove);
      parent.removeEventListener('mouseenter', onEnter);
      parent.removeEventListener('mouseleave', onLeave);
    };
  }, [max, scale]);

  return (
    <div className={`tilt-wrap ${className}`.trim()}>
      <div
        ref={innerRef}
        className="tilt-3d"
        style={{ transition: active ? 'transform 0.1s ease' : 'transform 0.5s ease' }}
      >
        {children}
      </div>
    </div>
  );
}
