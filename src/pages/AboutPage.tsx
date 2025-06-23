import { useEffect, useState } from "react";
import { HeaderStyleOne } from "../components/Layout/Header/HeaderStyleOne";
import navImg1 from '../assets/images/resources/logo-1.png';
import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import { SiteBreadcrumb } from "../components/Common/Breadcumb/SiteBreadcrumb";
import { BackToTop } from "../components/elements/BackToTop";
import { Footer } from "../components/Layout/Footer/Footer";
import { AboutMain } from "./about/AboutMain";

export const AboutPage = () => {
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
        parentMenu='about'
        activeMenu="/about"
      />
      {/* SiteBreadcrumb */}
      <SiteBreadcrumb
        pageTitle="Quienes Somos"
        pageName="Quienes Somos"
        breadcrumbsImg={bannerbg}
      />
      {/* SiteBreadcrumb */}
      <AboutMain />
      <BackToTop scroll={isVisible} />
      <Footer />
    </>
  )
}
