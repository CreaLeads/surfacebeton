export const metadata = {
  title: 'Réalisations — Chantiers résine époxy et polyuréthane en Île-de-France',
  description:
    "Découvrez les réalisations SurfaceBéton : sols en résine époxy et polyuréthane, sols décoratifs, terrasses granulat, garages, entrepôts et parkings livrés en Île-de-France.",
  alternates: { canonical: '/realisations' },
  openGraph: {
    title: 'Nos réalisations — SurfaceBéton',
    description: 'Portfolio de chantiers en résine et sols décoratifs livrés par SurfaceBéton en Île-de-France.',
    url: '/realisations',
    images: ['/hangar-stockage.jpg'],
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
