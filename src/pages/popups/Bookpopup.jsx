import React, { useEffect, useState } from "react";
import "./bookpopup.css";
import "./bookpopup.responsive.css";
import { useNavigate } from "react-router-dom";

const rows = Array.from({ length: 18 }).map((_, i) => ({
  name: "Emmanuel K.",
  date: "Jun 18, 2025",
  time: "10:00 AM",
  service: "Cleaning",
  status: "pending",
}));

export default function Bookpopup() {
  const navigate = useNavigate();
  const [closing, setClosing] = useState(false);

  const close = () => {
    setClosing(true); // triggers slide-out
    setTimeout(() => navigate(-1), 280); // match CSS duration
  };

  // esc to close + lock page scroll while modal is open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`book-modal ${closing ? "closing" : "open"}`}
      onClick={close} // click on scrim closes
    >
      <section
        className="book-panel"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        {/* Close (top-left) */}
        <button className="close-btn" onClick={close} aria-label="Close">
          ✕
        </button>

        {/* Toolbar */}
        <div className="toolbar">
          <input
            className="toolbar-search"
            placeholder="Search message..."
            type="text"
          />
          <div className="toolbar-right">
            <button className="link-filter">Filters</button>
            <span className="chip">Reminder Status: Not Sent</span>
            <span className="chip">Payment Status: Unpaid</span>
          </div>
        </div>

        {/* Table Card */}
        <div className="table-card">
          <table className="book-table">
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Service</th>
                <th>Status</th>
                <th style={{ textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td>
                    <div className="client">
                      <span className="avatar" />
                      <span>{r.name}</span>
                    </div>
                  </td>
                  <td className="muted">{r.date}</td>
                  <td className="muted">{r.time}</td>
                  <td className="strong">{r.service}</td>
                  <td className="linkish">{r.status}</td>
                  <td className="actions" style={{ textAlign: "center" }}>
                    <button className="send-link" style={{ textAlign: "center" }}>Confirm →</button>
                    <button className="send-link" style={{ textAlign: "center" }}>Reschedule →</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}