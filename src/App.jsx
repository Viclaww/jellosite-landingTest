import "./App.css";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Auth-Pages/Login/Login";
import Navbar from "./Components/Layouts/Navbar/Navbar";
import Footer from "./Components/Layouts/Footer/Footer";
import "./reusableComps/design.scss";
import "./reusableComps/font.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
