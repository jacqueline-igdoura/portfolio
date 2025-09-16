import React from "react";

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>
        You can reach me at{" "}
        <a href="mailto:jacqueline@example.com">jacqueline@example.com</a>
      </p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
