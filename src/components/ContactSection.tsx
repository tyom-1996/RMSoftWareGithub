import React from "react";
import Link from "next/link";
import LineIcon3 from "../assets/icons/lineIcon3";
import PhoneIcon from "../assets/icons/phoneIcon";
import MailIcon from "../assets/icons/mailIcon";
import useTranslations from "../hooks/useTranslations";

const ContactSection: React.FC = () => {
    const { t } = useTranslations();

    const contactColumns = t("common.contactColumns", {
        companyTitle: "RM SOFTWARE",
        companyLinks: [],
        productsTitle: "Products",
        productsLinks: [],
        usefulTitle: "Useful",
        usefulLinks: [],
    }) as any;

    const reception = t("common.reception", {
        title: "Reception",
        phone: "+420 296 330 311",
        hours: "",
        callLabel: "",
        email: "info@rm-software.cz",
    }) as any;

    return (
        <section className="contacts_section">
            <div className="contacts_section_content">
                <div className="contacts_section_content_item">
                    <div className="contacts_column">
                        <h3 className="contacts_column_title">{contactColumns.companyTitle}</h3>
                        <nav aria-label={contactColumns.companyTitle} className="contacts_nav">
                            <ul className="contacts_list">
                                {contactColumns.companyLinks?.map((link: any) => (
                                    <li className="contacts_item" key={link.href}>
                                        <Link href={link.href} className="contacts_link">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="contacts_column">
                        <Link href="/products" className="contacts_column_title">
                            {contactColumns.productsTitle}
                        </Link>
                        <nav aria-label={contactColumns.productsTitle} className="contacts_nav">
                            <ul className="contacts_list">
                                {contactColumns.productsLinks?.map((link: any) => (
                                    <li className="contacts_item" key={link.href}>
                                        <Link href={link.href} className="contacts_link">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="contacts_column">
                        <h3 className="contacts_column_title">{contactColumns.usefulTitle}</h3>
                        <nav aria-label={contactColumns.usefulTitle} className="contacts_nav">
                            <ul className="contacts_list">
                                {contactColumns.usefulLinks?.map((link: any) => (
                                    <li className="contacts_item" key={link.href}>
                                        <Link href={link.href} className="contacts_link">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="contacts_section_divider_container">
                    <div className="contacts_section_divider">
                        <LineIcon3 />
                    </div>

                    <div className="contacts_column contacts_column_reception">
                        <h3 className="contacts_column_title">{reception.title}</h3>
                        <a href={`tel:${reception.phone}`} className="contacts_phone">
                            {reception.phone}
                        </a>
                        <p className="contacts_hours">{reception.hours}</p>
                        <a href={`tel:${reception.phone}`} className="contacts_row">
                            <PhoneIcon />
                            {reception.callLabel}
                        </a>
                        <a href={`mailto:${reception.email}`} className="contacts_row">
                            <MailIcon />
                            {reception.email}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

