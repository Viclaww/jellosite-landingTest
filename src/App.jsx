import "./App.css";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Auth-Pages/Login/Login";
import "./reusableComps/design.scss";
import "./reusableComps/font.scss";
import SignUp from "./Components/Pages/Auth-Pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/auth-login" element={<Login />} />
        <Route path="/auth-signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
