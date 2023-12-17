import React from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import "./LandingPage.scss";
import heroimage from "../../../assets/Images/hero-group.svg";
import herolines from "../../../assets/Images/hero-lines.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import sell1 from "../../../assets/Images/sell1.svg";
import sell2 from "../../../assets/Images/sell2.svg";
import sell3 from "../../../assets/Images/sell3.svg";
import friendly from "../../../assets/Images/friendly.svg";
import friendicon from "../../../assets/Icons/friend-icon.svg";
import friendicon2 from "../../../assets/Icons/friend-icon2.svg";
import Footer from "../../Layouts/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="landing-page">
        <div className="hero">
          <div className="hero-con">
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
            <div className="hero-footer-con">
              <div className="hero-footer-l">
                <h2>Sell everything, anywhere to buyers</h2>
              </div>
              <div className="hero-footer-r">
                <span>
                  Sell online, in person, and around the world with the
                  marketing tools, social integrations, and sales channels you
                  need to get your products in front of customers.
                </span>
                <p>
                  Start selling <FontAwesomeIcon icon={faArrowRight} bounce />
                </p>
              </div>
            </div>
            <div className="products">
              <img src={sell3} alt="" />
              <img src={sell2} alt="" />
              <img src={sell1} alt="" />
            </div>
          </div>
        </div>
        <div className="friendly">
          <div className="friendly-img">
            <img src={friendly} alt="" />
          </div>
          <div className="friendly-right">
            <h2>User-Friendly setup</h2>
            <span>
              Easily create your online store without any technical expertise.
              Our platform offers a simple and intuitive interface for store
              setup.
            </span>
            <div className="store">
              <div className="online">
                <img src={friendicon} alt="" />
                <p>Online store builder</p>
              </div>
              <div className="online">
                <img src={friendicon} alt="" />
                <p>Theme store</p>
              </div>
            </div>

            <ul>
              <li>Select from a variety of customizable templates.</li>
              <li>
                With our drag and drop store you can bring your ideas to llife.
              </li>
            </ul>
            <p>
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
