export const metadata = {
  title: 'Contact — Devis gratuit résine, sols décoratifs, Cool Roof',
  description:
    "Contactez SurfaceBéton pour votre projet de revêtement de sol en résine époxy, polyuréthane, sol décoratif ou peinture thermique ThermicRoof. Réponse sous 48h — devis gratuit, Île-de-France.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact SurfaceBéton — Devis gratuit sous 48h',
    description: 'Demandez votre devis gratuit — résine, sols décoratifs, étanchéité, ThermicRoof.',
    url: '/contact',
    images: ['/hero.jpg'],
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
