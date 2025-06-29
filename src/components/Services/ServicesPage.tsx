import { Link } from "react-router-dom"

export const ServicesPage = ({ services }: any) => {
  return (
    <>
      {/* Services Page Start */}
      <section className="services-page">
        <div className="container">
          <div className="row">
            {services.map((service: any) => (
              <div
                key={service.id}
                className={`col-xl-4 col-lg-4 col-md-6 flex wow fadeInLeft`}
                data-wow-delay={service.wowDelay}
              >
                <div className="services-one__single h-100 d-flex flex-column">
                  <div className="services-one__icon">
                    <span className={service.icon}></span>
                  </div>
                  <h3 className="services-one__title">
                    {/* <Link to={service.link}>{service.title}</Link> */}
                    {/* Mantén <Link> si apuntará a una ruta interna */}
                    {service.link ? (
                      <Link to={service.link}>{service.title}</Link>
                    ) : (
                      service.title
                    )}
                  </h3>
                  {/* <p className="services-one__text">
                    {service.description}
                  </p> */}
                  {/* 🎯 1. Mostrar lista si description es array */}
                  {Array.isArray(service.description) ? (
                    <ul className="services-one__text">
                      {service.description.map((item: any, i: any) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="services-one__text">{service.description}</p>
                  )}
                  {/* <Link
                    to={service.link}
                    className="services-one__read-more"
                  >
                    Ver Catalogo<span className="icon-arrow-right"></span>
                  </Link> */}
                  {/* 🎯 2. Botón que abre el PDF en nueva pestaña */}
                  {service.pdf ? (
                    <a
                      href={service.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="services-one__read-more mt-auto"
                    >
                      Ver Catálogo <span className="icon-arrow-right"></span>
                    </a>
                  ) : (
                    <Link to={service.link} className="services-one__read-more mt-auto">
                      Ver Catálogo <span className="icon-arrow-right"></span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Page End */}
    </>
  )
}
