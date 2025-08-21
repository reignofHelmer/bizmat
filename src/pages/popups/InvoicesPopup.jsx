import React, { useEffect, useState } from "react";
import "./invoicespopup.css";
import "./invoicespopup.responsive.css";
import { useNavigate } from "react-router-dom";

const rows = Array.from({ length: 18 }).map((_, i) => ({
  id: `INV-00${24 + i}`,
  name: "Ayo Adekande",
  issue: "Jun 18, 2025",
  due: "Jun 17, 2025",
  amount: "$60.00",
  last: "Bank Transfer",
}));

export default function Invoicespopup() {
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
      className={`invoice-modal ${closing ? "closing" : "open"}`}
      onClick={close} // click on scrim closes
    >
      <section
        className="invoice-panel"
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
          <table className="invoice-table">
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Client Name</th>
                <th>Issue Date</th>
                <th>Due Date</th>
                <th>Amount Due</th>
                <th>Last Contact</th>
                <th style={{ textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td className="muted">{r.id}</td>
                  <td>
                    <div className="client">
                      <span className="avatar" />
                      <span>{r.name}</span>
                    </div>
                  </td>
                  <td className="muted">{r.issue}</td>
                  <td className="muted">{r.due}</td>
                  <td className="strong">{r.amount}</td>
                  <td className="linkish">{r.last}</td>
                  <td className="actions">
                    <button className="send-link">Send Reminder →</button>
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