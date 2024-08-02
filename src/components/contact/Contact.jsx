import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ipsh5uk",
      "template_8hsyt8y",
      form.current,
      "0JVtTVYN2tlBWZoaQ"
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">


          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                shantanuchavan2603@gmail.com
              </span>

              <a
                href="mailto: shantanuchavan2603@gmail.com"
                className="contact__button" target="_blank"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+919604746375</span>

              <a
                href="https://api.whatsapp.com/send?phone=919604746375&text=Hello, more information!"
                className="contact__button" target="_blank"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
            <i class='bx bxl-linkedin contact__card-icon' ></i>

              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">Shantanu Chavan</span>

              <a href="https://www.linkedin.com/in/shantanu-chavan-24aa17246/" className="contact__button" target="_blank">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
