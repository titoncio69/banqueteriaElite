import { useEffect, useState } from "react";
import { HeaderStyleOne } from "../components/Layout/Header/HeaderStyleOne";
import { Footer } from "../components/Layout/Footer/Footer";
import { BackToTop } from "../components/elements/BackToTop";
import { HomeMain } from "./home/HomeMain";

export const HomePage = () => {
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
        <HeaderStyleOne />
        <HomeMain />
        <BackToTop scroll={isVisible} />
        <Footer />
    </>
  )
}
