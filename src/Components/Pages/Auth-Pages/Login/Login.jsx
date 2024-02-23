import { faCheckCircle, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import google from "../../../../assets/Images/google.svg";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Login/Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../../Layouts/Navbar/Navbar";
import { useLoginMutation } from "../../../../data/api/generalapi";
import { userLogin } from "../../../../data/auth/authAction";

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  // const [login, { isLoading, isError }] = useLoginMutation();
  const canSave = Boolean(emailInput) && Boolean(passwordInput);
  const user = useSelector((state) => state.auth.userInfo);

  useEffect(() => {
    if (user) {
      navigate("/onboarding"); // sends user to CREATE SITE PAGE
    }
  }, [user, navigate]);

  const data = {
    username: emailInput.toLowerCase(),
    password: passwordInput,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogin(data));
  };
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
            <form onSubmit={handleSubmit}>
              {error && (
                <span className="error-msg">
                  <FontAwesomeIcon icon={faWarning} color="red" />
                  {isError}
                </span>
              )}
              <div className="input">
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
                  }}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="rem-pass">
                <div className="rem">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
                <span>Forgot Password?</span>
              </div>
              <button onClick={handleSubmit} disabled={!canSave} type="submit">
                {loading ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  "Sign In"
                )}
              </button>
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
