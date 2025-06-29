import { Link } from "react-router-dom"
// import Footershape from '../../../assets/images/shapes/site-footer-shape-1.png';
import footerLogo from '../../../assets/images/resources/site-footer-logo-1.png';


export const Footer = () => {
  return (
    <>
    {/* Site Footer Start */}
    <footer className="site-footer">
        {/* <div className="site-footer__shape-1 float-bob-y">
            <img src={Footershape} alt="" />
        </div> */}
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
                        {/* <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget__column footer-widget__events">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Upcoming Events</h3>
                                </div>
                                <ul className="footer-widget__events-list list-unstyled">
                                    <li>
                                        <p>11 April 2024 At 10 Pm In Dhaka</p>
                                        <h5>Ui/ux Designer Meetup</h5>
                                        <Link to="/event-details">Get a Ticket <span className="icon-arrow-right"></span></Link>
                                    </li>
                                    <li>
                                        <p>11 April 2024 At 10 Pm In Dhaka</p>
                                        <h5>Ui/ux Designer Meetup</h5>
                                        <Link to="/event-details">Get a Ticket <span className="icon-arrow-right"></span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget__column footer-widget__link">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Accesos Rapidos</h3>
                                </div>
                                <ul className="footer-widget__link-list list-unstyled">
                                    <li><Link to="/about">Quienes Somos</Link></li>
                                    <li><Link to="/team">Nuestor Equipo</Link></li>
                                    <li><Link to="/services">Servicios</Link></li>
                                    <li><Link to="/gallery">Galeria</Link></li>
                                    <li><Link to="/contact">Contactanos</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget__column footer-widget__our-company">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Our Company</h3>
                                </div>
                                <ul className="footer-widget__link-list list-unstyled">
                                    <li><Link to="/schedule-list-2">Jubilee Events</Link></li>
                                    <li><Link to="/about">Gala Affairs</Link></li>
                                    <li><Link to="/about">Inspire and Delight Events</Link></li>
                                    <li><Link to="/about">Enchanted Gatherings</Link></li>
                                    <li><Link to="/about">Eventful Ventures</Link></li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
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
                                                <p><a href="mailto:contacto@banqueteriaelite.cl">contacto@banqueteriaelite.cl</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <div className="text">
                                                <p>Irarrazabal 5485, Ñuñoa</p>
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
                    <p className="site-footer__bottom-text">&copy; {new Date().getFullYear()} - Cristian Marambio</p>
                    {/* <ul className="list-unstyled site-footer__bottom-menu">
                        <li><Link to="/about">Terms & Condition</Link></li>
                        <li><Link to="/about">Privacy Policy</Link></li>
                        <li><Link to="/about">Contact Us</Link></li>
                    </ul> */}
                </div>
            </div>
        </div>
    </footer>
    {/* Site Footer End */}
    </>
  )
}
