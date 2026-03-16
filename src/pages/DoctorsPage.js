import React from "react";
import "./DoctorPage.css";
import { useEffect } from "react";
import { FaBookOpen, FaAward, FaCalendarAlt } from "react-icons/fa";

 import shankar from "../assets/Shankar.jpeg";
 import Kiru from "../assets/Kiru.jpeg";
 import Anand from "../assets/Anand.jpeg";
 import shalini from "../assets/Shalini.jpeg";
 import kathir from "../assets/Kathir.jpeg";


function DoctorsPage() {

  useEffect(() => {
    window.scroll(0,0);
  }, []);
  return (
    <section id="doctors" className="section">

      <div className="Tag">
        <h1>Our Expert Physiotherapists</h1>
        <p>
          Meet our team of highly qualified and experienced physiotherapy
          professionals dedicated to your recovery
        </p>
      </div>

      <div className="doctor-container">

        {/* Doctor 1 */}

        <div className="card">
          { <img src={shankar} alt="Dr Shankar" className="doctor-img"/> }

          <h2>Dr. B. Shankar  </h2>
          <p className="role">(CEO OF PHYSIO FOUNDATION ) <br /> Senior Physiotherapist</p>

          <p><FaBookOpen className="icon green"/> (PT), BPT, MPT(Sports & musculoskeletal), Yoga, Ortho</p>
          <p><FaAward className="icon purple"/> Sports, Musculoskeletal, Yoga Therapy</p>
          <p><FaCalendarAlt className="icon orange"/> 15+ Years Experience</p>

          <p className="desc">
            Expert in sports injury rehabilitation, musculoskeletal therapy
            and holistic yoga-based physiotherapy treatments.
          </p>
        </div>


        {/* Doctor 2 */}

        <div className="card">
          { <img src={Kiru} alt="Dr Kiruthika" className="doctor-img-1"/> }

          <h2>Dr. B. Kiruthika  </h2>
          <p className="role">Consultant Women's Physiotherapist</p>

          <p><FaBookOpen className="icon green"/> BPT, MPT(Sports)</p>
          <p><FaAward className="icon purple"/> Orthopedic & Neuro Rehabilitation</p>
          <p><FaCalendarAlt className="icon orange"/> 2+ Years Experience</p>

          <p className="desc">
            Specialized in orthopedic rehabilitation, neurological
            physiotherapy and post-surgery recovery programs.
          </p>
        </div>
        
            {/* Doctor 3 */}

        <div className="card">
          { <img src={Anand} alt="Dr Anand" className="doctor-img-1"/> }

          <h2>Dr. PC. Anand</h2>
          <p className="role">Consultant Physiotherapist</p>

          <p><FaBookOpen className="icon green"/> BPT</p>
          <p><FaAward className="icon purple"/> Cardio</p>
          <p><FaCalendarAlt className="icon orange"/> 4+ Years Experience</p>

          <p className="desc">
            Focuses on women's health physiotherapy, prenatal and postnatal
            care, and geriatric rehabilitation.
          </p>
        </div>


        {/* Doctor 4 */}

        <div className="card">
          { <img src={shalini} alt="Dr Shalini" className="doctor-img-1"/> }

          <h2>Dr. K. Shalini</h2>
          <p className="role">Consultant Women's Physiotherapist</p>

          <p><FaBookOpen className="icon green"/> BPT, MPT (Gynecologists) </p>
          <p><FaAward className="icon purple"/> Women’s Health & Geriatric Care</p>
          <p><FaCalendarAlt className="icon orange"/> 5+ Years Experience</p>

          <p className="desc">
            Focuses on women's health physiotherapy, prenatal and postnatal
            care, and geriatric rehabilitation.
          </p>
        </div>


       


           {/* Doctor 5 */}

        <div className="card">
          { <img src={kathir} alt="Dr Shalini" className="doctor-img-2"/> }

          <h2>Dr. M. Kathiravan</h2>
          <p className="role">Founder & Chife Physiotherapist in Sports</p>

          <p><FaBookOpen className="icon green"/> BPT, MSPT</p>
          <p><FaAward className="icon purple"/> Maual & sports specialist</p>
          <p><FaCalendarAlt className="icon orange"/> 35+ Years Experience</p>

          <p className="desc">
            Senior Sports Physiotherapist |Expert in Sports Injury Rehabilitation, Musculoskeletal Therapy & Holistic Yoga-Based Physiotherapy | Former Physiotherapist for Indian National Sports Teams
          </p>
        </div>

     

      </div>

    </section>
  );
}

export default DoctorsPage;