import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    // Client-side verification before submission
    if (!window.confirm("Are you sure you want to submit the form?")) {
      e.preventDefault();
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="contact__form"
        >
          {/* Hidden input is required for Netlify forms */}
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            placeholder="Name"
            className="contact__input"
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="contact__input"
            name="email"
            required
          />
          <textarea
            placeholder="Message"
            className="contact__input"
            name="message"
            rows="10"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="contact__button button"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
