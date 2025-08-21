import React from "react";
import "./messaging.css";
import "./messaging.responsive.css";
import {
  FaSearch, FaBell, FaClock, FaUserCircle,
  FaHome, FaCalendarAlt, FaFileInvoice,
  FaRobot, FaBoxes, FaSlidersH,
  FaCreditCard, FaQuestionCircle,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Messaging = () => {
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
              <Link to="/messaging" className="sidebar-btn active">
                <span>AI & Messaging</span>
              </Link>
              <Link to="/notification" className="sidebar-btn">
                <span>Notification Settings</span>
              </Link>
              <Link to="/workflow" className="sidebar-btn">
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
            <div className="settings-container">
                <h2>AI & Messaging</h2>
                <p className="subtext">Customize tone, delay, automation</p>

                <div className="form-group">
                  <label>Greeting Message</label>
                  <textarea placeholder="Hi! Welcome 👋 What can I help you with today?" />
                </div>

                <div className="form-group">
                  <label>Feedback Message</label>
                  <input type="text" placeholder="Let me get someone to help you further." />
                </div>

                <div className="form-group">
                  <label>Auto-Reply Delay (in sec)</label>
                  <input type="number" placeholder="3" />
                </div>

                <div className="form-group">
                  <label>Daily Conversation Summary</label>
                  <div className="time-range">
                    <input type="time" placeholder="09:00" />
                    <span> - </span>
                    <input type="time" placeholder="18:00" />
                  </div>
                </div>
              <div className="form-group">
                <label>Default Language</label>
                <input type="text" placeholder="English" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Messaging;