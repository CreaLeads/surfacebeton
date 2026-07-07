export const metadata = {
  title: 'ThermicRoof — Peinture thermique Cool Roof haute performance',
  description:
    "Peinture thermique ThermicRoof : réduction jusqu'à 30°C sur toitures, -25% sur la climatisation, résistance UV extrême. Solution Cool Roof pour toitures industrielles, entrepôts et bâtiments tertiaires en Île-de-France.",
  keywords: ['ThermicRoof', 'peinture thermique', 'cool roof', 'peinture réfléchissante', 'toiture froide', 'peinture isolante toiture'],
  alternates: { canonical: '/distribution' },
  openGraph: {
    title: 'ThermicRoof — Peinture thermique Cool Roof — SurfaceBéton',
    description:
      "Peinture thermique réflective : jusqu'à -30°C sur vos toitures. Économies d'énergie mesurées. Applicable bac acier, membrane, béton, bitume.",
    url: '/distribution',
    images: ['/industrie-parfumerie.jpg'],
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
