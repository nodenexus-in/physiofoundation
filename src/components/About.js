import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { FaMedal, FaClock, FaHeart, FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className="about">
      <div className="about-container">

        <h2>About Physio Foundation</h2>
        <p className="about-subtitle">
          Your trusted partner in long-lasting pain relief and rehabilitation
        </p>

        <div className="about-cards">

          <div className="about-card">
            <div className="icon blue">
              <FaMedal />
            </div>
            <h4>Expert Therapists</h4>
            <p>Highly qualified and experienced physiotherapy professionals</p>
          </div>

          <div className="about-card">
            <div className="icon green">
              <FaClock />
            </div>
            <h4>24/7 Available</h4>
            <p>Round-the-clock physiotherapy care when you need it most</p>
          </div>

          <div className="about-card">
            <div className="icon purple">
              <FaHeart />
            </div>
            <h4>Personalized Care</h4>
            <p>Customized treatment plans for your specific needs</p>
          </div>

          <div className="about-card">
            <div className="icon orange">
              <FaCheckCircle />
            </div>
            <h4>Proven Results</h4>
            <p>Advanced therapy techniques for lasting recovery</p>
          </div>

        </div>
      </div>



      <div className="mission-wrapper-1">
  <div className="mission-card-1">
    <h2>Who We Are</h2>

    <p>
     Physio Foundation is a trusted physiotherapy clinic in Salem, focusing on rehabilitation, 
     pain management, and functional recovery. Our certified physiotherapists combine modern 
     technology with personalized care to ensure the best outcomes.
    </p> <br />

    <p>

      <h3>Why Choose Us: </h3>
      Experienced & certified physiotherapists. 
      Evidence-based treatments
      State-of-the-art physiotherapy equipment
      Patient-centered rehabilitation programs
      Proven results & happy patients
    </p>
    <Link to="/doctors" className="meet-team-btn" >
      →Meet Our Team
    </Link>
  </div>
</div>

    </section>
  );
}

export default About;