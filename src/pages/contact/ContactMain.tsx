import { Link } from "react-router-dom"

export const ContactMain = () => {
  return (
    <>
        {/*Contact One Start*/}
        <section className="contact-one">
            <div className="container">
              <div className="contact-one__inner">
                <h3 className="contact-one__title">Escribenos</h3>
                <p className="contact-one__text">
                  Para consultas y más información, escríbenos un mensaje.
                </p>
                <form
                  className="contact-form-validated contact-one__form"
                  action="assets/inc/sendemail.php"
                  method="post"
                  noValidate
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="Nombre"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Numero Telefonico"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <div className="select-box">
                          <select className="selectmenu wide" defaultValue="Choose Option">
                            <option value="Choose Option">Escoja una opción</option>
                            <option value="Type Of Service 01">Consulta</option>
                            <option value="Type Of Service 02">Reclamo</option>
                            <option value="Type Of Service 03">Felicitaciones</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-one__input-box text-message-box">
                        <textarea
                          name="message"
                          placeholder="Escribenos ..."
                        ></textarea>
                      </div>
                      <div className="contact-one__btn-box">
                        <button
                          type="submit"
                          className="thm-btn contact-one__btn"
                        >
                          Enviar<span className="icon-arrow-right"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="result"></div>
              </div>
            </div>
          </section>
          {/*Contact One End*/}

          {/*Contact Two Start*/}
          <section className="contact-two">
            <div className="container">
              <div className="row">
                {/* Contact Two Single Start */}
                <div className="col-xl-4 col-lg-4">
                  <div className="contact-two__single">
                    <div className="contact-two__icon">
                      <span className="icon-pin"></span>
                    </div>
                    <h3 className="contact-two__title">Ubicación</h3>
                    <p className="contact-two__text">
                      Irarrazabal 5485, Ñuñoa, Santiago
                    </p>
                  </div>
                </div>
                {/* Contact Two Single End */}

                {/* Contact Two Single Start */}
                <div className="col-xl-4 col-lg-4">
                  <div className="contact-two__single">
                    <div className="contact-two__icon">
                      <span className="icon-paper-plan"></span>
                    </div>
                    <h3 className="contact-two__title">E-mail</h3>
                    <p className="contact-two__text">
                      <Link to="mailto:contacto@banqueteriaelite.cl">
                          contacto@banqueteriaelite.cl
                      </Link>
                    </p>
                  </div>
                </div>
                {/* Contact Two Single End */}

                {/* Contact Two Single Start */}
                <div className="col-xl-4 col-lg-4">
                  <div className="contact-two__single">
                    <div className="contact-two__icon">
                      <span className="icon-call"></span>
                    </div>
                    <h3 className="contact-two__title">Telefono</h3>
                    <p className="contact-two__text">
                      <a href="tel:+56953868576">+569 5386 8576</a>
                    </p>
                  </div>
                </div>
                {/* Contact Two Single End */}
              </div>
            </div>
          </section>
          {/*Contact Two End*/}
    </>
  )
}
