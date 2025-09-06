import React, { useState } from "react";
import "./advanced.css";
import "./advanced.responsive.css";
import {
  FaSearch, FaBell, FaClock, FaUserCircle,
  FaHome, FaCalendarAlt, FaFileInvoice,
  FaRobot, FaBoxes, FaSlidersH,
  FaCreditCard, FaQuestionCircle,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Advanced = () => {
  const [webhookURL, setWebhookURL] = useState('https://mybiz.com/webhook');
  const [emailSignature, setEmailSignature] = useState('"Thanks, Team Glow Touch Spa"');
  const [invoicePrefix, setInvoicePrefix] = useState('INV-');
  const [integrations, setIntegrations] = useState({
    googleCalendar: false,
    calendly: false,
    microsoftOutlook: false,
    appleCalendar: false
  });

  const handleIntegrationToggle = (integration) => {
    setIntegrations(prev => ({
      ...prev,
      [integration]: !prev[integration]
    }));
  };

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
              <Link to="/branding" className="sidebar-btn">
                <span>Branding & Appearance</span>
              </Link>
              <Link to="/advanced" className="sidebar-btn active">
                <span>Advanced & Integration</span>
              </Link>
            </div>
          </aside>

          {/* Main Advanced Form */}
          <main className="main-content">
            <div className="advanced-content">
              <div className="page-header">
                <h2>Advanced & Integration</h2>
                <p className="page-subtitle">Developer-level and external service settings</p>
              </div>

              {/* Webhook URL Section */}
              <div className="form-section">
                <h3 className="section-title">Webhook URL</h3>
                <div className="webhook-container">
                  <input 
                    type="text" 
                    value={webhookURL}
                    onChange={(e) => setWebhookURL(e.target.value)}
                    className="webhook-input"
                  />
                  <button className="connect-btn">Connect</button>
                </div>
              </div>

              {/* Integration Section */}
              <div className="form-section">
                <div className="integrations-grid">
                  {/* Google Calendar */}
                  <div className="integration-item">
                    <div className="integration-info">
                      <div className="integration-icon google"></div>
                      <span className="integration-name">Google Calendar</span>
                    </div>
                    <button 
                      className={`connect-btn ${integrations.googleCalendar ? 'connected' : ''}`}
                      onClick={() => handleIntegrationToggle('googleCalendar')}
                    >
                      {integrations.googleCalendar ? 'Connected' : 'Connect'}
                    </button>
                  </div>

                  {/* Calendly */}
                  <div className="integration-item">
                    <div className="integration-info">
                      <div className="integration-icon calendly"></div>
                      <span className="integration-name">Calendly</span>
                      <span className="integration-subtitle">Online via Calendly</span>
                    </div>
                    <button 
                      className={`connect-btn ${integrations.calendly ? 'connected' : ''}`}
                      onClick={() => handleIntegrationToggle('calendly')}
                    >
                      {integrations.calendly ? 'Connected' : 'Connect'}
                    </button>
                  </div>

                  {/* Microsoft Outlook */}
                  <div className="integration-item">
                    <div className="integration-info">
                      <div className="integration-icon outlook"></div>
                      <span className="integration-name">Microsoft Outlook</span>
                    </div>
                    <button 
                      className={`connect-btn ${integrations.microsoftOutlook ? 'connected' : ''}`}
                      onClick={() => handleIntegrationToggle('microsoftOutlook')}
                    >
                      {integrations.microsoftOutlook ? 'Connected' : 'Connect'}
                    </button>
                  </div>

                  {/* Apple Calendar */}
                  <div className="integration-item">
                    <div className="integration-info">
                      <div className="integration-icon apple"></div>
                      <span className="integration-name">Apple Calendar (iCloud)</span>
                      <span className="integration-subtitle">Coming with iCloud</span>
                    </div>
                    <button className="connect-btn disabled" disabled>
                      Connect
                    </button>
                  </div>
                </div>
              </div>

              {/* Client Email Signature Section */}
              <div className="form-section">
                <h3 className="section-title">Client Email Signature</h3>
                <div className="signature-container">
                  <textarea 
                    value={emailSignature}
                    onChange={(e) => setEmailSignature(e.target.value)}
                    className="signature-input"
                    rows="3"
                  />
                </div>
              </div>

              {/* Default Invoice Prefix Section */}
              <div className="form-section">
                <h3 className="section-title">Default Invoice Prefix</h3>
                <div className="prefix-container">
                  <input 
                    type="text" 
                    value={invoicePrefix}
                    onChange={(e) => setInvoicePrefix(e.target.value)}
                    className="prefix-input"
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

export default Advanced;