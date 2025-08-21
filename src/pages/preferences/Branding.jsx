import React, { useState } from "react";
import "./branding.css";
import "./branding.responsive.css";
import {
  FaSearch, FaBell, FaClock, FaUserCircle,
  FaHome, FaCalendarAlt, FaFileInvoice,
  FaRobot, FaBoxes, FaSlidersH,
  FaCreditCard, FaQuestionCircle,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Branding = () => {
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [showBizMartBranding, setShowBizMartBranding] = useState(true);
  const [customURL, setCustomURL] = useState('client.glowspa.com');

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
              <Link to="/workflow" className="sidebar-btn">
                <span>Booking & Workflow</span>
              </Link>
              <Link to="/branding" className="sidebar-btn active">
                <span>Branding & Appearance</span>
              </Link>
              <Link to="/advanced" className="sidebar-btn">
                <span>Advanced & Integration</span>
              </Link>
            </div>
          </aside>

          {/* Main Branding Form */}
          <main className="main-content">
            <div className="branding-content">
              <div className="page-header">
                <h2>Branding & Appearance</h2>
                <p className="page-subtitle">Ensure BizMart looks like your brand</p>
              </div>

              {/* Logo Section */}
              <div className="form-section">
                <h3 className="section-title">Logo</h3>
                
                <div className="logo-upload-area">
                  <div className="upload-options">
                    <button className="upload-btn active">Up to 5M</button>
                    <button className="upload-btn">PNG</button>
                    <button className="upload-btn">SVG</button>
                    <button className="upload-btn">JPG</button>
                  </div>
                  
                  <div className="upload-dropzone">
                    <div className="upload-placeholder">
                      <span>+</span>
                    </div>
                  </div>
                  
                  <button className="upload-button">Upload</button>
                </div>
              </div>

              {/* Accent Color Section */}
              <div className="form-section">
                <h3 className="section-title">Accent Color</h3>
                <div className="color-picker-container">
                  <div className="color-preview" style={{ backgroundColor: '#22c55e' }}></div>
                  <input type="color" value="#22c55e" className="color-input" />
                </div>
              </div>

              {/* Theme Section */}
              <div className="form-section">
                <h3 className="section-title">Theme</h3>
                <div className="theme-options">
                  <label className="theme-option">
                    <input 
                      type="radio" 
                      name="theme" 
                      value="light" 
                      checked={selectedTheme === 'light'}
                      onChange={(e) => setSelectedTheme(e.target.value)}
                    />
                    <span>Light</span>
                  </label>
                  <label className="theme-option">
                    <input 
                      type="radio" 
                      name="theme" 
                      value="dark" 
                      checked={selectedTheme === 'dark'}
                      onChange={(e) => setSelectedTheme(e.target.value)}
                    />
                    <span>Dark</span>
                  </label>
                </div>
              </div>

              {/* Show BizMart Branding Section */}
              <div className="form-section">
                <div className="toggle-section">
                  <div className="toggle-content">
                    <h3 className="section-title">Show BizMart Branding</h3>
                  </div>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={showBizMartBranding}
                      onChange={(e) => setShowBizMartBranding(e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>

              {/* Custom Client Portal URL Section */}
              <div className="form-section">
                <h3 className="section-title">Custom Client Portal URL</h3>
                <div className="url-input-container">
                  <input 
                    type="text" 
                    value={customURL}
                    onChange={(e) => setCustomURL(e.target.value)}
                    className="url-input"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Branding;