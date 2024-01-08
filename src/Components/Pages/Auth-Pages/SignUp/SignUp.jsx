import React, { useState } from "react";
import "../SignUp/SignUp.scss";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../../data/auth/authAction";
import google from "../../../../assets/Images/google.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheckCircle, faWarning } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "../../../Layouts/Navbar/Navbar";

const SignUp = () => {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const dispatch = useDispatch();
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );

  const canSave =
    Boolean(emailInput) &&
    Boolean(nameInput) &&
    Boolean(agreeToTerms) &&
    passwordStrength === "strong";

  const checkPasswordStrength = (password) => {
    // Define your password strength criteria
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    // Check the criteria
    if (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber
    ) {
      setPasswordStrength("strong");
    } else {
      setPasswordStrength("weak");
    }
  };

  const data = {
    username: nameInput,
    email: emailInput.toLowerCase(),
    password1: passwordInput,
    password2: passwordInput,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(data));
  };
  return (
    <>
      <Navbar />
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
            <form onSubmit={handleSubmit}>
              <div className="input">
                <input
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  type="text"
                  placeholder="First Name & Last name"
                />
                <input
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    checkPasswordStrength(e.target.value);
                  }}
                  type="password"
                  placeholder="Create Password"
                />
                {passwordInput && passwordStrength === "strong" && (
                  <span className="password-strength-strong">
                    Strong password!
                  </span>
                )}
                {passwordInput && passwordStrength === "weak" && (
                  <span className="password-strength-weak">
                    Weak password. Please use at least 8 characters, including
                    uppercase, lowercase, and a number.
                  </span>
                )}
              </div>
              <div className="rem">
                <input
                  value={agreeToTerms}
                  onChange={() => setAgreeToTerms(!agreeToTerms)}
                  type="checkbox"
                />
                <span>
                  I agree with the{" "}
                  <Link to="" className="link" style={{ color: "#7F56D9" }}>
                    Terms & Conditions{" "}
                  </Link>
                  of Hellosite
                </span>
              </div>
              <button
                disabled={!canSave}
                className="disabled:bg-red-800 p-24"
                type="submit"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
              {error && (
                <span className="error-msg">
                  <FontAwesomeIcon icon={faWarning} color="red" />
                  {error}
                </span>
              )}
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
    </>
  );
};

export default SignUp;
