// pages/Products/[slug].tsx
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HomeIcon from "../../assets/icons/homeIcon";
import ArrowIcon from "../../assets/icons/arrowIcon";
import "../../assets/css/product.css";
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
const productSingle = [
    {
        id: 1,
        slug: "seezus",
        title: "SEEZUS",
        top: {
            topTitle: "AI-Powered Security That Understands What's Happening",
            topDescription: "Smart video surveillance with artificial intelligence that detects real threats, ignores false alarms, and works even without the internet.",
            topFullDescription: "Traditional security cameras only record video. Seezus goes further — it understands context.",
            topFullDescription2: "In case of suspicious activity, intrusion, or danger, Seezus analyzes the scene in real time and alerts you instantly, while ignoring irrelevant motion like shadows, trees, or lighting changes.",
        },
        advantages: [
            {
                id: 1,
                img: '/images/advantage_img1.png',
                title: "Intelligent Threat Detection",
                description: "Seezus detects people, vehicles, animals, weapons, abandoned objects, falls, and aggressive behavior — not just motion.",
                icon: DividerIcon2,
            },
            {
                id: 2,
                img: '/images/advantage_img2.png',
                title: "Fewer False Alarms",
                description: "AI filters out shadows, sunlight, weather effects, and other irrelevant movement, so you only get alerts that matter.",
                icon: DividerIcon2,
            },
            {
                id: 3,
                img: '/images/advantage_img3.png',
                title: "Works Offline",
                description: "All AI processing runs directly on the device. Your security system continues to operate even without an internet connection.",
                icon: DividerIcon2,
            },
            {
                id: 4,
                img: '/images/advantage_img4.png',
                title: "Flexible Integration",
                description: "Easily integrates with existing IP or analog cameras, without replacing your current infrastructure.",
            },
        ],
        aboutSeezus: {
            aboutTitle: "What Is Seezus?",
            aboutDescription1: 'Seezus is an intelligent video security system powered by artificial intelligence.',
            aboutDescription2: "When a theft, intrusion, accident, or dangerous situation occurs, Seezus analyzes video streams in real time and identifies what is actually happening — who is involved, where it happened, and when.",
            aboutDescription: "Unlike traditional systems that only store footage, Seezus understands events and provides actionable alerts with full context, video playback, timestamps, and descriptions.",
            image: '/images/whatis_img.png',
        },
        howItWorks: {
            howItWorksTitle: "HOW SEEZUS WORKS",
            howItWorksItems: [
                {   
                    id: 1,
                    icon: HowItWorksIcon1,
                    title: "Connect Your Cameras",
                    description: "Connect your existing IP or analog cameras to the Seezus system — no complex setup required.",
                },      
                {   
                    id: 2,
                    icon: HowItWorksIcon2,
                    title: "AI Analyzes Video",
                    description: "Seezus processes video locally using on-device AI, detecting people, vehicles, objects, and behavior in real time.",
                },
                {   
                    id: 3,
                    icon: HowItWorksIcon3,
                    title: "Smart Alerts",
                    description: "You receive instant notifications via mobile app, email, SMS, or messengers — only when something important happens.",
                },
                {   
                    id: 4,
                    icon: HowItWorksIcon4,
                    title: "Review & Act",
                    description: "View recorded events with timestamps, descriptions, and full playback history to quickly investigate and respond.",
                },
            ]
        },
        solution: {
            solutionIcon: SolutionIcon4,
            solutionTitle: "Find the Right Seezus Solution for You",
            solutionDescription: "Not sure which setup fits your needs? We're happy to help.",
            solutionItems: [
                {
                    id: 1,
                    icon: SolutionIcon1,
                    title: "Zavoláme vám",
                },
                {
                    id: 2,
                    icon: SolutionIcon2,
                    title: "Napište nám",
                },
                {
                    id: 3,
                    icon: SolutionIcon3,
                    title: "Zahajte chat",
                },
            ]
        },
        whatMakesSeezusSmart: [
            {
                id: 1,
                title: "What Makes Seezus Smart",
                steps:[
                    'Detects people, vehicles, animals, clothing, safety gear, and behavior',
                    'Identifies firearms, fights, falls, and people lying on the ground',
                    'Counts people, vehicles, bags, and objects in defined zones',
                    'Detects abandoned objects and unusual movement',
                    'Performs face recognition with identity history',
                    'Analyzes vehicle attributes and license plates (ANPR)',
                    'Stores unlimited video and metadata locally',
                    'Sends alerts via app, email, SMS, and messengers',
                ]
            },
            {
                id: 2,
                title: "USE CASES BLOCK",
                steps:[
                    'Home Security',
                    'Prevents break-ins, detects intruders, and ignores harmless movement like pets or trees.',
                    'Business & Industry',
                    'Monitors restricted areas, detects safety violations (helmets, vests), and tracks incidents in real time.',
                    'Public Spaces',
                    'Counts people, monitors crowd behavior, detects abandoned items, and improves public safety.',
                   
                ]
                
            },
            {
                id: 3,
                title: "Smart Processing, Simple Integration",
                steps:[
                    'Camera → On-Device AI Processing → Local Storage → Smart Notifications',
                    'Seezus processes video at the edge, without relying on cloud infrastructure.',
                    'This ensures high performance, privacy, and reliability — even during network outages.',
                ]
                
            },
            {
                id: 4,
                title: "Built to Scale",
                steps:[
                    'Add more processing units as your camera network grows',
                    'Start small and expand without redesigning the system',
                    'Automatically prioritizes critical cameras under high load',
                    'Scales from small installations to enterprise deployments with hundreds of cameras',
                ]
            },
            {
                id: 5,
                title: "Designed for Maximum Reliability",
                steps:[
                    'Seezus uses a distributed architecture with built-in redundancy.',
                    'If one device fails, the system automatically redistributes the workload, ensuring that critical cameras remain active without interruption.',
                    'There is no single point of failure — your security stays online when you need it most.',
                ]
            },
            {
                id: 6,
                title: "Questions, Answers, and Documentation",
                steps:[
                    "We know choosing the right security system isn't easy.",
                    "That's why we've prepared clear answers to the most common questions, along with detailed documentation and technical specifications.",
                    "If you need additional help, our team is ready to assist you.",
                ]
            },
          
        ]
    },
    {
        id: 2,
        slug: "gugu",
        title: "GuGu",
        top: {
            topTitle: "GuGu — Complete CRM & Field Service Management System",
            topDescription: "Manage customers, orders, teams, and field operations — all from one unified platform.",
            topFullDescription: "GuGu combines powerful CRM capabilities with advanced mobile support for field teams. Track customer interactions, streamline workflows, plan visits, and stay connected in real time — even when working offline",
        },
        advantages: [
            {
                id: 1,
                img: '/images/advantage_img5.png',
                title: "Centralized Customer & Order Management",
                description: "Store all customer data, orders, and service history in one system for faster decisions and better customer service.",
            },
            {
                id: 2,
                img: '/images/advantage_img6.png',
                title: "Real-Time Field Coordination",
                description: "Plan, dispatch, and track visits with precision using integrated calendars and live GPS tracking.",
            },
            {
                id: 3,
                img: '/images/advantage_img7.png',
                title: "Efficient Task & Resource Planning",
                description: "Visual planning tools help you assign teams, manage workloads, and optimize routes and resources.",
            },
            {
                id: 4,
                img: '/images/advantage_img8.png',
                title: "Mobile-First Experience",
                description: "Field workers stay productive with offline mode, instant reporting, photo documentation, and automatic time tracking.",
            },
        ],
        aboutSeezus: {
            aboutTitle: "What Is GuGu CRM?",
            aboutDescription1: 'GuGu is a modern CRM and field service management system designed for businesses that operate both in the office and in the field. It combines a powerful web-based CRM with a full-featured mobile app, giving your entire team access to the same data in real time.',
            aboutDescription2: "With GuGu, you can manage customers, plan work, track employees and vehicles, document completed jobs, and automate invoicing — all within one platform.",
            aboutDescription: "",
            image: '/images/whatis_img.png',
        },
        howItWorks: {
            howItWorksTitle: "HOW GUGU WORKS",
            howItWorksItems: [
                {   
                    id: 1,
                    icon: HowItWorksIcon1,
                    title: "Centralize Your Data",
                    description: "All customer contacts, service history, orders, and communication are stored in one place and shared across your team.",
                },      
                {   
                    id: 2,
                    icon: HowItWorksIcon2,
                    title: "Plan & Dispatch Work",
                    description: "Use GuGu's intuitive dashboard to schedule visits, assign tasks, and organize field teams with full operational visibility.",
                },
                {   
                    id: 3,
                    icon: HowItWorksIcon3,
                    title: "Track Field Progress",
                    description: "Monitor technicians in real time with GPS tracking, job status updates, and automatic attendance logging.",
                },
                {   
                    id: 4,
                    icon: HowItWorksIcon4,
                    title: "Review & Act",
                    description: "Review completed jobs with timestamps, notes, photos, and full history — then close tasks, invoice customers, and optimize future planning.",
                },
            ]
        },
        solution: {
            solutionIcon: SolutionIcon4,
            solutionTitle: "Ready to Simplify Your CRM & Field Operations?",
            solutionDescription: "Let's find the GuGu setup that fits your business.",
            solutionItems: [
                {
                    id: 1,
                    icon: SolutionIcon1,
                    title: "Request a Quote",
                },
                {
                    id: 2,
                    icon: SolutionIcon2,
                    title: "Book a Demo",
                },
                {
                    id: 3,
                    icon: SolutionIcon3,
                    title: "Contact Us",
                },
            ]
        },
        whatMakesSeezusSmart: [
            {
                id: 1,
                title: "CORE FEATURES BLOCK",
                steps:[
                    'Key Features That Drive Productivity',
                    'Web-based CRM for customers, orders, employees, and materials',
                    'Visit scheduling and task planning',
                    'GPS tracking and real-time job status',
                    'Mobile app with offline support',
                    'Photo capture and field documentation',
                    'Automated invoicing and reporting',
                    'Role-based access and data security',
                    'API integrations with existing systems',
                ]
                
            },
            {
                id: 2,
                title: "USE CASES BLOCK",
                steps:[
                    'Service & Maintenance Companies',
                    'Improve response times, reduce administrative work, and deliver consistent service quality.',
                    'Field Technician Teams',
                    'Empower technicians with mobile tools, navigation, offline access, and instant reporting from the job site.',
                    'Dispatchers & Operations Managers',
                    'Gain full control over workloads, routes, and field performance in one clear dashboard.',
                    'Business Owners',
                    'Increase efficiency, automate processes, and scale operations without chaos.',
                   
                ]
                
            },
            {
                id: 3,
                title: "One System for Office and Field",
                steps:[
                    'GuGu connects office staff and field teams into a single workflow. The web CRM and mobile app work seamlessly together, synchronizing data automatically and ensuring that no information is lost — even when technicians work offline.'
                ]
                
            },
            {
                id: 4,
                title: "Built for Real-World Operations",
                steps:[
                    'GuGu is designed to grow with your business.',
                    'Whether you manage a small team or a large field service organization, the system scales smoothly and remains reliable in demanding, real-world conditions.',
                    
                ]
            },
            {
                id: 5,
                title: "Questions, Answers, and Documentation",
                steps:[
                    "Choosing the right CRM is an important decision.",
                    "Here you'll find answers to common questions, detailed documentation, and implementation guidance. Our team is always ready to help if you need more information.",
                ]
            },
        
          
        ]
    },
    {
        id: 3,
        slug: "distribox",
        title: "Distribox",
        top: {
            topTitle: "Distribox — Smart Self-Service Pickup & Delivery Boxes",
            topDescription: "Flexible, secure, and automated lockers for contactless parcel delivery and pickup.",
            topFullDescription: "Distribox designs and manufactures high-quality smart self boxes tailored to your needs. Whether for e-commerce, residential deliveries, libraries, or retail, our modular systems make package handling fast, safe, and available 24/7.",
        },
        advantages: [
            {
                id: 1,
                img: '/images/advantage_img12.png',
                title: "24/7 Contactless Parcel Pickup",
                description: "Recipients retrieve packages anytime without staff assistance.",
            },
            {
                id: 2,
                img: '/images/advantage_img9.png',
                title: "Customizable and Scalable",
                description: "Adapt box sizes, compartment layouts, and features for any use case.",
            },
            {
                id: 3,
                img: '/images/advantage_img10.png',
                title: "Seamless System Integration",
                description: "Connect Distribox with e-shops, ERP systems, or existing software via API.",
            },
            {
                id: 4,
                img: '/images/advantage_img11.png',
                title: "Reliable & Secure",
                description: "Electric locks, real-time status monitoring, and optional notifications (SMS/email) ensure safety and transparency.",
            },
        ],
        aboutSeezus: {
            aboutTitle: "What Is Distribox Self Box System?",
            aboutDescription1: 'Что показывать во время opening/closing?',
            aboutDescription2: "Modern API connectivity, remote management, and continuous support give you full control over delivery processes without manual intervention. DISTRIBOX.cz",
            aboutDescription: "",
            image: '/images/whatis_img.png',
        },
        howItWorks: {
            howItWorksTitle: "HOW DISTRIBOX WORKS",
            howItWorksItems: [
                {   
                    id: 1,
                    icon: HowItWorksIcon1,
                    title: "Tailored Setup",
                    description: "We design and build your Distribox system based on your space, goals, and customer needs.",
                },      
                {   
                    id: 2,
                    icon: HowItWorksIcon2,
                    title: "Integration with Your Systems",
                    description: "Connect the lockers to your e-commerce platform, CRM, warehouse system, or ERP via API for automated operations. DISTRIBOX.cz",
                },
                {   
                    id: 3,
                    icon: HowItWorksIcon3,
                    title: "Automated Delivery & Pickup",
                    description: "Couriers place packages into designated compartments, and recipients are notified via SMS or email when items are ready. DISTRIBOX.cz",
                },
                {   
                    id: 4,
                    icon: HowItWorksIcon4,
                    title: "Monitor & Manage",
                    description: "Box status, usage history, and access logs are available online 24/7 — you stay in control of your delivery ecosystem. DISTRIBOX.cz",
                },
            ]
        },
        solution: {
            solutionIcon: SolutionIcon4,
            solutionTitle: "Ready to Automate Package Delivery & Pickup?",
            solutionDescription: "Let's design the perfect Distribox system for your business and customers.",
            solutionItems: [
                {
                    id: 1,
                    icon: SolutionIcon1,
                    title: "Request a Demo",
                },
                {
                    id: 2,
                    icon: SolutionIcon2,
                    title: "Get a Quote",
                },
                {
                    id: 3,
                    icon: SolutionIcon3,
                    title: "Contact Sales",
                },
            ]
        },
        whatMakesSeezusSmart: [
            {
                id: 1,
                title: "Distribox Features",
                steps:[
                    'Modular design for customizable locker sizes and compartment layouts',
                    'Variants including refrigerated and temperature-controlled units',
                    'Easy online management with remote status monitoring',
                    'API integration with external systems (e-shop, CRM, logistics)',
                    'SMS or email notifications for users and administrators',
                    'Durable, weather-resistant construction for indoor or outdoor use',
                    'Optional integrations: payments, cameras, access control',
                ]
                                
            },
            {
                id: 2,
                title: "USE CASES BLOCK",
                steps:[
                    `E-Commerce Pickup Stations  <br /> Offer customers fast, contactless order collection any time of day.`,
                    `Residential & Apartment Delivery <br /> Residents receive secure lockers for personal packages even when they're not home.`,
                    `Libraries & Public Services <br /> Automated book pickup/drop-off (knihobox) without staff involvement.`,
                    `Retail & Click-and-Collect Points <br /> Customers collect purchases on their schedule, improving convenience and satisfaction.`,
                   
                ]
                
            },
            {
                id: 3,
                title: "Smart Locker System Architecture",
                steps:[
                    'Each Distribox unit combines robust hardware with intuitive software — from API connectivity to online remote management. Once integrated, your system handles parcel flows automatically, sending notifications, tracking status, and logging activity in real time. '
                ]
                
            },
            {
                id: 4,
                title: "Built for Reliability, Backed by Support",
                steps:[
                    'Distribox systems are engineered for long-term performance. With a domestic manufacturing base, full service support, and monitoring capabilities, we ensure your lockers stay operational with minimal disruption. ',
                    
                ]
            },
            {
                id: 5,
                title: "Questions & Documentation",
                steps:[
                    'Find answers to common questions, technical specs, and integration guides — or contact our team for personalized assistance.',
                ]
            },
        
          
        ]
    },
];

