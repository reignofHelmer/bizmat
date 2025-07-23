import React from "react";
import "./createaccount.css";
import { useNavigate } from "react-router-dom";


const CreateAccount = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify");
  };

  return (
    <div className="create-account-page">
      <div className="left-panel">
        <img src="/Side_frame.png" alt="biz-maart" />
        <img src="/bizlftpnl.png" alt="biz-logo" className="overlay-images"/>
      </div>

        <div className="right-panel">
          <div className="create-account-card">
          <span className="right-border"></span>
          <span className="after"></span>
            <h2>Get Started with BizMate</h2>
            <h4>Create your business owner account</h4>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Full Name</label>
                <input type="text" placeholder="enter full name" />
              </div>
              <div>
                <label>Business Email</label>
                <input type="email" placeholder="enter email" />
              </div>
              <div>
                <label>Phone Number</label>
                <input 
                type="tel" pattern="[0-9]*" inputMode="numeric" placeholder="+234" maxLength={14} />
              </div>
              <div>
                <label>Password</label>
                <input type="password" placeholder="password" />
              </div>
              <button type="submit">Continue</button>
            </form>
            <p>Already have an account? <a href="/LoginPage">Login</a></p>
          </div>
        </div>
      </div>
  );
};

export default CreateAccount;