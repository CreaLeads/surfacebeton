'use client';

import { useEffect, useRef } from 'react';

export default function SectionHeading({ label, title, subtitle, align = 'center', light = false, tag }) {
  const ref = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const el = ref.current;
        if (!el) return;
        gsap.fromTo(
          el.querySelectorAll('[data-h-fade]'),
          { y: 20, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.08,
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        );
        const rule = el.querySelector('[data-rule]');
        if (rule) {
          gsap.fromTo(
            rule,
            { width: 0 },
            {
              width: 40, duration: 0.7, ease: 'power2.out', delay: 0.3,
              scrollTrigger: { trigger: el, start: 'top 88%' },
            }
          );
        }
      }, ref);
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <div ref={ref} className={`${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} mb-16`}>
      {tag && (
        <div data-h-fade className="tag-num mb-3">{tag}</div>
      )}
      {label && (
        <div data-h-fade className={`eyebrow ${light ? '!text-orange-300' : ''}`}>{label}</div>
      )}
      <h2 data-h-fade className={`h-display ${light ? '!text-white' : ''}`}>
        {title}
      </h2>
      <div className={align === 'center' ? 'flex justify-center' : ''}>
        <span data-rule className="block h-[2px] bg-accent mt-6" style={{ width: 0 }} />
      </div>
      {subtitle && (
        <p data-h-fade className={`section-subtitle mt-6 ${align === 'center' ? 'mx-auto' : ''} ${light ? '!text-white/70' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
