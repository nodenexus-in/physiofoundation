import React from "react";
import "./Hero.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import aboutImg from "../assets/About.jpeg";



function Hero() {


   useEffect(() => {
      window.scroll(0,0);
    }, []);


  return (
    <section className="hero">

      <div className="hero-left">

        <div className="rating-badge">
          ⭐ 5.0 Rating • 300+ Reviews
        </div>

           <h1>
             Move Better. <span>Recovery Faster. <br />
              </span>Live pain Free.
             </h1>
        
        <h2>Care in Salem</h2>

        <h3>Heal Your Pain Naturally</h3>

        <p>
          Are you suffering from pain? Does it affect your work in daily life?
          We have a long-lasting solution near you. We can help you!
        </p>

        <p className="clock">🕒 Open 24 Hours</p>

        <div className="hero-buttons">
          <a href="tel:+919345243443" className="btn blue">
            📞 Call Now
          </a>

          <Link to="/contact" className="btn green">
            📅 Book Appointment
          </Link>


          <a
            href="https://www.google.com/maps?q=4/122+A+Chinneri+Vayal+Kadu,+Pallapatti,+Salem,+Tamil+Nadu+636009"
            target="_blank"
            rel="noreferrer"
            className="btn light"
          >
            📍 Get Directions
          </a>
        </div>

      </div>

      {/* ✅ FIXED SECTION
      <div className="hero-right">
        <img src={aboutImg} alt="Physiotherapy Treatment" />

        <div className="floating-card">
          👥 300+ <br />
          <span>Happy Patients</span>
        </div>
      </div> */}

    </section>
  );
}

export default Hero;