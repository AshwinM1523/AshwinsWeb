import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "react-bootstrap";
import "./Contact.css";

export const Contact = () => {
  const form = useRef();
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {}, [validationErrors]);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    } else {
      errors.name = false;
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email format";
    } else {
      errors.email = false;
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    } else {
      errors.message = false;
    }

    if (errors.name || errors.email || errors.message) {
      setValidationErrors(errors);
      return;
    }

    emailjs
      .sendForm(
        "service_1zeu1w8",
        "template_7rae8lv",
        form.current,
        "7VBGHxFG-KMZ_kQey"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Email has been sent!");
  };

  // Function to check email format
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  return (
    <Container className="contact-refined">
      <div className="contact-header">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Let's connect! Feel free to reach out for opportunities, collaborations, or just to say hello.
        </p>
      </div>

      <div className="contact-form-wrapper">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-field">
            <label htmlFor="nameinput" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-input"
              id="nameinput"
              placeholder="Your name"
              name="user_name"
            />
            {validationErrors.name && (
              <small className="form-error">
                {validationErrors.name}
              </small>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="emailinput" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-input"
              id="emailinput"
              placeholder="your.email@example.com"
              name="user_email"
            />
            {validationErrors.email && (
              <small className="form-error">
                {validationErrors.email}
              </small>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-input form-textarea"
              id="message"
              placeholder="Your message..."
              name="message"
            ></textarea>
            {validationErrors.message && (
              <small className="form-error">
                {validationErrors.message}
              </small>
            )}
          </div>

          <button type="submit" className="form-submit">
            Send Message
          </button>
        </form>
      </div>
    </Container>
  );
};
