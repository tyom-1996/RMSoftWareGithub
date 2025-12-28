/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/pro/profile/orders',
        destination: '/pro/profile/services',
        permanent: false,
      },
      // Redirect old ID-based product URLs to SEO-friendly slug URLs
      {
        source: '/Products/1',
        destination: '/Products/seezus',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/Products/2',
        destination: '/Products/gugu',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/Products/3',
        destination: '/Products/distribox',
        permanent: true, // 301 redirect for SEO
      },
    ];
  },
};

export default nextConfig;
