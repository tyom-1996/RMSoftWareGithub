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
import DividerIcon2 from "../../../assets/icons/dividerIcon2";
import SeoHead from "../../../components/SeoHead";

const productSingle = {
  en: {
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
  cz: {
    id: 1,
    slug: "seezus",
    title: "SEEZUS",
    top: {
      topTitle: "AI bezpečnost, která chápe, co se děje",
      topDescription:
        "Chytrý kamerový dohled s umělou inteligencí, která rozpozná reálné hrozby, ignoruje plané poplachy a funguje i bez internetu.",
      topFullDescription: "Běžné kamery jen nahrávají video. Seezus jde dál — rozumí kontextu.",
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
        description: "Snadno se napojí na stávající IP či analogové kamery bez jejich výměny.",
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
          description: "Seezus lokálně zpracovává video a v reálném čase detekuje osoby, vozidla, objekty i chování.",
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
        title: "Příklady použití",
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
} as const;

const SeezusPage: React.FC = () => {
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
  const canonicalPath = "/products/seezus";

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

export default SeezusPage;