// Helper function to generate SEO-friendly meta tags
const getSEOMetaTags = (product: typeof productSingle[0], baseUrl: string = 'https://rm-software.cz') => {
    const title = `${product.top.topTitle} | RM Software`;
    const description = product.top.topDescription;
    const url = `${baseUrl}/Products/${product.slug}`;
    // Use the first advantage image or a default product image for OG
    const ogImage = product.advantages && product.advantages.length > 0 
        ? `${baseUrl}${product.advantages[0].img}`
        : `${baseUrl}/images/product_img${product.id}.jpeg`;
    
    return {
        title,
        description,
        url,
        ogTitle: product.top.topTitle,
        ogDescription: description,
        ogUrl: url,
        ogType: 'website',
        ogImage,
    };
};

const ProductSingle: React.FC = () => {
    const router = useRouter();
    const { slug } = router.query;

    // Find the product by slug
    const product = productSingle.find((p) => p.slug === slug);

    // If product not found, show error or redirect
    if (!product) {
        return (
            <main className="main_page">
                <Head>
                    <title>Product Not Found | RM Software</title>
                    <meta name="robots" content="noindex, nofollow" />
                </Head>
                <Header />
                <div style={{ padding: "100px 20px", textAlign: "center" }}>
                    <h1>Product not found</h1>
                    <Link href="/Products" style={{ color: "#6124E1", textDecoration: "underline" }}>
                        Back to Products
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    const seoMeta = getSEOMetaTags(product);

    return (
        <main className="main_page">
            <Head>
                <title>{seoMeta.title}</title>
                <meta name="description" content={seoMeta.description} />
                <meta name="keywords" content={`${product.title}, ${product.top.topTitle}, RM Software, security, CRM, logistics`} />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="author" content="RM Software" />
                <meta name="language" content="Czech, English" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content={seoMeta.ogType} />
                <meta property="og:url" content={seoMeta.ogUrl} />
                <meta property="og:title" content={seoMeta.ogTitle} />
                <meta property="og:description" content={seoMeta.ogDescription} />
                <meta property="og:image" content={seoMeta.ogImage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="RM Software" />
                <meta property="og:locale" content="cs_CZ" />
                <meta property="og:locale:alternate" content="en_US" />
                
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={seoMeta.url} />
                <meta name="twitter:title" content={seoMeta.ogTitle} />
                <meta name="twitter:description" content={seoMeta.ogDescription} />
                <meta name="twitter:image" content={seoMeta.ogImage} />
                
                {/* Canonical URL */}
                <link rel="canonical" href={seoMeta.url} />
                
                {/* Alternate language versions */}
                <link rel="alternate" hrefLang="cs" href={seoMeta.url} />
                <link rel="alternate" hrefLang="en" href={seoMeta.url} />
                <link rel="alternate" hrefLang="x-default" href={seoMeta.url} />
                
                {/* Structured Data (JSON-LD) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Product",
                            "name": product.title,
                            "description": seoMeta.description,
                            "url": seoMeta.url,
                            "image": seoMeta.ogImage,
                            "brand": {
                                "@type": "Brand",
                                "name": "RM Software"
                            },
                            "manufacturer": {
                                "@type": "Organization",
                                "name": "RM Software"
                            },
                            "offers": {
                                "@type": "Offer",
                                "availability": "https://schema.org/InStock",
                                "priceCurrency": "CZK",
                                "url": seoMeta.url
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "reviewCount": "1"
                            }
                        })
                    }}
                />
            </Head>
            <Header />
            <div className="top_section_header">
                <div>
                    <HomeIcon />
                    <ArrowIcon />
                    <Link href="/Products" className="top_section_header_text">Products</Link>
                    <ArrowIcon />
                    <span className="top_section_header_text">{product.title}</span>
                </div>
            </div>
            <section className="product_single_section">
                <div className="product_single_wrapper">
                    <div className="product_single_content">
                            {product.top && (
                                <>
                                    <h1 className="product_single_title">
                                        {product.top.topTitle}
                                    </h1>
                                    <p className="product_single_description_text">
                                        {product.top.topDescription}
                                    </p>
                                    <p className="product_single_description_text">{product.top.topFullDescription}</p>
                                    <p className="product_single_description_text">{product.top.topFullDescription2}</p>
                                </>
                            ) }
                    </div>
                </div>
               
            </section>
            <section className="advantages_section">
                <div className="advantages_section_wrapper">
                        {product.advantages && product.advantages.length > 0 && (
                                <div className="advantages_section_container">
                                        {product.advantages.map((advantage) => {
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
                {product.aboutSeezus && (
                            <div className='about_seezus_section_items_wrapper'>
                                <div className="about_seezus_section_content">
                                    <h2 className="about_seezus_section_title">{product.aboutSeezus.aboutTitle}</h2>
                                    <p className="about_seezus_section_text">{product.aboutSeezus.aboutDescription1}</p>
                                    <p className="about_seezus_section_text">{product.aboutSeezus.aboutDescription2}</p>
                                    <p className="about_seezus_section_text">{product.aboutSeezus.aboutDescription}</p>
                                </div>
                                <div className="about_seezus_section_image">
                                    <img src={product.aboutSeezus.image} alt={product.aboutSeezus.aboutTitle} />
                                </div>
                            </div>
                    )}

                </div>
            </section>      
            <section className="how_it_works_section">
                <div className="how_it_works_section_wrapper">
                    <div className="how_it_works_section_content">
                        <h2 className="how_it_works_section_title">{product.howItWorks.howItWorksTitle}</h2>
                        {product.howItWorks && (
                                <div className="how_it_works_section_items">
                                    {product.howItWorks.howItWorksItems.map((item) => {
                                        const IconComponent = item.icon;
                                        return (
                                            <div className="how_it_works_section_item" key={item.id}>
                                                <div className="how_it_works_section_item_icon">
                                                    <IconComponent />
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
                        {product.solution && (() => {
                            const SolutionIcon = product.solution.solutionIcon;
                            return (
                                <div className="solution_section_item">
                                    <div className="solution_section_item_content1">
                                        {SolutionIcon && <SolutionIcon />}
                                            <div>
                                                <h2 className="product_single_features_title">{product.solution.solutionTitle}</h2>
                                                <p className="solution_section_item_description">
                                                    {product.solution.solutionDescription}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="solution_section_item_content2">
                                            {product.solution.solutionItems.map((item) => {
                                                const IconComponent = item.icon;
                                                return (
                                                    <div key={item.id} className="solution_section_item_content2_item">
                                                        <div className="solution_section_item_content2_item_icon">
                                                            <IconComponent />
                                                        </div>
                                                        <h3 className="solution_section_item_content2_item_title">
                                                            {item.title}
                                                        </h3>
                                                    </div>
                                                );
                                            })}
                                        </div>
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
                       
                        {product.whatMakesSeezusSmart && product.whatMakesSeezusSmart.length > 0 && (
                            <>
                             {product.whatMakesSeezusSmart.map((section) => (
                                    <div key={section.id} className="what_makes_smart_section_item">
                                        <h2 className="what_makes_smart_section_title">{section.title}</h2>
                                        <ul className="what_makes_smart_section_list">
                                            {section.steps.map((step, index) => (
                                                <li 
                                                    key={index} 
                                                    className="what_makes_smart_section_list_item"
                                                >
                                                    
                                                    <span className="what_makes_smart_section_list_item_text">
                                                        {step}
                                                    </span>
                                                    {/* {step} */}
                                                </li>
                                            ))}
                                        </ul>
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
                                            <a href="/Products/distribox" className="contacts_link">Distribox</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a href="/Products/gugu" className="contacts_link">GuGu</a>
                                        </li>
                                        <li className="contacts_item">
                                            <a href="/Products/seezus" className="contacts_link">Seezus</a>
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
            <Footer />
        </main>
    );
};

export default ProductSingle;

