import { useState } from "react";
import { Link } from "react-router-dom"
import Swal from "sweetalert2";

export const ContactMain = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'ChooseOption',
    message: '',
    // file: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    e.stopPropagation();           // <- IMPORTANTE para que el plugin no se ejecute

    const data = new FormData();
    Object.entries(formData).forEach(([k, v]) => data.append(k, v));

    try {
      const res = await fetch("/send_email.php", { method: "POST", body: data });
      const json = await res.json();

      if (json.status === "success") {
        Swal.fire("Mensaje enviado 🙌", "¡Gracias por contactarnos!", "success");
        /* Limpia el formulario */
        setFormData({ name: "", email: "", phone: "", subject: "ChooseOption", message: "" });
      } else {
        throw new Error(json.message || "Error al enviar el mensaje.");
      }
    } catch (err: any) {
      Swal.fire("No se pudo enviar", err.message, "error");
    }
  };


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
              // className="contact-form-validated contact-one__form"
              className="contact-one__form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-one__input-box">
                    <input type="text" name="name" placeholder="Nombre" required value={formData.name} onChange={handleChange} />
                  </div>
                </div>

                {/* <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="Nombre"
                          required
                        />
                      </div>
                    </div> */}

                <div className="col-xl-6 col-lg-6">
                  <div className="contact-one__input-box">
                    <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6">
                  <div className="contact-one__input-box">
                    <input type="text" name="phone" placeholder="Número Telefónico" required value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-one__input-box">
                    <select className="selectmenu wide" name="subject" value={formData.subject} onChange={handleChange}>
                      <option value="ChooseOption">Escoja una opción</option>
                      <option value="Consulta">Consulta</option>
                      <option value="Reclamo">Reclamo</option>
                      <option value="Felicitaciones">Felicitaciones</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="contact-one__input-box text-message-box">
                    <textarea name="message" placeholder="Escríbenos ..." required value={formData.message} onChange={handleChange} />
                  </div>

                  <div className="contact-one__btn-box">
                    <button type="submit" className="thm-btn contact-one__btn">
                      Enviar<span className="icon-arrow-right"></span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {/* <div className="result"></div> */}
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
                  Avenida Las Torres 158 of 44, Quilicura, Santiago
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
                <h3 className="contact-two__title">Telefonos</h3>
                <p className="contact-two__text">
                  <ul className="list-unstyled">
                    <li>Jaqueline Sazo: <a href="tel:+56953868576">+569 5386 8576</a></li>
                    <li>Tania Heresi: <a href="tel:+56995403556">+569 9540 3556</a></li>
                  </ul>
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
