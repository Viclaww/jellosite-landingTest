import "./App.css";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Components/Pages/Auth-Pages/Login/Login";
import "./reusableComps/design.scss";
import "./reusableComps/font.scss";
import SignUp from "./Components/Pages/Auth-Pages/SignUp/SignUp";
import "./reusableComps/font.scss";
import "./reusableComps/design.scss";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <div>
      <ToastContainer />
      <ScrollToTop />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/auth-login" element={<Login />} />
        <Route path="/auth-signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
