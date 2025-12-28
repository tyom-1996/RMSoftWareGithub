// pages/index.tsx
import React from "react";
import Header from "../components/header";
import ArrowIcon2 from "../assets/icons/arrowIcon2";
import "../assets/css/home_style.css";
import LineIcon from "../assets/icons/lineIcon";
import Footer from "../components/footer";
import Comma1Icon from "../assets/icons/comma1";
import Comma2Icon from "../assets/icons/comma2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import ArrowIcon3 from "../assets/icons/arrowIcon3";
import Link from "next/link";
import useTranslations from "../hooks/useTranslations";
import ContactSection from "../components/ContactSection";

const Home: React.FC = () => {
    const { t } = useTranslations();

    const productsStats = t("home.productsStats", []) as Array<{
        id: number;
        value: string;
        label: string;
        description: string;
    }>;

    const servicesStats = t("home.servicesStats", []) as Array<{
        id: number;
        link: string;
        image: string;
        title: string;
        description: string;
    }>;

    const servicesStats2 = t("home.servicesStats2", []) as Array<{
        id: number;
        link: string;
        image: string;
        title: string;
        description: string;
    }>;

    const heroSlides = t("home.heroSlides", []) as Array<{
        id: number;
        link: string;
        image: string;
        title: string;
        subtitle: string;
        button: string;
    }>;


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

                                                <Link href={slide.link} className="top_content_image_text_button">
                                                    {slide.button}
                                                    <ArrowIcon2 />
                                                </Link>
                                                
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
                                        <Link href={item.link} className="services_section2_stat_button">
                                            {t('home.moreInfo')}
                                            <ArrowIcon3 />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a href="/products" className="services_section2_button">
                        {t('home.viewAll')}
                        </a>
                    </div>
                </section>
                <section className="products_section">
                    <div className="products_section_content">
                        <h1 className="products_section_title">
                            {t('home.productsSectionTitle', 'RM SOFTWARE')}
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
                                            <Link href={item.link} className="services_section3_stat_button">
                                                {t('home.moreInfo')}
                                                <ArrowIcon3 />
                                            </Link>
                                        </div>
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

export default Home;
 