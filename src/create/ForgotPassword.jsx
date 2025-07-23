import React from "react";
import { useNavigate } from "react-router-dom";
import "./forgotpassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/NewPassword");
  };

  return (
    <div className="forgot-password-page">
      <div className="left-panel">
        <img src="/Side_frame.png" alt="biz-maart" />
        <img src="/bizlftpnl.png" alt="biz-logo" className="overlay-images" />
      </div>

        <div className="right-panel">
            <div className="forgot-password-card">
            <span className="right-border"></span>
            <span className="after"></span>

            <h2>Reset Your Password</h2>
            <h4>Enter your email or phone number linked to your account</h4>

            <form onSubmit={handleSubmit}>
                <div>
                <label>Email or Phone</label>
                <input type="email" placeholder="enter email" required />
                </div>
                <div>
                <label>New Password</label>
                <input type="password" placeholder="password" required />
                </div>
                <button type="submit">Send Reset Link</button>
            </form>

            <p className="back-link">
                <button onClick={() => navigate("/loginpage")}>← Back to Login</button>
            </p>
            </div>
        </div>
    </div>
  );
};

export default ForgotPassword;