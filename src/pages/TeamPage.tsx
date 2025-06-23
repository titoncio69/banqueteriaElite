import { useEffect, useState } from "react";
import { HeaderStyleOne } from "../components/Layout/Header/HeaderStyleOne";
import { SiteBreadcrumb } from "../components/Common/Breadcumb/SiteBreadcrumb";
import navImg1 from '../assets/images/resources/logo-1.png';
// import bannerbg from '../assets/images/backgrounds/page-header-bg.jpg';
import bannerbg from '../assets/images/backgrounds/HeaderEquipo.jpg';
import { Footer } from "../components/Layout/Footer/Footer";
import { BackToTop } from "../components/elements/BackToTop";
import { TeamMain } from "./team/TeamMain";

export const TeamPage = () => {
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
            parentMenu='team'
            activeMenu="/team"
        />
        {/* SiteBreadcrumb */}
        <SiteBreadcrumb
            pageTitle="Equipo"
            pageName="Equipo"
            breadcrumbsImg={bannerbg}
        />
        {/* SiteBreadcrumb */}
        <TeamMain />
        <BackToTop scroll={isVisible} />
        <Footer />
    </>
  )
}
