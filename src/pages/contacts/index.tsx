// pages/index.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/header";
import HomeIcon from "../../assets/icons/homeIcon";
import ArrowIcon from "../../assets/icons/arrowIcon";
import "../../assets/css/contacts_style.css";
import Footer from "../../components/footer";
import ContactsPhoneIcon from "../../assets/icons/contactsPhoneIcon";
import ContactsEmailIcon from "../../assets/icons/contactsEmailIcon";
import DividerIcon from "../../assets/icons/dividerIcon";
import ContactsArrowIcon from "../../assets/icons/contactsArrowIcon";
import useTranslations from "../../hooks/useTranslations";
import ContactSection from "../../components/ContactSection";
import SeoHead from "../../components/SeoHead";

const Contacts: React.FC = () => {
    const { t } = useTranslations();
    const router = useRouter();
    const locale = (router.locale || router.defaultLocale || "cz").split("-")[0] === "en" ? "en" : "cz";
    const defaultLocale = router.defaultLocale || "cz";

    const metaTitle = locale === "en" ? "Contacts — RM Software" : "Kontakty — RM Software";
    const metaDescription =
        locale === "en"
            ? "Reach RM Software: reception +420 296 330 311, info@rm-software.cz, Prague office."
            : "Spojte se s RM Software: recepce +420 296 330 311, info@rm-software.cz, kancelář Praha.";
    const [isHeadOfficeOpen, setIsHeadOfficeOpen] = useState(true);
    const contactText = t("contactsPage", {
        breadcrumb: "Contacts",
        heading: "Contact",
        description: "",
        phone: "+420 296 330 311",
        phoneHours: "",
        email: "info@rm-software.cz",
        emailLabel: "",
        office: {
            title: "Head office",
            company: "RM Software s.r.o.",
            address: [],
            
            
            phone: "+420 256 256 393",
            email: "info@rm-software.cz",
            ico: "IČO: 14246619",
            dic: "DIČ: CZ14246619",
        },
    }) as any;

    return (
        <main className="main_page">
            <SeoHead
                title={metaTitle}
                description={metaDescription}
                canonicalPath="/contacts"
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
                            <span className="top_section_header_text">{contactText.breadcrumb}</span>
                        </div>
                        
                    </div>              
                </section>

                <section className="contacts_section2"> 
                    <div className="contacts_section2_content"> 
                        <div className="contacts_section2_content_item">    
                             <h1 className="contacts_section2_title">{contactText.heading}</h1>
                            <p className="contacts_section2_description">
                                {contactText.description}
                            </p>
                        </div>
                        <div className="contacts_section2_content_item2">
                            <div className="contacts_section2_content_item_phone">
                            
                            <a href={`tel:${contactText.phone}`} className="contacts_phone2">
                                <ContactsPhoneIcon />
                                <div className="contacts_phone2_content">
                                    <span className="contacts_phone2_content_title">{contactText.phone}</span>
                                    <span className="contacts_phone2_content_description">{contactText.phoneHours}</span>
                                </div>
                             
                            </a>
                           
                        </div>
                        <div className="contacts_section2_content_item_divider">
                            <DividerIcon />
                        </div>
                        <div className="contacts_section2_content_item_phone">

                            <a href={`mailto:${contactText.email}`} className="contacts_phone2">
                                <ContactsEmailIcon />
                                <div className="contacts_phone2_content">
                                    <span className="contacts_phone2_content_title">{contactText.email}</span>
                                      <p className="contacts_phone2_content_description">{contactText.emailLabel}</p>
                                </div>
                                
                            </a>
                          
                        </div>
                        </div>

                      
                    </div>
                   
                </section>
                
                <section className="contacts_office_section">
                    <div className="contacts_office_container">
                        <button
                            type="button"
                            className="contacts_office_header"
                            onClick={() => setIsHeadOfficeOpen((prev) => !prev)}
                            aria-expanded={isHeadOfficeOpen}
                        >
                            <span className="contacts_office_title">{contactText.office?.title}</span>
                            <span
                                className={`contacts_office_toggle ${isHeadOfficeOpen ? "is-open" : ""}`}
                                aria-hidden="true"
                                
                            > <ContactsArrowIcon /> </span>
                        </button>

                        {isHeadOfficeOpen && (
                            <div className="contacts_office_body">
                                <p className="contacts_office_company">{contactText.office?.company}</p>
                                {contactText.office?.address?.map((line: string, index: number) => (
                                    <p className="contacts_office_info" key={`${line}-${index}`}>{line}</p>
                                ))}
                                <a href={`tel:${contactText.office?.phone}`} className="contacts_office_phone">{contactText.office?.phone}</a>
                                <a href={`mailto:${contactText.office?.email}`} className="contacts_office_email">{contactText.office?.email}</a>
                                <p className="contacts_office_id">{contactText.office?.ico}</p>
                                <p className="contacts_office_id">{contactText.office?.dic}</p>
                            </div>
                        )}

                    </div>

                    

                </section>
                <ContactSection />
            </main>
            <Footer />
        </main>

    );
};


export default Contacts;
 