import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ServicesPage = ({ services }: any) => {
  return (
    <section className="services-page">
      <div className="container">
        <div className="row">
          {services.map((service: any, index: number) => (
            <motion.div
              key={service.id}
              className="col-xl-4 col-lg-4 col-md-6 flex"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="services-one__single h-100 d-flex flex-column">
                <div className="services-one__icon">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{ width: 218, height: 128, objectFit: "contain" }}
                    />
                  ) : (
                    <span className={service.icon}></span>
                  )}
                </div>

                <h3 className="services-one__title">
                  {service.link ? (
                    <Link to={service.link}>{service.title}</Link>
                  ) : (
                    service.title
                  )}
                </h3>

                {Array.isArray(service.description) ? (
                  <ul className="services-one__text">
                    {service.description.map((item: any, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="services-one__text">{service.description}</p>
                )}

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
                  <Link
                    to={service.link}
                    className="services-one__read-more mt-auto"
                  >
                    Ver Catálogo <span className="icon-arrow-right"></span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
