<section className="event-one event-three">
  <div className="container valores-container">
    <div className="event-one__grid">
      {/* Columna izquierda */}
      <div className="event-one__info">
        <div className="section-title text-left">
          <span className="section-title__tagline">{tagline}</span>
          <h2 className="section-title__title">{title}</h2>
        </div>
        <ul className="list-unstyled event-one__points">
          {points.map((point: any, index: any) => (
            <li key={index}>
              <div className="icon">
                <span className={point.icon}></span>
              </div>
              <div className="content">
                <h4>{point.heading}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Columna derecha */}
      <div className="event-one__img-side">
        <img src={imageUrl} alt="Event" className="event-one__img" />
      </div>
    </div>
    {/* Aquí puedes poner tus stats (como en la imagen de referencia) */}
    {/* <div className="event-one__stats">
      <div>15 años en el mercado</div>
      <div>185 proyectos únicos</div>
      ...
    </div> */}
  </div>
</section>
