import React, { useEffect, useState } from "react";
import "./missedpopup.css";
import "./missedpopup.responsive.css";
import { useNavigate } from "react-router-dom";

export default function Missedpopup() {
  const navigate = useNavigate();
  const [closing, setClosing] = useState(false);

  const close = () => {
    setClosing(true);
    setTimeout(() => navigate(-1), 280); // match CSS duration
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`missed-modal ${closing ? "closing" : "open"}`}
      onClick={close}              // click outside to close
    >
      <section
        className="missed-panel"
        onClick={(e) => e.stopPropagation()}  // keep clicks inside from closing
      >
        {/* close - top left */}
        <button className="close-btn" onClick={close} aria-label="Close">✕</button>

        <div className="missed-content">
          {/* 2-col layout */}
          <div className="missed-grid">
            {/* ===== Left: Profile card ===== */}
            <div className="profile-card">
              {/* cover & avatar: leave src empty for you to fill later */}
              <div className="cover-wrap">
                <img src="" className="cover" alt="Client cover image" />
                <img src="" className="avatar" alt="Client profile photo" />
              </div>

              <div className="profile-body">
                <h3 className="name">John Doe</h3>
                <div className="company">Dry cleaning company</div>

                <div className="contact">
                  <div className="row">
                    <span className="label">Email:</span>
                    <span className="value">johndoe@gmail.com</span>
                  </div>
                  <div className="row">
                    <span className="label">Phone:</span>
                    <span className="value">+234 8442 320 18</span>
                  </div>
                </div>

                <div className="social-row">
                  <button className="pill" title="Facebook">…</button>
                  <button className="pill" title="Instagram">…</button>
                  <button className="pill" title="LinkedIn">…</button>
                  <button className="pill" title="WhatsApp">…</button>
                  <button className="pill" title="X/Twitter">…</button>
                  <button className="pill more" title="More">…</button>
                </div>
              </div>
            </div>

            {/* ===== Right: Quick action ===== */}
            <div className="right-col">
              <div className="qa-head">
                <h4>Quick action</h4>
                <button className="schedule-btn">＋ Schedule a new appointment</button>
              </div>

              <div className="activity-card">
                <div className="activity-top">
                  <div className="dot" />
                  <div className="meta">
                    <div className="date">July 24, 4:20 PM</div>
                    <div className="title">Missed appointment</div>
                  </div>
                </div>

                <label className="composer-label">Send follow-up message:</label>
                <div className="composer">
                  <textarea
                    defaultValue={`"Sorry we missed you yesterday, want to reschedule?"`}
                    aria-label="Follow-up message"
                  />
                </div>

                <button className="send-btn" disabled>Send message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
