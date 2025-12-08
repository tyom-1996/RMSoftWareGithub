/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'cz'],   // две доступные локали
    defaultLocale: 'en',     // язык по умолчанию
  },
};

module.exports = nextConfig;

