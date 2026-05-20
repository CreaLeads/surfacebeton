'use client';

import { useEffect, useRef } from 'react';

export default function SectionHeading({ label, title, subtitle, align = 'center', light = false }) {
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
          { y: 24, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.08,
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
        const underline = el.querySelector('.title-underline');
        if (underline) {
          gsap.fromTo(
            underline,
            { width: 0 },
            {
              width: 60, duration: 0.7, ease: 'power2.out', delay: 0.3,
              scrollTrigger: { trigger: el, start: 'top 85%' },
            }
          );
        }
      }, ref);
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <div ref={ref} className={`${align === 'center' ? 'text-center mx-auto max-w-3xl' : ''} mb-14`}>
      {label && (
        <div data-h-fade className={`section-label ${light ? '!text-orange-300' : ''}`}>{label}</div>
      )}
      <h2 data-h-fade className={`section-title ${light ? '!text-white' : ''}`}>{title}</h2>
      <div className={align === 'center' ? 'flex justify-center' : ''}>
        <span className="title-underline" />
      </div>
      {subtitle && (
        <p data-h-fade className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''} ${light ? '!text-white/75' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
