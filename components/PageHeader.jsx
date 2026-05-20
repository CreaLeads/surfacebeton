import Link from 'next/link';

export default function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <section className="pt-32 pb-20 cta-gradient text-white">
      <div className="container-x">
        {breadcrumb && (
          <div className="text-xs uppercase tracking-widest text-white/60 mb-5">
            <Link href="/" className="hover:text-accent">Accueil</Link>
            <span className="mx-2">/</span>
            <span>{breadcrumb}</span>
          </div>
        )}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 leading-tight tracking-tight">{title}</h1>
        {subtitle && <p className="text-lg text-white/75 max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
