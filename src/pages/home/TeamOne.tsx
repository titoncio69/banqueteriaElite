import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import teamImg1 from '../../assets/images/team/team-1-1.jpg';
import teamImg2 from '../../assets/images/team/team-1-2.jpg';
import teamImg3 from '../../assets/images/team/team-1-3.jpg';

export const TeamOne = () => {
  const [teamContent] = useState({
    tagline: "Our Team Member",
    title: "Our Amazing & Learned Event Speakers",
    members: [
      {
        id: 1,
        name: "Tania Heresi",
        role: "Speaker",
        image: teamImg1,
        hoverText:
          "Events bring people together for shared experiences and celebrations. From weddings and birthdays to conferences and festivals, events create memories.",
        link: "/team-details",
      },
      {
        id: 2,
        name: "David Betman",
        role: "Singer",
        image: teamImg2,
        hoverText:
          "Events bring people together for shared experiences and celebrations. From weddings and birthdays to conferences and festivals, events create memories.",
        link: "/team-details",
      },
      {
        id: 3,
        name: "Jessica Brown",
        role: "Content Creator",
        image: teamImg3,
        hoverText:
          "Events bring people together for shared experiences and celebrations. From weddings and birthdays to conferences and festivals, events create memories.",
        link: "/team-details",
      },
    ],
  });

  const animationMap = [
    { x: -50, y: 0 }, // fadeInLeft
    { x: 0, y: 30 },  // fadeInUp
    { x: 50, y: 0 },  // fadeInRight
  ];

  return (
    <section id="th-team" className="team-one">
      <div className="container">
        <motion.div
          className="section-title text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">{teamContent.tagline}</span>
          </div>
          <h2 className="section-title__title">
            {teamContent.title.split(" & ").map((text, index) => (
              <span key={index}>
                {text}
                <br />
              </span>
            ))}
          </h2>
        </motion.div>

        <div className="row">
          {teamContent.members.map((member, index) => (
            <motion.div
              key={member.id}
              className="col-xl-4 col-lg-6"
              initial={{ opacity: 0, x: animationMap[index].x, y: animationMap[index].y }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: (index + 1) * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div className="team-one__img">
                    <img src={member.image} alt={member.name} />
                    <div className="team-one__content">
                      <h4 className="team-one__name">
                        <Link to={member.link}>{member.name}</Link>
                      </h4>
                      <p className="team-one__sub-title">{member.role}</p>
                    </div>
                    <div className="team-one__content-hover">
                      <h4 className="team-one__name-hover">
                        <Link to={member.link}>{member.name}</Link>
                      </h4>
                      <p className="team-one__sub-title-hover">{member.role}</p>
                      <p className="team-one__text-hover">{member.hoverText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
