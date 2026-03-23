import React, { useEffect } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="hero">

      <div className="hero-left">

        <div className="rating-badge">
         ⭐⭐⭐⭐⭐ 5.0 Rating - 500+ Reviews
        </div>

        <h1>
          Move Better. <span>Recovery Faster.</span>
          <br />
          Live Pain Free.
        </h1>

        <h2>Care in Salem</h2>

        <h3>Heal Your Pain Naturally</h3>

        <p>
          Are you suffering from pain? Does it affect your work in daily life?
          We have a long-lasting solution near you. We can help you!
        </p>

        <div className="hero-trust">
          <span className="trust-pill">No Surgery</span>
          <span className="trust-pill">Drug-Free Relief</span>
          <span className="trust-pill">Home Visits</span>
        </div>

        <p className="clock">Open 24 Hours - Same-Day Appointments</p>

        <div className="hero-buttons">
          <a href="tel:+919345243443" className="btn blue">
            Call Now
          </a>
          <Link to="/contact" className="btn green">
            Book Appointment
          </Link>
          <a href="https://maps.app.goo.gl/CiPzja6ep3GZXPASA" target="_blank" rel="noreferrer" className="btn light">Get Directions</a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">5000+</span>
            <span className="stat-label">Patients Healed</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">10+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">15+</span>
            <span className="stat-label">Treatments</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">5.0</span>
            <span className="stat-label">Google Rating</span>
          </div>
        </div>

      </div>

      <div className="hero-right-panel">
{/* 
        <div className="right-card appt-card">
          <div className="appt-header">
            <div>
              <p className="appt-title">Next Available Slot</p>
              <p className="appt-time">Today - 3:30 PM</p>
            </div>
            <span className="appt-dot">Live</span>
          </div>
          <a href="tel:+919345243443" className="appt-btn">
            Book Now
          </a>
        </div> */}

        <div className="right-card services-card">
          <p className="services-title">We Treat</p>
          <div className="service-tags">
            <span>Back Pain</span>
            <span>Sports Injury</span>
            <span>Knee Pain</span>
            <span>Neck Pain</span>
            <span>Post-Surgery</span>
            <span>Paralysis</span>
            <span>Frozen Shoulder</span>
            <span>Arthritis</span>
          </div>
        </div>

        <div className="right-card why-card">
          <p className="why-title">Why Choose Us</p>
          <ul className="why-list">
            <li>Certified Expert Physiotherapists</li>
            <li>Personalised Treatment Plans</li>
            <li>Advanced Equipment and Techniques</li>
            <li>Affordable and Transparent Pricing</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Hero;