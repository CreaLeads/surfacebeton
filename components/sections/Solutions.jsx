'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';

const items = [
  {
    title: 'Résine Polyuréthane',
    desc: 'Performance et durabilité extrêmes',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600',
    href: '/solutions#polyurethane',
  },
  {
    title: 'Résine Époxy',
    desc: 'Élégance et résistance chimique',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    href: '/solutions#epoxy',
  },
  {
    title: 'Étanchéité Liquide',
    desc: "Protection durable contre l'eau",
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
    href: '/solutions#etancheite',
  },
  {
    title: 'Cool Roof',
    desc: 'Innovation thermique et écologique',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600',
    href: '/solutions#coolroof',
  },
  {
    title: 'Marketing Digital — CreaLeads',
    desc: "Génération de leads qualifiés et acquisition digitale clé en main pour les artisans.",
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
    href: 'https://crealeads.fr',
    external: true,
    badge: 'Partenaire →',
  },
];

export default function Solutions() {
  const gridRef = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          '[data-sol-card]',
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.15,
            scrollTrigger: { trigger: gridRef.current, start: 'top 85%' },
          }
        );
      }, gridRef);
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section className="py-28 bg-white">
      <div className="container-x">
        <SectionHeading
          label="Nos prestations"
          title="Solutions de revêtement"
          subtitle="Des technologies adaptées à chaque environnement, du résidentiel haut de gamme aux espaces industriels."
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => {
            const Inner = (
              <>
                <div className="aspect-[5/3] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  {it.badge && (
                    <span className="inline-block text-[10px] uppercase tracking-widest font-semibold text-accent border border-accent/40 px-2 py-1 rounded-sm mb-3">
                      {it.badge}
                    </span>
                  )}
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">{it.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{it.desc}</p>
                  <span className="text-accent font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    En savoir plus <span>→</span>
                  </span>
                </div>
              </>
            );
            const cls = 'group block card-base overflow-hidden hover:-translate-y-1.5';
            return it.external ? (
              <a
                key={it.title}
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                data-sol-card
                className={cls}
              >
                {Inner}
              </a>
            ) : (
              <Link key={it.title} href={it.href} data-sol-card className={cls}>
                {Inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
