import React, { useState, useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_6i8w27n', 'template_zltnrlh', form.current, '5r51-yvvKkxhW5MhI')
    .then(() => {
      setIsSent(true);
    })
    .catch(() => {
      setIsSent(false);
    });
  e.target.reset();
};

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact__options">
          <article className="contact___option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>hariharasudhansara@gmail.com</h5>
            <a href="mailto:hariharasudhansara@gmail.com" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact___option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>Yaathrigan</h5>
            <a href="https://www.instagram.com/yaathrigan/" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact___option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>(+91)8608923844</h5>
            <a href="https://api.whatsapp.com/send?phone=+918608923844" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {isSent ? (
          <p className="message-sent">Message sent successfully!</p>
        ) : (
          <p className="reach-out">Anyway, you can reach me out.</p>
        )}
        </form>

       
      </div>
    </section>
  );
};

export default Contact;
