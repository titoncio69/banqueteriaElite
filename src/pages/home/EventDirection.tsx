import { useState } from "react";
import { motion } from "framer-motion";
import directionIcon from '../../assets/images/icon/event-direction-chat-icon.png';
import CountUp from "react-countup";

export const EventDirection = () => {
  const [eventContent] = useState({
    tagline: "Our Event Direction",
    title: "Creating Memories <br> One Event Time",
    text: "Events bring people together for a shared experience and celebration. <br> From weddings and birthdays to conferences.",
    phone: "3075550133",
    callText: "Call Us",
    callNumber: "(307) 555-0133",
    iconSrc: directionIcon,
  });

  return (
    <section className="event-direction">
      <div className="container">
        <div className="event-direction__inner">
          <div className="row">
            <motion.div
              className="col-xl-7"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="event-direction__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">{eventContent.tagline}</span>
                  </div>
                  <h2 className="section-title__title" dangerouslySetInnerHTML={{ __html: eventContent.title }} />
                </div>
                <p className="event-direction__text" dangerouslySetInnerHTML={{ __html: eventContent.text }} />
                <div className="event-direction__call">
                  <div className="event-direction__call-icon">
                    <img src={eventContent.iconSrc} alt="Call Icon" />
                  </div>
                  <div className="event-direction__call-content">
                    <p>{eventContent.callText}</p>
                    <h4><a href={`tel:${eventContent.phone}`}>{eventContent.callNumber}</a></h4>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-xl-5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="event-direction__right">
                <ul className="event-direction__counter list-unstyled">
                  {[{ end: 100, label: "Our Event Artists" },
                  { end: 101, label: "Hours Of Music" },
                  { end: 10, label: "Event Stages" },
                  { end: 20, label: "Music Brands" }]
                    .map((item, index) => (
                      <li key={index}>
                        <div className="event-direction__counter-single">
                          <div className="event-direction__counter-box">
                            <h3 className="odometer">
                              <CountUp start={0} end={item.end} duration={2} />
                            </h3>
                            <span className="event-direction__counter-plus">+</span>
                          </div>
                          <p className="event-direction__counter-text">{item.label}</p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
