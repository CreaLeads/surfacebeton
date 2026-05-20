'use client';

import { useEffect, useRef } from 'react';

export default function Reveal({ children, as: Tag = 'div', stagger = 0, className = '', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    let trigger;
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      gsap.config({ force3D: true });
      ScrollTrigger.config({ limitCallbacks: true });

      const el = ref.current;
      if (!el) return;

      ctx = gsap.context(() => {
        if (stagger > 0) {
          const items = el.querySelectorAll('[data-reveal-item]');
          gsap.fromTo(
            items,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
              stagger,
              delay,
              scrollTrigger: { trigger: el, start: 'top 85%' },
            }
          );
        } else {
          gsap.fromTo(
            el,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
              delay,
              scrollTrigger: { trigger: el, start: 'top 85%' },
            }
          );
        }
      }, el);
    })();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [stagger, delay]);

  return (
    <Tag ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </Tag>
  );
}
