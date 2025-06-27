// import CountUp from "react-countup";
// import { Link } from "react-router-dom";
import eventImg from '../../assets/images/resources/event-one-img-1.jpg';
import bayticket from '../../assets/images/resources/buy-ticket-img.jpg';
import { BrandSlider1 } from "../../components/Slider/BrandSlider1";
import { EventOne } from "../../components/Common/EventOne";
import { SlidingText } from "../home/SlidingText";

// Example usage of the component with dynamic content
const points = [
  {
    icon: "icon-air-horn",
    heading: "Compromiso con la calidad",
    // description:
  },
  {
    icon: "icon-party-blower",
    heading: "Innovación constante",
    // description:
  },
  {
    icon: "icon-party-blower",
    heading: "Atención personalizada",
    // description:
  },
  {
    icon: "icon-party-blower",
    heading: "Trabajo en equipo",
    // description:
  },
  {
    icon: "icon-party-blower",
    heading: "Responsabilidad y profesionalismo",
    // description:
  },
];

export const AboutMain = () => {
  return (
    <>
      <EventOne
        tagline="Nuestros Valores"
        title=""
        buttonText="Join The Event"
        points={points}
        imageUrl={eventImg}
      />
      <SlidingText />

      <section className="buy-ticket">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="buy-ticket__left wow fadeInLeft"
                data-wow-delay="100ms"
              >
                {/* <ul className="buy-ticket__address list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-clock"></span>
                        </div>
                        <div className="text">
                          <p>Mirpur 01 Road N 12 Dhaka Bangladesh</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-pin"></span>
                        </div>
                        <div className="text">
                          <p>10 Am To 10 Pm 20 April 2024</p>
                        </div>
                      </li>
                    </ul> */}
                {/* <h3 className="buy-ticket__title">
                  NUESTRO EQUIPO
                </h3> */}
                <div className="section-title__tagline-box">
                <span className="section-title__tagline">NUESTRO EQUIPO</span>
              </div>
                <p className="buy-ticket__text" style={{ textAlign: 'justify', fontSize: '20px' }}>
                  Nuestro mayor orgullo es el equipo humano que da vida a cada evento, ya que compartimos una misma pasión: la excelencia y la satisfacción del cliente. Contamos con un equipo altamente capacitado, con amplia experiencia en gastronomía, banquetería y producción de eventos. <br/>
                  Nuestros chefs son profesionales con años de experiencia en la gastronomía, siempre buscando innovar y ofrecer lo mejor en cada plato. Su habilidad para combinar sabores, su creatividad en la presentación y su dedicación a la cocina de alta calidad son fundamentales para que cada menú sea único. <br/>
                  Nuestro personal de servicio son personas altamente capacitadas y profesionales que se dedican a garantizar que cada detalle del evento se ejecute de manera impecable para que los invitados disfruten de una gran experiencia. <br/>
                  Nuestro equipo de producción y coordinación de eventos es el encargado de dar vida a las ideas de nuestros clientes. Con una excelente capacidad organizativa, se encargan de coordinar todos los detalles, asegurando que todo se desarrolle sin contratiempos.
                </p>
                <div className="buy-ticket__btn-box">
                  {/* <Link to="/contact" className="buy-ticket__btn-1 thm-btn">
                        Buy Your Ticket
                        <span className="icon-arrow-right"></span>
                      </Link> */}
                  {/* <Link to="/contact" className="buy-ticket__btn-2 thm-btn">
                    Contactanos<span className="icon-arrow-right"></span>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="buy-ticket__right wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="buy-ticket__img">
                  <img
                    src={bayticket}
                    alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Brand One Start*/}
      <section className="brand-one">
        <div className="container">
          <BrandSlider1 />
        </div>
      </section>
      {/*Brand One End*/}

      {/* <section className="event-direction event-direction-two">
        <div className="container">
          <div className="event-direction__inner">
            <div className="row">
              <div
                className="col-xl-7 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="event-direction__left">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">
                        Our Event Direction
                      </span>
                    </div>
                    <h2 className="section-title__title">
                      Creating Memories <br /> One Event Time
                    </h2>
                  </div>
                  <p className="event-direction__text">
                    Events bring people together for a shared experien
                    celebration a <br />
                    From weddings and birthdays to conferences
                  </p>
                  <div className="event-direction__call">
                    <div className="event-direction__call-icon">
                      <img
                        src="/assets/images/icon/event-direction-chat-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="event-direction__call-content">
                      <p>Call Us</p>
                      <h4>
                        <a href="tel:3075550133">(307) 555-0133</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="event-direction__right">
                  <ul className="event-direction__counter list-unstyled">
                    <li>
                      <div className="event-direction__counter-single">
                        <div className="event-direction__counter-box">
                          <h3 className="odometer">
                            <CountUp start={0} end={100} duration={2} />
                          </h3>
                          <span className="event-direction__counter-plus">
                            +
                          </span>
                        </div>
                        <p className="event-direction__counter-text">
                          Our Event Artists
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="event-direction__counter-single">
                        <div className="event-direction__counter-box">
                          <h3 className="odometer">
                            <CountUp start={0} end={101} duration={2} />
                          </h3>
                          <span className="event-direction__counter-plus">
                            +
                          </span>
                        </div>
                        <p className="event-direction__counter-text">
                          Hours Of Music
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="event-direction__counter-single">
                        <div className="event-direction__counter-box">
                          <h3 className="odometer">
                            <CountUp start={0} end={10} duration={2} />
                          </h3>
                          <span className="event-direction__counter-plus">
                            +
                          </span>
                        </div>
                        <p className="event-direction__counter-text">
                          Event Stages
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="event-direction__counter-single">
                        <div className="event-direction__counter-box">
                          <h3 className="odometer">
                            <CountUp start={0} end={20} duration={2} />
                          </h3>
                          <span className="event-direction__counter-plus">
                            +
                          </span>
                        </div>
                        <p className="event-direction__counter-text">
                          Music Brands
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}
