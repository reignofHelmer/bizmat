import React, { useEffect, useState } from "react";
import "./stockpopup.css";
import "./stockpopup.responsiveness.css";
import { useNavigate } from "react-router-dom";

const rows = Array.from({ length: 18 }).map((_, i) => ({
  ItemName: "Shampoo",
  qty: "3 units",
  level: "10 units",
  last: "June 15",
}));

export default function Stockpopup() {
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
      className={`stock-modal ${closing ? "closing" : "open"}`}
      onClick={close} // click on scrim closes
    >
      <section
        className="stock-panel"
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
          <table className="stock-table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Current Qty</th>
                <th>Re-order Level</th>
                <th>Last Restocked</th>
                <th style={{ textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td>
                    <div className="client">
                      <span className="avatar" />
                      <span>{r.ItemName}</span>
                    </div>
                  </td>
                  <td className="muted">{r.qty}</td>
                  <td className="muted">{r.level}</td>
                  <td className="strong">{r.last}</td>
                  <td className="actions">
                    <button className="send-link">Restock →</button>
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