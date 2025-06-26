import slideLogo1 from '../../assets/images/icon/star-icon.png';

export const SlidingText = () => {
  return (
    <>
      {/* Sliding Text Start */}
      <section className="sliding-text-one">
          <div className="sliding-text-one__wrap">
          <ul className="sliding-text__list marquee_mode">
              <li>
              <h2 data-hover="ELITE" className="sliding-text__title">
                  ELITE
                  <img src={slideLogo1} alt="Star Icon" />
              </h2>
              </li>
              <li>
              <h2 data-hover="Transformamos ideas en celebraciones inolvidables" className="sliding-text__title">
                  Transformamos ideas en celebraciones inolvidables
                  <img src={slideLogo1} alt="Star Icon" />
              </h2>
              </li>
              <li>
              <h2 data-hover="ELITE" className="sliding-text__title">
              ELITE
                  <img src={slideLogo1} alt="Star Icon" />
              </h2>
              </li>
              <li>
              <h2 data-hover="Transformamos ideas en celebraciones inolvidables" className="sliding-text__title">
                  Transformamos ideas en celebraciones inolvidables
                  <img src={slideLogo1} alt="Star Icon" />
              </h2>
              </li>
              <li>
              <h2 data-hover="ELITE" className="sliding-text__title">
              ELITE
                  <img src={slideLogo1} alt="Star Icon" />
              </h2>
              </li>
              <li>
              <h2 data-hover="Transformamos ideas en celebraciones inolvidables" className="sliding-text__title">
                  Transformamos ideas en celebraciones inolvidables
                  <img src={slideLogo1} alt="Star Icon" />
              </h2>
              </li>
          </ul>
          </div>
      </section>
      {/* Sliding Text End */}
    </>
  )
}
