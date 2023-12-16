import React from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import "./LandingPage.scss";
import heroimage from "../../../assets/Images/hero-group.svg";
import herolines from "../../../assets/Images/hero-lines.svg";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="landing-page">
        <div className="hero">
          <div className="hero-top-text">
            <span>- HELLOSITE</span>
            <h1>Unlock the Potential of Your Commerce.</h1>
            <p>
              HelloSite is championing the aspirations of up-and-coming
              entrepreneurs, partnering with global giants, and nurturing
              success for all those who find themselves somewhere in the vast
              spectrum between.
            </p>
          </div>
          <div className="hero-images">
            <img src={herolines} alt="" className="img-floor" />
            <img src={heroimage} alt="" className="hero-prototype" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
