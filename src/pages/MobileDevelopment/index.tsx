// pages/Products/[id].tsx
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HomeIcon from "../../assets/icons/homeIcon";
import ArrowIcon from "../../assets/icons/arrowIcon";
import "../../assets/css/contact_pages.css";
import HowItWorksIcon1 from "../../assets/icons/howItWorksIcon1";
import HowItWorksIcon2 from "../../assets/icons/howItWorksIcon2";
import HowItWorksIcon3 from "../../assets/icons/howItWorksIcon3";
import HowItWorksIcon4 from "../../assets/icons/howItWorksIcon4";
import SolutionIcon1 from "../../assets/icons/solutionIcon1";
import SolutionIcon2 from "../../assets/icons/solutionIcon2";
import SolutionIcon3 from "../../assets/icons/solutionIcon3";
import SolutionIcon4 from "../../assets/icons/solutionIcon4";
import DividerIcon from "../../assets/icons/dividerIcon";
import DividerIcon2 from "../../assets/icons/dividerIcon2";
import LineIcon3 from "../../assets/icons/lineIcon3";
import PhoneIcon from "../../assets/icons/phoneIcon";
import MailIcon from "../../assets/icons/mailIcon";


// Product data - hardcoded for all 3 products (no API needed)

const  advantages = [
    {
        id: 1,
        img: '/images/mobile_dev_img1.png',
        title: "Native Mobile Development",
        description: "We build high-performance mobile applications using native technologies for iOS and Android, ensuring maximum speed, stability, and full access to device capabilities.",
        icon: DividerIcon2,
    },
    {
        id: 2,
        img: '/images/mobile_dev_img2.png',
        title: "Cross-Platform Development",
        description: "Using React technologies, we create efficient cross-platform applications that reduce development time while maintaining a consistent user experience across devices.",
        icon: DividerIcon2,
    },
    {
        id: 3,
        img: '/images/mobile_dev_img3.png',
        title: "API & CRM Integration",
        description: "Our mobile apps seamlessly integrate with APIs, CRM systems, and backend services, enabling real-time data synchronization and automated workflows.",
        icon: DividerIcon2,
    },
    {
        id: 4,
        img: '/images/mobile_dev_img4.png',
        title: "Custom Mobile Solutions",
        description: "Every application is designed around your business logic — from internal enterprise tools to customer-facing mobile products.",
    }
];

const howItWorks = [
    {
        id: 1,
        icon: HowItWorksIcon1,
        title: "Architecture & Planning",
        description: "We design a scalable mobile architecture based on your API, backend, and business requirements.",
    },      
    {   
        id: 2,
        icon: HowItWorksIcon2,
        title: "Development & Integration",
        description: "Our team implements features, integrates external systems, and ensures smooth communication between mobile apps and backend services.",
    },
    {   
        id: 3,
        icon: HowItWorksIcon3,
        title: "App Store Review & Publishing",
        description: "We handle the full Google Play and Apple App Store review process, ensuring compliance with platform guidelines and successful publication.",
    },
    {   
        id: 4,
        icon: HowItWorksIcon4,
        title: "Continuous Delivery & Support",
        description: "After launch, we continue delivering updates, monitoring performance, fixing issues, and improving the app based on user feedback.",
        }
];

const  solution = {
    solutionIcon: SolutionIcon4,
    solutionTitle: "Let’s Build a Mobile App Your Users Will Love",
    solutionDescription: "From idea to App Store — and beyond — we deliver mobile applications that grow with your business.",
    solutionItems: [
        {
            id: 1,
            icon: SolutionIcon1,
            title: "Start Your Mobile Project",
        },
        {
            id: 2,
            icon: SolutionIcon2,
            title: "Request a Consultation",
        },
        {
            id: 3,
            icon: SolutionIcon3,
            title: "Contact Our Mobile Team",
        }
    ]
};

const whatMakesSeezusSmart = [
    {
        id: 1,
        title: "Quality, Security & Support",
        steps: [
            "Clean, maintainable codebases",
            "Secure API communication and data handling",
            "Compliance with App Store and Google Play requirements",
            "Long-term maintenance and feature expansion",
            "Dedicated technical support and monitoring",
            "Use Cases",
            "CRM mobile applications",
            "Business and enterprise mobile tools",
            "Customer portals and service apps",
            "API-driven mobile platforms",
            "Internal operations and workflow apps",

        ]
    },
 
]

