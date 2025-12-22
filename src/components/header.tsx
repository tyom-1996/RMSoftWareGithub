// pages/index.tsx
import React from "react";
import { useRouter } from "next/router";
import LogoIcon from "../assets/icons/logo";
import LanguageIcon from "../assets/icons/languageIcon";
import Link from "next/link";
import "../assets/css/header.css";

const Home: React.FC = () => {
    const router = useRouter();;
    const { locale, asPath } = router;
  
    const toggleLanguage = () => {
      const nextLocale = locale === 'en' ? 'cz' : 'en';
  
      router.push(asPath, asPath, { locale: nextLocale });
    };
  
    const label = locale === 'en' ? 'EN' : 'CZ';
  
    

    return (
        <header className="header">
            <div className="header_wrapper">
                <div className="header_left">
                    <Link href="/" className="header_logo">
                        <LogoIcon />
                    </Link>
                    <nav className="header_nav">
                        <ul className="header_nav_list">
                            <li className="header_nav_item">
                                <Link href="/AboutUs" className={`header_nav_link ${router.pathname === '/' ? 'active' : ''}`}>About us</Link>
                            </li>
                            <li className="header_nav_item">
                                <Link href="/Products" className="header_nav_link">Products</Link>
                            </li>
                            <li className="header_nav_item">
                                <Link href="/Contacts" className="header_nav_link">Contacts</Link>
                            </li>
                        
                        </ul>
                    </nav>
                
                </div>
               
                <button
                    onClick={toggleLanguage}
                    className="language-button"
                >
                    <LanguageIcon />
                    <span>{label}</span>
                </button>
         </div>
           
        </header>
    );
};

export default Home;
