import React from "react";
import { useRouter } from "next/router";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import ContactSection from "../../../components/ContactSection";
import HomeIcon from "../../../assets/icons/homeIcon";
import ArrowIcon from "../../../assets/icons/arrowIcon";
import "../../../assets/css/product.css";
import HowItWorksIcon1 from "../../../assets/icons/howItWorksIcon1";
import HowItWorksIcon2 from "../../../assets/icons/howItWorksIcon2";
import HowItWorksIcon3 from "../../../assets/icons/howItWorksIcon3";
import HowItWorksIcon4 from "../../../assets/icons/howItWorksIcon4";
import SolutionIcon1 from "../../../assets/icons/solutionIcon1";
import SolutionIcon2 from "../../../assets/icons/solutionIcon2";
import SolutionIcon3 from "../../../assets/icons/solutionIcon3";
import SolutionIcon4 from "../../../assets/icons/solutionIcon4";
import SeoHead from "../../../components/SeoHead";

const productSingle = {
  en: {
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
          title: "Guide Field Workers",
          description:
            "Mobile app with offline mode, smart forms, checklists, photo capture, and digital signatures keeps field workers productive.",
        },
        {
          id: 4,
          icon: HowItWorksIcon4,
          title: "Monitor & Improve",
          description:
            "Track progress, SLAs, and performance in real time. Generate reports and bill clients faster with accurate data.",
        },
      ],
    },
    solution: {
      solutionIcon: SolutionIcon4,
      solutionTitle: "Pick the Right GuGu Setup",
      solutionDescription: "Tell us what you need — we'll help configure the right CRM + field toolkit.",
      solutionItems: [
        { id: 1, icon: SolutionIcon1, title: "Call me" },
        { id: 2, icon: SolutionIcon2, title: "Write to us" },
        { id: 3, icon: SolutionIcon3, title: "Start chat" },
      ],
    },
    whatMakesSeezusSmart: [
      {
        id: 1,
        title: "Why GuGu",
        steps: [
          "Online + offline work for mobile teams",
          "Team planning, routes, and visit scheduling",
          "CRM, orders, documents, and history in one place",
          "Mobile app with photos, signatures, and time tracking",
        ],
      },
      {
        id: 2,
        title: "Use Cases",
        steps: [
          "Field service & maintenance",
          "Sales visits & retail operations",
          "Utilities, inspections, audits",
          "Installation and delivery teams",
        ],
      },
      {
        id: 3,
        title: "How It Flows",
        steps: [
          "Plan visits and assign teams",
          "Execute tasks with mobile app (online/offline)",
          "Collect proofs, signatures, and photos",
          "Sync data and bill faster with accurate records",
        ],
      },
    ],
  },
  cz: {
    id: 2,
    slug: "gugu",
    title: "GuGu",
    top: {
      topTitle: "GuGu — CRM a řízení terénu v jednom",
      topDescription: "Spravujte zákazníky, objednávky, týmy i terénní provoz z jedné platformy.",
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
          "Plánujte a sledujte návštěvy s přesností díky kalendářům a GPS trackingu.",
      },
      {
        id: 3,
        img: "/images/advantage_img7.png",
        title: "Plánování práce a zdrojů",
        description: "Vizualní nástroje pro přiřazení týmů, řízení zátěže a optimalizaci tras.",
      },
      {
        id: 4,
        img: "/images/advantage_img8.png",
        title: "Mobile-first",
        description:
          "Terénní pracovníci mají offline režim, rychlé reporty, foto dokumentaci i automatické měření času.",
      },
    ],
    aboutSeezus: {
      aboutTitle: "Co je GuGu CRM?",
      aboutDescription1:
        "GuGu je moderní CRM a systém pro řízení terénních týmů pro firmy v kanceláři i v terénu.",
      aboutDescription2:
        "Spravujte zákazníky, plánujte práci, sledujte zaměstnance a vozidla, dokumentujte zakázky a automatizujte fakturaci — vše na jednom místě.",
      aboutDescription: "",
      image: "/images/whatis_img.png",
    },
    howItWorks: {
      howItWorksTitle: "JAK GUGU FUNGUJE",
      howItWorksItems: [
        {
          id: 1,
          icon: HowItWorksIcon1,
          title: "Centralizujte data",
          description:
            "Kontakty, historie služeb, objednávky a komunikace na jednom místě sdíleném v týmu.",
        },
        {
          id: 2,
          icon: HowItWorksIcon2,
          title: "Plánujte a dispatchujte",
          description:
            "Dashboard pro plánování návštěv, přiřazení úkolů a organizaci terénních týmů s přehledem.",
        },
        {
          id: 3,
          icon: HowItWorksIcon3,
          title: "Veďte terénní týmy",
          description:
            "Mobilní aplikace (online/offline), chytré formuláře, checklisty, fotky a digitální podpisy.",
        },
        {
          id: 4,
          icon: HowItWorksIcon4,
          title: "Kontrolujte a zlepšujte",
          description:
            "Sledujte plnění, SLA a výkon v reálném čase. Reportujte a fakturujte rychleji s přesnými daty.",
        },
      ],
    },
    solution: {
      solutionIcon: SolutionIcon4,
      solutionTitle: "Vyberte správnou konfiguraci GuGu",
      solutionDescription: "Sdělte požadavky — nastavíme správné CRM + terénní řešení.",
      solutionItems: [
        { id: 1, icon: SolutionIcon1, title: "Zavoláme vám" },
        { id: 2, icon: SolutionIcon2, title: "Napište nám" },
        { id: 3, icon: SolutionIcon3, title: "Spusťte chat" },
      ],
    },
    whatMakesSeezusSmart: [
      {
        id: 1,
        title: "Proč GuGu",
        steps: [
          "Online + offline práce pro mobilní týmy",
          "Plánování týmů, tras a návštěv",
          "CRM, objednávky a historie na jednom místě",
          "Mobilní appka s fotkami, podpisy a měřením času",
        ],
      },
      {
        id: 2,
        title: "Příklady použití",
        steps: [
          "Servis a údržba v terénu",
          "Obchodní návštěvy a retail",
          "Utility, inspekce a audity",
          "Instalace a doručovací týmy",
        ],
      },
      {
        id: 3,
        title: "Jak to probíhá",
        steps: [
          "Naplánujte návštěvy a přiřaďte týmy",
          "Provádějte úkoly v mobilní appce (online/offline)",
          "Sbírejte důkazy, podpisy a fotky",
          "Synchronizujte data a fakturujte rychle s přesnými podklady",
        ],
      },
    ],
  },
} as const;