const MobileDevelopment: React.FC = () => {
    return (
        <main className="main_page" id="mobile_development_page">
            <Header />
            <div className="top_section_header">
                <div>
                    <HomeIcon />
                    <ArrowIcon />
                    <span className="top_section_header_text">Produkty</span>
                    <ArrowIcon />
                    <span className="top_section_header_text">Gap</span>
                </div>
            </div>
            <section className="product_single_section">
                <div className="product_single_wrapper">
                    <div className="product_single_content">
                            <h1 className="product_single_title">
                            Custom Mobile Application Development
                            </h1>
                            <p className="product_single_description_text">
                              Native and cross-platform mobile apps built for performance, scalability, and long-term support.
                            </p>
                            <p className="product_single_description_text">
                                We design, build, and deploy advanced AI solutions tailored to real business needs.
                            </p>
                           
                            <p className="product_single_description_text">
                                From API-driven apps and CRM integrations to full-scale mobile platforms, we deliver reliable solutions using modern technologies and proven development processes.
                            </p>
                            <p className="product_single_description_text">
                                Our focus is on stable, secure, and scalable mobile products — ready for real users and long-term growth.

                            </p>
                    </div>
                </div>
               
            </section>
            <section className="advantages_section">
                <div className="advantages_section_wrapper">
                        {advantages && advantages.length > 0 && (
                                <div className="advantages_section_container">
                                        {advantages.map((advantage) => {
                                            const IconComponent = advantage.icon;
                                            return (
                                                <React.Fragment key={advantage.id}>
                                                    <div className="advantages_section_item">
                                                        <div className="advantages_section_image_container">
                                                            <img 
                                                                src={advantage.img} 
                                                                alt={advantage.title}
                                                                className="advantages_section_image"
                                                            />
                                                        </div>
                                                    
                                                        <h3 className="advantages_section_title">
                                                            {advantage.title}
                                                        </h3>
                                                        <p className="advantages_section_text">
                                                            {advantage.description}
                                                        </p>
                                                    </div>
                                                    {IconComponent && <IconComponent />}
                                                </React.Fragment>
                                            );
                                        })}
                                </div>
                            )}

                </div>
            </section>
            <section className="about_seezus_section">
                <div className="about_seezus_section_wrapper">
                            <div className='about_seezus_section_items_wrapper'>
                                <div className="about_seezus_section_content">
                                    <div className="about_seezus_section_content_wrapper">
                                        <h2 className="about_seezus_section_title">What Is Mobile Development?</h2>
                                        <p className="about_seezus_section_text">Mobile development is the process of designing, building, and maintaining applications for iOS and Android devices.</p>
                                        <p className="about_seezus_section_text">We create custom mobile apps tailored to your business needs — from API-driven and CRM-based applications to full-featured mobile platforms. Using native technologies and React-based solutions, we deliver fast, secure, and scalable apps.</p>
                                        <p className="about_seezus_section_text">Our mobile solutions are designed for real users, fully compliant with Apple App Store and Google Play requirements, and supported long after launch with continuous updates and improvements.</p>
                                    </div>
                                   
                                </div>
                                <div className="about_seezus_section_image">
                                    <img src="/images/about_ai_img2.png" alt="ai_labs_img" />
                                </div>
                            </div>

                </div>
            </section>      
            <section className="how_it_works_section">
                <div className="how_it_works_section_wrapper">
                    <div className="how_it_works_section_content">
                        <h2 className="how_it_works_section_title">Development Process</h2>
                        {howItWorks && (
                                <div className="how_it_works_section_items">
                                    {howItWorks.map((item) => {
                                        const IconComponent = item.icon;
                                        return (
                                            <div className="how_it_works_section_item" key={item.id}>
                                                <div className="how_it_works_section_item_icon">
                                                    {IconComponent && <IconComponent />}
                                                </div>
                                                <h3 className="how_it_works_section_item_title">
                                                    {item.title}
                                                </h3>
                                                <p className="how_it_works_section_item_description">
                                                    {item.description}
                                                </p>
                                            </div>
                                        );
                                    })}
                            </div>
                        )}

                    </div>
                </div>
            </section>
             <section className="solution_section">
                <div className="solution_section_wrapper">
                    <div className="solution_section_content">
                        {solution && (() => {
                            const SolutionIcon = solution.solutionIcon;
                            return (
                                <div className="solution_section_item">
                                    <div className="solution_section_item_content1">
                                            <div className="solution_section_item_content1_wrapper">
                                                {SolutionIcon && <SolutionIcon />}
                                                <div>
                                                    <h2 className="product_single_features_title">{solution.solutionTitle}</h2>
                                                    </div>
                                                </div>
                                                <div className="solution_section_item_content2">
                                                {solution.solutionItems.map((item) => {
                                                    const IconComponent = item.icon;
                                                    return (
                                                        <div key={item.id} className="solution_section_item_content2_item">
                                                            <div className="solution_section_item_content2_item_icon">
                                                                {IconComponent && <IconComponent />}
                                                            </div>
                                                            <h3 className="solution_section_item_content2_item_title">
                                                                {item.title}
                                                            </h3>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                    </div>
                                       
                                    <p className="solution_section_item_description">
                                                {solution.solutionDescription}
                                    </p>
                                </div>
                            );
                        })()}
                    </div>
                </div>
            </section>          
            <section className="what_makes_smart_section">
                <div className="what_makes_smart_section_header">
                    <img src="/images/seezus_img.png" alt="what_makes_smart_section_header" />
                </div>
                <div className="what_makes_smart_section_wrapper">
                    <div className="what_makes_smart_section_content">
                       
                        {whatMakesSeezusSmart && whatMakesSeezusSmart.length > 0 && (
                            <>
                             {whatMakesSeezusSmart.map((section) => (
                                    <div key={section.id} className="what_makes_smart_section_item">
                                        <h2 className="what_makes_smart_section_title">{section.title}</h2>
                                        <div className="what_makes_smart_section_list">
                                            {section.steps.map((step, index) => (
                                                <div
                                                    key={index} 
                                                    className="what_makes_smart_section_list_item"
                                                >
                                                    
                                                    <p className="what_makes_smart_section_list_item_text">
                                                        {step}
                                                    </p>
                                                    {/* {step} */}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </>
                               
                        )}
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
                                            <a href="#" className="contacts_link">Mobile development</a>
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
            <Footer />
        </main>
    );
};

export default MobileDevelopment;

