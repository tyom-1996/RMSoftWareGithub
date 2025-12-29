// pages/Products/[slug].tsx
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ContactSection from "../../components/ContactSection";
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

// Localized product data
const productSingle = {
  en: [
    {
      id: 1,
      slug: "seezus",
      title: "SEEZUS",
      top: {
        topTitle: "AI-Powered Security That Understands What's Happening",
        topDescription:
          "Smart video surveillance with artificial intelligence that detects real threats, ignores false alarms, and works even without the internet.",
        topFullDescription:
          "Traditional security cameras only record video. Seezus goes further — it understands context.",
        topFullDescription2:
          "In case of suspicious activity, intrusion, or danger, Seezus analyzes the scene in real time and alerts you instantly, while ignoring irrelevant motion like shadows, trees, or lighting changes.",
      },
      advantages: [
        {
          id: 1,
          img: "/images/advantage_img1.png",
          title: "Intelligent Threat Detection",
          description:
            "Seezus detects people, vehicles, animals, weapons, abandoned objects, falls, and aggressive behavior — not just motion.",
          icon: DividerIcon2,
        },
        {
          id: 2,
          img: "/images/advantage_img2.png",
          title: "Fewer False Alarms",
          description:
            "AI filters out shadows, sunlight, weather effects, and other irrelevant movement, so you only get alerts that matter.",
          icon: DividerIcon2,
        },
        {
          id: 3,
          img: "/images/advantage_img3.png",
          title: "Works Offline",
          description:
            "All AI processing runs directly on the device. Your security system continues to operate even without an internet connection.",
          icon: DividerIcon2,
        },
        {
          id: 4,
          img: "/images/advantage_img4.png",
          title: "Flexible Integration",
          description:
            "Easily integrates with existing IP or analog cameras, without replacing your current infrastructure.",
        },
      ],
      aboutSeezus: {
        aboutTitle: "What Is Seezus?",
        aboutDescription1:
          "Seezus is an intelligent video security system powered by artificial intelligence.",
        aboutDescription2:
          "When a theft, intrusion, accident, or dangerous situation occurs, Seezus analyzes video streams in real time and identifies what is actually happening — who is involved, where it happened, and when.",
        aboutDescription:
          "Unlike traditional systems that only store footage, Seezus understands events and provides actionable alerts with full context, video playback, timestamps, and descriptions.",
        image: "/images/whatis_img.png",
      },
      howItWorks: {
        howItWorksTitle: "HOW SEEZUS WORKS",
        howItWorksItems: [
          {
            id: 1,
            icon: HowItWorksIcon1,
            title: "Connect Your Cameras",
            description:
              "Connect your existing IP or analog cameras to the Seezus system — no complex setup required.",
          },
          {
            id: 2,
            icon: HowItWorksIcon2,
            title: "AI Analyzes Video",
            description:
              "Seezus processes video locally using on-device AI, detecting people, vehicles, objects, and behavior in real time.",
          },
          {
            id: 3,
            icon: HowItWorksIcon3,
            title: "Smart Alerts",
            description:
              "You receive instant notifications via mobile app, email, SMS, or messengers — only when something important happens.",
          },
          {
            id: 4,
            icon: HowItWorksIcon4,
            title: "Review & Act",
            description:
              "View recorded events with timestamps, descriptions, and full playback history to quickly investigate and respond.",
          },
        ],
      },
      solution: {
        solutionIcon: SolutionIcon4,
        solutionTitle: "Find the Right Seezus Solution for You",
        solutionDescription: "Not sure which setup fits your needs? We're happy to help.",
        solutionItems: [
          { id: 1, icon: SolutionIcon1, title: "Call me" },
          { id: 2, icon: SolutionIcon2, title: "Write to us" },
          { id: 3, icon: SolutionIcon3, title: "Start chat" },
        ],
      },
      whatMakesSeezusSmart: [
        {
          id: 1,
          title: "What Makes Seezus Smart",
          steps: [
            "Detects people, vehicles, animals, clothing, safety gear, and behavior",
            "Identifies firearms, fights, falls, and people lying on the ground",
            "Counts people, vehicles, bags, and objects in defined zones",
            "Detects abandoned objects and unusual movement",
            "Performs face recognition with identity history",
            "Analyzes vehicle attributes and license plates (ANPR)",
            "Stores unlimited video and metadata locally",
            "Sends alerts via app, email, SMS, and messengers",
          ],
        },
        {
          id: 2,
          title: "USE CASES BLOCK",
          steps: [
            "Home Security",
            "Prevents break-ins, detects intruders, and ignores harmless movement like pets or trees.",
            "Business & Industry",
            "Monitors restricted areas, detects safety violations (helmets, vests), and tracks incidents in real time.",
            "Public Spaces",
            "Counts people, monitors crowd behavior, detects abandoned items, and improves public safety.",
          ],
        },
        {
          id: 3,
          title: "Smart Processing, Simple Integration",
          steps: [
            "Camera → On-Device AI Processing → Local Storage → Smart Notifications",
            "Seezus processes video at the edge, without relying on cloud infrastructure.",
            "This ensures high performance, privacy, and reliability — even during network outages.",
          ],
        },
        {
          id: 4,
          title: "Built to Scale",
          steps: [
            "Add more processing units as your camera network grows",
            "Start small and expand without redesigning the system",
            "Automatically prioritizes critical cameras under high load",
            "Scales from small installations to enterprise deployments with hundreds of cameras",
          ],
        },
        {
          id: 5,
          title: "Designed for Maximum Reliability",
          steps: [
            "Seezus uses a distributed architecture with built-in redundancy.",
            "If one device fails, the system automatically redistributes the workload, ensuring that critical cameras remain active without interruption.",
            "There is no single point of failure — your security stays online when you need it most.",
          ],
        },
        {
          id: 6,
          title: "Questions, Answers, and Documentation",
          steps: [
            "We know choosing the right security system isn't easy.",
            "That's why we've prepared clear answers to the most common questions, along with detailed documentation and technical specifications.",
            "If you need additional help, our team is ready to assist you.",
          ],
        },
      ],
    },
    {
      id: 2,
      slug: "gugu",
      title: "GuGu",
      top: {
        topTitle: "GuGu — Complete CRM & Field Service Management System",
        topDescription:
          "Manage customers, orders, teams, and field operations — all from one unified platform.",
        topFullDescription:
          "GuGu combines powerful CRM capabilities with advanced mobile support for field teams. Track customer interactions, streamline workflows, plan visits, and stay connected in real time — even when working offline.",
      },
      advantages: [
        {
          id: 1,
          img: "/images/advantage_img5.png",
          title: "Centralized Customer & Order Management",
          description:
            "Store all customer data, orders, and service history in one system for faster decisions and better customer service.",
        },
        {
          id: 2,
          img: "/images/advantage_img6.png",
          title: "Real-Time Field Coordination",
          description:
            "Plan, dispatch, and track visits with precision using integrated calendars and live GPS tracking.",
        },
        {
          id: 3,
          img: "/images/advantage_img7.png",
          title: "Efficient Task & Resource Planning",
          description:
            "Visual planning tools help you assign teams, manage workloads, and optimize routes and resources.",
        },
        {
          id: 4,
          img: "/images/advantage_img8.png",
          title: "Mobile-First Experience",
          description:
            "Field workers stay productive with offline mode, instant reporting, photo documentation, and automatic time tracking.",
        },
      ],
      aboutSeezus: {
        aboutTitle: "What Is GuGu CRM?",
        aboutDescription1:
          "GuGu is a modern CRM and field service management system designed for businesses that operate both in the office and in the field.",
        aboutDescription2:
          "Manage customers, plan work, track employees and vehicles, document completed jobs, and automate invoicing — all within one platform.",
        aboutDescription: "",
        image: "/images/whatis_img.png",
      },
      howItWorks: {
        howItWorksTitle: "HOW GUGU WORKS",
        howItWorksItems: [
          {
            id: 1,
            icon: HowItWorksIcon1,
            title: "Centralize Your Data",
            description:
              "All customer contacts, service history, orders, and communication are stored in one place and shared across your team.",
          },
          {
            id: 2,
            icon: HowItWorksIcon2,
            title: "Plan & Dispatch Work",
            description:
              "Use GuGu's intuitive dashboard to schedule visits, assign tasks, and organize field teams with full operational visibility.",
          },
          {
            id: 3,
            icon: HowItWorksIcon3,
            title: "Track Field Progress",
            description:
              "Monitor technicians in real time with GPS tracking, job status updates, and automatic attendance logging.",
          },
          {
            id: 4,
            icon: HowItWorksIcon4,
            title: "Review & Act",
            description:
              "Review completed jobs with timestamps, notes, photos, and full history — then close tasks, invoice customers, and optimize future planning.",
          },
        ],
      },
      solution: {
        solutionIcon: SolutionIcon4,
        solutionTitle: "Ready to Simplify Your CRM & Field Operations?",
        solutionDescription: "Let's find the GuGu setup that fits your business.",
        solutionItems: [
          { id: 1, icon: SolutionIcon1, title: "Request a Quote" },
          { id: 2, icon: SolutionIcon2, title: "Book a Demo" },
          { id: 3, icon: SolutionIcon3, title: "Contact Us" },
        ],
      },
      whatMakesSeezusSmart: [
        {
          id: 1,
          title: "CORE FEATURES BLOCK",
          steps: [
            "Key Features That Drive Productivity",
            "Web-based CRM for customers, orders, employees, and materials",
            "Visit scheduling and task planning",
            "GPS tracking and real-time job status",
            "Mobile app with offline support",
            "Photo capture and field documentation",
            "Automated invoicing and reporting",
            "Role-based access and data security",
            "API integrations with existing systems",
          ],
        },
        {
          id: 2,
          title: "USE CASES BLOCK",
          steps: [
            "Service & Maintenance Companies",
            "Improve response times, reduce administrative work, and deliver consistent service quality.",
            "Field Technician Teams",
            "Empower technicians with mobile tools, navigation, offline access, and instant reporting from the job site.",
            "Dispatchers & Operations Managers",
            "Gain full control over workloads, routes, and field performance in one clear dashboard.",
            "Business Owners",
            "Increase efficiency, automate processes, and scale operations without chaos.",
          ],
        },
        {
          id: 3,
          title: "One System for Office and Field",
          steps: [
            "GuGu connects office staff and field teams into a single workflow. The web CRM and mobile app work seamlessly together, synchronizing data automatically and ensuring that no information is lost — even when technicians work offline.",
          ],
        },
        {
          id: 4,
          title: "Built for Real-World Operations",
          steps: [
            "GuGu is designed to grow with your business.",
            "Whether you manage a small team or a large field service organization, the system scales smoothly and remains reliable in demanding, real-world conditions.",
          ],
        },
        {
          id: 5,
          title: "Questions, Answers, and Documentation",
          steps: [
            "Choosing the right CRM is an important decision.",
            "Here you'll find answers to common questions, detailed documentation, and implementation guidance.",
            "Our team is always ready to help if you need more information.",
          ],
        },
      ],
    },
    {
      id: 3,
      slug: "distribox",
      title: "Distribox",
      top: {
        topTitle: "Distribox — Smart Self-Service Pickup & Delivery Boxes",
        topDescription:
          "Flexible, secure, and automated lockers for contactless parcel delivery and pickup.",
        topFullDescription:
          "Distribox designs and manufactures high-quality smart self boxes tailored to your needs. Whether for e-commerce, residential deliveries, libraries, or retail, our modular systems make package handling fast, safe, and available 24/7.",
      },
      advantages: [
        {
          id: 1,
          img: "/images/advantage_img12.png",
          title: "24/7 Contactless Parcel Pickup",
          description: "Recipients retrieve packages anytime without staff assistance.",
        },
        {
          id: 2,
          img: "/images/advantage_img9.png",
          title: "Customizable and Scalable",
          description: "Adapt box sizes, compartment layouts, and features for any use case.",
        },
        {
          id: 3,
          img: "/images/advantage_img10.png",
          title: "Seamless System Integration",
          description: "Connect Distribox with e-shops, ERP systems, or existing software via API.",
        },
        {
          id: 4,
          img: "/images/advantage_img11.png",
          title: "Reliable & Secure",
          description:
            "Electric locks, real-time status monitoring, and optional notifications (SMS/email) ensure safety and transparency.",
        },
      ],
      aboutSeezus: {
        aboutTitle: "What Is Distribox Self Box System?",
        aboutDescription1: "What to show during opening/closing?",
        aboutDescription2:
          "Modern API connectivity, remote management, and continuous support give you full control over delivery processes without manual intervention.",
        aboutDescription: "",
        image: "/images/whatis_img.png",
      },
      howItWorks: {
        howItWorksTitle: "HOW DISTRIBOX WORKS",
        howItWorksItems: [
          {
            id: 1,
            icon: HowItWorksIcon1,
            title: "Tailored Setup",
            description:
              "We design and build your Distribox system based on your space, goals, and customer needs.",
          },
          {
            id: 2,
            icon: HowItWorksIcon2,
            title: "Integration with Your Systems",
            description:
              "Connect the lockers to your e-commerce platform, CRM, warehouse system, or ERP via API for automated operations.",
          },
          {
            id: 3,
            icon: HowItWorksIcon3,
            title: "Automated Delivery & Pickup",
            description:
              "Couriers place packages into designated compartments, and recipients are notified via SMS or email when items are ready.",
          },
          {
            id: 4,
            icon: HowItWorksIcon4,
            title: "Monitor & Manage",
            description:
              "Box status, usage history, and access logs are available online 24/7 — you stay in control of your delivery ecosystem.",
          },
        ],
      },
      solution: {
        solutionIcon: SolutionIcon4,
        solutionTitle: "Choose the Right Distribox Setup",
        solutionDescription: "Tell us your requirements and we'll configure the right locker system.",
        solutionItems: [
          { id: 1, icon: SolutionIcon1, title: "Request a Call" },
          { id: 2, icon: SolutionIcon2, title: "Send a Message" },
          { id: 3, icon: SolutionIcon3, title: "Start a Chat" },
        ],
      },
      whatMakesSeezusSmart: [
        {
          id: 1,
          title: "Why Distribox",
          steps: [
            "24/7 contactless pickup",
            "Customizable modules and box sizes",
            "API-ready for e-shops and ERP",
            "Secure and monitored lockers",
          ],
        },
        {
          id: 2,
          title: "Use Cases",
          steps: [
            "E-commerce parcel pickup",
            "Residential deliveries",
            "Libraries and retail",
            "Campus and corporate drop-off",
          ],
        },
        {
          id: 3,
          title: "How It Operates",
          steps: [
            "Courier delivers to locker",
            "Recipient gets SMS/email",
            "Secure PIN/QR opens compartment",
            "Remote monitoring and logs",
          ],
        },
      ],
    },
  ],
  cz: [
    {
      id: 1,
      slug: "seezus",
      title: "SEEZUS",
      top: {
        topTitle: "AI bezpečnost, která chápe, co se děje",
        topDescription:
          "Chytrý kamerový dohled s umělou inteligencí, která rozpozná reálné hrozby, ignoruje plané poplachy a funguje i bez internetu.",
        topFullDescription:
          "Běžné kamery jen nahrávají video. Seezus jde dál — rozumí kontextu.",
        topFullDescription2:
          "Při podezřelé aktivitě Seezus v reálném čase vyhodnotí situaci a okamžitě upozorní, zatímco ignoruje stíny, pohyb stromů nebo změny světla.",
      },
      advantages: [
        {
          id: 1,
          img: "/images/advantage_img1.png",
          title: "Inteligentní detekce hrozeb",
          description:
            "Seezus detekuje osoby, vozidla, zvířata, zbraně, odložené předměty, pády i agresi — ne jen pohyb.",
          icon: DividerIcon2,
        },
        {
          id: 2,
          img: "/images/advantage_img2.png",
          title: "Méně falešných poplachů",
          description:
            "AI odfiltruje stíny, slunce, počasí a další nerelevantní pohyb, takže dostáváte jen důležitá upozornění.",
          icon: DividerIcon2,
        },
        {
          id: 3,
          img: "/images/advantage_img3.png",
          title: "Funguje offline",
          description:
            "Veškeré AI zpracování běží přímo na zařízení. Systém chrání i bez internetového připojení.",
          icon: DividerIcon2,
        },
        {
          id: 4,
          img: "/images/advantage_img4.png",
          title: "Flexibilní integrace",
          description:
            "Snadno se napojí na stávající IP či analogové kamery bez jejich výměny.",
        },
      ],
      aboutSeezus: {
        aboutTitle: "Co je Seezus?",
        aboutDescription1: "Seezus je inteligentní video bezpečnostní systém s AI.",
        aboutDescription2:
          "Při krádeži, vniknutí či nehodě Seezus analyzuje videostreamy v reálném čase a ví, co se skutečně děje — kdo, kde a kdy.",
        aboutDescription:
          "Na rozdíl od běžných systémů, které jen ukládají záznam, Seezus chápe události a dává akční alerty s kontextem, přehrávkou, časem a popisem.",
        image: "/images/whatis_img.png",
      },
      howItWorks: {
        howItWorksTitle: "JAK SEEZUS FUNGUJE",
        howItWorksItems: [
          {
            id: 1,
            icon: HowItWorksIcon1,
            title: "Připojte kamery",
            description: "Napojte své IP nebo analogové kamery na Seezus — bez složité instalace.",
          },
          {
            id: 2,
            icon: HowItWorksIcon2,
            title: "AI analyzuje video",
            description:
              "Seezus lokálně zpracovává video a v reálném čase detekuje osoby, vozidla, objekty i chování.",
          },
          {
            id: 3,
            icon: HowItWorksIcon3,
            title: "Chytré alerty",
            description:
              "Dostáváte okamžitá upozornění přes aplikaci, e-mail, SMS či messengery — jen když se děje něco důležitého.",
          },
          {
            id: 4,
            icon: HowItWorksIcon4,
            title: "Vyhodnoťte a jednejte",
            description:
              "Prohlédnete si události s časy, popisy a historií přehrávání a rychle zasáhnete.",
          },
        ],
      },
      solution: {
        solutionIcon: SolutionIcon4,
        solutionTitle: "Najděte správné Seezus řešení",
        solutionDescription: "Nejste si jistí? Rádi poradíme.",
        solutionItems: [
          { id: 1, icon: SolutionIcon1, title: "Zavoláme vám" },
          { id: 2, icon: SolutionIcon2, title: "Napište nám" },
          { id: 3, icon: SolutionIcon3, title: "Zahajte chat" },
        ],
      },
      whatMakesSeezusSmart: [
        {
          id: 1,
          title: "Co dělá Seezus chytrým",
          steps: [
            "Detekce osob, vozidel, zvířat, výstroje a chování",
            "Rozpoznání zbraní, potyček, pádů a ležících osob",
            "Počítání lidí, vozidel a objektů v zónách",
            "Detekce odložených předmětů a neobvyklého pohybu",
            "Rozpoznání obličeje s historií identity",
            "Analýza atributů vozidel a SPZ (ANPR)",
            "Lokální úložiště videa a metadat",
            "Alerty přes appku, e-mail, SMS i messengery",
          ],
        },
        {
          id: 2,
          title: "USE CASES",
          steps: [
            "Domácí bezpečnost",
            "Zabrání vloupání, detekuje narušitele a ignoruje pohyb mazlíčků či stromů.",
            "Firmy a průmysl",
            "Sleduje zakázané zóny, bezpečnostní přestupky (helmy, vesty) a incidenty v reálném čase.",
            "Veřejný prostor",
            "Počítá lidi, sleduje dav, detekuje odložené věci a zvyšuje bezpečnost.",
          ],
        },
        {
          id: 3,
          title: "Chytré zpracování, jednoduchá integrace",
          steps: [
            "Kamera → lokální AI → úložiště → chytré notifikace",
            "Běží na edge bez závislosti na cloudu",
            "Stabilní, soukromé a spolehlivé i při výpadku sítě",
          ],
        },
        {
          id: 4,
          title: "Škálování",
          steps: [
            "Přidávejte výkon podle růstu kamer",
            "Začněte v malém a rozšiřujte bez redesignu",
            "Prioritizace kritických kamer při zátěži",
            "Od malých instalací po stovky kamer",
          ],
        },
        {
          id: 5,
          title: "Maximální spolehlivost",
          steps: [
            "Distribuovaná architektura s redundancí",
            "Při výpadku zařízení se zátěž přerozdělí",
            "Bez single point of failure — bezpečnost online i při poruše",
          ],
        },
        {
          id: 6,
          title: "Otázky a dokumentace",
          steps: [
            "Výběr bezpečnostního systému není snadný",
            "Máme odpovědi na časté dotazy a dokumentaci",
            "Pomůžeme vám s rozhodnutím i implementací",
          ],
        },
      ],
    },
    {
      id: 2,
      slug: "gugu",
      title: "GuGu",
      top: {
        topTitle: "GuGu — CRM a řízení terénu v jednom",
        topDescription:
          "Spravujte zákazníky, objednávky, týmy i terénní provoz z jedné platformy.",
        topFullDescription:
          "GuGu spojuje výkonné CRM s podporou mobilních týmů. Sledujte interakce, plánujte návštěvy a pracujte online i offline v reálném čase.",
      },
      advantages: [
        {
          id: 1,
          img: "/images/advantage_img5.png",
          title: "Centralizace zákazníků a objednávek",
          description:
            "Data o zákaznících, objednávkách a historii služeb na jednom místě pro rychlejší rozhodování.",
        },
        {
          id: 2,
          img: "/images/advantage_img6.png",
          title: "Koordinace v terénu",
          description:
            "Plánujte, dispečujte a sledujte návštěvy s GPS a kalendáři.",
        },
        {
          id: 3,
          img: "/images/advantage_img7.png",
          title: "Plánování zdrojů",
          description:
            "Přehledné plánovače pro týmy, workload i trasy.",
        },
        {
          id: 4,
          img: "/images/advantage_img8.png",
          title: "Mobilní-first",
          description:
            "Offline režim, reporty, fotodokumentace a automatický time tracking pro techniky.",
        },
      ],
      aboutSeezus: {
        aboutTitle: "Co je GuGu CRM?",
        aboutDescription1:
          "Moderní CRM a řízení terénních služeb pro firmy v kanceláři i v terénu.",
        aboutDescription2:
          "Spravujte zákazníky, plánujte práci, sledujte týmy a fakturujte — vše v jedné platformě.",
        aboutDescription: "",
        image: "/images/whatis_img.png",
      },
      howItWorks: {
        howItWorksTitle: "JAK FUNGUJE GUGU",
        howItWorksItems: [
          {
            id: 1,
            icon: HowItWorksIcon1,
            title: "Centralizujte data",
            description:
              "Kontakty, historie služeb, objednávky a komunikace na jednom místě a sdílené v týmu.",
          },
          {
            id: 2,
            icon: HowItWorksIcon2,
            title: "Plánujte a dispečujte",
            description:
              "Intuitivní dashboard pro plánování návštěv, úkolů a řízení terénních týmů.",
          },
          {
            id: 3,
            icon: HowItWorksIcon3,
            title: "Sledujte průběh v terénu",
            description:
              "GPS tracking, statusy zakázek a automatická docházka v reálném čase.",
          },
          {
            id: 4,
            icon: HowItWorksIcon4,
            title: "Vyhodnoťte a jednejte",
            description:
              "Zavrhněte/uzavřete úkoly s časem, poznámkami, fotkami a historií a fakturujte.",
          },
        ],
      },
      solution: {
        solutionIcon: SolutionIcon4,
        solutionTitle: "Zjednodušte CRM i terénní provoz",
        solutionDescription: "Najdeme GuGu sestavu, která sedí vašemu byznysu.",
        solutionItems: [
          { id: 1, icon: SolutionIcon1, title: "Poptat nabídku" },
          { id: 2, icon: SolutionIcon2, title: "Objednat demo" },
          { id: 3, icon: SolutionIcon3, title: "Kontaktovat nás" },
        ],
      },
      whatMakesSeezusSmart: [
        {
          id: 1,
          title: "Klíčové funkce",
          steps: [
            "Webové CRM pro zákazníky, objednávky a týmy",
            "Plánování návštěv a úkolů",
            "GPS tracking a statusy",
            "Mobilní appka s offline podporou",
            "Fotodokumentace a reporting",
            "Automatická fakturace",
            "Role-based přístupy a bezpečnost dat",
            "API integrace",
          ],
        },
        {
          id: 2,
          title: "Use-cases",
          steps: [
            "Servisní a údržbové firmy",
            "Terénní technici",
            "Dispečeři a provozní manažeři",
            "Majitelé firem",
          ],
        },
        {
          id: 3,
          title: "Jeden systém pro kancelář i terén",
          steps: [
            "Webové CRM a mobilní appka synchronizují data automaticky, i offline.",
          ],
        },
        {
          id: 4,
          title: "Připraveno na praxi",
          steps: [
            "Roste s vaším týmem",
            "Od malých týmů po velké organizace",
          ],
        },
        {
          id: 5,
          title: "Otázky a dokumentace",
          steps: [
            "Najdete odpovědi, dokumentaci a podporu",
          ],
        },
      ],
    },
    {
      id: 3,
      slug: "distribox",
      title: "Distribox",
      top: {
        topTitle: "Distribox — chytré boxy pro výdej a doručení",
        topDescription:
          "Flexibilní, bezpečné a automatizované boxy pro bezkontaktní doručování a výdej zásilek.",
        topFullDescription:
          "Distribox navrhuje a vyrábí chytré výdejní boxy na míru. Pro e‑shopy, bydlení, knihovny i retail — modulární systém, nonstop dostupný.",
      },
      advantages: [
        {
          id: 1,
          img: "/images/advantage_img12.png",
          title: "24/7 bezkontaktní výdej",
          description: "Zákazníci vyzvednou kdykoli bez obsluhy.",
        },
        {
          id: 2,
          img: "/images/advantage_img9.png",
          title: "Přizpůsobitelné a škálovatelné",
          description: "Konfigurace velikostí, přihrádek a funkcí pro libovolné scénáře.",
        },
        {
          id: 3,
          img: "/images/advantage_img10.png",
          title: "Integrace systémů",
          description: "Napojení na e-shopy, ERP či existující software přes API.",
        },
        {
          id: 4,
          img: "/images/advantage_img11.png",
          title: "Spolehlivé a bezpečné",
          description:
            "Elektronické zámky, online monitoring a volitelné SMS/e-mail notifikace pro transparentnost a bezpečí.",
        },
      ],
      aboutSeezus: {
        aboutTitle: "Co je Distribox?",
        aboutDescription1: "Co zobrazit při otevírání/zavírání?",
        aboutDescription2:
          "Moderní API, vzdálená správa a podpora vám dávají plnou kontrolu nad doručením bez ruční práce.",
        aboutDescription: "",
        image: "/images/whatis_img.png",
      },
      howItWorks: {
        howItWorksTitle: "JAK FUNGUJE DISTRIBOX",
        howItWorksItems: [
          {
            id: 1,
            icon: HowItWorksIcon1,
            title: "Návrh na míru",
            description:
              "Navrhneme a postavíme boxový systém podle prostoru, cílů a potřeb zákazníků.",
          },
          {
            id: 2,
            icon: HowItWorksIcon2,
            title: "Integrace se systémy",
            description:
              "Propojte boxy s e-shopem, CRM, skladem či ERP přes API pro automatizaci.",
          },
          {
            id: 3,
            icon: HowItWorksIcon3,
            title: "Automatizované doručení a výdej",
            description:
              "Kurýr vloží balík, příjemce dostane SMS/e-mail a vyzvedne bezpečně pomocí kódu/QR.",
          },
          {
            id: 4,
            icon: HowItWorksIcon4,
            title: "Monitoring a správa",
            description:
              "Stav boxů, historie a přístupy online 24/7 — plná kontrola nad doručováním.",
          },
        ],
      },
      solution: {
        solutionIcon: SolutionIcon4,
        solutionTitle: "Vyberte správný Distribox",
        solutionDescription: "Sdělte požadavky a nastavíme vhodnou konfiguraci boxů.",
        solutionItems: [
          { id: 1, icon: SolutionIcon1, title: "Zavoláme vám" },
          { id: 2, icon: SolutionIcon2, title: "Napište nám" },
          { id: 3, icon: SolutionIcon3, title: "Spusťte chat" },
        ],
      },
      whatMakesSeezusSmart: [
        {
          id: 1,
          title: "Proč Distribox",
          steps: [
            "24/7 bezkontaktní výdej",
            "Modulární konfigurace a velikosti",
            "API připraveno pro e-shopy a ERP",
            "Bezpečné a monitorované boxy",
          ],
        },
        {
          id: 2,
          title: "Use-cases",
          steps: [
            "E-commerce výdej",
            "Rezidenční doručení",
            "Knihovny a retail",
            "Kampusy a firmy",
          ],
        },
        {
          id: 3,
          title: "Jak probíhá",
          steps: [
            "Kurýr vloží balík",
            "Příjemce dostane SMS/e-mail",
            "PIN/QR otevře přihrádku",
            "Vzdálený monitoring a logy",
          ],
        },
      ],
    },
  ],
} as const;

