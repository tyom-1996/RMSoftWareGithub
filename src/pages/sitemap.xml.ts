import { GetServerSideProps } from 'next';

// Product slugs for sitemap
const products = [
    { slug: 'seezus' },
    { slug: 'gugu' },
    { slug: 'distribox' },
];

// Main pages
const mainPages = [
    '',
    '/Products',
    '/AboutUs',
    '/Contacts',
    '/AiDevelopment',
    '/MobileDevelopment',
    '/CRMDevelopment',
];

function generateSiteMap() {
    const baseUrl = 'https://rm-software.cz';
    const currentDate = new Date().toISOString().split('T')[0];

    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
           xmlns:xhtml="http://www.w3.org/1999/xhtml">
     ${mainPages
       .map((page) => {
         return `
       <url>
           <loc>${baseUrl}${page}</loc>
           <lastmod>${currentDate}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>${page === '' ? '1.0' : '0.8'}</priority>
           <xhtml:link rel="alternate" hreflang="cs" href="${baseUrl}${page}" />
           <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${page}" />
       </url>
     `;
       })
       .join('')}
     ${products
       .map((product) => {
         return `
       <url>
           <loc>${baseUrl}/Products/${product.slug}</loc>
           <lastmod>${currentDate}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.9</priority>
           <xhtml:link rel="alternate" hreflang="cs" href="${baseUrl}/Products/${product.slug}" />
           <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/Products/${product.slug}" />
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;

