import React from "react";
import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>
        Contact <span>Me</span>
      </h2>

      <div className="contact-container">

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <input type="text" placeholder="Subject" />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message 🚀
          </button>
        </form>

        {/* Contact Details */}
        <div className="contact-info">

          <h3>Let's Build Something Amazing 🚀</h3>

          <p className="contact-subtitle">
            I'm available for freelance projects, internships, and
            full-time opportunities. Feel free to contact me!
          </p>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>jadhavbhumi02@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span>+91 7875742032</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Mumbai, Maharashtra, India</span>
          </div>

          <div className="social-icons">

            <a
              href="https://www.linkedin.com/in/bhumi-jadhav-229658418/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/BhumiJadhav-29"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;