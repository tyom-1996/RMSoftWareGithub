import Head from "next/head";

type SeoHeadProps = {
  title: string;
  description?: string;
  canonicalPath: string; // path without domain, with leading slash
  locale?: string; // current locale, e.g., en or cz
  defaultLocale?: string; // default locale, e.g., cz
  alternateLocales?: string[]; // other locales to publish as hreflang
  image?: string; // optional absolute/relative URL for social preview
  siteName?: string;
};

const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalPath,
  locale = "cz",
  defaultLocale = "cz",
  alternateLocales = ["en", "cz"],
  image,
  siteName = "RM Software",
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.rm-software.cz";

  const normalizedPath = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  const localePrefix = locale === defaultLocale ? "" : `/${locale}`;
  const canonicalUrl = `${baseUrl}${localePrefix}${normalizedPath}`;

  const ogLocale = locale === "en" ? "en_US" : "cs_CZ";
  const altLocales = alternateLocales.filter((l) => l && l !== locale);

  const buildHrefForLocale = (loc: string) => {
    const prefix = loc === defaultLocale ? "" : `/${loc}`;
    return `${baseUrl}${prefix}${normalizedPath}`;
  };

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={ogLocale} />
      {altLocales.map((loc) => (
        <meta
          key={`og:locale:${loc}`}
          property="og:locale:alternate"
          content={loc === "en" ? "en_US" : "cs_CZ"}
        />
      ))}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}

      {/* Hreflang */}
      <link rel="alternate" hrefLang="x-default" href={buildHrefForLocale(defaultLocale)} />
      {[locale, ...altLocales].map((loc) => (
        <link key={`hrefLang-${loc}`} rel="alternate" hrefLang={loc === "cz" ? "cs" : loc} href={buildHrefForLocale(loc)} />
      ))}
    </Head>
  );
};

export default SeoHead;


