import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import DoctorsPage from "./pages/DoctorsPage";
import ServicesPage from "./pages/ServicesPage";
import AwardsPage from "./pages/AwardsPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";


function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Router>
      <Helmet>
        <title>Best Physiotherapist in Salem | Physio Foundation</title>
        <meta
          name="description"
          content="Physio Foundation is a 5-star rated 24 Hours Physio Clinic in Salem offering pain relief treatment."
        />
      </Helmet>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/contact" element={<ContactPage />} />
       
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;