import React from "react";
import "./invoicespopup.css";

const InvoicesPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-card large">
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>

        <h2>Invoices</h2>

        <div className="invoice-table-wrapper">
          <table className="invoice-table">
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Client Name</th>
                <th>Issue Date</th>
                <th>Due Date</th>
                <th>Amount Due</th>
                <th>Last Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array(10).fill(0).map((_, i) => (
                <tr key={i}>
                  <td>INV-00{i+1}</td>
                  <td>Ayo Akande</td>
                  <td>Jun 10, 2025</td>
                  <td>Jun 17, 2025</td>
                  <td>$50.00</td>
                  <td>Bank Transfer</td>
                  <td>
                    <button className="send-btn">Send Reminder</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvoicesPopup;