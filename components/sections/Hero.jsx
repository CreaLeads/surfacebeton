'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      gsap.config({ force3D: true });

      ctx = gsap.context(() => {
        if (bgRef.current) {
          gsap.to(bgRef.current, {
            yPercent: 12,
            ease: 'none',
            scrollTrigger: {
              trigger: bgRef.current.parentElement,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.5,
            },
          });
        }
      });
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section className="relative h-screen min-h-[680px] flex items-end overflow-hidden pt-[76px]">
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 will-change-transform"
        style={{
          backgroundImage: 'url(/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        role="img"
        aria-label="Sol résine époxy métallique décoratif — réalisation SurfaceBéton"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/60 to-ink/90" />

      <div className="container-x w-full pb-24 md:pb-28">
        <div className="hero-fade hero-fade-1 flex items-center gap-3 mb-8">
          <span className="h-[1px] w-10 bg-accent" />
          <span className="text-white/80 text-[11px] uppercase tracking-[0.22em] font-semibold">
            Île-de-France · Depuis 15 ans
          </span>
        </div>

        <h1 className="hero-fade hero-fade-2 h-hero max-w-5xl mb-8">
          Le sol qui donne du <span className="italic-serif text-accent">caractère</span><br className="hidden md:block" /> à vos espaces.
        </h1>

        <p className="hero-fade hero-fade-3 text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-light">
          Résine époxy et polyuréthane, sols décoratifs, étanchéité liquide et
          peinture thermique Cool Roof — le savoir-faire des applicateurs certifiés SurfaceBéton.
        </p>

        <div className="hero-fade hero-fade-4 flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">
            Demander un devis gratuit
          </Link>
          <Link href="/realisations" className="btn-outline-light">
            Voir nos réalisations
          </Link>
        </div>
      </div>

      {/* Editorial bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 hidden md:flex items-center justify-between px-10 pb-6 text-white/60 text-[11px] uppercase tracking-[0.2em] font-medium">
        <span>SB — 2010 / {new Date().getFullYear()}</span>
        <span>N° 01 · Résine haut de gamme</span>
      </div>
    </section>
  );
}
