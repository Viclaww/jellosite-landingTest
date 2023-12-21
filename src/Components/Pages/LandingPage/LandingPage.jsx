import React from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import "./LandingPage.scss";
import heroimage from "../../../assets/Images/hero-group.svg";
import herolines from "../../../assets/Images/hero-lines.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCircle,
  faStar,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import sell1 from "../../../assets/Images/sell1.svg";
import sell2 from "../../../assets/Images/sell2.svg";
import sell3 from "../../../assets/Images/sell3.svg";
import analytic from "../../../assets/Images/analytic.svg";
import dash from "../../../assets/Images/dash.svg";
import orders from "../../../assets/Images/orders.svg";
import revenue from "../../../assets/Images/revenue.svg";
import sales from "../../../assets/Images/sales.svg";
import friendly from "../../../assets/Images/friendly.svg";
import friendicon from "../../../assets/Icons/friend-icon.svg";
import friendicon2 from "../../../assets/Icons/friend-icon2.svg";
import Footer from "../../Layouts/Footer/Footer";

const testimony = [
  {
    id: 1,
    message:
      "Faucibus. At penatibus ad cubilia risus senectus varius sociis suspendisse integer suspendisse turpis senectus pellentesque nibh iaculis.",
    name: "Davies Nzan",
    role: "CEO at HelloSite",
  },
  {
    id: 2,
    message:
      "Faucibus. At penatibus ad cubilia risus senectus varius sociis suspendisse integer suspendisse turpis senectus pellentesque nibh iaculis.",
    name: "David Udoh",
    role: "CEO at HelloSite",
  },
  {
    id: 3,
    message:
      "Faucibus. At penatibus ad cubilia risus senectus varius sociis suspendisse integer suspendisse turpis senectus pellentesque nibh iaculis.",
    name: "Etimbuk Udeme",
    role: "CEO at HelloSite",
  },
  {
    id: 4,
    message:
      "Faucibus. At penatibus ad cubilia risus senectus varius sociis suspendisse integer suspendisse turpis senectus pellentesque nibh iaculis.",
    name: "Declan Rice",
    role: "CEO at HelloSite",
  },
];

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
                <img src={friendicon2} alt="" />
                <p>Theme store</p>
              </div>
            </div>

            <ul>
              <li>
                <FontAwesomeIcon icon={faCircle} size="xs" color="#7E57C2" />{" "}
                Select from a variety of customizable templates.
              </li>
              <li>
                <FontAwesomeIcon icon={faCircle} size="xs" color="#7E57C2" />{" "}
                With our drag and drop store you can bring your ideas to llife.
              </li>
            </ul>
            <p>
              Learn More{" "}
              <FontAwesomeIcon icon={faArrowRight} className="learn" />
            </p>
          </div>
        </div>
        <div className="optimize">
          <h2>Optimize your behind-the-scenes operations.</h2>
          <div className="optimize-con">
            <div className="optimize-left">
              <div className="operation-con">
                <span>01</span>
                <div className="operation">
                  <h3>Customer relationship management</h3>
                  <p>
                    This allows you to track customer interactions and manage
                    customer data. this helps improve cutstomer retention and
                    drives sales growth by targeting the right audience with the
                    right offers.
                  </p>
                </div>
              </div>
              <div className="operation-con">
                <span>02</span>
                <div className="operation">
                  <h3>Efficient order handling</h3>
                  <p>
                    Set up an order management system a centralized tool that
                    simplifies order processing, keeps inventory up to date in
                    real time, and automates order fulfillment to minimize
                    errors
                  </p>
                </div>
              </div>
              <div className="operation-con">
                <span>03</span>
                <div className="operation">
                  <h3>Manage your money where you make it</h3>
                  <p>
                    Manage your business finances all from one place with money
                    management and flexible funding designed with entrepreneurs
                    in mind.
                  </p>
                </div>
              </div>
            </div>
            <div className="optimize-right">
              <img src={sales} alt="" className="sales" />
              <img src={revenue} alt="" className="revenue" />
              <img src={dash} alt="" className="dash" />
              <img src={orders} alt="" className="orders" />
              <img src={analytic} alt="" className="analytic" />
            </div>
          </div>
        </div>
        <div className="testimonals">
          <h2>What people say about hellosite</h2>
          <div className="testimonies">
            {testimony.map((test) => (
              <div className="testimony-con" key={test.id}>
                <div className="rating">
                  <FontAwesomeIcon icon={faStar} color="#5729D4" />
                  <FontAwesomeIcon icon={faStar} color="#5729D4" />
                  <FontAwesomeIcon icon={faStar} color="#5729D4" />
                  <FontAwesomeIcon icon={faStar} color="#5729D4" />
                  <FontAwesomeIcon icon={faStar} color="#5729D4" />
                </div>
                <p>{test.message}</p>
                <div className="author">
                  <FontAwesomeIcon icon={faUserCircle} size="2x" />
                  <div className="author-details">
                    <p>{test.name}</p>
                    <span>{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grow">
          <h1>Grow your Business here </h1>
          <p>
            Whether you want to sell products down the street or around the
            world, we have all the tools you need.
          </p>
          <button>Try it free</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
