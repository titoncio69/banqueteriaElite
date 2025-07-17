import { useState } from "react";
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
    e.stopPropagation(); // plan B

    const data = new FormData();
    Object.entries(formData).forEach(([k, v]) => data.append(k, v));

    try {
      const res = await fetch("/assets/inc/sendemail.php", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.status === "success") {
        await Swal.fire("Mensaje enviado 🙌", "¡Gracias por contactarnos!", "success");
        setFormData({ name: "", email: "", phone: "", subject: "ChooseOption", message: "" });
      } else {
        throw new Error(json.message || "Error al enviar el mensaje.");
      }
    } catch (err: any) {
      Swal.fire("No se pudo enviar", err.message, "error");
    }

    return false;
  };


  return (
    <>
      <section className="contact-one" id="contacto">
        <div className="container">
          <div className="contact-one__inner">
            <h3 className="contact-one__title">Escribenos</h3>
            <p className="contact-one__text">
              Para consultas y más información, escríbenos un mensaje.
            </p>
            <form
              className="contact-one__form"
              onSubmitCapture={handleSubmit}
              action="#"
              noValidate
            >
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-one__input-box">
                    <input type="text" name="name" placeholder="Nombre" required value={formData.name} onChange={handleChange} />
                  </div>
                </div>

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
          </div>
        </div>
      </section>
      <section className="contact-two">
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-xl-4 col-lg-4 d-flex">
              <div className="contact-two__single w-100">
                <div className="contact-two__icon">
                  <span className="icon-pin"></span>
                </div>
                <h3 className="contact-two__title">Ubicación</h3>
                <p className="contact-two__text">
                  Avenida Las Torres 158 of 44, Quilicura, Santiago
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 d-flex">
              <div className="contact-two__single w-100">
                <div className="contact-two__icon">
                  <span className="icon-paper-plan"></span>
                </div>
                <h3 className="contact-two__title">E-mail</h3>
                <p className="contact-two__text">
                  <a href="mailto:contacto@productoraybanqueteriaelite.cl">
                    contacto@productoraybanqueteriaelite.cl
                  </a>
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 d-flex">
              <div className="contact-two__single w-100">
                <div className="contact-two__icon">
                  <span className="icon-call"></span>
                </div>
                <h3 className="contact-two__title">Teléfonos</h3>
                <div className="contact-two__text">
                  <ul className="list-unstyled mb-0">
                    <li>Jaqueline Sazo: <a href="tel:+56953868576">+569 5386 8576</a></li>
                    <li>Tania Heresi: <a href="tel:+56995403556">+569 9540 3556</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
