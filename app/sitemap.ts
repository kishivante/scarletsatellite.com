import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.scarletsatellite.com';
  const currentDate = new Date().toISOString();

  const routes = ['', '/hakkimizda', '/projelerimiz', '/iletisim'];

  return routes.flatMap((route) => {
    return [
      {
        url: `${baseUrl}${route}?hl=tr`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
      },
      {
        url: `${baseUrl}${route}?hl=en`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
      },
    ];
  });
}
