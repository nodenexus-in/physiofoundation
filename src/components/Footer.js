import { FaFacebookF, FaInstagram, FaYoutubeSquare } from "react-icons/fa";
// import { MdOutlineLocationOn } from "react-icons/md";
// import { FiPhone } from "react-icons/fi";
// import { BsClock } from "react-icons/bs";
import "./Footer.css";
import { Link } from "react-router-dom";
import logos from "../assets/LOGO.jpeg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">

          <div className="footer-logo">
          <div className="logo-circle-2">
            <img src={logos} alt= "physio Foundation Logo" className="footer-logo-2"/>
          </div>
            <div className="footer-text">
              <h3>Physio Foundation</h3>
              
             
              <div className="footer-rating">
               <span>★★★★★5.0(300+)</span>
              </div>
            </div>
          </div>

          <p>
            Expert physiotherapy care in Salem. Trusted by thousands for
            pain relief and rehabilitation.
          </p>

          <div className="social-icons">
            <FaFacebookF />


            <a 
            href="https://www.instagram.com/physio_foundation_09?igsh=MXQ3Zmw4N25kdWUxeg=="
            target="_blank"
            rel="nooper noreferrer"
            >
            <FaInstagram />
            </a>


            <a 
            href="http://www.youtube.com/@Physiofoundation18"
            target="_blank"
            rel="nooper noreferrer"
            >
            <FaYoutubeSquare />
            </a>


          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="service-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/doctors">Our Doctors</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/awards">Awards</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/contact">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul className="services-list">
            <li><Link to="/services">Pain Management</Link></li>
            <li><Link to="/services">Sports Injury</Link></li>
            <li><Link to="/services">Post-Surgery Rehab</Link></li>
            <li><Link to="/services">Orthopedic Physio</Link></li>
            <li><Link to="/services">Neurological Physio</Link></li>
            <li><Link to="/services">Home Visit Services</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Contact Us</h4>

          <div className="contact-item-1">
          
            <span>
              4/122 A Chinnel Viyal Kadu Pallapatti, Salem Tamil Nadu - 636009
            </span>
          </div>

          <div className="contact-item-2">
            {/* <FiPhone className="footer-icon" /> */}
            <a href="tel:+91 93452 43443">+91 93452 43443</a>
          </div>

          <div className="contact-item-3">
            {/* <BsClock className="footer-icon" /> */}
            <span>Open 24 Hours</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © 2026 Physio Foundation. All rights reserved.
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;