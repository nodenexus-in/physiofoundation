import React from "react";
import "./Content.css";

function Content() {
  return (
    <div className="mission-wrapper">
      <div className="mission-card">

        <span className="mission-tag">Our Mission</span>
        <h2>Healing you, <span className="mission-accent">naturally</span> &amp; effectively</h2>

        <div className="mission-line">
          <p>
            At Physio Foundation, we are dedicated to providing lasting pain relief
            through personalized treatment plans designed around your body, your goals,
            and your life. Our experienced and qualified therapists focus on patient
            comfort and utilize advanced therapy techniques to ensure optimal recovery.
          </p>
          <p>
            With our 24/7 service availability, we're here to help you heal naturally
            and return to your daily activities with confidence and strength — every
            step of the way.
          </p>
        </div>

        {/* Stats Row */}
        <div className="mission-stats">
          <div className="mission-stat">
            <span className="stat-num-1">5000+</span>
            <span className="stat-label-1">Patients Treated</span>
          </div>
          <div className="mission-stat">
            <span className="stat-num-1">24/7</span>
            <span className="stat-label-1">Service Availability</span>
          </div>
          <div className="mission-stat">
            <span className="stat-num-1">98%</span>
            <span className="stat-label-1">Patient Satisfaction</span>
          </div>
          <div className="mission-stat">
            <span className="stat-num-1">15+</span>
            <span className="stat-label-1">Years of Experience</span>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="mission-pillars">

          <div className="mission-pillar">
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div>
              <h4>Personalized Treatment Plans</h4>
              <p>Every recovery plan is tailored to your specific condition, body type, and lifestyle goals.</p>
            </div>
          </div>

          <div className="mission-pillar">
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9"/>
                <path d="M12 8v4l3 3"/>
              </svg>
            </div>
            <div>
              <h4>Advanced Therapy Techniques</h4>
              <p>We use the latest evidence-based methods — from manual therapy to electrotherapy — for faster recovery.</p>
            </div>
          </div>

          <div className="mission-pillar">
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div>
              <h4>Expert, Qualified Therapists</h4>
              <p>Our certified team brings years of clinical experience and a patient-first approach to every session.</p>
            </div>
          </div>

          <div className="mission-pillar">
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <div>
              <h4>Compassionate Care</h4>
              <p>We prioritize your comfort and emotional well-being throughout every visit, creating a safe healing space.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Content;