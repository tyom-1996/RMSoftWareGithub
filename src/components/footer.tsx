// pages/index.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import "../assets/css/footer_style.css";
import FooterLine from "../assets/icons/footerLine";
import LogoIcon from "../assets/icons/logo";
import useTranslations from "../hooks/useTranslations";

const Home: React.FC = () => {
    const { t } = useTranslations();
    const router = useRouter();

    return (
       <footer className="footer">
        <div className="footer_content">
            <div className="footer_content_left">
            <Link href="/" className="header_logo">
                <LogoIcon />
            </Link>
                <div className="footer_content_line">
                     <FooterLine />
                </div>
               
                <p className="footer_content_text">
                    {t('common.footer.copyright')}
                </p>
            </div>
            <Link href="/privacy-policy" locale={router.locale} className="footer_content_link">
                {t('common.footer.privacy', 'Privacy Policy')}
            </Link>
        </div>
       </footer>
    );
};

export default Home;
