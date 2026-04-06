import {  FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
import logos from "../assets/LOGO.jpeg";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top-bar">
        <div className="footer-top-inner">
          <div className="footer-top-logo">
            <div className="footer-logo-circle">
              <img src={logos} alt="Physio Foundation Logo" className="footer-logo-img" />
            </div>
            <div className="footer-top-text">
              <h3>Physio Foundation</h3>
              <p>Passion as profession</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-container">

          <div className="footer-col about-col">
            <div className="footer-rating">
              <span className="stars">★★★★★</span>
              <span className="rating-num">5.0</span>
              <span className="rating-count">(500+ reviews)</span>
            </div>
            <p className="footer-about">
              Expert physiotherapy care in Salem. Trusted by thousands for
              pain relief and long-term rehabilitation. We bring healing to your doorstep.
            </p>
            <div className="footer-socials">
              {/* <a href="#" className="social-btn"><FaFacebookF /></a> */}
              <a href="https://www.instagram.com/physio_foundation_09" target="_blank" rel="noopener noreferrer" className="social-btn"><FaInstagram /></a>
              <a href="http://www.youtube.com/@Physiofoundation18" target="_blank" rel="noopener noreferrer" className="social-btn"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/doctors">Our Doctors</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/awards">Awards</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/contact" className="book-link">Book Appointment</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services">Pain Management</Link></li>
              <li><Link to="/services">Sports Injury</Link></li>
              <li><Link to="/services">Post-Surgery Rehab</Link></li>
              <li><Link to="/services">Orthopedic Physio</Link></li>
              <li><Link to="/services">Neurological Physio</Link></li>
              <li><Link to="/services">Home Visit Services</Link></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4>Contact Us</h4>
            <div className="contact-card">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="#1942c8" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <p>4/122 A Chinneri Vayal Kadu, Pallapatti, Salem, Tamil Nadu - 636009</p>
            </div>
            <div className="contact-card">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="#1942c8"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <a href="tel:+919345243443">+91 93452 43443</a>
            </div>
            <div className="contact-card">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="#1942c8" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <p>Open 24 Hours</p>
              <span className="live-dot"></span>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>2026 Physio Foundation. All rights reserved.</p>
        <div className="footer-bottom-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;