import Link from 'next/link';

export default function PageHeader({ eyebrow, title, subtitle, breadcrumb }) {
  return (
    <section className="relative pt-36 pb-24 cta-gradient text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'url(/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }}
        aria-hidden="true"
      />
      <div className="container-x relative">
        {breadcrumb && (
          <nav aria-label="Fil d'Ariane" className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-6">
            <Link href="/" className="hover:text-accent">Accueil</Link>
            <span className="mx-3">/</span>
            <span className="text-white/80">{breadcrumb}</span>
          </nav>
        )}
        {eyebrow && (
          <div className="eyebrow !text-accent mb-5">{eyebrow}</div>
        )}
        <h1 className="font-display text-white leading-[1.05] tracking-tight mb-6" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-white/75 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
