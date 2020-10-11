import React from "react";
import CTA from "./CTA/CTA";
import Classes from "./Classes/Classes";
import House from "./House/House";
import "./Landing.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <CTA />
      <Classes />
      <House />
    </div>
  );
};

export default LandingPage;
