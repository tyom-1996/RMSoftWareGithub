// pages/index.tsx
import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/header";
import HomeIcon from "../../assets/icons/homeIcon";
import ArrowIcon from "../../assets/icons/arrowIcon";
import "../../assets/css/contacts_style.css";
import Footer from "../../components/footer";
import ContactSection from "../../components/ContactSection";
import useTranslations from "../../hooks/useTranslations";
import SeoHead from "../../components/SeoHead";

const PrivacyPolicy: React.FC = () => {
    const { t } = useTranslations();
    const router = useRouter();
    const locale = (router.locale || router.defaultLocale || "cz").split("-")[0] === "en" ? "en" : "cz";
    const defaultLocale = router.defaultLocale || "cz";
    const metaTitle = locale === "en" ? "Privacy Policy — RM Software" : "Ochrana osobních údajů — RM Software";
    const metaDescription =
        locale === "en"
            ? "Privacy policy of RM Software regarding data collection and processing."
            : "Zásady ochrany osobních údajů RM Software o sběru a zpracování dat.";

    const policy = t("privacyPolicy", {
        breadcrumb: "Privacy Policy",
        title: "Privacy Policy",
        paragraphs: [],
    }) as any;

    return (
        <main className="main_page">
            <SeoHead
                title={metaTitle}
                description={metaDescription}
                canonicalPath="/privacy-policy"
                locale={locale}
                defaultLocale={defaultLocale}
                alternateLocales={["en", "cz"]}
            />
            <Header />
            <main>
                <section className="top_section_contacts">
                    <div className="top_section_header">
                        <div>
                            <HomeIcon />
                            <ArrowIcon />
                            <span className="top_section_header_text">{policy.breadcrumb}</span>
                        </div>
                    </div>
                </section>

                <section className="contacts_section2"> 
                    <div className="contacts_section2_content"> 
                        <div className="contacts_section2_content_item">    
                            <h1 className="contacts_section2_title">{policy.title}</h1>
                            {policy.paragraphs?.map((paragraph: string, index: number) => (
                                <p key={index} className="contacts_section2_description">
                                    {paragraph}
                                </p>
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

export default PrivacyPolicy;
