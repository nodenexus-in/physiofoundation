import React from "react";
import "./ContactPage.css";
import { useEffect } from "react";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

function ContactPage() {


   useEffect(() => {
      window.scroll(0,0);
    }, []);


const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    form.current,
    "YOUR_PUBLIC_KEY"
  )
  .then(() => {
      alert("Message sent successfully!");
  })
  .catch((error) => {
      alert("Failed to send message");
  });
};


  return (
    <section className="contact-section">

      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>We're here to help you on your journey to recovery</p>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <h2>Contact Information</h2>
          <p>Reach out to us through any of the following channels. We're available 24/7.</p>

          <div className="info-box">
            <h4>📍 Address</h4>
            <p>
              4/122 A Chinneri Vayal Kadu <br/>
              Pallapatti, Salem <br/>
              Tamil Nadu - 636009
            </p>

            <a
              href="https://www.google.com/maps?q=4/122+A+Chinneri+Vayal+Kadu+Pallapatti+Salem"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions →
            </a>
          </div>

          <div className="info-box">
            <h4>📞 Phone</h4>
            <p>+91 93452 43443</p>
            <span>Call us anytime</span>
          </div>

          <div className="info-box">
            <h4>⏰ Working Hours</h4>
            <p>Open 24 Hours</p>
            <span>All Days - Emergency Services Available</span>
          </div>

          <div className="info-box">
            <h4>📩 Service Areas</h4>
            <p>Salem and surrounding areas</p>
            <span>Home visit services available</span>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form">

          <h2>Send Us a Message</h2>
          <p>Fill out the form below and we'll get back to you soon</p>

          <form ref={form} onSubmit={sendEmail}>

            <input type="text" placeholder="Your Name" required />

            <input type="tel" placeholder="+91 XXXXX XXXXX" required />

            <input type="email" placeholder="your.email@example.com" />

            <textarea placeholder="Tell us about your condition or inquiry..." rows="5"></textarea>

            <button type="submit">Send Message</button>

          </form>

        </div>

      </div>

      {/* GOOGLE MAP */}

      <div className="map-section">

        <h2>Find Us on Map</h2>

        <iframe
          title="map"
          src="https://maps.google.com/maps?q=4/122%20A%20Chinneri%20Vayal%20Kadu%20Pallapatti%20Salem&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe>

      </div>

    </section>
  );
}

export default ContactPage;