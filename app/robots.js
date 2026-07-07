export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
    ],
    sitemap: 'https://surfacebeton.fr/sitemap.xml',
    host: 'https://surfacebeton.fr',
  };
}
