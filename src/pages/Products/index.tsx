// pages/index.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../components/header";
import HomeIcon from "../../assets/icons/homeIcon";
import ArrowIcon from "../../assets/icons/arrowIcon";
import "../../assets/css/products.css";
import LineIcon from "../../assets/icons/lineIcon";
import LineIcon2 from "../../assets/icons/lineIcon2";
import LineIcon3 from "../../assets/icons/lineIcon3";
import PhoneIcon from "../../assets/icons/phoneIcon";  
import MailIcon from "../../assets/icons/mailIcon";
import Footer from "../../components/footer";
import Comma1Icon from "../../assets/icons/comma1";
import Comma2Icon from "../../assets/icons/comma2";

const Products: React.FC = () => {
    const router = useRouter();

    const [productsStats] = useState([
        {
            id: 1,
            slug: "seezus",
            title: "SEEZUS INTELLIGENCE",
            img: '/images/product_img1.jpeg',
            description:
                "Automated video security & real-time anomaly detection",
        },
        {
            id: 2,
            slug: "gugu",
            title: "GUGU RETAIL CRM",
            img: '/images/product_img2.jpeg',
            description:
                "Unified customer data to boost loyalty and sales growth",
        },
        {
            id: 3,
            slug: "distribox",
            title: "DISTRIBOX LOGISTICS",
            img: '/images/product_img3.jpeg',
            description:
                "Contactless delivery & smart locker operating systems",
        },
   
    ]);


    return (
        <main className="main_page">
            <Header />
            <main>
                <section className="top_section2">
                    <div className="top_section_header">
                        <div>
                            <HomeIcon />
                            <ArrowIcon />
                            <span className="top_section_header_text">Products</span>
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
                                    We bring intelligence to<br />
                                    industries where standard<br />
                                    tools are not enough.
                                    </h1>
                                </div>
                            
                            </div>

                            <div className="hero-right">
                                <p>
                                        We constantly seek ways to push the boundaries of what software can do. We don't just build applications; we engineer entire digital ecosystems designed to solve complex challenges in security, retail, and logistics on a global scale.
                                </p>
                                <p>
                                        Our portfolio offers specialized, high-performance platforms. Whether it is proactive threat detection with Seezus, optimizing customer relationships via Gugu CRM, or automating last-mile delivery with Distribox, we provide the digital backbone your business needs to grow.
                                </p>
                                <p>
                                        All our products are cloud-native and ready for rapid deployment. You can explore our full range of solutions and request a demo directly online.
                                </p>
                            </div>
                        </div>
                       
                    </section>

                </section>
                <section className="products2">
                    <div className="products2_wrapper">
                        <h1 className='products2_wrapper_title'>
                            Discover our software ecosystem. Solutions ready to deploy today.
                        </h1>
                        <div className="products2_wrapper_items">   
                            {productsStats.map((item) => (
                                <div key={item.id} className="products2_wrapper_item">
                                    <div className="products2_wrapper_item_image">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className="products2_wrapper_item_content">
                                        <h2 className="products2_wrapper_item_title">{item.title}</h2>
                                        <p className="products2_wrapper_item_description">
                                            {item.description}
                                        </p>
                                        <Link href={`/Products/${item.slug}`} className="products2_wrapper_item_button">
                                            Více informací
                                        </Link>
                                       
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
                                
                                <nav aria-label="Defend Insurance Group" className="contacts_nav">
                                    <ul className="contacts_list">
                                        <li className="contacts_item">
                                            <a href="/AboutUs" className="contacts_column_title2">RM SOFTWARE</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a href="/Contacts" className="contacts_link">Kontakt</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="contacts_column">
                                <a href="/Products" className="contacts_column_title">PRODUKTY</a>
                                <nav aria-label="Produkty" className="contacts_nav">
                                    <ul className="contacts_list">
                                        <li className="contacts_item">
                                            <a href="/Products/seezus" className="contacts_link">Seezus</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a href="/Products/gugu" className="contacts_link">GuGu</a>
                                        </li>
                                      
                                        <li className="contacts_item">
                                            <a href="/Products/distribox" className="contacts_link">Distribox</a>
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
                                            <a href="/CRMDevelopment" className="contacts_link">CRM development</a>
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

export default Products;
 