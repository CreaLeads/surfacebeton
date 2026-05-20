'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function FinalCTA() {
  const ref = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          '[data-cta-fade]',
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.12,
            scrollTrigger: { trigger: ref.current, start: 'top 85%' },
          }
        );
      }, ref);
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-28 cta-gradient">
      <div className="container-x text-center">
        <h2 data-cta-fade className="font-serif text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight">
          Prêt à transformer vos sols ?
        </h2>
        <p data-cta-fade className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
          Demandez votre devis gratuit — réponse sous 48h, sans engagement.
        </p>
        <div data-cta-fade>
          <Link href="/contact" className="inline-flex bg-accent text-white font-semibold px-8 py-4 rounded-md animate-pulse-subtle">
            Demander un devis gratuit →
          </Link>
        </div>
      </div>
    </section>
  );
}
