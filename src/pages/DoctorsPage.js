import React from "react";
import "./DoctorPage.css";
import { useEffect } from "react";
import { FaBookOpen, FaAward, FaCalendarAlt } from "react-icons/fa";
import { BsClock } from "react-icons/bs";

import shankar from "../assets/Shankar.jpeg";
import Kiru from "../assets/Kiru.jpeg";
import Anand from "../assets/Anand.jpeg";
import shalini from "../assets/Shalini.jpeg";
import kathir from "../assets/Kathir.jpeg";

function DoctorsPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section id="doctors" className="section">

      {/* ── HERO ── */}
      <section className="doctor-hero">
        <div className="doctor-hero-container">

          <div className="hero-left">
            <span className="badge-1">💎 Salem's Trusted Clinic</span>
            <h1>
              Our <span>Expert</span><br />
              Physiotherapists
            </h1>
            <p>
              Meet our team of highly qualified professionals dedicated
              to your recovery and long-term wellbeing.
            </p>
            <div className="stats">
              <div>
                <h3>5</h3>
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

          <div className="hero-right">
            <div className="consult-card">
              <BsClock className="Doc-icon" />
              <div>
                <p>Book a consultation</p>
                <span>Same day slots available</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION HEADING ── */}
      <div className="section-heading">
        <h2>Meet the Team</h2>
        <p>Experienced specialists committed to your rehabilitation and wellness</p>
      </div>

      {/* ── DOCTOR GRID ── */}
      <div className="doctor-container">

                {/* Doctor 1 */}
        <div className="card">
          <div className="card-img-wrap">
            <img src={kathir} alt="Dr Kathiravan" className="doctor-img" />
            <span className="card-exp-badge">35+ Yrs</span>
            <span className="card-specialty-badge">Founder</span>
          </div>
          <div className="card-body">
            <h2>Dr. M. Kathiravan</h2>
            <p className="role">Founder & Chief Sports Physiotherapist</p>
            <div className="card-divider" />
            <p><FaBookOpen className="icon green" /><span>BPT, MSPT</span></p>
            <p><FaAward className="icon purple" /><span>Manual & Sports Specialist</span></p>
            <p><FaCalendarAlt className="icon orange" /><span>35+ Years Experience</span></p>
            <p className="desc">
              Former Physiotherapist for Indian National Sports Teams. Expert in
              sports injury rehabilitation, musculoskeletal therapy & holistic yoga-based physiotherapy.
            </p>
          </div>
        </div>


        {/* Doctor 2 */}
        <div className="card">
          <div className="card-img-wrap">
            <img src={shankar} alt="Dr Shankar" className="doctor-img" />
            <span className="card-exp-badge">15+ Yrs</span>
            <span className="card-specialty-badge">CEO</span>
          </div>
          <div className="card-body">
            <h2>Dr. B. Shankar</h2>
            <p className="role">(CEO OF PHYSIO FOUNDATION ) <br /> Senior Physiotherapist </p>
            <div className="card-divider" />
            <p><FaBookOpen className="icon green" /><span>BPT, MPT (Neuro, Sports & Musculoskeletal), Yoga, Ortho</span></p>
            <p><FaAward className="icon purple" /><span>Neuro Rehabilitation, Sports, Musculoskeletal, Yoga Therapy</span></p>
            <p><FaCalendarAlt className="icon orange" /><span>15+ Years Experience</span></p>
            <p className="desc">
              Expert in sports injury rehabilitation, musculoskeletal therapy
              and holistic yoga-based physiotherapy treatments.
            </p>
          </div>
        </div>

        {/* Doctor 3 */}
        <div className="card">
          <div className="card-img-wrap">
            <img src={Kiru} alt="Dr Kiruthika" className="doctor-img" />
            <span className="card-exp-badge">2+ Yrs</span>
            <span className="card-specialty-badge">Women's Health</span>
          </div>
          <div className="card-body">
            <h2>Dr. B. Kiruthika</h2>
            <p className="role">Consultant Women's Physiotherapist</p>
            <div className="card-divider" />
            <p><FaBookOpen className="icon green" /><span>BPT</span></p>
            <p><FaAward className="icon purple" /><span>Cardio Rehabilitation</span></p>
            <p><FaCalendarAlt className="icon orange" /><span>2+ Years Experience</span></p>
            <p className="desc">
              Specialized in orthopedic rehabilitation, neurological
              physiotherapy and post-surgery recovery programs.
            </p>
          </div>
        </div>

        {/* Doctor 4 */}
        <div className="card">
          <div className="card-img-wrap">
            <img src={Anand} alt="Dr Anand" className="doctor-img" />
            <span className="card-exp-badge">4+ Yrs</span>
            <span className="card-specialty-badge">Cardio</span>
          </div>
          <div className="card-body">
            <h2>Dr. PC. Anand</h2>
            <p className="role">Consultant Physiotherapist</p>
            <div className="card-divider" />
            <p><FaBookOpen className="icon green" /><span>BPT, MPT (Sports)</span></p>
            <p><FaAward className="icon purple" /><span>Orthopedic </span></p>
            <p><FaCalendarAlt className="icon orange" /><span>4+ Years Experience</span></p>
            <p className="desc">
            Focus on diagnosing, treating, and preventing diseases of the heart and blood vessels.</p>
          </div>
        </div>

        {/* Doctor 5 */}
        <div className="card">
          <div className="card-img-wrap">
            <img src={shalini} alt="Dr Shalini" className="doctor-img" />
            <span className="card-exp-badge">5+ Yrs</span>
            <span className="card-specialty-badge">Women's Health</span>
          </div>
          <div className="card-body">
            <h2>Dr. K. Shalini</h2>
            <p className="role">Consultant Women's Physiotherapist</p>
            <div className="card-divider" />
            <p><FaBookOpen className="icon green" /><span>BPT, MPT (Gynecology)</span></p>
            <p><FaAward className="icon purple" /><span>Women's Health & Geriatric Care</span></p>
            <p><FaCalendarAlt className="icon orange" /><span>5+ Years Experience</span></p>
            <p className="desc">
              Focuses on women's health physiotherapy, Also the health of the female reproductive system from puberty through menopause, covering the uterus, ovaries, fallopian tubes, and breasts. 
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default DoctorsPage;