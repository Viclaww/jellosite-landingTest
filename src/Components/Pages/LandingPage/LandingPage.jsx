import React from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import "./LandingPage.scss";
import heroimage from "../../../assets/Images/hero-group.svg";
import herolines from "../../../assets/Images/hero-lines.svg";
import Footer from "../../Layouts/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
          <div className="email-input">
            <input type="email" placeholder="Email" />
            <button>Get Early Access</button>
          </div>
        </div>
        <div className="hero-footer">
          <div className="hero-footer-l">
            <h2>Sell everything, anywhere to buyers</h2>
          </div>
          <div className="hero-footer-r">
            <span>
              Sell online, in person, and around the world with the marketing
              tools, social integrations, and sales channels you need to get
              your products in front of customers.
            </span>
            <p>
              Start selling <FontAwesomeIcon icon={faArrowRight} bounce />
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
