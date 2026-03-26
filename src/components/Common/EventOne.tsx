import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const EventOne = ({ tagline, title, points, imageUrl, imageUrl2 }: any) => {
  return (
    <section className="event-one event-three">
      <div className="container valores-container">
        <div className="event-one__contenido-grid">
          <motion.div
            className="event-one__info"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="event-one__inner">
              <div className="event-one__top">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <motion.span
                      className="section-title__tagline"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                    >
                      {tagline}
                    </motion.span>
                  </div>
                  <motion.h2
                    className="section-title__title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                  >
                    {title}
                  </motion.h2>
                </div>
              </div>
              <ul className="list-unstyled event-one__points">
                {points.map((point: any, index: any) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="icon icono-que-gira" style={{ marginBottom: '20px' }}>
                      {point.image ? (
                        <img
                          src={point.image}
                          alt={point.heading}
                          style={{ width: 50, height: 50, objectFit: 'fill' }}
                        />
                      ) : (
                        <span className={point.icon}></span>
                      )}
                    </div>
                    <div className="content">
                      <h4>
                        <Link to="#">{point.heading}</Link>
                      </h4>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="event-one__img-box"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={imageUrl} alt="Event" />
            <img src={imageUrl2} alt="Event" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
