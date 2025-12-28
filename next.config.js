/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'cz'],   // две доступные локали
    defaultLocale: 'cz',     // язык по умолчанию
    localeDetection: false,  // отключить автоматическое определение языка браузера
  },
  async redirects() {
    return [
      {
        source: '/pro/profile/orders',
        destination: '/pro/profile/services',
        permanent: false,
      },
      // Redirect old ID-based product URLs to SEO-friendly slug URLs
      {
        source: '/products/1',
        destination: '/products/seezus',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/products/2',
        destination: '/products/gugu',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/products/3',
        destination: '/products/distribox',
        permanent: true, // 301 redirect for SEO
      },
    ];
  },
};

module.exports = nextConfig;

