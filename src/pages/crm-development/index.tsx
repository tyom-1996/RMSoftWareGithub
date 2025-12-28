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
        img: '/images/crm_dev_img1.png',
        title: "Custom CRM Applications",
        description: "We build CRM systems fully adapted to your workflows — sales, operations, support, finance, and reporting — with flexible architecture and long-term scalability.",
        icon: DividerIcon2,
    },
    {
        id: 2,
        img: '/images/crm_dev_img2.png',
        title: "API-Driven Architecture",
        description: "All CRM solutions are built around robust APIs, allowing seamless integration with mobile applications, external services, and internal systems.",
        icon: DividerIcon2,
    },
    {
        id: 3,
        img: '/images/crm_dev_img3.png',
        title: "Multi-Module & Financial Systems",
        description: "We develop complex CRM platforms with multiple interconnected modules, including financial software, billing, reporting, and accounting integrations.",
        icon: DividerIcon2,
    },
    {
        id: 4,
        img: '/images/crm_dev_img4.png',
        title: "Mobile & System Integration",
        description: "Our CRM solutions connect directly to mobile applications, enabling real-time data access, synchronization, and field operations.",
    }
];

const howItWorks = [
    {
        id: 1,
        icon: HowItWorksIcon1,
        title: "Define Business Processes",
        description: "We start by analyzing your business workflows, data structure, and operational requirements to design a CRM system tailored to your organization.",
    },      
    {   
        id: 2,
        icon: HowItWorksIcon2,
        title: "Design & Build CRM System",
        description: "We develop a custom, API-driven CRM architecture with modular components, financial systems, and mobile connectivity based on your needs.",
    },
    {   
        id: 3,
        icon: HowItWorksIcon3,
        title: "Integrate & Analyze Data",
        description: "The CRM is connected to mobile apps, external services, and AI analytics engines to process data, generate insights, and automate operations.",
    },
    {   
        id: 4,
        icon: HowItWorksIcon4,
        title: "Deploy, Support & Scale",
        description: "After deployment, we provide continuous delivery, system monitoring, updates, and long-term support while ensuring compliance with EU regulations.",
        }
];

const  solution = {
    solutionIcon: SolutionIcon4,
    solutionTitle: "Build a CRM That Works the Way Your Business Does",
    solutionDescription: "From concept to deployment — and long after launch — we deliver CRM systems you can rely on.",
    solutionItems: [
        {
            id: 1,
            icon: SolutionIcon1,
            title: "Discuss Your CRM Project",
        },
        {
            id: 2,
            icon: SolutionIcon2,
            title: "Request a Consultation",
        },
        {
            id: 3,
            icon: SolutionIcon3,
            title: "Contact Our CRM Team",
        }
    ]
};

const whatMakesSeezusSmart = [
    {
        id: 1,
        title: "Development & Support Process Architecture & Design",
        steps: [
            "We design secure, scalable CRM architectures tailored to your business structure and growth plans.",

        ]
    },
    {
        id: 2,
        title: "Development & Integration",
        steps: [
            "Our team develops core CRM functionality, integrates APIs, mobile apps, financial systems, and third-party services.",

        ]
    },
    {
        id: 3,
        title: "Testing & Validation",
        steps: [
            "Each CRM system is thoroughly tested for performance, security, compliance, and reliability before deployment.",

        ]
    },
    {
        id: 4,
        title: "Continuous Delivery & Support",
        steps: [
            "After launch, we continue delivering updates, new features, system optimizations, and long-term technical support.",

        ]
    },
    {
        id: 5,
        title: "Advanced Capabilities AI Data Analytics & Processing",
        steps: [
            "We integrate AI-powered analytics to process large datasets, generate insights, automate reporting, and support better business decisions.",

        ]
    },
    {
        id: 6,
        title: "Multilanguage Support",
        steps: [
            "CRM systems are built with full multilingual capabilities, enabling use across different countries and teams.",

        ]
    },
    {
        id: 7,
        title: "EU Compliance & Legal Standards",
        steps: [
            "All solutions are developed in compliance with EU legislation, including GDPR and other regulatory requirements, ensuring data protection and legal safety.",

        ]
    },
 
]

const CRMDevelopment: React.FC = () => {
    return (
        <main className="main_page" id="crm_development_page">
            <Header />
            <div className="top_section_header">
                <div>
                    <HomeIcon />
                    <ArrowIcon />
                    <span className="top_section_header_text">CRM development</span>
                </div>
            </div>
            <section className="product_single_section">
                <div className="product_single_wrapper">
                    <div className="product_single_content">
                            <h1 className="product_single_title">
                                Custom CRM Development & Business Systems
                            </h1>
                            <p className="product_single_description_text">
                            Scalable, API-driven CRM solutions designed for complex business operations.We design and develop custom CRM systems tailored to your business processes.

                            </p>
                            <p className="product_single_description_text">
                              We design and develop custom CRM systems tailored to your business processes.
                            </p>
                           
                            <p className="product_single_description_text">
                               From lightweight customer management tools to complex, multi-module enterprise systems, our CRM solutions are built to integrate seamlessly with mobile applications, financial systems, and third-party platforms.
                            </p>
                            <p className="product_single_description_text">
                            Our focus is on reliable, secure, and scalable CRM software that grows with your business and complies with European regulations.

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
                                        <h2 className="about_seezus_section_title">What Is CRM Development?</h2>
                                        <p className="about_seezus_section_text">
                                            CRM development is the process of designing and building custom customer relationship management systems tailored to specific business needs.
                                        </p>
                                        <p className="about_seezus_section_text">
                                            We create flexible, API-driven CRM solutions that manage customers, operations, and financial processes in one connected system. Our CRM platforms integrate seamlessly with mobile applications, external services, and internal business software.
                                        </p>
                                        <p className="about_seezus_section_text">
                                            Unlike off-the-shelf solutions, our CRM systems are built around your workflows, support multilingual environments, comply with EU regulations, and include advanced AI-powered data analytics for smarter decision-making.
                                        </p>
                                    </div>
                                   
                                </div>
                                <div className="about_seezus_section_image">
                                    <img src="/images/about_ai_img3.png" alt="ai_labs_img" />
                                </div>
                            </div>

                </div>
            </section>      
            <section className="how_it_works_section">
                <div className="how_it_works_section_wrapper">
                    <div className="how_it_works_section_content">
                        <h2 className="how_it_works_section_title">HOW CRM DEVELOPMENT WORKS</h2>
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
                                            <a href="/about-us" className="contacts_link">About Us</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a href="/contacts" className="contacts_link">Contacts</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="contacts_column">
                                <a href="/products" className="contacts_column_title">PRODUKTY</a>
                                <nav aria-label="Produkty" className="contacts_nav">
                                    <ul className="contacts_list">
                                        <li className="contacts_item">
                                            <a href="/products/seezus" className="contacts_link">Seezus</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a href="/products/gugu" className="contacts_link">GuGu</a>
                                        </li>
                                      
                                        <li className="contacts_item">
                                            <a href="/products/distribox" className="contacts_link">Distribox</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="contacts_column">
                                <h3 className="contacts_column_title">UŽITEČNÉ</h3>
                                <nav aria-label="Užitečné" className="contacts_nav">
                                    <ul className="contacts_list">
                                        <li className="contacts_item">
                                            <a href="/ai-development" className="contacts_link">AI development</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a href="/mobile-development" className="contacts_link">Mobile development</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a  className="contacts_link">CRM development</a>
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

export default CRMDevelopment;

