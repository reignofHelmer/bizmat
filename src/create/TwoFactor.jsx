import React from "react";
import { useNavigate } from "react-router-dom";
import "./twofactor.css";

const TwoFactor = () => {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate("/twofactornext");
  }

  return (
    <div className="twofa-page">
      <div className="twofa-card">
        <span className="right-border"></span>
        <span className="after"></span>

        <h2>Complete Your Business Profile</h2>
        <h4>Step 1: Business Profile Creation</h4>

        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress" style={{ width: "50%" }}></div>
          </div>
        </div>

        <div className="logo-upload-section">
          <div className="logo-placeholder">+</div>
          <button className="upload-button">Upload Business Logo</button>
        </div>

        <form>
          <div className="row">
            <div className="form-group">
              <label>Business Name</label>
              <input type="text" placeholder="Enter business name" />
            </div>
            <div className="form-group">
              <label>Industry/Type</label>
              <input type="text" placeholder="Enter industry/type" />
            </div>
          </div>
          <div className="form-group full-width">
            <label>Address / Service Area</label>
            <input type="text" placeholder="Enter address or service area" />
          </div>
          <div className="form-group full-width">
            <label>Business Hours</label>
            <input type="text" placeholder="e.g. Mon-Fri: 9am - 5pm" />
          </div>

          <button type="submit" className="continue-button" onClick={handleContinue}>Continue</button>
        </form>
      </div>
    </div>
  );
};

export default TwoFactor;