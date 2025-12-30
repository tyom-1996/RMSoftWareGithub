// pages/index.tsx
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../components/header";
import HomeIcon from "../../assets/icons/homeIcon";
import ArrowIcon from "../../assets/icons/arrowIcon";
import "../../assets/css/products.css";
import Footer from "../../components/footer";
import useTranslations from "../../hooks/useTranslations";
import ContactSection from "../../components/ContactSection";
import SeoHead from "../../components/SeoHead";

const Products: React.FC = () => {
    const { t } = useTranslations();
    const router = useRouter();
    const slugToPath: Record<string, string> = {
        seezus: "/products/seezus",
        gugu: "/products/gugu",
        distribox: "/products/distribox",
    };
    const pathLocaleMatch = router.asPath.match(/^\/(en|cz)(?=\/|$)/);
    const pathLocale = pathLocaleMatch?.[1];
    const currentLocale = router.locale || pathLocale || router.defaultLocale || "cz";
    const normalizedLocale = currentLocale.split("-")[0];
    const locale = normalizedLocale === "en" ? "en" : "cz";
    const defaultLocale = router.defaultLocale || "cz";
    const metaTitle =
        locale === "en" ? "Products — RM Software" : "Produkty — RM Software";
    const metaDescription =
        locale === "en"
            ? "Explore Seezus AI security, GuGu CRM & field service, and Distribox smart lockers."
            : "Prohlédněte si Seezus AI bezpečnost, GuGu CRM a terén, a chytré boxy Distribox.";

    const products = t("productsPage.cards", []) as Array<{
        id: number;
        slug: string;
        title: string;
        img: string;
        description: string;
    }>;

    const heroParagraphs = t("productsPage.hero.paragraphs", []) as string[];



    return (
        <main className="main_page">
            <SeoHead
                title={metaTitle}
                description={metaDescription}
                canonicalPath="/products"
                locale={locale}
                defaultLocale={defaultLocale}
                alternateLocales={["en", "cz"]}
            />
            <Header />
            <main>
                <section className="top_section2">
                    <div className="top_section_header">
                        <div>
                            <HomeIcon />
                            <ArrowIcon />
                            <span className="top_section_header_text">{t('productsPage.breadcrumb')}</span>
                        </div>
                        
                    </div>
                    <section className="hero">
                        <div className="hero_block1">

                        </div>
                        <div className="hero_block2">

                        </div>
                        <div className="hero2">
                            <div className="hero-left">
                                <div className="hero_left_wrapper">
                                    <h1>
                                    {t('productsPage.hero.title')}
                                    </h1>
                                </div>
                            
                            </div>

                            <div className="hero-right">
                                {heroParagraphs.map((paragraph, index) => (
                                    <p key={index}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                       
                    </section>

                </section>
                <section className="products2">
                    <div className="products2_wrapper">
                        <h1 className='products2_wrapper_title'>
                            {t('productsPage.sectionTitle')}
                        </h1>
                        <div className="products2_wrapper_items">   
                            {products.map((item) => (
                                <div key={item.id} className="products2_wrapper_item">
                                    <div className="products2_wrapper_item_image">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className="products2_wrapper_item_content">
                                        <h2 className="products2_wrapper_item_title">{item.title}</h2>
                                        <p className="products2_wrapper_item_description">
                                            {item.description}
                                        </p>
                                        {(() => {
                                            const basePath = slugToPath[item.slug] || `/products/${item.slug}`;
                                            return (
                                                <Link
                                                    href={basePath}
                                                    locale={locale}
                                                    className="products2_wrapper_item_button"
                                                >
                                                    {t('productsPage.moreInfo')}
                                                </Link>
                                            );
                                        })()}
                                       
                                    </div>
                                 
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </section>
              
                <ContactSection />
            </main>
            <Footer />
        </main>
    );
};

export default Products;
 