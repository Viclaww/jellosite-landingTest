import "./App.css";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Auth-Pages/Login/Login";
import Navbar from "./Components/Layouts/Navbar/Navbar";
import Footer from "./Components/Layouts/Footer/Footer";
import "./reusableComps/design.scss";
import "./reusableComps/font.scss";
import SignUp from "./Components/Pages/Auth-Pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/auth-login" element={<Login />} />
        <Route path="/auth-signup" element={<SignUp />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
