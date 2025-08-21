import React, { useState } from "react";
import "./workflow.css";
import "./workflow.responsive.css";
import {
  FaSearch, FaBell, FaClock, FaUserCircle,
  FaHome, FaCalendarAlt, FaFileInvoice,
  FaRobot, FaBoxes, FaSlidersH,
  FaCreditCard, FaQuestionCircle,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Workflow = () => {
  // State for form controls
  const [allowDoubleBooking, setAllowDoubleBooking] = useState(true);
  // const [autoAssignKeyword, setAutoAssignKeyword] = useState('Message, Facial');
  const [cancellationWindow, setCancellationWindow] = useState('2');
  const [bufferTime, setBufferTime] = useState('10');

  return (
    <div>
      {/* Top Header */}
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

      {/* Page Content */}
      <div className="dashboard-container">
        {/* Main Sidebar */}
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
            <Link to="/preferences" className="sidebar-btn active">
              <FaSlidersH />
              <span>App Preferences</span>
            </Link>
            <Link to="/subscription" className="sidebar-btn">
              <FaCreditCard />
              <span>Billing & Subscription</span>
            </Link>
            <Link to="/support" className="sidebar-btn">
              <FaQuestionCircle />
              <span>Support & Help</span>
            </Link>
          </div>
        </aside>

        {/* Preferences Content */}
        <div className="preferences-container">
          {/* Inner Sidebar (Preferences Navigation) */}
          <aside className="preferences-sidebar">
            <h3>App Preferences</h3>
            <p className="sidebar-desc">
              Adjust how BizMart behaves for your business operations and customer experience.
            </p>
            <div className="nav-list">
              <Link to="/preferences" className="sidebar-btn">
                <span>Business Customization</span>
              </Link>
              <Link to="/messaging" className="sidebar-btn">
                <span>AI & Messaging</span>
              </Link>
              <Link to="/notification" className="sidebar-btn">
                <span>Notification Settings</span>
              </Link>
              <Link to="/workflow" className="sidebar-btn active">
                <span>Booking & Workflow</span>
              </Link>
              <Link to="/branding" className="sidebar-btn">
                <span>Branding & Appearance</span>
              </Link>
              <Link to="/advanced" className="sidebar-btn">
                <span>Advanced & Integration</span>
              </Link>
            </div>
          </aside>

          {/* Main Preferences Form */}
          <main className="main-content">
            <div className="booking-workflow-container">
              <div className="section-header">
                <h2>Booking & Workflow</h2>
                <p>Improve service handling & prevent chaos</p>
              </div>

              <div className="settings-form">
                {/* Allow Double Booking Toggle */}
                <div className="form-group toggle-group">
                  <div className="form-label-wrapper">
                    <label className="form-label">Allow Double Booking</label>
                  </div>
                  <div 
                    className={`toggle-switch ${allowDoubleBooking ? 'active' : ''}`}
                    onClick={() => setAllowDoubleBooking(!allowDoubleBooking)}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>

                {/* Auto-assign by Keyword */}
                <div className="form-group">
                  <label className="form-label">Auto-assign by Keyword</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter keywords"
                    />
                  </div>
                </div>

                {/* Client Cancellation Window */}
                <div className="form-group">
                  <label className="form-label">Client Cancellation Window</label>
                  <div className="input-wrapper">
                    <input
                      type="number"
                      value={cancellationWindow}
                      onChange={(e) => setCancellationWindow(e.target.value)}
                      className="form-input number-input"
                      min="0"
                    />
                  </div>
                </div>

                {/* Booking Buffer Time */}
                <div className="form-group">
                  <label className="form-label">Booking Buffer Time (min)</label>
                  <div className="input-wrapper">
                    <input
                      type="number"
                      value={bufferTime}
                      onChange={(e) => setBufferTime(e.target.value)}
                      className="form-input number-input"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Workflow;