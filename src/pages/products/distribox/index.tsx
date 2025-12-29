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
    id: 3,
    slug: "distribox",
    title: "Distribox",
    top: {
      topTitle: "Distribox — Smart Lockers for 24/7 Parcel Pickup",
      topDescription:
        "Flexible, secure, and automated lockers for contactless parcel delivery and pickup.",
      topFullDescription:
        "Distribox is a modular smart locker system that integrates with your e-commerce or logistics workflows.",
      topFullDescription2:
        "It simplifies last-mile delivery, reduces courier costs, and gives customers the freedom to pick up packages any time.",
    },
    advantages: [
      {
        id: 1,
        img: "/images/advantage_img9.png",
        title: "Modular & Scalable",
        description:
          "Choose the number and sizes of lockers you need. Add more modules as your volumes grow.",
      },
      {
        id: 2,
        img: "/images/advantage_img10.png",
        title: "Secure & Monitored",
        description:
          "Video surveillance, sensors, and access control keep parcels safe. Full audit trail for every pickup.",
      },
      {
        id: 3,
        img: "/images/advantage_img11.png",
        title: "API-Ready",
        description:
          "Easily integrate with e-shops, ERP, and courier systems to automate locker assignment and notifications.",
      },
      {
        id: 4,
        img: "/images/advantage_img12.png",
        title: "Contactless Convenience",
        description:
          "Customers receive SMS/email with PIN/QR and pick up parcels in seconds — no queues, no missed deliveries.",
      },
    ],
    aboutSeezus: {
      aboutTitle: "What Is Distribox?",
      aboutDescription1:
        "Distribox is a modular smart locker platform for e-commerce, residential, and corporate parcel pickup.",
      aboutDescription2:
        "It automates the last mile, provides secure storage, and offers a seamless, contactless pickup experience.",
      aboutDescription: "",
      image: "/images/whatis_img.png",
    },
    howItWorks: {
      howItWorksTitle: "HOW DISTRIBOX WORKS",
      howItWorksItems: [
        {
          id: 1,
          icon: HowItWorksIcon1,
          title: "Place & Connect",
          description:
            "Install lockers at your location. Connect to power and network — or use 4G/LTE where needed.",
        },
        {
          id: 2,
          icon: HowItWorksIcon2,
          title: "Integrate Workflows",
          description:
            "Connect your e-shop/ERP/courier system via API. Orders automatically get locker assignments.",
        },
        {
          id: 3,
          icon: HowItWorksIcon3,
          title: "Deliver & Notify",
          description:
            "Couriers or staff load parcels; recipients get SMS/email with PIN/QR for pickup — fully contactless.",
        },
        {
          id: 4,
          icon: HowItWorksIcon4,
          title: "Monitor & Optimize",
          description:
            "Dashboard for occupancy, incidents, and maintenance. Scale modules as demand grows.",
        },
      ],
    },
    solution: {
      solutionIcon: SolutionIcon4,
      solutionTitle: "Configure Your Distribox",
      solutionDescription: "Tell us your capacity and integration needs — we'll tailor the lockers.",
      solutionItems: [
        { id: 1, icon: SolutionIcon1, title: "Call me" },
        { id: 2, icon: SolutionIcon2, title: "Write to us" },
        { id: 3, icon: SolutionIcon3, title: "Start chat" },
      ],
    },
    whatMakesSeezusSmart: [
      {
        id: 1,
        title: "What Makes Distribox Useful",
        steps: [
          "24/7 contactless pickup",
          "Modular configurations and box sizes",
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
  cz: {
    id: 3,
    slug: "distribox",
    title: "Distribox",
    top: {
      topTitle: "Distribox — chytré boxy pro 24/7 výdej",
      topDescription: "Flexibilní, bezpečné a automatizované boxy pro bezkontaktní výdej zásilek.",
      topFullDescription:
        "Distribox je modulární systém, který se propojí s vaším e-shopem nebo logistikou.",
      topFullDescription2:
        "Zjednoduší last-mile doručování, sníží náklady na kurýry a dá zákazníkům svobodu vyzvednout balík kdykoli.",
    },
    advantages: [
      {
        id: 1,
        img: "/images/advantage_img9.png",
        title: "Modulární a škálovatelný",
        description: "Zvolte počet a velikosti boxů. Rozšiřujte podle růstu objemu zásilek.",
      },
      {
        id: 2,
        img: "/images/advantage_img10.png",
        title: "Bezpečné a monitorované",
        description:
          "Kamerový dohled, senzory a kontrola přístupu chrání zásilky. Plná auditní stopa každého výdeje.",
      },
      {
        id: 3,
        img: "/images/advantage_img11.png",
        title: "Připravený API",
        description:
          "Snadné napojení na e-shopy, ERP a kurýrní systémy pro automatické přidělení boxu a notifikace.",
      },
      {
        id: 4,
        img: "/images/advantage_img12.png",
        title: "Bezkontaktní komfort",
        description:
          "Zákazníci dostanou SMS/e-mail s PIN/QR a balík vyzvednou během pár sekund — bez front a zmeškaných doručení.",
      },
    ],
    aboutSeezus: {
      aboutTitle: "Co je Distribox?",
      aboutDescription1:
        "Distribox je modulární platforma chytrých boxů pro e-commerce, rezidence i firmy.",
      aboutDescription2:
        "Automatizuje last mile, zajišťuje bezpečné uložení a nabízí bezkontaktní výdej.",
      aboutDescription: "",
      image: "/images/whatis_img.png",
    },
    howItWorks: {
      howItWorksTitle: "JAK DISTRIBOX FUNGUJE",
      howItWorksItems: [
        {
          id: 1,
          icon: HowItWorksIcon1,
          title: "Umístěte a připojte",
          description: "Instalujte boxy na místě. Připojte napájení a síť — nebo použijte 4G/LTE.",
        },
        {
          id: 2,
          icon: HowItWorksIcon2,
          title: "Napojte procesy",
          description: "Propojte e-shop/ERP/kurýrní systémy přes API. Objednávky získají box automaticky.",
        },
        {
          id: 3,
          icon: HowItWorksIcon3,
          title: "Doručte a upozorněte",
          description:
            "Kurýr nebo obsluha vloží zásilku; příjemce dostane SMS/e-mail s PIN/QR — vše bezkontaktně.",
        },
        {
          id: 4,
          icon: HowItWorksIcon4,
          title: "Sledujte a optimalizujte",
          description: "Dashboard pro obsazenost, incidenty a údržbu. Přidávejte moduly podle poptávky.",
        },
      ],
    },
    solution: {
      solutionIcon: SolutionIcon4,
      solutionTitle: "Nakonfigurujte Distribox",
      solutionDescription: "Sdělte kapacity a integrace — doladíme boxy na míru.",
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
        title: "Příklady použití",
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
} as const;

const DistriboxPage: React.FC = () => {
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
  const canonicalPath = "/products/distribox";

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

export default DistriboxPage;

