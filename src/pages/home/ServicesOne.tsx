import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ServicesOne = () => {
  const [servicesContent] = useState({
    sectionTagline: "event benefits",
    sectionTitle: "Why should you join our event",
    services: [
      {
        id: 1,
        title: "Eventful Ventures",
        description: "Events bring people together for a shared experience and from weddings.",
        icon: "icon-camera",
        link: "/event-prodigy",
      },
      {
        id: 2,
        title: "Stellar Events Co",
        description: "Events bring people together for a shared experience and from weddings.",
        icon: "icon-skewer",
        link: "/stellar-events-co",
      },
      {
        id: 3,
        title: "Elite Event Management",
        description: "Events bring people together for a shared experience and from weddings.",
        icon: "icon-dinner-table",
        link: "/elite-event-management",
      },
    ],
  });

  return (
    <section id="th-service" className="services-one">
      <div className="container">
        <motion.div
          className="section-title text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">{servicesContent.sectionTagline}</span>
          </div>
          <h2 className="section-title__title">{servicesContent.sectionTitle}</h2>
        </motion.div>

        <div className="row">
          {servicesContent.services.map((service, index) => (
            <motion.div
              key={service.id}
              className="col-xl-4 col-lg-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="services-one__single">
                <div className="services-one__icon">
                  <span className={service.icon}></span>
                </div>
                <h3 className="services-one__title">
                  <Link to={service.link}>{service.title}</Link>
                </h3>
                <p className="services-one__text">{service.description}</p>
                <Link to={service.link} className="services-one__read-more">
                  Read More <span className="icon-arrow-right"></span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
