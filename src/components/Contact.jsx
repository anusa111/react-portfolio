import React, { useState } from "react";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("anusakhadka16@gmail.com");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("https://formspree.io/f/moqzwjgb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    if (response.ok) {
      setStatus("SUCCESS");
      setName("");
      //   setEmail("");
      setMessage("");
    } else {
      setStatus("ERROR");
    }
  };
  if (status) {
    if (status === "SUCCESS") {
      alert("Email sent successfully");
      setStatus("");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="contacts">
      <h2>Contact</h2>
      <div className="contactForm">
        <div className="input-field">
          <input
            placeholder="Enter your email"
            type="email"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <br />
        </div>
        <div className="input-field">
          <textarea
            name="message"
            placeholder="Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows="4"
            cols="50"
            required
          />
          <br />
        </div>
        <div className="sub-btn">
          <button type="submit" className="my-button btn-width">
            Send
          </button>
        </div>
        <div className="input-field">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            readOnly
            required
            hidden
          />
          <br />
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
