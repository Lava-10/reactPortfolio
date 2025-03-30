// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        <form
          action="https://formsubmit.co/tinku.lava26@email.com"
          method="POST"
          className="contact__form"
        >
          <input type="text" placeholder="Name" className="contact__input" name="name" required />
          <input type="email" placeholder="Email" className="contact__input" name="email" required />
          <textarea placeholder="Message" className="contact__input" name="message" rows="10"></textarea>
          <input type="submit" value="Submit" className="contact__button button" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
