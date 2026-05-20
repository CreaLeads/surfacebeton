'use client';

import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import { useEffect, useRef } from 'react';

const solutions = [
  {
    id: 'polyurethane',
    title: 'Résine Polyuréthane',
    subtitle: 'Performance et durabilité extrêmes',
    description:
      'La résine polyuréthane offre une résistance exceptionnelle aux chocs thermiques et mécaniques. Solution idéale pour les environnements industriels exigeants.',
    advantages: ['Résistance -40°C à +120°C', 'Élasticité absorption chocs', 'Antidérapant humide', 'Entretien minimal', 'Application rapide 24h'],
    applications: ['Entrepôts', 'Ateliers', 'Chambres froides', 'Salles sport', 'Parkings'],
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000',
  },
  {
    id: 'epoxy',
    title: 'Résine Époxy',
    subtitle: 'Élégance et résistance chimique',
    description:
      'Esthétique raffinée et performances techniques élevées. La résine époxy offre de multiples finitions pour sublimer vos espaces.',
    advantages: ['Résistance chimique', 'Surface lisse brillante', 'Large palette couleurs', 'Imperméable', 'Durabilité 15 ans'],
    applications: ['Garages', 'Showrooms', 'Magasins', "Halls d'entrée", 'Laboratoires'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000',
  },
  {
    id: 'etancheite',
    title: 'Étanchéité Liquide',
    subtitle: "Protection durable contre l'eau",
    description:
      "Une membrane sans joint qui s'adapte à tous les supports pour une étanchéité parfaite et durable.",
    advantages: ['Membrane sans joint', 'Supports variés', 'Résistance UV', 'Élasticité totale', 'Garantie décennale'],
    applications: ['Toitures-terrasses', 'Balcons', 'Parkings dalle', 'Bassins'],
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000',
  },
  {
    id: 'coolroof',
    title: 'Cool Roof',
    subtitle: 'Innovation thermique et écologique',
    description:
      'Le revêtement réfléchissant qui réduit drastiquement la température de vos toitures et améliore votre performance énergétique.',
    advantages: ["Réduction température jusqu'à 30°C", 'Économies énergie', 'Protection étanchéité', 'Normes environnementales'],
    applications: ['Toitures industrielles', 'Entrepôts', 'Centres commerciaux'],
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1000',
  },
];

function SolutionBlock({ s, i }) {
  const ref = useRef(null);
  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(
          '[data-sol-fade]',
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.1,
            scrollTrigger: { trigger: ref.current, start: 'top 80%' },
          }
        );
      }, ref);
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={ref} id={s.id} className={`py-28 ${i % 2 === 0 ? 'bg-white' : 'bg-soft'}`}>
      <div className="container-x">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          <div data-sol-fade className="rounded-lg overflow-hidden shadow-card border border-line aspect-[4/3]">
            <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <div data-sol-fade className="section-label">{s.subtitle}</div>
            <h2 data-sol-fade className="font-serif text-3xl md:text-4xl font-semibold text-navy mb-5 leading-tight">{s.title}</h2>
            <p data-sol-fade className="text-muted leading-relaxed mb-7">{s.description}</p>

            <div data-sol-fade className="mb-6">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-navy/60 mb-3">Avantages</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {s.advantages.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-navy/85">
                    <span className="text-accent mt-1">✓</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div data-sol-fade className="mb-8">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-navy/60 mb-3">Applications</h3>
              <div className="flex flex-wrap gap-2">
                {s.applications.map((a) => (
                  <span key={a} className="bg-white border border-line text-navy text-xs font-medium px-3 py-1.5 rounded-sm">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div data-sol-fade>
              <Link href={`/contact?solution=${encodeURIComponent(s.title)}`} className="btn-primary">
                Obtenir un devis pour ce produit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        title="Nos Solutions"
        subtitle="Quatre technologies de revêtement pour répondre à chaque enjeu — du résidentiel haut de gamme aux environnements industriels."
        breadcrumb="Solutions"
      />

      {solutions.map((s, i) => <SolutionBlock key={s.id} s={s} i={i} />)}

      {/* Marketing Digital — partenaire CreaLeads */}
      <section className="py-28 bg-navy text-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block text-[10px] uppercase tracking-widest font-semibold text-accent border border-accent/50 px-2 py-1 rounded-sm mb-5">
                Partenaire →
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-5 leading-tight">
                Marketing Digital — CreaLeads
              </h2>
              <p className="text-white/75 leading-relaxed mb-7">
                Génération de leads qualifiés et acquisition digitale clé en
                main pour les artisans. SEO, ads ciblées, landing pages
                conversion — un partenariat exclusif pour développer votre
                activité.
              </p>
              <a
                href="https://crealeads.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Découvrir CreaLeads →
              </a>
            </div>
            <div className="rounded-lg overflow-hidden border border-white/10 shadow-xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000"
                alt="Marketing Digital"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formation redirect */}
      <section className="py-16 bg-white border-t border-line">
        <div className="container-x text-center">
          <h3 className="font-serif text-2xl font-semibold text-navy mb-3">Formation Résine Décorative</h3>
          <p className="text-muted mb-7">Vous êtes professionnel ? Découvrez notre formation 3 jours.</p>
          <Link href="/#formation" className="btn-outline-navy">Voir la formation</Link>
        </div>
      </section>
    </>
  );
}
