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
        img: '/images/ai_dev_img1.png',
        title: "Custom AI Software Development",
        description: "We develop AI-driven applications tailored to your specific use case — from computer vision and analytics to automation, prediction, and decision support systems.",
        icon: DividerIcon2,
    },
    {
        id: 2,
        img: '/images/ai_dev_img2.png',
        title: "AI Model Fine-Tuning",
        description: "We fine-tune existing AI models using your data to improve accuracy, performance, and relevance. This includes domain adaptation, performance optimization, and bias reduction.",
        icon: DividerIcon2,
    },
    {
        id: 3,
        img: '/images/ai_dev_img3.png',
        title: "Proprietary AI Models",
        description: "When off-the-shelf solutions are not enough, we design and train our own AI models — optimized for your data, infrastructure, and operational constraints.",
        icon: DividerIcon2,
    },
    {
        id: 4,
        img: '/images/ai_dev_img4.png',
        title: "End-to-End AI Pipelines",
        description: "From data collection and preprocessing to training, deployment, monitoring, and continuous improvement — we deliver complete AI pipelines ready for production.",
    }
];

const howItWorks = [
    {
        id: 1,
        icon: HowItWorksIcon1,
        title: "Problem Understanding",
        description: "We start by deeply analyzing your business goals, data, and technical constraints. Together, we define the AI use case, success metrics, and the most suitable model approach.",
    },      
    {   
        id: 2,
        icon: HowItWorksIcon2,
        title: "AI Model Training & Integration",
        description: "We train or fine-tune AI models using your data or create custom models from scratch. The models are then integrated into your software, infrastructure, or edge devices.",
    },
    {   
        id: 3,
        icon: HowItWorksIcon3,
        title: "Model Testing & Validation",
        description: "All models are tested in our AI labs under real-world conditions. We validate accuracy, performance, scalability, and stability, ensuring the system works reliably before deployment.",
    },
    {   
        id: 4,
        icon: HowItWorksIcon4,
        title: "Production Deployment",
        description: "The final AI solution is deployed into a live production environment. We monitor performance, optimize continuously, and ensure the AI system runs efficiently at scale.",
        }
];

const  solution = {
    solutionIcon: SolutionIcon4,
    solutionTitle: "Let's Build AI That Actually Works",
    solutionDescription: "Whether you need to fine-tune an existing model or create a custom AI system from scratch, our team is ready to help.",
    solutionItems: [
        {
            id: 1,
            icon: SolutionIcon1,
            title: "Discuss Your AI Project",
        },
        {
            id: 2,
            icon: SolutionIcon2,
            title: "Request a Consultation",
        },
        {
            id: 3,
            icon: SolutionIcon3,
            title: "Contact Our AI Team",
        }
    ]
};

const whatMakesSeezusSmart = [
    {
        id: 1,
        title: "Why Work With Us",
        steps: [
            "Deep expertise in AI software engineering",
            "Experience with real-world, production AI systems",
            "Ability to fine-tune and build models from scratch",
            "Strong focus on testing, validation, and reliability",
            "Transparent development process and measurable results",
        ]
    },
    {
        id: 2,
        title: "Use Cases",
        steps: [
            "Computer vision & video analytics",
            "Predictive analytics and forecasting",
            "Intelligent automation",
            "Custom AI assistants and decision systems",
            "Industry-specific AI solutions",
        ]
    },
]

const AiDevelopment: React.FC = () => {
    return (
        <main className="main_page" id="ai_development_page">
            <Header />
            <div className="top_section_header">
                <div>
                    <HomeIcon />
                    <ArrowIcon />
                    <span className="top_section_header_text">AI development</span>
                    
                </div>
            </div>
            <section className="product_single_section">
                <div className="product_single_wrapper">
                    <div className="product_single_content">
                            <h1 className="product_single_title">
                                Custom AI Development & Research
                            </h1>

                            <p className="product_single_description_text">
                                From fine-tuning existing models to building proprietary AI systems — tested, validated, and deployed in real-world conditions.
                            </p>
                            <p className="product_single_description_text">
                                We design, build, and deploy advanced AI solutions tailored to real business needs.
                            </p>
                            <p className="product_single_description_text">
                               Our team develops custom AI software, fine-tunes state-of-the-art models, and creates proprietary AI systems from the ground up — all tested and validated in our own AI labs.

                            </p>
                            <p className="product_single_description_text">
                                We focus on practical, production-ready AI, not experiments that stay on paper.

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
                                        <h2 className="about_seezus_section_title">AI Labs Built for Real-World Validation</h2>
                                        <p className="about_seezus_section_text">All our AI solutions are developed and tested in dedicated AI labs.
                                        Here, we simulate real-world environments, validate performance under load, test edge cases, and continuously improve model reliability</p>
                                        <p className="about_seezus_section_text">This approach ensures that every AI system we deliver is:</p>
                                        <p className="about_seezus_section_text">Stable under real operating conditions</p>
                                        <p className="about_seezus_section_text">Optimized for performance and scalability</p>
                                        <p className="about_seezus_section_text">Ready for long-term production use</p>
                                    </div>
                                   
                                </div>
                                <div className="about_seezus_section_image">
                                    <img src="/images/about_ai_img.png" alt="ai_labs_img" />
                                </div>
                            </div>

                </div>
            </section>      
            <section className="how_it_works_section">
                <div className="how_it_works_section_wrapper">
                    <div className="how_it_works_section_content">
                        <h2 className="how_it_works_section_title">HOW AI DEVELOPMENT WORKS</h2>
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
                                            <a  className="contacts_link">AI development</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a href="/mobile-development" className="contacts_link">Mobile development</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a href="/crm-development" className="contacts_link">CRM development</a>
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

export default AiDevelopment;

