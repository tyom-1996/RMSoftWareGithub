// pages/Products/[id].tsx
import React from "react";
import { useRouter } from "next/router";
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
import ContactSection from "../../components/ContactSection";
import useTranslations from "../../hooks/useTranslations";
import SeoHead from "../../components/SeoHead";

const AiDevelopment: React.FC = () => {
    const { t } = useTranslations();
    const router = useRouter();
    const locale = (router.locale || router.defaultLocale || "cz").split("-")[0] === "en" ? "en" : "cz";
    const defaultLocale = router.defaultLocale || "cz";
    const metaTitle = locale === "en" ? "AI Development — RM Software" : "AI vývoj — RM Software";
    const metaDescription =
        locale === "en"
            ? "Custom AI solutions, video analytics, and ML development by RM Software."
            : "Zakázková AI řešení, video analytika a ML vývoj od RM Software.";

    const advantages = t("aiDevelopment.advantages", []) as Array<{
        id: number;
        img: string;
        title: string;
        description: string;
    }>;

    const intro = t("aiDevelopment.intro", []) as string[];

    const about = t("aiDevelopment.about", {
        title: "",
        paragraphs: [],
    }) as any;

    const howItWorks = t("aiDevelopment.howItWorks.items", []) as Array<{
        id: number;
        title: string;
        description: string;
    }>;

    const solution = t("aiDevelopment.solution", {
        title: "",
        description: "",
        items: [],
    }) as any;

    const whatMakesSeezusSmart = t("aiDevelopment.whatMakes", []) as Array<{
        id: number;
        title: string;
        steps: string[];
    }>;

    const advantageIcons = [DividerIcon2, DividerIcon2, DividerIcon2, undefined];
    const howIcons = [HowItWorksIcon1, HowItWorksIcon2, HowItWorksIcon3, HowItWorksIcon4];
    const solutionIcons = [SolutionIcon1, SolutionIcon2, SolutionIcon3];

    return (
        <main className="main_page" id="ai_development_page">
            <SeoHead
                title={metaTitle}
                description={metaDescription}
                canonicalPath="/ai-development"
                locale={locale}
                defaultLocale={defaultLocale}
                alternateLocales={["en", "cz"]}
            />
            <Header />
            <div className="top_section_header">
                <div>
                    <HomeIcon />
                    <ArrowIcon />
                    <span className="top_section_header_text">{t('aiDevelopment.breadcrumb')}</span>
                </div>
            </div>
            <section className="product_single_section">
                <div className="product_single_wrapper">
                    <div className="product_single_content">
                        <h1 className="product_single_title">
                            {t('aiDevelopment.heroTitle')}
                        </h1>

                        {intro.map((paragraph, index) => (
                            <p key={index} className="product_single_description_text">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>
            <section className="advantages_section">
                <div className="advantages_section_wrapper">
                    {advantages && advantages.length > 0 && (
                        <div className="advantages_section_container">
                            {advantages.map((advantage, index) => {
                                const IconComponent = advantageIcons[index];
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
                                <h2 className="about_seezus_section_title">{about.title}</h2>
                                {about.paragraphs?.map((paragraph: string, index: number) => (
                                    <p key={index} className="about_seezus_section_text">{paragraph}</p>
                                ))}
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
                        <h2 className="how_it_works_section_title">{t('aiDevelopment.howItWorks.title')}</h2>
                        {howItWorks && (
                            <div className="how_it_works_section_items">
                                {howItWorks.map((item, index) => {
                                    const IconComponent = howIcons[index];
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
                            const SolutionIcon = SolutionIcon4;
                            return (
                                <div className="solution_section_item">
                                    <div className="solution_section_item_content1">
                                        <div className="solution_section_item_content1_wrapper">
                                            {SolutionIcon && <SolutionIcon />}
                                            <div>
                                                <h2 className="product_single_features_title">{solution.title}</h2>
                                            </div>
                                        </div>
                                        <div className="solution_section_item_content2">
                                            {solution.items.map((item: any, index: number) => {
                                                const IconComponent = solutionIcons[index];
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
                                        {solution.description}
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
                                                <div key={index} className="what_makes_smart_section_list_item">
                                                    <p className="what_makes_smart_section_list_item_text">
                                                        {step}
                                                    </p>
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
            <Footer />
        </main>
    );
};

export default AiDevelopment;
