'use client';

import { useEffect, useRef, useState } from 'react';
import SectionHeading from '@/components/SectionHeading';

const projects = [
  { title: 'Résine Sol Particulier', surface: '35m²', tags: ['Particulier', 'Intérieur'], img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800' },
  { title: 'Parking Résine Polyuréthane', surface: '600m²', tags: ['Professionnel', 'Intérieur'], img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800' },
  { title: 'Cool Roof Avant/Après', surface: '800m²', tags: ['Professionnel', 'Extérieur'], img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800' },
  { title: 'Parking Privé', surface: '2000m²', tags: ['Professionnel', 'Extérieur'], img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800' },
  { title: 'Garage Résine Époxy', surface: '40m²', tags: ['Particulier', 'Intérieur'], img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800' },
  { title: 'Entrepôt Logistique', surface: '5000m²', tags: ['Professionnel', 'Intérieur'], img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800' },
];

const filters = ['Tous', 'Particulier', 'Professionnel', 'Intérieur', 'Extérieur'];

export default function Gallery() {
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
    <section id="realisations" className="py-28 bg-white">
      <div className="container-x">
        <SectionHeading
          label="Portfolio"
          title="Nos Réalisations"
          subtitle="Une sélection de chantiers livrés en Île-de-France."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-md font-medium text-sm transition-all ${
                active === f
                  ? 'bg-navy text-white'
                  : 'bg-white text-navy border border-line hover:border-accent hover:text-accent'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <div
              key={p.title + i}
              data-gallery-card
              className={`group relative overflow-hidden rounded-lg cursor-pointer border border-line ${
                i % 3 === 0 ? 'lg:row-span-2' : ''
              }`}
            >
              <img
                src={p.img}
                alt={p.title}
                className={`w-full object-cover transition-transform duration-[900ms] group-hover:scale-105 ${
                  i % 3 === 0 ? 'h-full min-h-[320px] lg:min-h-[520px]' : 'h-72'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex flex-wrap gap-2 mb-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-widest bg-accent px-2 py-0.5 rounded-sm font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-white/80">{p.surface}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
