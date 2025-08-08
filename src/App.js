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
import Preferences from './pages/preferences/Preferences';
import Messaging from './pages/preferences/Messaging';
import Notification from './pages/preferences/Notification';
import Workflow from './pages/preferences/Workflow';
import Branding from './pages/preferences/Branding';
import Advanced from "./pages/preferences/Advanced";

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
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/advanced" element={<Advanced />} />
      </Routes>
    </Router>
  );
}

export default App;