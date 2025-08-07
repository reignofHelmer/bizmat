import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "./create/CreateAccount";
import Verify from "./create/Verify";
import LoginPage from "./create/LoginPage";
import ForgotPassword from "./create/ForgotPassword";
import NewPassword from "./create/NewPassword";
import TwoFactor from "./create/TwoFactor";
import TwoFactorNext from "./create/TwoFactorNext";
import Dashboard from "./pages/Dashboard";
import Bookings from './pages/Bookings';
import Invoices from './pages/Invoices';
import Aimessaging from './pages/Aimessaging';
import Inventory from './pages/Inventory';
import Subscription from './pages/Subscription';

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
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/aimessaging" element={<Aimessaging />} />
        <Route path="/subscription" element={<Subscription />} />

      </Routes>
    </Router>
  );
}

export default App;