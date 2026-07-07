export const metadata = {
  title: 'Solutions — Résine époxy, polyuréthane, sols décoratifs, ThermicRoof',
  description:
    "Toutes les solutions SurfaceBéton : résine époxy et polyuréthane, sols décoratifs (flake, quartz, marbré), étanchéité liquide et peinture thermique ThermicRoof Cool Roof. Applicateurs certifiés en Île-de-France.",
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: 'Solutions SurfaceBéton — Résine, décoratif, étanchéité, Cool Roof',
    description:
      "Quatre expertises pour tous vos revêtements de sols et toitures : résine époxy & polyuréthane, sols décoratifs, étanchéité liquide, peinture thermique ThermicRoof.",
    url: '/solutions',
    images: ['/hero.jpg'],
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