const ProductSinglePage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const locale = router.locale === "en" ? "en" : "cz";

  const products = productSingle[locale];
  const product = products.find((p) => p.slug === slug);

  if (!product) return null;

  const { top, advantages, aboutSeezus, howItWorks, solution, whatMakesSeezusSmart } = product;

  return (
    <main className="main_page">
      <Head>
        <title>{product.title}</title>
      </Head>
      <Header />
      <main>
        <section className="top_section_contacts">
          <div className="top_section_header">
            <div>
              <HomeIcon />
              <ArrowIcon />
              <span className="top_section_header_text">{product.title}</span>
            </div>
          </div>
        </section>

        <section className="product_single_section">
          <div className="product_single_wrapper">
            <div className="product_single_content">
              <h1 className="product_single_title">{top.topTitle}</h1>
              <p className="product_single_description_text">{top.topDescription}</p>
              {top.topFullDescription && (
                <p className="product_single_description_text">{top.topFullDescription}</p>
              )}
              {top.topFullDescription2 && (
                <p className="product_single_description_text">{top.topFullDescription2}</p>
              )}
            </div>
          </div>
        </section>

        <section className="advantages_section">
          <div className="advantages_section_wrapper">
            {advantages && advantages.length > 0 && (
              <div className="advantages_section_container">
                {advantages.map((advantage, index) => {
                  const IconComponent = advantage.icon as any;
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
                        <h3 className="advantages_section_title">{advantage.title}</h3>
                        <p className="advantages_section_text">{advantage.description}</p>
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
            <div className="about_seezus_section_items_wrapper">
              <div className="about_seezus_section_content">
                <div className="about_seezus_section_content_wrapper">
                  <h2 className="about_seezus_section_title">{aboutSeezus.aboutTitle}</h2>
                  <p className="about_seezus_section_text">{aboutSeezus.aboutDescription1}</p>
                  <p className="about_seezus_section_text">{aboutSeezus.aboutDescription2}</p>
                  {aboutSeezus.aboutDescription && (
                    <p className="about_seezus_section_text">{aboutSeezus.aboutDescription}</p>
                  )}
                </div>
              </div>
              {/* <div className="about_seezus_section_image">
                <img src={aboutSeezus.image} alt="about" />
              </div> */}
            </div>
          </div>
        </section>

        <section className="how_it_works_section">
          <div className="how_it_works_section_wrapper">
            <div className="how_it_works_section_content">
              <h2 className="how_it_works_section_title">{howItWorks.howItWorksTitle}</h2>
              {howItWorks && (
                <div className="how_it_works_section_items">
                  {howItWorks.howItWorksItems.map((item) => {
                    const IconComponent = item.icon as any;
                    return (
                      <div className="how_it_works_section_item" key={item.id}>
                        <div className="how_it_works_section_item_icon">
                          {IconComponent && <IconComponent />}
                        </div>
                        <h3 className="how_it_works_section_item_title">{item.title}</h3>
                        <p className="how_it_works_section_item_description">{item.description}</p>
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
                const SolutionIcon = solution.solutionIcon as any;
                return (
                  <div className="solution_section_item">
                    <div className="solution_section_item_content1">
                      <div className="solution_section_item_content1_wrapper">
                        {SolutionIcon && <SolutionIcon />}
                        <div>
                          <h2 className="product_single_features_title">{solution.solutionTitle}</h2>
                        </div>
                      </div>
                     <p className="solution_section_item_description">{solution.solutionDescription}</p>
                    </div>
                    
                    <div className="solution_section_item_content2">
                        {solution.solutionItems.map((item: any) => {
                          const IconComponent = item.icon as any;
                          return (
                            <div key={item.id} className="solution_section_item_content2_item">
                              <div className="solution_section_item_content2_item_icon">
                                {IconComponent && <IconComponent />}
                              </div>
                              <h3 className="solution_section_item_content2_item_title">{item.title}</h3>
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
              {whatMakesSeezusSmart && whatMakesSeezusSmart.length > 0 && (
                <>
                  {whatMakesSeezusSmart.map((section) => (
                    <div key={section.id} className="what_makes_smart_section_item">
                      <h2 className="what_makes_smart_section_title">{section.title}</h2>
                      <div className="what_makes_smart_section_list">
                        {section.steps.map((step, index) => (
                          <div key={index} className="what_makes_smart_section_list_item">
                            <p className="what_makes_smart_section_list_item_text">{step}</p>
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

        <ContactSection />
      </main>
      <Footer />
    </main>
  );
};

export default ProductSinglePage;
