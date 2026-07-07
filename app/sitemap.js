const SITE = 'https://surfacebeton.fr';

export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: `${SITE}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE}/solutions`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/realisations`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/distribution`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/a-propos`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
  ];
}
