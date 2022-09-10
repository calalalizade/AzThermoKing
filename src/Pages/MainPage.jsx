import React from "react";
import ContactUs from "../components/ContactUs";
import FollowUs from "../components/FollowUs";
import Footer from "../components/Footer";
import GoogleMap from "../components/GoogleMap";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Clients from "../components/Clients";
import Projects from "../components/Projects";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";

import "../Styles/style.css";

function MainPage() {
  return (
    <div>
      <div className="first-overlay"></div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      <Gallery />
      <Clients />
      <FollowUs />
      <ContactUs />
      <GoogleMap />
      <Footer />
    </div>
  );
}

export default MainPage;
