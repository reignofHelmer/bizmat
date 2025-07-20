import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Verify from "./Verify";
import LoginPage from "./LoginPage";
import ForgotPassword from "./ForgotPassword";
import NewPassword from "./NewPassword";
import TwoFactor from "./TwoFactor";
import TwoFactorNext from "./TwoFactorNext";
import Dashboard from "./Dashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/twofactor" element={<TwoFactor />} />
        <Route path="/twofactornext" element={<TwoFactorNext />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;