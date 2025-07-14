import { useState } from "react";
import { Link } from "react-router-dom";
import MobileLogo from '../../../assets/images/resources/logo-1.png'

export const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }: any) => {
    const [isActive] = useState({
        status: false,
        key: "",
        subMenuKey: "",
      });
    
      // const handleToggle = (key: any, subMenuKey = "") => {
      //   if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      //     setIsActive({
      //       status: false,
      //       key: "",
      //       subMenuKey: "",
      //     });
      //   } else {
      //     setIsActive({
      //       status: true,
      //       key,
      //       subMenuKey,
      //     });
      //   }
      // };
  return (
    <>
      {/*End Mobile Menu */}
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        />
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <Link to="/" aria-label="logo image">
            <img src={MobileLogo} alt="Logo" />
            </Link>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container">
          <ul className="main-menu__list">
  <li className={isActive.key === '1' ? "dropdown current" : "dropdown"}>
    <Link to="/" onClick={handleMobileMenu}>
      Inicio{" "}
    </Link>
  </li>

  <li className={isActive.key === '2' ? "dropdown current" : "dropdown"}>
    <Link to="/about" onClick={handleMobileMenu}>
      Nosotros
    </Link>
  </li>
  <li className={isActive.key === '3' ? "dropdown current" : "dropdown"}>
    <Link to="/services" onClick={handleMobileMenu}>
      Productos y Servicios
    </Link>
  </li>
  <li className={isActive.key === '4' ? "dropdown current" : "dropdown"}>
    <Link to="/gallery" onClick={handleMobileMenu}>
      Galeria
    </Link>
  </li>
  <li>
    <Link to="/contact" onClick={handleMobileMenu}>
      Contactanos
    </Link>
  </li>
</ul>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:contacto@productoraybanqueteriaelite.cl">
              contacto@productoraybanqueteriaelite.cl
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:+56953868576">+569 5386 8576</a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:+56995403556">+569 9540 3556</a>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link to="https://facebook.com/Banqueteriaelite" target="_blank" className="fab fa-facebook-square" />
              <Link to="https://www.instagram.com/banqueteria.elite/" target="_blank" className="fab fa-instagram" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  )
}
