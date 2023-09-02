import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
    <div
      style={{
        margin: "1rem",
        background: "#1c1c1e",
        borderRadius: "30px",
        padding: "2rem",
        textAlign: "left",
      }}
    >
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group" style={{ marginBottom: "0.5rem" }}>
          <label htmlFor="nameinput" style={{ marginBottom: "0.5rem" }}>
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameinput"
            aria-describedby="namehelp"
            placeholder="Enter Name"
            name="user_name"
          />
          {validationErrors.name && (
            <small className="form-text" style={{ color: "red" }}>
              {validationErrors.name}
            </small>
          )}
        </div>
        <div className="form-group" style={{ marginBottom: "0.5rem" }}>
          <label
            htmlFor="exampleInputEmail1"
            style={{ marginBottom: "0.5rem" }}
          >
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            name="user_email"
          />
          {validationErrors.email && (
            <small className="form-text" style={{ color: "red" }}>
              {validationErrors.email}
            </small>
          )}
        </div>
        <div className="form-group" style={{ marginBottom: "0.5rem" }}>
          <label htmlFor="message" style={{ marginBottom: "0.5rem" }}>
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            aria-describedby="messageHelp"
            placeholder="Enter Message"
            style={{ height: "150px", verticalAlign: "top" }}
            name="message"
          ></textarea>
          {validationErrors.message && (
            <small className="form-text " style={{ color: "red" }}>
              {validationErrors.message}
            </small>
          )}
        </div>
        <button type="submit" class="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
