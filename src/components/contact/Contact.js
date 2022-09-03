import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fr8y067",
        "template_mz5tpwf",
        form.current,
        "inFC5DFwsTtkRyP93"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sandeeppondala@gmail.com</h5>
            <a href="mailto:sandeeppondala@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FiLinkedin className="contact__option-icon" />
            <h4>Linked in</h4>
            <h5>sandeeppondala</h5>
            <a
              href="https://www.linkedin.com/in/saratchandra-sandeep-pondala-11a8b9157/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+917893991089</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+917893991089"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />

          <input type="email" name="email" placeholder="Your Email" required />

          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
