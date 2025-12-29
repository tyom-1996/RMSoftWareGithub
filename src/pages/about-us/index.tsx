// pages/index.tsx
import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/header";
import HomeIcon from "../../assets/icons/homeIcon";
import ArrowIcon from "../../assets/icons/arrowIcon";
import "../../assets/css/about_us_style.css";
import LineIcon from "../../assets/icons/lineIcon";
import LineIcon2 from "../../assets/icons/lineIcon2";
import Footer from "../../components/footer";
import Comma1Icon from "../../assets/icons/comma1";
import Comma2Icon from "../../assets/icons/comma2";
import useTranslations from "../../hooks/useTranslations";
import ContactSection from "../../components/ContactSection";
import SeoHead from "../../components/SeoHead";

const AboutUs: React.FC = () => {
    const { t } = useTranslations();
    const router = useRouter();
    const locale = (router.locale || router.defaultLocale || "cz").split("-")[0] === "en" ? "en" : "cz";
    const defaultLocale = router.defaultLocale || "cz";
    const metaTitle = locale === "en" ? "About Us — RM Software" : "O nás — RM Software";
    const metaDescription =
        locale === "en"
            ? "RM Software builds AI video analytics, CRM & field service tools, smart locker software, and custom development."
            : "RM Software vyvíjí AI video analytiku, CRM a terénní nástroje, software pro chytré boxy a zakázkový vývoj.";

    const productsStats = t("home.productsStats", []) as Array<{
        id: number;
        value: string;
        label: string;
        description: string;
    }>;

    const servicesStats = t("about.servicesStats", []) as Array<{
        id: number;
        image: string;
        title: string;
        description: string;
    }>;

    const aboutParagraphs = t("about.aboutParagraphs", []) as string[];
    const about2Paragraphs = t("about.about2Paragraphs", []) as string[];

    return (
        <main className="main_page">
            <SeoHead
                title={metaTitle}
                description={metaDescription}
                canonicalPath="/about-us"
                locale={locale}
                defaultLocale={defaultLocale}
                alternateLocales={["en", "cz"]}
            />
            <Header />
            <main>
                <section className="top_section">
                    <div className="top_section_header">
                        <div>
                            <HomeIcon />
                            <ArrowIcon />
                            <span className="top_section_header_text">{t('about.breadcrumb')}</span>
                        </div>
                        
                    </div>
                    <div className="top_content_image">
                        <img src="/images/top_back.png" alt="top_image" />
                        <div className="top_content_image_text_container">
                             <div className="top_content_image_text">
                                <div className="top_content_image_text_icon1">
                                    <Comma1Icon />
                                </div>
                                <h1 className="top_content_image_text_title">
                                    {t('about.heroTitle')}
                                </h1>   
                                <div className="top_content_image_text_icon2">
                                    <Comma2Icon />
                                </div>
                            </div>
                        </div>
                       
                    </div>
               
                </section>
                <section className="about_section">
                    <div className="about_section_content">
                       <h1 className="about_section_title">
                       {t('about.aboutTitle')}
                       </h1>
                       {aboutParagraphs.map((paragraph, index) => (
                        <p key={index} className="about_section_description">
                            {paragraph}
                        </p>
                       ))}
                    </div>
                </section>
                <section className="products_section">
                    <div className="products_section_content">
                        <h1 className="products_section_title">
                            {t('about.productsSectionTitle', 'RM SOFTWARE')}
                        </h1>
                        <div className="products_section_stats">
                            {productsStats.map((item) => (
                                <div key={item.value} className="products_section_stat">
                                    <div className="products_section_stat_content">
                                        <div className="products_section_stat_icon">
                                            <LineIcon />
                                        </div>
                                        <div className="products_section_stat_content_item">
                                            <h2 className="products_section_stat_value">{item.value}</h2>
                                            <p className="products_section_stat_label">{item.label}</p>
                                        </div>
                                    </div>
                                   
                                    <p className="products_section_stat_description">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="about_section2">
                    <div className="about_section2_content">
                       <h1 className="about_section2_title">
                        {t('about.about2Title', 'RM SOFTWARE')}
                       </h1>
                       <p className="about_section2_title2">
                        {t('about.about2Subtitle')}
                       </p>
                       {about2Paragraphs.map((paragraph, index) => (
                        <p key={index} className="about_section2_description">
                            {paragraph}
                        </p>
                       ))}

                       </div>
                     
                </section>
                <section className="services_section">
                    <div className="services_section_content">
                        <div className="services_section_stats">
                            {servicesStats.map((item, index) => (
                                <React.Fragment key={item.id}>
                                    <div className="services_section_stat">
                                        <div className="services_section_stat_image">
                                            <img src={item.image} alt={item.title} /> 
                                        </div>
                                       
                                        <div className="services_section_stat_content">
                                            <h2 className="services_section_stat_title">{item.title}</h2>
                                            <p className="services_section_stat_description">{item.description}</p>
                                        </div>
                                    </div>
                                    {index < servicesStats.length - 1 && (
                                        <div className="services_section_divider">
                                            <LineIcon2 />
                                        </div>
                                    )}
                                </React.Fragment>
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

export default AboutUs;
 