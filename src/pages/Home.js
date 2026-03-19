import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";

import WhatsAppChat from "../components/WhatsAppChat";
import Content from "../components/Content";
import Reviews from "../components/Reviews";
import Contacts from "../components/Contacts";

function Home() {
  return (
    <>
      <Hero />
      <About />
     
      <Content />
      <Reviews />
      <Contacts />
      <WhatsAppChat />
    </>
  );
}

export default Home;