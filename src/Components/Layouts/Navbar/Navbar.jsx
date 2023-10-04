import React from "react";
import Logo from "../../../assets/Images/HelloSite.svg";
import "../Navbar/Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={Logo} alt={Logo} />
        </Link>
        <ul>
          <li>Solutions</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <button>Try for Free</button>
    </div>
  );
};

export default Navbar;
