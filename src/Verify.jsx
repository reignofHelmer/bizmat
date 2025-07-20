import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './verify.css';

const Verify = () => {
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/TwoFactor");
  };

  const [timer, setTimer] = useState(60);

    useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) {
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    } else {
      e.target.value = "";
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="verify-page">
        <div className="left-panel">
          <img src="/Side_frame.png" alt="biz-maart" />
          <img src="/bizlftpnl.png" alt="biz-logo" className="overlay-images" />
        </div>

        <div className="right-panel">
          <div className="verify-card">
            <span className="right-border"></span>
            <span className="after"></span>
            <h2>Verify your Contact Info</h2>
            <h4>Enter the 6-digit code sent to your email or phone</h4>
            <p style={{ textAlign: "left" }}>Verification Code (6-digit input)</p>
            <form onSubmit={handleSubmit}>
              <div className="otp-inputs">
                {[...Array(6)].map((_, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    ref={(el) => (inputsRef.current[i] = el)}
                    onChange={(e) => handleChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                  />
                ))}
              </div>
              <button type="submit">Verify</button>
                            <p className="resend-text" style={{ textAlign: "right" }}>
                {timer > 0 ? (
                  <>Resend code in <span>{timer}s</span></>
                ) : (
                  <button onClick={() => setTimer(60)} className="resend-button">
                    Resend Code
                  </button>
                )}
              </p>
            </form>
          </div>
        </div>
      
    </div>
  );
};

export default Verify;