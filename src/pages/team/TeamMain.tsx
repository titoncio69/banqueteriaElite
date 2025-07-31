import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TeamImg1 from '../../assets/images/team/team-1-1.jpg';
import TeamImg2 from '../../assets/images/team/team-1-2.jpg';
import TeamImg3 from '../../assets/images/team/team-1-3.jpg';
import TeamImg4 from '../../assets/images/team/team-1-4.jpg';
import TeamImg5 from '../../assets/images/team/team-1-5.jpg';
import TeamImg6 from '../../assets/images/team/team-1-6.jpg';

const teamMembers = [
  {
    name: "Tania Heresi",
    role: "Community Manager",
    img: TeamImg1,
    description: "Events bring people together for shared experience and celebration. Weddings and birthdays to conferences, festivals, events create memories.",
  },
  {
    name: "David Betman",
    role: "Singer",
    img: TeamImg2,
    description: "Events bring people together for shared experience and celebration. Weddings and birthdays to conferences, festivals, events create memories.",
  },
  {
    name: "Jessica Brown",
    role: "Content Creator",
    img: TeamImg3,
    description: "Events bring people together for shared experience and celebration. Weddings and birthdays to conferences, festivals, events create memories.",
  },
  {
    name: "David Beckham",
    role: "Speaker",
    img: TeamImg4,
    description: "Events bring people together for shared experience and celebration. Weddings and birthdays to conferences, festivals, events create memories.",
  },
  {
    name: "Alisha Martin",
    role: "Singer",
    img: TeamImg5,
    description: "Events bring people together for shared experience and celebration. Weddings and birthdays to conferences, festivals, events create memories.",
  },
  {
    name: "Herbert Spin",
    role: "Content Creator",
    img: TeamImg6,
    description: "Events bring people together for shared experience and celebration. Weddings and birthdays to conferences, festivals, events create memories.",
  },
];

export const TeamMain = () => {
  return (
    <section className="team-page">
      <div className="container">
        <div className="row">
          {teamMembers.map((member, index) => {
            const direction = index % 2 === 0 ? -50 : 50;

            return (
              <motion.div
                key={index}
                className="col-xl-4 col-lg-6 col-md-6"
                initial={{ opacity: 0, x: direction }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src={member.img} alt={member.name} />
                      <div className="team-one__content">
                        <h4 className="team-one__name">
                          <Link to="team-details">{member.name}</Link>
                        </h4>
                        <p className="team-one__sub-title">{member.role}</p>
                      </div>
                      <div className="team-one__content-hover">
                        <h4 className="team-one__name-hover">
                          <Link to="team-details">{member.name}</Link>
                        </h4>
                        <p className="team-one__sub-title-hover">{member.role}</p>
                        <p className="team-one__text-hover">{member.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
