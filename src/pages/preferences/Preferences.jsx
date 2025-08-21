import React from "react";
import "./preferences.css";
import "./preferences.responsive.css";
import {
  FaSearch, FaBell, FaClock, FaUserCircle,
  FaHome, FaCalendarAlt, FaFileInvoice,
  FaRobot, FaBoxes, FaSlidersH,
  FaCreditCard, FaQuestionCircle,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Preferences = () => {
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
              <Link to="/preferences" className="sidebar-btn active">
                <span>Business Customization</span>
              </Link>
              <Link to="/messaging" className="sidebar-btn">
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
            <h2>Business Customization</h2>
            <p className="section-desc">Basic business identity setup</p>

            <div className="form-row">
              <div className="form-group">
                <label>Business Display Name</label>
                <input type="text" placeholder="AI & Messaging" />
              </div>

              <div className="form-group">
                <label>Business Display Name</label>
                <input type="text" placeholder="AI & Messaging" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Greeting Message</label>
                <div className="day-buttons">
                  {Array(7).fill("Mon").map((day, index) => (
                    <button key={index}>{day}</button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Operating Hours</label>
                <div className="time-range">
                  <input type="text" placeholder="9:00 AM" />
                  <span>-</span>
                  <input type="text" placeholder="6:00 PM" />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Preferences;