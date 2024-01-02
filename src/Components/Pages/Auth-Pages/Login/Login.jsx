import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import google from "../../../../assets/Images/google.svg";
import React, { useState } from "react";
import "../Login/Login.scss";
import { Link } from "react-router-dom";
import Navbar from "../../../Layouts/Navbar/Navbar";

const Login = () => {
  const [emailInput, setEmailInput] = useState("");

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="auth-left-login">
          <h1>Create your website in a few click</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} color="#7F56D9" />
              <span>Fully responsive</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} color="#7F56D9" />
              <span>Modular design</span>
            </li>
          </ul>
        </div>
        <div className="auth-right-login">
          {/* <img src={bgc} alt={bgc} className="bgc" /> */}
          <div className="login-card">
            <h2>Sign In to HelloSite</h2>
            <form action="">
              <div className="input">
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
              </div>
              <div className="rem-pass">
                <div className="rem">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
                <span>Forgot Password?</span>
              </div>
              <button>Sign In</button>
            </form>
            <button>
              <img src={google} alt={google} />
              <span>Sign In with Google</span>
            </button>
            <span>
              Don't have an account?{" "}
              <Link to="/auth-signup" style={{ color: "#7F56D9" }}>
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
