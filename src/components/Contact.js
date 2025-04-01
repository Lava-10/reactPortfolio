import React, { useState } from 'react'; // Import useState

/**
 * Contact Component
 * Renders a contact form designed for Netlify deployment.
 * Handles submission via AJAX (fetch) and displays status messages inline.
 */
const Contact = () => {
  // State to manage form submission status
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState(''); // To store any error messages

  /**
   * Encodes form data for fetch submission.
   * @param {object} data - Key-value pairs of form data.
   * @returns {string} URL-encoded string.
   */
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  /**
   * Handles the form submission event using AJAX (fetch).
   * Prevents default browser submission.
   * Sends form data to Netlify.
   * Updates state to show success or error messages inline.
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default browser submission

    // Don't submit if already submitting
    if (submissionStatus === 'submitting') {
      return;
    }

    // Get form data
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    // Set status to submitting
    setSubmissionStatus('submitting');
    setErrorMessage('');

    // Prepare data for Netlify AJAX submission
    // Needs 'form-name' field to match the form's name attribute
    const encodedData = encode({
        "form-name": form.getAttribute("name"), // Get form name dynamically
        ...data
    });

    // Submit data using fetch
    fetch("/", { // Post to the root path ('/') for Netlify AJAX forms
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedData
    })
    .then(() => {
      // Success!
      setSubmissionStatus('success');
      form.reset(); // Optionally reset the form fields
      console.log("Form submitted successfully via AJAX!");
    })
    .catch((error) => {
      // Error
      setSubmissionStatus('error');
      setErrorMessage(`Submission failed: ${error.message}`);
      console.error("Form submission error:", error);
    });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        {/*
          Netlify Form Setup for AJAX:
          - name="contact": Identifies the form in the Netlify UI.
          - method="POST": Although fetch uses POST, this can be helpful for Netlify detection.
          - data-netlify="true": Enables Netlify's form handling (needed for AJAX too).
          - data-netlify-honeypot="bot-field": Optional honeypot field.
          - NO action attribute needed for AJAX.
        */}
        <form
          name="contact" // This name must match the hidden input's value AND the 'form-name' in fetch body
          method="POST" // Good practice, though fetch defines the method
          data-netlify="true"
          data-netlify-honeypot="bot-field" // Optional: Basic spam prevention
          onSubmit={handleSubmit}
          className="contact__form"
        >
          {/* Hidden input required by Netlify (even for AJAX) */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Optional: Honeypot field for spam prevention */}
          <p className="hidden" style={{ display: 'none' }}>
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          {/* Form Fields */}
          <input
            type="text"
            placeholder="Name"
            className="contact__input"
            name="name"
            required
            disabled={submissionStatus === 'submitting'} // Disable during submission
          />
          <input
            type="email"
            placeholder="Email"
            className="contact__input"
            name="email"
            required
            disabled={submissionStatus === 'submitting'} // Disable during submission
          />
          <textarea
            placeholder="Message"
            className="contact__input"
            name="message"
            rows="10"
            required
            disabled={submissionStatus === 'submitting'} // Disable during submission
          ></textarea>

          {/* Submit Button - Show different text while submitting */}
          <input
            type="submit"
            value={submissionStatus === 'submitting' ? "Submitting..." : "Submit"}
            className="contact__button button"
            disabled={submissionStatus === 'submitting'} // Disable during submission
          />
        </form>

        {/* Display Submission Status Messages */}
        <div className="contact__status" style={{ marginTop: '1rem', textAlign: 'center' }}>
          {submissionStatus === 'success' && (
            <p style={{ color: 'green', fontWeight: 'bold' }}>
              Thanks! Your message has been sent successfully.
            </p>
          )}
          {submissionStatus === 'error' && (
            <p style={{ color: 'red', fontWeight: 'bold' }}>
              Oops! Something went wrong. {errorMessage} Please try again.
            </p>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