const GuguPage: React.FC = () => {
  const router = useRouter();
  const pathLocaleMatch = router.asPath.match(/^\/(en|cz)(?=\/|$)/);
  const pathLocale = pathLocaleMatch?.[1];
  const currentLocale = router.locale || pathLocale || router.defaultLocale || "cz";
  const normalizedLocale = currentLocale.split("-")[0]; // e.g. en-US → en
  const locale = normalizedLocale === "en" ? "en" : "cz";
  const defaultLocale = router.defaultLocale || "cz";

  const product = productSingle[locale];

  const { top, advantages, aboutSeezus, howItWorks, solution, whatMakesSeezusSmart, title } = product;
  const topFullDescription2 = (top as { topFullDescription2?: string }).topFullDescription2;
  const metaTitle = `${title} | RM Software`;
  const metaDescription = top.topDescription;
  const canonicalPath = "/products/gugu";

  return (
    <main className="main_page">
      <SeoHead
        title={metaTitle}
        description={metaDescription}
        canonicalPath={canonicalPath}
        locale={locale}
        defaultLocale={defaultLocale}
        alternateLocales={["en", "cz"]}
      />
      <Header />
      <main>
        <section className="top_section_contacts">
          <div className="top_section_header">
            <div>
              <HomeIcon />
              <ArrowIcon />
              <span className="top_section_header_text">{title}</span>
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
              {topFullDescription2 && (
                <p className="product_single_description_text">{topFullDescription2}</p>
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

export default GuguPage;

