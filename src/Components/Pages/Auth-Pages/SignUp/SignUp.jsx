import React from "react";
import "../SignUp/SignUp.scss";
import google from "../../../../assets/Images/google.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="auth-left-signup">
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
      <div className="auth-right-signup">
        <div className="signup-card">
          <h2>Sign Up to HelloSite</h2>
          <form action="">
            <div className="input">
              <input type="text" placeholder="First Name & Last name" />
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Create Password" />
            </div>
            <div className="rem">
              <input type="checkbox" />
              <span>
                I agree with the{" "}
                <Link to="" className="link" style={{ color: "#7F56D9" }}>
                  Terms & Conditions{" "}
                </Link>
                of Hellosite
              </span>
            </div>
            <button>Sign Up</button>
          </form>
          <button>
            <img src={google} alt={google} />
            <span>Sign In with Google</span>
          </button>
          <span>
            Already have an account?{" "}
            <Link to="/auth-login" style={{ color: "#7F56D9" }}>
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
