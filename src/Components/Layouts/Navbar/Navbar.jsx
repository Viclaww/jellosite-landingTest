import React, { useState } from "react";
import Logo from "../../../assets/Images/HelloSite.svg";
import "../Navbar/Navbar.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="navbar">
      <Link to="/">
        <img src={Logo} alt={Logo} />
      </Link>
      <FontAwesomeIcon
        icon={toggle ? faBars : faTimes}
        onClick={handleToggle}
        cursor="pointer"
        className="nav-toggle"
      />
      <div className={toggle ? "null" : "nav-items"}>
        <ul>
          <li>Solutions</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <Link to="auth-signup" className="link">
          <button>Try for Free</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
