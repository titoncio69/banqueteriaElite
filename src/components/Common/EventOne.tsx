import { Link } from "react-router-dom"

export const EventOne = ({ tagline, title, points, imageUrl }: any) => {
  return (
    <section className="event-one event-three">
      <div className="container">
        <div className="event-one__inner wow fadeInUp" data-wow-delay="300ms">
          <div className="event-one__top">
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">{tagline}</span>
              </div>
              <h2 className="section-title__title">{title}</h2>
            </div>
          </div>
          <ul className="list-unstyled event-one__points">
            {points.map((point: any, index: any) => (
              <li key={index}>
                <div className="icon" style={{ marginBottom: '20px' }}>
                  <span className={point.icon}></span>
                </div>
                <div className="content">
                  <h4>
                    <Link to="#">
                      {point.heading}
                    </Link>
                  </h4>
                  {/* <p>{point.description}</p> */}
                </div>
              </li>
            ))}
          </ul>
          <div className="event-one__img-box">
            <img src={imageUrl} alt="Event" />
          </div>
        </div>
      </div>
    </section>
  )
}
