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

function Servicespage() {


   useEffect(() => {
      window.scroll(0,0);
    }, []);


  return (
    <section id="services" className="services-section">

 <div className="services-header">
        <h1>Our Services</h1>
        <p>Comprehensive physiotherapy solutions tailored to your recovery needs</p>
      </div>

      <div className="services-grid">

        <div className="service-card">
          <img src={Back} alt="Back & Neck" />

          <h3>Back & Spine Therapy</h3>

          <p>Slip disc, spondylosis, postural correction</p>
          <a className="learn-more"> Learn More =</a>
        </div>

        <div className="service-card">
          <img src={sports} alt="Sports Injury" />
          <h3>Sports Injury Rehabilitation</h3>
          <p>ACL rehab, Muscle Strain, Athletic recovery post Surgery Rehabilitation Knee replacement, ligament reconstruction.</p>
        </div>

        <div className="service-card">
          <img src={surgery} alt="Post Surgery Rehab" />
          <h3>Post-Surgery Rehabilitation</h3>
          <p>Knee replacement, ligament reconstruction</p>
        </div>

       

        <div className="service-card">
          <img src={ortho} alt="Orthopedic Physiotherapy" />
          <h3>Orthopedic Physiotherapy</h3>
          <p>Treatment for bone, muscle and joint conditions.</p>
        </div>

        <div className="service-card" >
          <video className="service-video" autoPlay muted loop playInline controls poster={neuro}>
            <source src={neuroVideo} type="video/mp4" />
          </video>
          <h3>Neurological Physiotherapy</h3>
          <p>Rehabilitation for stroke and neurological disorders.</p>
        </div>

        <div className="service-card">
          <img src={electro} alt="Electrotherapy Treatments" />
          <h3>Electrotherapy Treatments</h3>
          <p> IFT, TENS, Ultrasound therapy.</p>
        </div>

        <div className="service-card">
          <img src={manual} alt="Manual & Exercise Therapy" />
          <h3>Manual & Exercise Therapy</h3>
          <p> Joint mobility, muscle strengthening.</p>
        </div>

         <div className="service-card">
          <img src={neuro} alt="Chronic Pain Management" />
          <h3>Chronic Pain Management</h3>
          <p> Non-invasive pain relief techniques.</p>
        </div>


        <div className="service-card">
          <img src={home} alt="Home Visit Physiotherapy" />
          <h3>Home Visit Physiotherapy</h3>
          <p>24/7 home visit support across Salem.</p>
        </div>

      </div>

    </section>
  );
}

export default Servicespage;