import React from "react";
import "./subscription.css";
import {
  FaSearch, FaBell, FaClock, FaUserCircle,
  FaHome, FaCalendarAlt, FaFileInvoice,
  FaRobot, FaBoxes, FaSlidersH,
  FaCreditCard, FaQuestionCircle,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Subscription = () => {
  return (
    <div>
      <header className="top-header">
        <div className="logo">
          <img src="/bizlogob.png" alt="Bizmoze Logo" />
        </div>

        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>

        <div className="header-icons">
          <FaBell className="icon" title="Notifications" />
          <FaClock className="icon" title="Reminders" />
          <FaUserCircle className="icon profile-icon" title="Profile" />
        </div>
      </header>

      <div className="dashboard-container">
        <aside className="sidebar">
          <div className="sidebar-section top">
            <Link to="/dashboard" className="sidebar-btn">
              <FaHome />
              <span>Dashboard</span>
            </Link>
          </div>

          <div className="sidebar-section">
            <p className="section-title">MAIN</p>
            <Link to="/bookings" className="sidebar-btn">
              <FaCalendarAlt />
              <span>Bookings & Calendar</span>
            </Link>
            <Link to="/invoices" className="sidebar-btn">
              <FaFileInvoice />
              <span>Clients & Invoices</span>
            </Link>
            <Link to="/aimessaging" className="sidebar-btn">
              <FaRobot />
              <span>AI Assistant & Messaging</span>
            </Link>
            <Link to="/inventory" className="sidebar-btn">
              <FaBoxes />
              <span>Inventory</span>
            </Link>
          </div>

          <div className="sidebar-section">
            <p className="section-title">SUPPORT & PEOPLE</p>
            <Link to="/preferences" className="sidebar-btn">
              <FaSlidersH />
              <span>App Preferences</span>
            </Link>
            <Link to="/subscription" className="sidebar-btn active">
              <FaCreditCard />
              <span>Billing & Subscription</span>
            </Link>
            <Link to="/support" className="sidebar-btn">
              <FaQuestionCircle />
              <span>Support & Help</span>
            </Link>
          </div>
        </aside>

        <div className="main-content">
            <h1>Billing & Subscription</h1>
            <p className="subtext">Manage your plan, payment method and billing information</p>

          <div className="billing-page">
            <section className="current-plan">
              <div className="plan-details">
                <h3>Current Plan: BizMaat Pro</h3>
                <p className="price">$19/month</p>
                <ul>
                  <li>Unlimited bookings</li>
                  <li>AI assistance</li>
                  <li>Priority support</li>
                </ul>
                <p className="renewal">Renews on July 10, 2025</p>
                  <button className="upgrade-btn">Upgrade Plan</button>
                  <button className="upgrade-btn">Cancel Subscription</button>
              </div>

              <div className="plan-options">
                <div className="plan-card">
                  <h4>Basic</h4>
                  <p className="price">Free</p>
                  <ul>
                    <li>Unlimited bookings</li>
                    <li>AI assistance</li>
                    <li>Priority support</li>
                  </ul>
                </div>
                <div className="plan-card selected">
                  <h4>Pro</h4>
                  <p className="price">$19/month</p>
                  <ul>
                    <li>Unlimited bookings</li>
                    <li>AI assistance</li>
                    <li>Priority support</li>
                  </ul>
                </div>
                <div className="plan-card">
                  <h4>Business</h4>
                  <p className="price">$29/month</p>
                  <ul>
                    <li>All Pro features</li>
                    <li>Dedicated account</li>
                    <li>Priority support</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="billing-table-section">
              <table className="billing-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Plan</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((_, index) => (
                    <tr key={index}>
                      <td>July 16 , 2025</td>
                      <td>BizMaat Pro (Monthly)</td>
                      <td>$19.00</td>
                      <td><span className="status pending">● Pending</span></td>
                      <td><button className="dots-btn">⋯</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section className="billing-info">
              <h3>Billing Info</h3>
              <form>
                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    placeholder="BizMaat Solutions"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group-e">
                    <label>Billing Email</label>
                    <input type="email" placeholder="@email.com" />
                  </div>
                  <div className="form-group-e">
                    <label>Phone Number</label>
                    <input type="text" placeholder="+234" />
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;