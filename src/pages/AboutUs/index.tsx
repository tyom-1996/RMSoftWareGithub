// pages/index.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/header";
import HomeIcon from "../../assets/icons/homeIcon";
import ArrowIcon from "../../assets/icons/arrowIcon";
import "../../assets/css/about_us_style.css";
import LineIcon from "../../assets/icons/lineIcon";
import LineIcon2 from "../../assets/icons/lineIcon2";
import LineIcon3 from "../../assets/icons/lineIcon3";
import PhoneIcon from "../../assets/icons/phoneIcon";  
import MailIcon from "../../assets/icons/mailIcon";
import Footer from "../../components/footer";
import Comma1Icon from "../../assets/icons/comma1";
import Comma2Icon from "../../assets/icons/comma2";

const AboutUs: React.FC = () => {
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

    return (
        <main className="main_page">
            <Header />
            <main>
                <section className="top_section">
                    <div className="top_section_header">
                        <div>
                            <HomeIcon />
                            <ArrowIcon />
                            <span className="top_section_header_text">O nás</span>
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
                                    Turning ideas into digital reality
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
                       Jsme odborníci na vývoj jedinečného softwaru na míru.
                       </h1>
                       <p className="about_section_description">
                            Firmám i jednotlivcům přinášíme moderní a inovativní digitální řešení, která reagují na rychle se měnící technologický svět. 
                       </p>
                       <p className="about_section_description">
                       Naší misí je překonávat očekávání klientů i partnerů prostřednictvím vývoje špičkových aplikací, automatizace procesů a prvotřídní technické podpory, aby se mohli soustředit na svůj růst a "Dokázat více".
                       </p>
                    </div>
                </section>
                <section className="products_section">
                    <div className="products_section_content">
                        <h1 className="products_section_title">
                            RM SOFTWARE
                        </h1>
                        <div className="products_section_stats">
                            {productsStats.map((item) => (
                                <div key={item.value} className="products_section_stat">
                                    <div className="products_section_stat_content">
                                        <div className="products_section_stat_icon">
                                            {item.icon}
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
                        RM SOFTWARE
                       </h1>
                       <p className="about_section2_title2">
                        Přinášíme unikátní pojištění a produkty, které reagují na potřeby klientů.
                       </p>
                       <p className="about_section2_description">
                            Zaměřujeme se na vývoj moderního, rychlého a bezpečného softwaru, který pomáhá firmám růst, automatizovat procesy a zefektivňovat jejich každodenní fungování. Naše řešení používají společnosti napříč odvětvími, od menších podniků po velké organizace v České republice i v zahraničí.
                        </p>
                        <p className="about_section2_description">
                            Historie značky RM Software sahá do roku 2018. Od svého vzniku se firma soustředí na vývoj kvalitních webových a mobilních aplikací, interních systémů na míru a nástrojů pro digitalizaci firemních procesů. Díky rostoucí poptávce a vysoké spokojenosti klientů jsme postupně rozšířili naše služby i na další evropské trhy a získali řadu dlouhodobých partnerství.
                        </p>
                       <p className="about_section2_description">
                                Naším cílem je pomáhat klientům zjednodušovat práci, snižovat provozní náklady a zvyšovat jejich konkurenceschopnost pomocí spolehlivých technologií, automatizace a inovativních digitálních řešení. Každý projekt stavíme na individuálním přístupu, precizním plánování a špičkovém technickém zpracování.Vývoj softwaru představuje pro mnoho firem zásadní investici. Je proto důležité, aby technologie nebyly jen moderní, ale také stabilní, bezpečné a dlouhodobě udržitelné. Díky našim službám mohou klienti spoléhat na bezproblémový chod systémů, rychlou technickou podporu a okamžité řešení případných problémů. Naše produkty jim umožňují naplno se soustředit na to nejdůležitější — jejich vlastní podnikání.
                       </p>
                       <p className="about_section2_description">
                            Klienti jsou pro nás vždy na prvním místě a vážíme si důvěry, kterou do nás vkládají. Díky tomu poskytujeme partnerům nejen kvalitní software, ale také kontinuální podporu, pravidelné aktualizace a nové funkce, které jim otevírají další obchodní příležitosti. Významně tak přispíváme k jejich růstu a dlouhodobé loajalitě.Zkrátka, ať už jste náš klient nebo partner, můžete se na nás spolehnout.Těšíme se, ze i vám pomůžeme posunout váš projekt dál a „Dokázat více“.
                       </p>

                       <p className="about_section2_description">
                            Těšíme se, že i vám pomůžeme posunout váš projekt dál a „Dokázat více“.
                       </p>

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

export default AboutUs;
 