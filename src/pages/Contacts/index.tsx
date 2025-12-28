// pages/index.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/header";
import HomeIcon from "../../assets/icons/homeIcon";
import ArrowIcon from "../../assets/icons/arrowIcon";
import "../../assets/css/contacts_style.css";
import LineIcon from "../../assets/icons/lineIcon";
import LineIcon2 from "../../assets/icons/lineIcon2";
import LineIcon3 from "../../assets/icons/lineIcon3";
import PhoneIcon from "../../assets/icons/phoneIcon";  
import MailIcon from "../../assets/icons/mailIcon";
import Footer from "../../components/footer";
import ContactsPhoneIcon from "../../assets/icons/contactsPhoneIcon";
import ContactsEmailIcon from "../../assets/icons/contactsEmailIcon";
import DividerIcon from "../../assets/icons/dividerIcon";
import ContactsArrowIcon from "../../assets/icons/contactsArrowIcon";
const Contacts: React.FC = () => {
    const router = useRouter();

    const [productsStats] = useState([
        {
            id: 1,
            value: "2011",
            icon: <LineIcon />,
            label: "VZNIK SKUPINY",
            description:
                "Od roku 2011 vyvíjíme moderní softwarová řešení, která pomáhají firmám automatizovat procesy a bezpečně škálovat jejich podnikání.",
        },
        {
            id: 2,
            value: "100+",
            icon: <LineIcon />,
            label: "PARTNERŮ",
            description:
                "Spolupracujeme s více než stovkou partnerů napříč různými obory od e‑commerce, logistiky a financí až po výrobní a technologické společnosti.",
        },
        {
            id: 3,
            value: "4",
            icon: <LineIcon />,
            label: "EVROPSKÉ TRHY",
            description:
                "Působíme v Česku, na Slovensku, v Německu a ve Francii. Naše řešení podporují klienty, kteří kladou důraz na spolehlivost a výkon.",
        },
        {
            id: 4,
            value: "1 mil.+",
            icon: <LineIcon />,
            label: "TRANSAKCÍ DENNĚ",
            description:
                "Naše systémy denně zpracují přes milion transakcí. Díky robustní architektuře a moderním technologiím zajišťujeme maximální stabilitu a minimální prostoje.",
        },
    ]);
    const [servicesStats] = useState([
        {
            id: 1,
            image: "/images/service_img1.png",
            title: "AI Video Intelligence",
            icon: <LineIcon2 />,
            description:
                "A next-generation security platform powered by artificial intelligence. Seezus transforms standard surveillance into proactive protection by automatically detecting threats, analyzing movement patterns, and alerting you to anomalies in real-time.",
        },
        {
            id: 2,
            image: "/images/service_img2.png",
            title: "Retail Growth Engine",
            icon: <LineIcon2 />,
            description:
                "A specialized Customer Relationship Management system built for the dynamic world of retail. Gugu CRM unifies customer data, tracks purchase history, and optimizes sales pipelines to help retailers build stronger, more profitable connections with their shoppers.",
        },
        {
            id: 3,
            image: "/images/service_img3.png",
            title: "Smart Locker Management",
            icon: <LineIcon2 />,
            description:
                "The operating system for modern logistics. Distribox fully automates the parcel pickup process, managing locker availability and generating secure QR codes for a frictionless, 24/7 contactless delivery experience.",
        },
      
    ]);
    const [isHeadOfficeOpen, setIsHeadOfficeOpen] = useState(true);

    return (
        <main className="main_page">
            <Header />
            <main>
                <section className="top_section_contacts">
                    <div className="top_section_header">
                        <div>
                            <HomeIcon />
                            <ArrowIcon />
                            <span className="top_section_header_text">Kontakt</span>
                        </div>
                        
                    </div>              
                </section>

                <section className="contacts_section2"> 
                    <div className="contacts_section2_content"> 
                        <div className="contacts_section2_content_item">    
                             <h1 className="contacts_section2_title">Kontakt</h1>
                            <p className="contacts_section2_description">
                                Do not hesitate to call or email us. We are happy to advise you, whether you need to deploy AI security, optimize retail workflows, automate your logistics, or consult on a custom mobile application.
                            </p>
                        </div>
                        <div className="contacts_section2_content_item2">
                            <div className="contacts_section2_content_item_phone">
                            
                            <a href="tel:+420296330311" className="contacts_phone2">
                                <ContactsPhoneIcon />
                                <div className="contacts_phone2_content">
                                    <span className="contacts_phone2_content_title">+420 296 330 311</span>
                                    <span className="contacts_phone2_content_description">všední dny 9:00 - 16:00</span>
                                </div>
                             
                            </a>
                           
                        </div>
                        <div className="contacts_section2_content_item_divider">
                            <DividerIcon />
                        </div>
                        <div className="contacts_section2_content_item_phone">

                            <a href="mailto:info@rm-software.cz" className="contacts_phone2">
                                <ContactsEmailIcon />
                                <div className="contacts_phone2_content">
                                    <span className="contacts_phone2_content_title">info@rm-software.cz</span>
                                      <p className="contacts_phone2_content_description">odpovíme do 48 hodin</p>
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
                            <span className="contacts_office_title">Centrála</span>
                            <span
                                className={`contacts_office_toggle ${isHeadOfficeOpen ? "is-open" : ""}`}
                                aria-hidden="true"
                                
                            > <ContactsArrowIcon /> </span>
                        </button>

                        {isHeadOfficeOpen && (
                            <div className="contacts_office_body">
                                <p className="contacts_office_company">RM Software s.r.o.</p>
                                <p className="contacts_office_info">Rádiová 1431/2a</p>
                                <p className="contacts_office_info">102 00 Praha 10 – Hostivař</p>
                                <p className="contacts_office_info">Czech republic</p>
                                <a href="tel:+420256256393" className="contacts_office_phone">+420 256 256 393</a>
                                <a href="mailto:info@defendinsurance.eu" className="contacts_office_email">info@defendinsurance.eu</a>
                                <p className="contacts_office_id">IČO: 14246619</p>
                                <p className="contacts_office_id">DIČ: CZ14246619</p>
                            </div>
                        )}
                    </div>
                </section>
                
                <section className="contacts_section">
                    <div className="contacts_section_content">
                        <div className="contacts_section_content_item">
                            <div className="contacts_column">
                                <h3 className="contacts_column_title">RM SOFTWARE</h3>
                                <nav aria-label="Defend Insurance Group" className="contacts_nav">
                                    <ul className="contacts_list">
                                        <li className="contacts_item">
                                            <a href="#" className="contacts_link">O společnosti</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a href="#" className="contacts_link">Zprávy a novinky</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a href="#" className="contacts_link">Kontakt</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="contacts_column">
                                <h3 className="contacts_column_title">PRODUKTY</h3>
                                <nav aria-label="Produkty" className="contacts_nav">
                                    <ul className="contacts_list">
                                        <li className="contacts_item">
                                            <a href="#" className="contacts_link">Distribox</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a href="#" className="contacts_link">GuGu</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a href="#" className="contacts_link">Seezus</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="contacts_column">
                                <h3 className="contacts_column_title">UŽITEČNÉ</h3>
                                <nav aria-label="Užitečné" className="contacts_nav">
                                    <ul className="contacts_list">
                                        <li className="contacts_item">
                                            <a href="/AiDevelopment" className="contacts_link">AI development</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a href="/MobileDevelopment" className="contacts_link">Mobile development</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a href="/CrmDevelopment" className="contacts_link">CRM development</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div className="contacts_section_divider_container">
                            <div className="contacts_section_divider">
                                <LineIcon3 />
                            </div>
                        
                            <div className="contacts_column contacts_column_reception">
                                <h3 className="contacts_column_title">RECEPCE</h3>
                                <a href="tel:+420296330311" className="contacts_phone">+420 296 330 311</a>
                                <p className="contacts_hours">všední dny 9:00 - 16:00</p>
                                <a href="tel:+420296330311" className="contacts_row">
                                    <PhoneIcon />
                                    Zavoláme vám
                                </a>
                                <a  href="mailto:info@rm-software.cz" className="contacts_row">
                                    <MailIcon />
                                    info@rm-software.cz
                                </a>
                    
                            </div>
                        </div>
                        
                    </div>
                </section>
            </main>
            <Footer />
        </main>
    );
};

export default Contacts;
 