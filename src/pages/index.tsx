// pages/index.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import HomeIcon from "../assets/icons/homeIcon";
import ArrowIcon from "../assets/icons/arrowIcon";
import ArrowIcon2 from "../assets/icons/arrowIcon2";
import "../assets/css/home_style.css";
import LineIcon from "../assets/icons/lineIcon";
import LineIcon2 from "../assets/icons/lineIcon2";
import LineIcon3 from "../assets/icons/lineIcon3";
import PhoneIcon from "../assets/icons/phoneIcon";  
import MailIcon from "../assets/icons/mailIcon";
import Footer from "../components/footer";
import Comma1Icon from "../assets/icons/comma1";
import Comma2Icon from "../assets/icons/comma2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import ArrowIcon3 from "../assets/icons/arrowIcon3";

const Home: React.FC = () => {
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
            image: "/images/services_img1.png",
            title: "AI Video Analytics",
            description:
                "Secure your perimeter with Seezus. Our AI-driven video analysis detects anomalies and threats in real-time without human error.",
        },
        {
            id: 2,
            image: "/images/services_img2.png",
            title: "Retail Growth Engine",
            description:
                "Boost sales with Gugu CRM. A specialized system for retail to track customer journeys and optimize your sales pipeline.",
        },
        {
            id: 3,
            image: "/images/services_img3.png",
            title: "Mobile Development",
            description:
                "Custom iOS and Android applications. We build intuitive mobile experiences that connect your business directly to your users.",
        },
        {
            id: 4,
            image: "/images/services_img4.png",
            title: "Smart Locker Software",
            description:
                "Automate your logistics with Distribox. Reliable software for self-pickup terminals and contactless delivery management.",
        },
      
    ]);
    const [servicesStats2] = useState([
        {
            id: 1,
            image: "/images/services_img5.png",
            title: "Next-Gen AI Video Analytics",
            description:
                "Transform your surveillance cameras into active security guards. Seezus uses advanced artificial intelligence to analyze video feeds in real-time, instantly detecting anomalies, unauthorized access, and suspicious behavior. It proactively alerts your security team, preventing incidents before they happen rather than just recording them.",
        },
        {
            id: 2,
            image: "/images/services_img6.png",
            title: "The CRM Built for Retail",
            description:
                "Stop using generic tools for your retail business. Gugu CRM is engineered to handle the specific dynamics of retail sales and customer management. It centralizes shopper data across all channels, streamlines your sales pipelines, and provides actionable insights that help you personalize offers and turn one-time buyers into loyal returning customers.",
        },
        {
            id: 3,
            image: "/images/services_img7.png",
            title: "Smart Locker Operating System",
            description:
                "Automate your last-mile logistics with a complete software solution for parcel terminals. Distribox manages the entire self-pickup process, from locker allocation to generating secure QR codes for users. Offer your clients a seamless, 24/7 contactless pickup experience while significantly reducing your delivery and courier costs.",
        },
     
      
    ]);


    const [heroSlides] = useState([
        {
            id: 1,
            image: "/images/slider_img1.png",
            title: "Seezus AI",
            subtitle: "Včasná detekce. Rychlá reakce. Maximální ochrana",
            button: "More info",
            btnColor: "#6124E1",
        },
        {
            id: 2,
            image: "/images/slider_img2.png",
            title: "GuGu software",
            subtitle:
                "Data pod kontrolou. Náklady pod dohledem",
                button: "More info",
                btnColor: "#44D59B",
        },
        {
            id: 3,
            image: "/images/slider_img3.png",
            title: "Distribox",
            subtitle:
                "Rychlé. Jednoduché. Kdykoliv.",
                button: "More info",
                btnColor: "#6124E1",
        },
     
    ]);


    return (
        <main className="main_page">
            <Header />
            <main>
                <section className="top_section2">
                    <div className="top_section2_slider">
                        <Swiper
                            modules={[Autoplay, EffectFade, Pagination]}
                            effect="fade"
                            loop
                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: false,
                            }}
                            pagination={{ clickable: true }}
                            className="top_swiper"
                        >
                            {heroSlides.map((slide) => (
                                <SwiperSlide key={slide.id}>
                                    <div className="top_content_image2">
                                        <img src={slide.image} alt={slide.title} />
                                        <div className="top_content_image_text_container2">
                                            <div className="top_content_image_text2">
                                            
                                                <h1 className="top_content_image_text_title2">
                                                    {slide.title}
                                                </h1>
                                                <p className="top_content_image_text_subtitle2">
                                                    {slide.subtitle}
                                                </p>

                                                <button className="top_content_image_text_button" style={{ backgroundColor: slide.btnColor }}>
                                                    {slide.button}
                                                    <ArrowIcon2 />
                                                </button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
                <section className="white_block">
                   
                </section>
                <section className="services_section2">
                    <div className="services_section2_content">
                        <div className="services_section2_stats">
                            {servicesStats.map((item) => (
                                <div key={item.id} className="services_section2_stat">
                                    <div className="services_section2_stat_image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="services_section2_stat_content">
                                        <h2 className="services_section2_stat_title">{item.title}</h2>
                                        <p className="services_section2_stat_description">
                                            {item.description}
                                        </p>
                                        <button className="services_section2_stat_button">
                                        Více informací
                                            <ArrowIcon3 />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a href="#" className="services_section2_button">
                        Podívejte se na vše, co nabízíme
                        </a>
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
                <section className="services_section3">
                    <div className="services_section3_content">
                        <div className="services_section3_stats">
                            {servicesStats2.map((item) => (
                                <div key={item.id} className="services_section3_stat">
                                    <div
                                        className={`services_section3_stat_content_item ${
                                            item.id === 2
                                                ? "services_section3_stat_content_item_reversed"
                                                : ""
                                        }`}
                                    >
                                        <div className="services_section3_stat_image">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div className="services_section3_stat_content">
                                            <h2 className="services_section3_stat_title">{item.title}</h2>
                                            <p className="services_section3_stat_description">
                                                {item.description}
                                            </p>
                                            <button className="services_section3_stat_button">
                                                Více informací
                                                <ArrowIcon3 />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="contacts_section">
                    <div className="contacts_section_content">
                        <div className="contacts_section_content_item">
                            <div className="contacts_column">
                                <h3 className="contacts_column_title">DEFEND RM SOFTWARE</h3>
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
                                            <a href="#" className="contacts_link">AI development</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a href="#" className="contacts_link">Mobile development</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a href="#" className="contacts_link">CRM development</a>
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

export default Home;
 