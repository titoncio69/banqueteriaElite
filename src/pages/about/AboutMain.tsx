import eventImg from '../../assets/images/resources/event-one-img-1.jpg';
import eventImg2 from '../../assets/images/resources/event-2.png';
import bayticket from '../../assets/images/resources/buy-ticket-img.jpg';
import { EventOne } from "../../components/Common/EventOne";
import { SlidingText } from "../home/SlidingText";
import mainSliderStar1 from '../../assets/images/shapes/star-icon-1.png';
import { BrandOne } from '../home/BrandOne';


// Example usage of the component with dynamic content
const points = [
  {
    image: mainSliderStar1,
    heading: "Compromiso con la calidad",
    // description:
  },
  {
    image: mainSliderStar1,
    heading: "Innovación constante",
    // description:
  },
  {
    image: mainSliderStar1,
    heading: "Atención personalizada",
    // description:
  },
  {
    image: mainSliderStar1,
    heading: "Trabajo en equipo",
    // description:
  },
  {
    image: mainSliderStar1,
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
        imageUrl2={eventImg2}
      />
      <SlidingText />

      <section className="buy-ticket">
        <div className='background__nuestro'>
          
        
        <div className="container">
   
          <div className="row">
            <div className="col-xl-6">
              <div
                className="buy-ticket__left wow fadeInLeft"
                data-wow-delay="100ms"
              >
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
        </div>
      </section>

      <BrandOne />

    </>
  )
}