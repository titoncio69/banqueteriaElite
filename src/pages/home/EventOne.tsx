import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import eventImg from '../../assets/images/resources/event-one-img-1.jpg';

export const EventOne = () => {
  const [eventContent] = useState({
    sectionTagline: "About Our Event",
    sectionTitle: "Uniting Creating of the Memories",
    buttonText: "Join The Event",
    buttonLink: "/event-details",
    points: [
      {
        id: 1,
        iconClass: "icon-air-horn",
        title: "Artists & bands",
        description:
          "Events bring people together for a shared experience celebration. From weddings and birthdays to conferences.",
        link: "/event",
      },
      {
        id: 2,
        iconClass: "icon-party-blower",
        title: "Audience Event Planner",
        description:
          "Events bring people together for a shared experience celebration. From weddings and birthdays to conferences.",
        link: "/event",
      },
    ],
    eventImage: eventImg,
  });

  return (
    <section id="th-about" className="event-one">
      <div className="container">
        <motion.div
          className="event-one__inner"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="event-one__top">
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <motion.span
                  className="section-title__tagline"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {eventContent.sectionTagline}
                </motion.span>
              </div>
              <motion.h2
                className="section-title__title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {eventContent.sectionTitle}
              </motion.h2>
            </div>
            <motion.div
              className="event-one__btn-box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link to={eventContent.buttonLink} className="event-one__btn thm-btn">
                {eventContent.buttonText}
                <span className="icon-arrow-right"></span>
              </Link>
            </motion.div>
          </div>

          <ul className="list-unstyled event-one__points">
            {eventContent.points.map((point, index) => (
              <motion.li
                key={point.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="icon">
                  <span className={point.iconClass}></span>
                </div>
                <div className="content">
                  <h4><Link to={point.link}>{point.title}</Link></h4>
                  <p>{point.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="event-one__img-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={eventContent.eventImage} alt="Event" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
