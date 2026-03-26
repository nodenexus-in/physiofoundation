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
    "service_3rb8xxf",
    "template_m4l9tmf",
    form.current,
    "HfJwMFj7C8egf_vFN"
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

                       {/* header section */}
              
                    <section className="doctor-hero-2">
                <div className="doctor-hero-containers">
              
                  {/* LEFT CONTENT */}
                  <div className="hero-left">
                    <span className="badge-2">🏥 Salem’s Trusted Clinic</span>
              
                    <h1>
                      Get In <span>Touch</span><br />
                      Physiotherapists
                    </h1>
              
                    <p>
                      We're here to help you on our journey to recovery
                    </p>
              
                    <div className="stats">
                      <div>
                        <h3>5+</h3>
                        <span>Specialists</span>
                      </div>
                      <div>
                        <h3>15+</h3>
                        <span>Years Exp</span>
                      </div>
                      <div>
                        <h3>98%</h3>
                        <span>Satisfaction</span>
                      </div>
                    </div>
                  </div>
              
                </div>
              </section>
              
    <div className="contact-body">
        <div className="contact-container">

          <div className="contact-info">
            <h2>Contact Information</h2>
            <p className="contact-info-sub">Reach out through any channel. We are available 24/7.</p>

            <div className="info-box">
              <p className="info-label">Address</p>
              <p className="info-text">4/122 A Chinneri Vayal Kadu<br />Pallapatti, Salem, TN 636009</p>
              <a href="https://www.google.com/maps?q=4/122+A+Chinneri+Vayal+Kadu+Pallapatti+Salem" target="_blank" rel="noopener noreferrer" className="info-link">Get Directions →</a>
            </div>

            <div className="info-box">
              <p className="info-label">Phone</p>
              <a href="tel:+919345243443" className="info-phone">+91 93452 43443</a>
              <p className="info-sub">Call us anytime</p>
            </div>

            <div className="info-box info-box-green">
              <div className="info-box-row">
                <div>
                  <p className="info-label">Working Hours</p>
                  <p className="info-text-bold">Open 24 Hours</p>
                  <p className="info-sub">Emergency services available</p>
                </div>
                <span className="live-dot"></span>
              </div>
            </div>

            <div className="info-box">
              <p className="info-label">Service Areas</p>
              <p className="info-text-bold">Salem and surrounding areas</p>
              <p className="info-sub">Home visit services available</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            <p className="contact-info-sub">Fill out the form and we will get back to you soon</p>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required />
              </div>
              <div className="form-group">
                <label>Email (optional)</label>
                <input type="email" name="email" placeholder="your.email@example.com" />
              </div>
              <div className="form-group">
                <label>Your Condition</label>
                <textarea name="message" rows="4" placeholder="Tell us about your pain or condition..."></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
              <a href="https://wa.me/919345243443" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">Chat on WhatsApp instead</a>
            </form>
          </div>

        </div>
      </div>

      <div className="contact-map">
        <iframe
          title="Physio Foundation Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.416703870658!2d78.13405577526657!3d11.664852142178338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1c9a8b58cf3%3A0xb14073ac697de0bc!2sPhysio%20Foundation!5e0!3m2!1sen!2sin!4v1774248449112!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

    </section>
  );
}

export default ContactPage;