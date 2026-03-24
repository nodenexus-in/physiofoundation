import React from "react";
import "./ServicesPage.css";
import { useEffect } from "react";

import Back from "../assets/Back.jpg";
import sports from "../assets/sports.jpg";
import neuroVideo from "../assets/videoplayback.mp4";
import surgery from "../assets/Post.jpg";
import electro from "../assets/Electro.jpg";
import ortho from "../assets/orthos.jpg";
import manual from "../assets/Manul.jpg";
import neuro from "../assets/neuro.jpg";
import home from "../assets/homevisit.jpg";

const services = [
  {
    img: Back,
    alt: "Back & Neck",
    title: "Back & Spine Therapy",
    desc: "Slip disc, spondylosis, postural correction.",
    badge: "Spine",
    link: "https://en.wikipedia.org/wiki/Spinal_disease",
  },
  {
    img: sports,
    alt: "Sports Injury",
    title: "Sports Injury Rehabilitation",
    desc: "ACL rehab, muscle strain, athletic recovery and post-surgery rehabilitation.",
    badge: "Sports",
    link: "https://en.wikipedia.org/wiki/Sports_injury",
  },
  {
    img: surgery,
    alt: "Post Surgery Rehab",
    title: "Post-Surgery Rehabilitation",
    desc: "Knee replacement, ligament reconstruction and surgical recovery.",
    badge: "Surgery",
    link: "https://en.wikipedia.org/wiki/Physical_therapy",
  },
  {
    img: ortho,
    alt: "Orthopedic Physiotherapy",
    title: "Orthopedic Physiotherapy",
    desc: "Treatment for bone, muscle and joint conditions.",
    badge: "Orthopedic",
    link: "https://en.wikipedia.org/wiki/Physical_therapy",
  },
  {
    video: neuroVideo,
    poster: neuro,
    alt: "Neurological Physiotherapy",
    title: "Neurological Physiotherapy",
    desc: "Rehabilitation for stroke and neurological disorders.",
    badge: "Neuro",
    link: "https://en.wikipedia.org/wiki/Neurophysiotherapy",
  },
  {
    img: electro,
    alt: "Electrotherapy",
    title: "Electrotherapy Treatments",
    desc: "IFT, TENS, ultrasound therapy for deep tissue healing.",
    badge: "Electro",
    link: "https://en.wikipedia.org/wiki/Electrotherapy",
  },
  {
    img: manual,
    alt: "Manual Therapy",
    title: "Manual & Exercise Therapy",
    desc: "Joint mobility, muscle strengthening and functional movement.",
    badge: "Manual",
    link: "https://en.wikipedia.org/wiki/Manual_therapy",
  },
  {
    img: neuro,
    alt: "Chronic Pain",
    title: "Chronic Pain Management",
    desc: "Non-invasive pain relief techniques for long-term conditions.",
    badge: "Pain",
    link: "https://en.wikipedia.org/wiki/Chronic_pain",
  },
  {
    img: home,
    alt: "Home Visit",
    title: "Home Visit Physiotherapy",
    desc: "24/7 home visit support across Salem — care at your doorstep.",
    badge: "Home",
    isCall: true,
    link: "tel:+919345243443",
  },
];

function Servicespage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section id="services" className="services-section">

      {/* ── HERO ── */}
      <section className="services-hero">
        <div className="services-hero-container">

          <div className="services-left">
            <span className="svc-badge">⚕️ Comprehensive Care</span>
            <h1>Our <span>Services</span></h1>
            <p>
              Comprehensive physiotherapy solutions tailored to your recovery —
              from acute injuries to long-term rehabilitation.
            </p>
            <div className="services-tags">
              {["Back & Spine","Sports Rehab","Post-Surgery","Orthopedic","Neurological",
                "Electrotherapy","Manual & Exercise","Chronic Pain","Home Visits"].map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="services-right">
            <div className="svc-stat-card">
              <h2>15+</h2>
              <p>Services</p>
            </div>
            <div className="svc-stat-card">
              <h2>500+</h2>
              <p>Patients</p>
            </div>
            <div className="svc-stat-card">
              <h2>Same</h2>
              <p>Day Appts</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION HEADING ── */}
      <div className="svc-section-heading">
        <h2>What We Treat</h2>
        <p>Expert care across a wide range of physiotherapy disciplines</p>
      </div>

      {/* ── GRID ── */}
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>

            {/* media */}
            <div className="svc-media-wrap">
              {s.video ? (
                <video
                  className="svc-media"
                  autoPlay muted loop playsInline
                  poster={s.poster}
                >
                  <source src={s.video} type="video/mp4" />
                </video>
              ) : (
                <img src={s.img} alt={s.alt} className="svc-media" />
              )}
              <span className="svc-card-badge">{s.badge}</span>
            </div>

            {/* body */}
            <div className="svc-card-body">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a
                className={`svc-learn-more${s.isCall ? " svc-call" : ""}`}
                href={s.link}
                target={s.isCall ? "_self" : "_blank"}
                rel="noopener noreferrer"
              >
                {s.isCall ? "📞 Call Now →" : "Learn More →"}
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Servicespage;