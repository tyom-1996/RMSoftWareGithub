// pages/index.tsx
import React from "react";
import { useRouter } from "next/router";
import "../assets/css/footer_style.css";
import FooterLine from "../assets/icons/footerLine";
import LogoIcon from "../assets/icons/logo";
import Link from "next/link";

const Home: React.FC = () => {
    const router = useRouter();;
    const { locale, asPath } = router;
  
    const toggleLanguage = () => {
      const nextLocale = locale === 'en' ? 'cz' : 'en';
  
      router.push(asPath, asPath, { locale: nextLocale });
    };
  
    const label = locale === 'en' ? 'EN' : 'CZ';
  
    

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
                    © 2025 RM-Software
                </p>
            </div>
            <a href="/privacy-policy" className="footer_content_link">
                Ochrana osobních údajů
            </a>
        </div>
       </footer>
    );
};

export default Home;
