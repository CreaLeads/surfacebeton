'use client';

import { useEffect, useRef, useState } from 'react';
import SectionHeading from '@/components/SectionHeading';

const projects = [
  { title: 'Résine décorative — hall d\'entrée', surface: '65 m²', tags: ['Particulier', 'Intérieur'], img: '/resine-deco-hall-entree.jpg', alt: 'Sol en résine décorative gris anthracite pour hall d\'entrée résidentiel' },
  { title: 'Terrasse résine granulat', surface: '90 m²', tags: ['Particulier', 'Extérieur'], img: '/terrasse-gravier.jpg', alt: 'Terrasse extérieure en résine granulat gris avec canapé' },
  { title: 'Hangar de stockage — époxy', surface: '1 200 m²', tags: ['Professionnel', 'Intérieur'], img: '/hangar-stockage.jpg', alt: 'Hangar de stockage avec sol en résine époxy brillante' },
  { title: 'Terrasse piscine — rose des vents', surface: '75 m²', tags: ['Particulier', 'Extérieur'], img: '/piscine-rose.jpg', alt: 'Terrasse piscine en résine gravier avec motif rose des vents' },
  { title: 'Garage résidentiel — flake', surface: '45 m²', tags: ['Particulier', 'Intérieur'], img: '/garage-flake-clair.jpg', alt: 'Garage résidentiel avec sol résine époxy à flakes gris' },
  { title: 'Atelier automobile — époxy antidérapant', surface: '380 m²', tags: ['Professionnel', 'Intérieur'], img: '/atelier-automobile.jpg', alt: 'Atelier automobile avec sol résine époxy antidérapant et marquage jaune' },
  { title: 'Entrepôt logistique', surface: '2 400 m²', tags: ['Professionnel', 'Intérieur'], img: '/entrepot-logistique.jpg', alt: 'Sol résine époxy pour entrepôt logistique grande surface' },
  { title: 'Parking souterrain', surface: '3 500 m²', tags: ['Professionnel', 'Extérieur'], img: '/parking-souterrain.jpg', alt: 'Parking souterrain avec revêtement en résine polyuréthane' },
  { title: 'Grand garage flake', surface: '120 m²', tags: ['Particulier', 'Intérieur'], img: '/garage-anthracite.jpg', alt: 'Grand garage avec sol résine époxy flake anthracite' },
];

const filters = ['Tous', 'Particulier', 'Professionnel', 'Intérieur', 'Extérieur'];

export default function Gallery({ extended = false }) {
  const [active, setActive] = useState('Tous');
  const gridRef = useRef(null);

  const filtered = active === 'Tous' ? projects : projects.filter((p) => p.tags.includes(active));

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          '[data-gallery-card]',
          { y: 40, opacity: 0, scale: 0.96 },
          {
            y: 0, opacity: 1, scale: 1, duration: 0.55, ease: 'power2.out', stagger: 0.08,
            scrollTrigger: { trigger: gridRef.current, start: 'top 88%' },
          }
        );
      }, gridRef);
    })();
    return () => ctx && ctx.revert();
  }, [active]);

  return (
    <section id="realisations" className="py-28 bg-white" aria-label="Nos réalisations">
      <div className="container-x">
        <SectionHeading
          label="Portfolio"
          title="Nos réalisations en Île-de-France."
          subtitle="Une sélection de chantiers livrés pour particuliers, professionnels et industriels."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Filtres de réalisations">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              role="tab"
              aria-selected={active === f}
              className={`px-5 py-2 rounded-md font-medium text-sm transition-all ${
                active === f
                  ? 'bg-ink text-white'
                  : 'bg-white text-ink border border-line hover:border-accent hover:text-accent'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <article
              key={p.title + i}
              data-gallery-card
              className={`group relative overflow-hidden rounded-lg cursor-pointer border border-line bg-soft ${
                i % 3 === 0 ? 'lg:row-span-2' : ''
              }`}
            >
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[900ms] group-hover:scale-105 ${
                  i % 3 === 0 ? 'h-full min-h-[320px] lg:min-h-[540px]' : 'h-72'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-[0.18em] bg-accent px-2 py-0.5 rounded-sm font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-lg font-medium leading-tight">{p.title}</h3>
                <p className="text-sm text-white/80 mt-1">{p.surface}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
