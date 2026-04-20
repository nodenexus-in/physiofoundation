import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.jpeg";
import { MdEdgesensorHigh } from "react-icons/md";

const GALLERY_URL = "https://www.google.com/maps/place/Physio+Foundation/@11.6648514,78.1366569,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOEm0hJBVN4xeqr1nQwInxA2qVIin5Yq4WI64y2!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipOEm0hJBVN4xeqr1nQwInxA2qVIin5Yq4WI64y2%3Dw203-h114-k-no!7i1440!8i810!4m7!3m6!1s0x3babf1c9a8b58cf3:0xb14073ac697de0bc!8m2!3d11.6648469!4d78.1366307!10e5!16s%2Fg%2F11s1ft8qlz?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <div className="logo-section">
          <div className="logo-circle">
            <img src={logo} alt="Physio Foundation Logo" className="footer-logo" />
          </div>
          <div className="logo-text">
            <h2>Physio Foundation</h2>
            <p>Passion as profession</p>
          </div>
        </div>   

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/doctors" onClick={() => setMenuOpen(false)}>Our Doctors</NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/awards" onClick={() => setMenuOpen(false)}>Awards</NavLink>
          </li>
          <li>
            <a
              href={GALLERY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="gallery-link"
            >
              Gallery
            </a>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          </li>
        </ul>

        <div className="nav-buttons">
          <a href="tel:+916382871225">
            <button className="call-btn">Call Now</button>
          </a>
        </div>

      </div>
    </header>
  );
}



     #AFM works on the principle of abrasive-leden semi-solid mediam flow under the high pressure flow
     # this media contains the Ap (SiC, Al3 o3, )
    # abrasive particals acts as thousands of micro cutting MdEdgesensorHigh
    # matyerial is removed by micro cutting, micropluging & micro-shearing 


    # high fiishing occurs at area of high flow Velocity.Al3

    edges - internal. fillets
    burr - restrictive passages.

export default Navbar;