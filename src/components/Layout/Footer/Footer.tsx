import { Link } from "react-router-dom"
import footerLogo from '../../../assets/images/resources/site-footer-logo-1.png';


export const Footer = () => {
  return (
    <>
    {/* Site Footer Start */}
    <footer className="site-footer">
        <div className="site-footer__top">
            <div className="container">
                <div className="site-footer__top-inner">
                    <div className="site-footer__logo">
                        <Link to="/">
                            <img src={footerLogo} alt="" />
                        </Link>
                    </div>
                    <div className="site-footer__social">
                        <Link target="_blank" to="https://facebook.com/Banqueteriaelite"><i className="icon-facebook"></i></Link>
                        {/* <Link to="#"><i className="icon-fi"></i></Link> */}
                        <Link target="_blank" to="https://www.instagram.com/banqueteria.elite/"><i className="icon-instagram"></i></Link>
                        {/* <Link to="#"><i className="icon-pinterest"></i></Link> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="site-footer__middle">
            <div className="container">
                <div className="site-footer__middle-inner">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget__column footer-widget__link">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Accesos Rapidos</h3>
                                </div>
                                <ul className="footer-widget__link-list list-unstyled">
                                    <li><Link to="/">Inicio</Link></li>
                                    <li><Link to="/about">Nosotros</Link></li>
                                    <li><Link to="/services">Productos y Servicios</Link></li>
                                    <li><Link to="/gallery">Galeria</Link></li>
                                    <li><Link to="/contact">Contactanos</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget__column footer-widget__contact">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Contact</h3>
                                </div>
                                <div className="footer-widget__contact-inner">
                                    <ul className="footer-widget__contact-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-envelop"></span>
                                            </div>
                                            <div className="text">
                                                <p><a href="mailto:contacto@productoraybanqueteriaelite.cl">contacto@productoraybanqueteriaelite.cl</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <div className="text">
                                                <p>Avenida Las Torres 158 of 44, Quilicura, Santiago</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <div className="text">
                                                <p><a href="tel:+56953868576">+569 5386 8576</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="site-footer__bottom">
            <div className="container">
                <div className="site-footer__bottom-inner">
                    <p className="site-footer__bottom-text">&copy; {new Date().getFullYear()} - <a href="https://www.linkedin.com/in/cristian-marambio-a1b18743/" target="_blank">Cristian Marambio</a></p>
                </div>
            </div>
        </div>
    </footer>
    {/* Site Footer End */}
    </>
  )
}
