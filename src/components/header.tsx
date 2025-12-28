// pages/index.tsx
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LogoIcon from "../assets/icons/logo";
import LanguageIcon from "../assets/icons/languageIcon";
import EnFlagIcon from "../assets/icons/enFlagIcon";
import CzFlagIcon from "../assets/icons/czFlagIcon";
import Link from "next/link";
import "../assets/css/header.css";

const Home: React.FC = () => {
    const router = useRouter();;
    const { locale, asPath } = router;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  
    const changeLanguage = (newLocale: string) => {
      router.push(asPath, asPath, { locale: newLocale });
      setIsLanguageDropdownOpen(false);
    };
  
    const currentLabel = locale === 'en' ? 'EN' : 'CZ';
    const CurrentFlagIcon = locale === 'en' ? EnFlagIcon : CzFlagIcon;
  
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // Close menu when route changes
    useEffect(() => {
        const handleRouteChange = () => {
            setIsMenuOpen(false);
        };
        
        router.events.on('routeChangeComplete', handleRouteChange);
        
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router]);

    // Close language dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.language-dropdown')) {
                setIsLanguageDropdownOpen(false);
            }
        };

        if (isLanguageDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isLanguageDropdownOpen]);

    return (
        <header className="header">
            <div className="header_wrapper">
                <div className="header_left">
                    <Link href="/" className="header_logo">
                        <LogoIcon />
                    </Link>
                    <button 
                        className={`hamburger-button ${isMenuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    </button>
                    {isMenuOpen && (
                        <div 
                            className="menu-overlay"
                            onClick={closeMenu}
                        ></div>
                    )}
                    <nav className={`header_nav ${isMenuOpen ? 'open' : ''}`}>
                        <ul className="header_nav_list">
                            <li className="header_nav_item">
                                <Link href="/AboutUs" className={`header_nav_link ${router.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>About us</Link>
                            </li>
                            <li className="header_nav_item">
                                <Link href="/Products" className="header_nav_link" onClick={closeMenu}>Products</Link>
                            </li>
                            <li className="header_nav_item">
                                <Link href="/Contacts" className="header_nav_link" onClick={closeMenu}>Contacts</Link>
                            </li>
                        
                        </ul>
                    </nav>
                
                </div>
               
                <div className="language-dropdown">
                    <button
                        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                        className="language-button"
                    >
                        <LanguageIcon />
                        <CurrentFlagIcon />
                        <span>{currentLabel}</span>
                    </button>
                    {isLanguageDropdownOpen && (
                        <div className="language-dropdown-menu">
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`language-dropdown-item ${locale === 'en' ? 'active' : ''}`}
                            >
                                <EnFlagIcon />
                                <span>EN</span>
                            </button>
                            <button
                                onClick={() => changeLanguage('cz')}
                                className={`language-dropdown-item ${locale === 'cz' ? 'active' : ''}`}
                            >
                                <CzFlagIcon />
                                <span>CZ</span>
                            </button>
                        </div>
                    )}
                </div>
         </div>
           
        </header>
    );
};

export default Home;
