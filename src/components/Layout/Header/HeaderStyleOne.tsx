import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "../../../assets/images/resources/logoPagina.png";
import { MobileMenu } from "./MobileMenu";
import { MenuItems } from "./MenuItems";
import { SearchPopup } from "./SearchPopup";
import { Sidebar } from "./Sidebar";

export const HeaderStyleOne = (props: any) => {

    const { parentMenu, secondParentMenu, activeMenu } = props;
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenu, setMobileMenu] = useState(false);
    const [isPopup, setIsPopup] = useState(false);
    const [isSidebar, setIsSidebar] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
        if (!isMobileMenu) {
            document.body.classList.add("mobile-menu-visible");
        } else {
            document.body.classList.remove("mobile-menu-visible");
        }
    }

    const handlePopup = () => {
        setIsPopup(!isPopup);
    }

    const handleSidebar = () => {
        setIsSidebar(!isSidebar);
    }

    const handleScroll = () => {
        setIsVisible(window.scrollY > 100);
    };

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`main-header ${isVisible ? "fixed-header" : ""}`}>
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link to="/">
                                        <img src={navLogo} alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="main-menu__main-menu-box">
                                <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                    <i className="fa fa-bars" />
                                </div>
                                <ul className="main-menu__list">
                                    <MenuItems
                                        parentMenu={parentMenu}
                                        secondParentMenu={secondParentMenu}
                                        activeMenu={activeMenu}
                                    />
                                </ul>
                            </div>
                            <div className="main-menu__right">
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={`stricky-header stricked-menu main-menu ${isVisible ? "stricky-fixed" : ""}`}>
                    <div className="sticky-header__content" />
                    <nav className="main-menu">
                        <div className="main-menu__wrapper">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-menu__left">
                                    <div className="main-menu__logo">
                                        <Link to="/">
                                            <img src={navLogo} alt="Logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="main-menu__main-menu-box">
                                    <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                        <i className="fa fa-bars" />
                                    </div>
                                    <ul className="main-menu__list">
                                        <MenuItems
                                            parentMenu={parentMenu}
                                            secondParentMenu={secondParentMenu}
                                            activeMenu={activeMenu}
                                        />
                                    </ul>
                                </div>
                                <div className="main-menu__right">
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
            <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />
            <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
        </>
    )
}