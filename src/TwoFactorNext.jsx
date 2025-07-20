import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './twofactornext.css';

const TwoFactorNext = () => {
  const navigate = useNavigate();

  const [connected, setConnected] = useState({
    google: false,
    calendly: false,
    outlook: false,
    apple: false,
  });

  const toggleConnect = (platform) => {
    setConnected((prev) => ({
      ...prev,
      [platform]: !prev[platform],
    }));
  };

  return (
    <div className="twofactor-next-page">
      <div className="twofactor-next-card">
        <h2>Complete your business profile</h2>
        <h4>Create your business owner account</h4>
        <p className="step-indicator">Step 2: Connect Calendar</p>

        <div className="progress-bar">
          <div className="progress-fill full"></div>
        </div>

        <h2 className="sync-header">Sync with External Calendars</h2>

        <div className="calendar-cards-container">
          <div className="calendar-card">
            <div className="card-header">
              <input
                type="checkbox"
                checked={connected.google}
                readOnly
              />
              <h3>Google Calendar</h3>
            </div>
            <button onClick={() => toggleConnect("google")}>
              {connected.google ? "Connected" : "Connect with Google"}
            </button>
          </div>

          <div className="calendar-card">
            <div className="card-header">
              <input
                type="checkbox"
                checked={connected.calendly}
                readOnly
              />
              <h3>Calendly</h3>
            </div>
            <button onClick={() => toggleConnect("calendly")}>
              {connected.calendly ? "Connected" : "Connect with Calendly"}
            </button>
          </div>

          <div className="calendar-card">
            <div className="card-header">
              <input
                type="checkbox"
                checked={connected.outlook}
                readOnly
              />
              <h3>Microsoft Outlook</h3>
            </div>
            <button onClick={() => toggleConnect("outlook")}>
              {connected.outlook ? "Connected" : "Connect with Microsoft"}
            </button>
          </div>

          <div className="calendar-card full-width">
            <div className="card-header">
              <input
                type="checkbox"
                checked={connected.apple}
                readOnly
              />
              <h3>Apple Calendar (iCloud)</h3>
            </div>
            <input type="email" placeholder="iCloud Email" />
            <input type="password" placeholder="Apple Password" />
            <button onClick={() => toggleConnect("apple")}>
              {connected.apple ? "Connected" : "Connect"}
            </button>
          </div>
        </div>
        <button
          className="continue-button"
          onClick={() => navigate("/dashboard")}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default TwoFactorNext;