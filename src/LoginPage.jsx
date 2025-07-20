import React from "react";
import { useNavigate } from "react-router-dom";
import "./loginpage.css";

const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="left-panel">
        <img src="/Side_frame.png" alt="biz-maart" />
        <img src="/bizlftpnl.png" alt="biz-logo" className="overlay-image" />
      </div>

      <div className="right-panel">
        <div className="login-card">
          <span className="right-border"></span>
          <span className="after"></span>

          <h2>Welcome Back!</h2>
          <h4>Login to Manage your AI business assisstant</h4>

          <form>
            <div>
              <label>Business Email</label>
              <input type="email" placeholder="Enter email" />
            </div>

            <div>
              <label>Password</label>
              <input type="password" placeholder="Password" />
                <div style={{ textAlign: "right", marginBottom: "1rem" }}>
                  <button
                    type="button"
                    onClick={() => navigate("/ForgotPassword")}
                    style={{
                      background: "none",
                      textAlign: "right",
                      border: "none",
                      color: "#051548",
                      cursor: "pointer",
                      fontSize: "0.6rem",
                    }}>
                    Forgot password?
                  </button>
                </div>
            </div>

            <button onClick={() => navigate("/dashboard")} type="submit">Continue</button>
          </form>
          <p>
            Don't have an account?{" "}
            <button
              type="button" onClick={() => navigate("/")}
              style={{ background: "none", border: "none", color: "#051548", cursor: "pointer" }}>
              Create Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;