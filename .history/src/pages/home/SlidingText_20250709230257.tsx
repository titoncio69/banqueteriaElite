import slideLogo1 from '../../assets/images/icon/star-icon.png';

export const SlidingText = () => {
  return (
    <section className="sliding-text-one">
      <div className="sliding-text-one__wrap">
        <span className="sliding-text__title marquee_mode">
          ELITE&nbsp;
          <img src={slideLogo1} alt="Star Icon" />
          &nbsp;Transformamos ideas en celebraciones inolvidables&nbsp;
          <img src={slideLogo1} alt="Star Icon" />
          &nbsp;ELITE&nbsp;
          <img src={slideLogo1} alt="Star Icon" />
          &nbsp;Transformamos ideas en celebraciones inolvidables&nbsp;
          <img src={slideLogo1} alt="Star Icon" />
          &nbsp;ELITE&nbsp;
          <img src={slideLogo1} alt="Star Icon" />
          &nbsp;Transformamos ideas en celebraciones inolvidables&nbsp;
          <img src={slideLogo1} alt="Star Icon" />
        </span>
      </div>
    </section>
  );
}
