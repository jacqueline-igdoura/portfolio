import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("");
    emailjs
      .sendForm(
        "service_czj6vm9",
        "template_15b3nwi",
        form.current,
        "WeqC3RmSdaKenh-Od"
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="user_name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="user_email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
      {status && <p className="contact-status">{status}</p>}
    </div>
  );
}

export default Contact;
