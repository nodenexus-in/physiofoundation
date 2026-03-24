import React from "react";
import "./AwardsPage.css";
import { useEffect } from "react";

import award1 from "../assets/award1.jpg";
import award2 from "../assets/award2.jpg";
import award3 from "../assets/award3.jpg";
import award4 from "../assets/award4.jpg";
import award5 from "../assets/award5.jpg";
import award6 from "../assets/award6.jpg";
import award7 from "../assets/award7.jpg";
import award8 from "../assets/award8.jpg";
import award9 from "../assets/award9.jpg";

const awards = [
  {
    img: award1,
    title: "Certificate from Dr. KANNAN PUGAZHENDI'S",
    desc: "Sports And Fitness Center With A Houstic Apporoach ",
  },
  {
    img: award2,
    title: "Pride of Tamil Nadu Award",
    desc: "Recognition for excellence in physiotherapy care",
  },
  {
    img: award3,
    title: "Tamil Nadu Business Iconic Awards Ceremony",
    desc: "Award presentation at prestigious event",
  },
  {
    img: award4,
    title: "Spotlight Award 2024",
    desc: "Outstanding contribution to healthcare in Salem",
  },
  {
    img: award5,
    title: "Marathon Award 2024",
    desc: "From Salem Runners Club",
  },
  {
    img: award6,
    title: "Vinayaka Missions Research Foundation",
    desc: "Recognised for academic and clinical excellence",
  },
  {
    img: award7,
    title: "Golden Entertainments — Sparkle Awards 2026",
    desc: "Presented for outstanding community impact",
  },
  {
    img: award8,
    title: "The rotary salem green's best physiotherapist Awards this year",
    desc: "Honoured by Vanakam ads",
  },
  {
    img: award9,
    title: "Highwood Entertainments — Tamil Nadu Achiever Award",
    desc: "Celebrating excellence in physiotherapy",
  },
    {
    img: award9,
    title: "Highwood Entertainments — Tamil Nadu Achiever Award",
    desc: "Celebrating excellence in physiotherapy",
  },
];

function AwardsPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="awards-section">

      {/* ── HERO ── */}
      <section className="awards-hero">
        <div className="awards-hero-container">

          <div className="awards-left">
            <span className="awd-badge">🥇 Recognised & Honoured</span>
            <h1>Our <span>Awards</span></h1>
            <p>
              Recognised for excellence in physiotherapy care — from state
              honours to community service achievements.
            </p>
            <div className="awards-tags">
              {[
                "Tamil Nadu Business",
                "Pride of Tamil Nadu",
                "Salem Runners Club",
                "Community Recognition",
                "Spotlight Award",
                "Tamil Nadu Achiever Award",
              ].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="awards-right">
            <div className="awd-stat-card">
              <h2>9+</h2>
              <p>Awards</p>
            </div>
            <div className="awd-stat-card">
              <h2>5+</h2>
              <p>Years</p>
            </div>
            <div className="awd-stat-card">
              <h2>State</h2>
              <p>Level</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION HEADING ── */}
      <div className="awd-section-heading">
        <h2>Our Achievements</h2>
        <p>Awards and recognitions that reflect our commitment to excellence</p>
      </div>

      {/* ── GRID ── */}
      <div className="awards-grid">
        {awards.map((a, i) => (
          <div className="award-card" key={i}>
            <img src={a.img} alt={a.title} />
            <div className="award-overlay">
              <div className="award-overlay-inner">
                <h3>{a.title}</h3>
                {a.desc && <p>{a.desc}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default AwardsPage;