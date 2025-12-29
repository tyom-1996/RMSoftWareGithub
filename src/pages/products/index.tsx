// pages/index.tsx
import React from "react";
import Link from "next/link";
import Header from "../../components/header";
import HomeIcon from "../../assets/icons/homeIcon";
import ArrowIcon from "../../assets/icons/arrowIcon";
import "../../assets/css/products.css";
import Footer from "../../components/footer";
import useTranslations from "../../hooks/useTranslations";
import ContactSection from "../../components/ContactSection";

const Products: React.FC = () => {
    const { t } = useTranslations();

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
                                        <a href={`/products/${item.slug}`} className="products2_wrapper_item_button">
                                            {t('productsPage.moreInfo')}
                                        </a>
                                       
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
 