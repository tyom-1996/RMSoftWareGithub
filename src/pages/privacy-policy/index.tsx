// pages/index.tsx
import React from "react";
import Header from "../../components/header";
import HomeIcon from "../../assets/icons/homeIcon";
import ArrowIcon from "../../assets/icons/arrowIcon";
import "../../assets/css/contacts_style.css";
import Footer from "../../components/footer";
import ContactSection from "../../components/ContactSection";
import useTranslations from "../../hooks/useTranslations";

const PrivacyPolicy: React.FC = () => {
    const { t } = useTranslations();

    const policy = t("privacyPolicy", {
        breadcrumb: "Privacy Policy",
        title: "Privacy Policy",
        paragraphs: [],
    }) as any;

    return (
        <main className="main_page">
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
