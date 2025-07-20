import React from "react";
import { useNavigate } from "react-router-dom";
import "./newpassword.css";

const NewPassword = () => {
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    // You could validate passwords here before navigating
    navigate("/loginpage");
  };

  return (
    <div className="new-password-page">
      <div className="left-panel">
        <img src="/Side_frame.png" alt="biz-maart" />
        <img src="/bizlftpnl.png" alt="biz-logo" className="overlay-images" />
      </div>

        <div className="right-panel">
            <div className="new-password-card">
            <span className="right-border"></span>
            <span className="after"></span>

            <h2>Create a New Password</h2>
            <h4>Enter and confirm your new password</h4>

            <form onSubmit={handleReset}>
                <div>
                <label>New Password</label>
                <input type="password" placeholder="Enter new password" required />
                </div>
                <div>
                <label>Confirm New Password</label>
                <input type="password" placeholder="Confirm new password" required />
                </div>

                <button type="submit">Save Password</button>
            </form>

            <p className="back-link">
                <button onClick={() => navigate("/ForgotPassword")}>← Back</button>
            </p>
            </div>
        </div>
    </div>
  );
};

export default NewPassword;