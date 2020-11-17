import React from "react";
import CTA from "./CTA/CTA";
import Classes from "./Classes/Classes";
import House from "./House/House";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import "./Landing.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <CTA />
      <Classes />
      <House />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default LandingPage;
