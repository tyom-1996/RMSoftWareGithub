/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'cz'],   // две доступные локали
    defaultLocale: 'cz',     // язык по умолчанию
    localeDetection: false,  // отключить автоматическое определение языка браузера
  },
};

module.exports = nextConfig;

