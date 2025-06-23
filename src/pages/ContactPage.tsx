import { useEffect, useState } from "react";
import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import navImg1 from '../assets/images/resources/logo-1.png';
import { HeaderStyleOne } from "../components/Layout/Header/HeaderStyleOne";
import { SiteBreadcrumb } from "../components/Common/Breadcumb/SiteBreadcrumb";
import { BackToTop } from "../components/elements/BackToTop";
import { Footer } from "../components/Layout/Footer/Footer";
import { ContactMain } from "./contact/ContactMain";

export const ContactPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <HeaderStyleOne
                navImg={navImg1}
                parentMenu='contact'
                activeMenu="/contact"
            />
            {/* SiteBreadcrumb */}
            <SiteBreadcrumb
                pageTitle="Contactanos"
                pageName="Contactanos"
                breadcrumbsImg={bannerbg}
            />
            {/* SiteBreadcrumb */}
            <ContactMain />
            <BackToTop scroll={isVisible} />
            <Footer />
        </>
    )
}
