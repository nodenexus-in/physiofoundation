import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { FaMedal, FaClock, FaHeart, FaCheckCircle } from "react-icons/fa";


import award2 from "../assets/gallery/award2_copy.jpg";
import award3 from "../assets/gallery/award3_copy.jpg";
import award4 from "../assets/gallery/award4_copy.jpg";
import award5 from "../assets/gallery/award5_copy.jpg";
import award6 from "../assets/gallery/award6_copy.jpg";
import award7 from "../assets/gallery/award7_copy.jpg";
import award8 from "../assets/gallery/award8_copy.jpg";
import award9 from "../assets/gallery/award9_copy.jpg";
import award10 from "../assets/gallery/award10_copy.jpg";
import whatsappImg from "../assets/gallery/WhatsApp Image 2026-03-03 at 1.57.01 PM.jpeg";
import img2022 from "../assets/gallery/2022-05-23.jpg";
import img2023a from "../assets/gallery/2023-02-27__1_.jpg";
import img2023b from "../assets/gallery/2023-02-27.jpg";
import img2024 from "../assets/gallery/2024-10-06.jpg";
import img2025 from "../assets/gallery/2025-03-18.png";
import img2026 from "../assets/gallery/2026-01-05.jpg";

const awardImages = [
  award2, award3, award4, award5, award6, award7, award8,
  award9, award10, whatsappImg, img2022, img2023a, img2023b,
  img2024, img2025, img2026,
];

function About() {
  const bgRef = useRef(null);

  useEffect(() => {
    const container = bgRef.current;
    if (!container) return;

    // Clear previous cards (important for React strict mode)
    while (container.firstChild) container.removeChild(container.firstChild);

    awardImages.forEach((src, i) => {
      const card = document.createElement("div");
      card.className = "float-photo";

      const img = document.createElement("img");
      img.src = src;
      img.alt = `Award ${i + 1}`;
      img.loading = "lazy";
      card.appendChild(img);

      const size = 90 + Math.random() * 80;       // 90px – 170px width
      const startX = Math.random() * 90;           // 0% – 90% from left
      const duration = 18 + Math.random() * 22;    // 18s – 40s float time
      const delay = -(Math.random() * duration);   // staggered start
      const drift = (Math.random() - 0.5) * 130;  // horizontal drift in px

      card.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${startX}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        --drift: ${drift}px;
      `;

      container.appendChild(card);
    });

    return () => {
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  return (
    <section className="about">

      {/* === Floating Award Photos Background === */}
      <div className="float-bg" ref={bgRef}></div>

      {/* === Dark Overlay for readability === */}
      <div className="about-overlay"></div>

      {/* === Indian Tricolor Top Bar === */}
      <div className="tricolor-bar">
        <span className="tc-saffron"></span>
        <span className="tc-white"></span>
        <span className="tc-green"></span>
      </div>

      {/* === Top Section: Tag + Heading + Cards === */}
      <div className="about-container">

        <span className="section-tag">☸ India Certified Clinic</span>
        <h2>About Physio Foundation</h2>
        <p className="about-subtitle">
          Your trusted partner in long-lasting pain relief and rehabilitation
        </p>

        <div className="about-cards">

          <div className="about-card">
            <div className="icon blue">
              <FaMedal />
            </div>
            <h4>IAP Certified Therapists</h4>
            <p>Registered under Indian Association of Physiotherapists</p>
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
            <h4>RCI Recognised</h4>
            <p>Compliant with Rehabilitation Council of India standards</p>
          </div>

        </div>
      </div>

      {/* === Who We Are + Why Choose Us Card === */}
      <div className="mission-wrapper-1">
        <div className="mission-card-1">

          <h2>Who We Are</h2>
          <p>
            Physio Foundation is a trusted physiotherapy clinic in Salem, focusing on rehabilitation,
            pain management, and functional recovery. Our certified physiotherapists combine modern
            technology with personalized care to ensure the best outcomes for every patient.
          </p>

          {/* Indian Certification Badges */}
          <div className="cert-row">
            <span className="cert-badge"><span className="dot dot-red"></span> IAP Certified</span>
            <span className="cert-badge"><span className="dot dot-green"></span> RCI Recognised</span>
            <span className="cert-badge"><span className="dot dot-orange"></span> BPT / MPT Qualified</span>
            <span className="cert-badge"><span className="dot dot-blue"></span> UGC Approved</span>
            <span className="cert-badge">🇮🇳 Salem, Tamil Nadu</span>
          </div>

          {/* Why Choose Us */}
          <div className="why-choose-heading">
            <h3>Why Choose Us</h3>
            <span className="india-badge">🇮🇳 India Certified</span>
          </div>

          <div className="why-list">

            <div className="why-item">
              <div className="why-icon why-icon-1">🏅</div>
              <div className="why-text">
                <strong>IAP Certified Physiotherapists</strong>
                <span>Registered under Indian Association of Physiotherapists</span>
              </div>
            </div>

            <div className="why-item">
              <div className="why-icon why-icon-2">📜</div>
              <div className="why-text">
                <strong>BPT & MPT Degree Holders</strong>
                <span>From UGC-approved Indian universities</span>
              </div>
            </div>

            <div className="why-item">
              <div className="why-icon why-icon-3">🏛️</div>
              <div className="why-text">
                <strong>RCI Recognised</strong>
                <span>Rehabilitation Council of India compliant</span>
              </div>
            </div>

            <div className="why-item">
              <div className="why-icon why-icon-4">🔬</div>
              <div className="why-text">
                <strong>Evidence-Based Treatments</strong>
                <span>Following Indian Medical Council standards</span>
              </div>
            </div>

            <div className="why-item">
              <div className="why-icon why-icon-5">⚙️</div>
              <div className="why-text">
                <strong>State-of-the-Art Equipment</strong>
                <span>Modern physiotherapy tools & technology</span>
              </div>
            </div>

            <div className="why-item">
              <div className="why-icon why-icon-6">😊</div>
              <div className="why-text">
                <strong>500+ Happy Patients</strong>
                <span>Proven results across Salem & surrounding areas</span>
              </div>
            </div>

          </div>

          <Link to="/doctors" className="meet-team-btn">→ Meet Our Team</Link>

        </div>
      </div>

    </section>
  );
}

export default About;