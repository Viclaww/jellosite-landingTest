import React from "react";
import heroimg from "../../../assets/Images/HelloSiteF.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="left-side">
          <img src={heroimg} alt="" />
        </div>
        <div className="right-side">
          <section>
            <header>COMPANY</header>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Partners</li>
              <li>Legal</li>
            </ul>
          </section>
          <section>
            <header>SUPPORT</header>
            <ul>
              <li>Merchant Support</li>
              <li>Help Center</li>
              <li>Hire an expert</li>
              <li>Community</li>
            </ul>
          </section>
          <section>
            <header>CONTACT US</header>
            <ul>
              <li>info@hellosite.com</li>
              <li>1 - 800 - 200 - 300</li>
              <li>1010 Sunset Blv. Palo Alto, California</li>
            </ul>
          </section>
          <section>
            <header>STAY UP TO DATE</header>
            <span>Subscribe to Our newsletter</span>
            <div className="subscribe">
              <input type="email" placeholder=" Email" />
              <FontAwesomeIcon
                icon={faArrowRight}
                color="#5729D4"
                cursor="pointer"
              />
            </div>
          </section>
          <section>
            <header>PRODUCTS</header>
            <ul>
              <li>Shop</li>
              <li>Shop pay</li>
              <li>Commerce Companies</li>
            </ul>
          </section>
        </div>
      </div>
      <hr />
      <span className="copyrights">© Copyright Hellosite Inc.</span>
    </footer>
  );
};

export default Footer;
