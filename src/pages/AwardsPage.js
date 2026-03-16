import React from "react";
import "./AwardsPage.css";
import { useEffect } from "react";

import award1 from "../assets/award1.jpg";
import award2 from "../assets/award2.jpg";
import award3 from "../assets/award3.jpg";
import award4 from "../assets/award4.jpg";
import award5 from "../assets/award5.jpg";
import award6 from "../assets/award6.jpg";

function AwardsPage() {

   useEffect(() => {
      window.scroll(0,0);
    }, []);


  return (
    <section className="awards-section">

      <h2 className="awards-title">Awards & Achievements</h2>

      <div className="awards-grid">

         
        {/* Award 1 */}
        <div className="award-card">

          <img 
           src={award1} alt="Pain Therapy" 
          />
          <div className="award-overlay">
            <h3>Tamil Nadu Business Iconic Award 2024</h3>
            <p>Dr. Shankar B - Best Physiotherapy Doctor in Tamil Nadu</p>
          </div>
        </div>


        {/* Award 2 */}
        <div className="award-card">

           <img 
           src={award2} alt="Pride of Tamil Nadu Award" 
          />

          <div className="award-overlay">
            <h3>Pride of Tamil Nadu Award</h3>
            <p>Recognition for excellence in physiotherapy care</p>
          </div>
        </div>



        {/* Award 3 */}
        <div className="award-card">

            <img 
           src={award3} alt="Awards Ceremony" 
          />

          <div className="award-overlay">
            <h3>Tamil Nadu Business Iconic Awards Ceremony</h3>
            <p>Award presentation at prestigious event</p>
          </div>
        </div>



        {/* Award 4 */}
        <div className="award-card">

              <img 
           src={award4} alt="Spotlight Award" 
          />

          <div className="award-overlay">
            <h3>Spotlight Award 2024</h3>
            <p>Outstanding contribution to healthcare in Salem</p>
          </div>
        </div>



           {/* Award 5 */}
        <div className="award-card">

              <img 
           src={award5} alt="Spotlight Award" 
          />

          <div className="award-overlay">
            <h3>Marathon Award 2024</h3>
            <p>From Salem Runners Club </p>
          </div>
        </div>



           {/* Award 6 */}
        <div className="award-card">

              <img 
           src={award6} alt="Spotlight Award" 
          />

          <div className="award-overlay">
            <h3>Vinayaka Missions Research Foundation</h3>
            <p></p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default AwardsPage;