import React from "react";
import "./Contact.css";

function Contacts() {
  return (
    <section id="contact">

      <div className="contact-header">
        <h2>Find Us</h2>
        <p>Visit us at our clinic in Salem, Tamil Nadu</p>
      </div>

      <div className="contact-map">
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.416703870658!2d78.13405577526657!3d11.664852142178338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1c9a8b58cf3%3A0xb14073ac697de0bc!2sPhysio%20Foundation!5e0!3m2!1sen!2sin!4v1774248449112!5m2!1sen!2sin"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
      </div>

     

        

      <div className="contact-bar">
        <div className="contact-bar-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="#C8191E" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>4/122 A Pallapatti, Salem TN 636009</span>
        </div>
        <div className="contact-bar-item">
          <svg viewBox="0 0 24 24" fill="#C8191E"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <a href="tel:+919345243443">+91 93452 43443</a>
        </div>
        <div className="contact-bar-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="#C8191E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>Open 24 Hours</span>
          <span className="live-dot"></span>
        </div>
      </div>

    </section>
  );
}

export default Contacts;