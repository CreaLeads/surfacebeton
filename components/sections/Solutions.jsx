'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';

const items = [
  {
    tag: '01',
    title: 'Résine Époxy & Polyuréthane',
    desc: 'Sols techniques haute performance pour industrie, garages, ateliers et espaces professionnels.',
    keywords: ['résine époxy', 'résine polyuréthane', 'sol résine professionnel'],
    img: '/hangar-stockage.jpg',
    alt: 'Sol en résine époxy brillante — hangar industriel professionnel',
    href: '/solutions#epoxy-pu',
  },
  {
    tag: '02',
    title: 'Sols Décoratifs',
    desc: 'Effet marbré, flake, quartz, granulat — des sols résine sur mesure pour intérieurs et extérieurs.',
    keywords: ['sol résine décoratif', 'résine flake', 'quartz', 'résine granulat'],
    img: '/resine-mat-salon.jpg',
    alt: 'Sol résine décoratif effet marbré noir dans un intérieur design',
    href: '/solutions#decoratif',
  },
  {
    tag: '03',
    title: 'Étanchéité Liquide',
    desc: "Membrane monocomposant sans joint pour toitures-terrasses, balcons, parkings dalle et bassins.",
    keywords: ['étanchéité liquide', 'étanchéité toiture', 'étanchéité terrasse'],
    img: '/cool-roof-application.png',
    alt: 'Application d\'étanchéité liquide sur toiture-terrasse',
    href: '/solutions#etancheite',
  },
  {
    tag: '04',
    title: 'ThermicRoof · Cool Roof',
    desc: "Peinture thermique réflective : jusqu'à 30°C de réduction sur toitures industrielles et commerciales.",
    keywords: ['cool roof', 'peinture thermique', 'peinture réfléchissante toiture'],
    img: '/industrie-parfumerie.jpg',
    alt: 'Toiture industrielle traitée avec peinture thermique ThermicRoof Cool Roof',
    href: '/solutions#thermicroof',
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
          { y: 40, opacity: 0 },
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
    <section className="py-28 bg-white" id="solutions">
      <div className="container-x">
        <SectionHeading
          label="Nos savoir-faire"
          title="Quatre expertises, une exigence."
          subtitle="Du sol technique au traitement thermique de toiture — SurfaceBéton conçoit, applique et garantit chaque revêtement."
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((it) => (
            <Link
              key={it.title}
              href={it.href}
              data-sol-card
              className="group block card-base overflow-hidden hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-soft">
                <img
                  src={it.img}
                  alt={it.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 font-display italic text-white text-sm bg-ink/70 backdrop-blur px-3 py-1 rounded-sm">
                  {it.tag}
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-medium text-ink mb-3 leading-tight tracking-tight">
                  {it.title}
                </h3>
                <p className="text-[15px] text-muted leading-relaxed mb-5">{it.desc}</p>
                <span className="btn-ghost">
                  Découvrir <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
