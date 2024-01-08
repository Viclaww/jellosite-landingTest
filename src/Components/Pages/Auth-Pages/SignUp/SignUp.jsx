import React, { useState } from "react";
import "../SignUp/SignUp.scss";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../../data/auth/authAction";
import google from "../../../../assets/Images/google.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faWarning } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../../Layouts/Navbar/Navbar";

const SignUp = () => {
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [FirstNameInput, setFirstNameInput] = useState("");
  const [LastNameInput, setLastNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [genderInput, setGenderInput] = useState("");
  const [passwordInput2, setPasswordInput2] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const dispatch = useDispatch();
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );

  const data = {
    username: phoneInput,
    email: emailInput,
    gender: genderInput,
    password1: passwordInput,
    password2: passwordInput2,
    first_name: FirstNameInput,
    last_name: LastNameInput,
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (passwordInput === passwordInput2) {
      dispatch(registerUser(data));
    } else {
      toast.error("Passwords Do not match");
    }
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
              {error && (
                <span className="error-msg">
                  <FontAwesomeIcon icon={faWarning} color="red" />
                  {"  "}
                  {error}
                </span>
              )}
              <div className="input">
                <div className="row-input">
                  <input
                    value={FirstNameInput}
                    onChange={(e) => setFirstNameInput(e.target.value)}
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    value={LastNameInput}
                    onChange={(e) => setLastNameInput(e.target.value)}
                    type="text"
                    placeholder="Last name"
                  />
                </div>
                <div className="row-input">
                  <input
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    type="number"
                    placeholder="Phone Number"
                  />
                  <select
                    value={genderInput}
                    onChange={(e) => setGenderInput(e.target.value)}
                    type=""
                    className="p-gender"
                    placeholder="Email Address"
                  >
                    <option value="" disabled>
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <input
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  type="password"
                  placeholder="Create Password"
                />
                <input
                  value={passwordInput2}
                  onChange={(e) => setPasswordInput2(e.target.value)}
                  type="password"
                  placeholder="Confirm Password"
                />
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
              <button type="submit" onClick={handleSubmit}>
                Sign Up
              </button>
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
