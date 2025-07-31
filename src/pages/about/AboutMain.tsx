import { motion } from "framer-motion";
import eventImg from '../../assets/images/resources/event-one-img-1.jpg';
import eventImg2 from '../../assets/images/resources/event-2.png';
import bayticket from '../../assets/images/resources/buy-ticket-img.jpg';
import { EventOne } from "../../components/Common/EventOne";
import { SlidingText } from "../home/SlidingText";
import mainSliderStar1 from '../../assets/images/shapes/star-icon-1.png';
import { BrandOne } from '../home/BrandOne';

const points = [
  { image: mainSliderStar1, heading: "Compromiso con la calidad" },
  { image: mainSliderStar1, heading: "Innovación constante" },
  { image: mainSliderStar1, heading: "Atención personalizada" },
  { image: mainSliderStar1, heading: "Trabajo en equipo" },
  { image: mainSliderStar1, heading: "Responsabilidad y profesionalismo" },
];

export const AboutMain = () => {
  return (
    <>
      <section className="buy-ticket" id='nosotros'>
        <div className='background__nuestro'>
          <div className="container" style={{ height: '800px' }}>
            <div className="row">
              <motion.div
                className="col-xl-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="buy-ticket__left">
                  <div className="section-title__tagline-box">
                    <motion.span
                      className="section-title__tagline"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      NUESTRO EQUIPO
                    </motion.span>
                  </div>
                  <motion.p
                    className="buy-ticket__text"
                    style={{ textAlign: 'justify', fontSize: '20px' }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    Nuestro mayor orgullo es el equipo humano que da vida a cada evento, ya que compartimos una misma pasión: la excelencia y la satisfacción del cliente. Contamos con un equipo altamente capacitado, con amplia experiencia en gastronomía, banquetería y producción de eventos. <br />
                    Nuestros chefs son profesionales con años de experiencia en la gastronomía, siempre buscando innovar y ofrecer lo mejor en cada plato. Su habilidad para combinar sabores, su creatividad en la presentación y su dedicación a la cocina de alta calidad son fundamentales para que cada menú sea único. <br />
                    Nuestro personal de servicio son personas altamente capacitadas y profesionales que se dedican a garantizar que cada detalle del evento se ejecute de manera impecable para que los invitados disfruten de una gran experiencia. <br />
                    Nuestro equipo de producción y coordinación de eventos es el encargado de dar vida a las ideas de nuestros clientes. Con una excelente capacidad organizativa, se encargan de coordinar todos los detalles, asegurando que todo se desarrolle sin contratiempos.
                  </motion.p>
                </div>
              </motion.div>

              <motion.div
                className="col-xl-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="buy-ticket__right">
                  <div className="buy-ticket__img">
                    <img src={bayticket} alt="Nuestro equipo" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <EventOne
        tagline="Nuestros Valores"
        title=""
        buttonText="Join The Event"
        points={points}
        imageUrl={eventImg}
        imageUrl2={eventImg2}
      />
      <SlidingText />
      <BrandOne />
    </>
  );
};
