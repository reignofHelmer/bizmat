import React from "react";
import "./bookings.css";
import {
  FaSearch, FaBell, FaClock, FaUserCircle,
  FaHome, FaCalendarAlt, FaFileInvoice,
  FaRobot, FaBoxes, FaSlidersH,
  FaCreditCard, FaQuestionCircle,
  FaGoogle, FaMicrosoft
} from "react-icons/fa";
import { FiMoreHorizontal, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Bookings = () => {
  return (
    <div>
      {/* === HEADER === */}
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

      {/* === LAYOUT === */}
      <div className="dashboard-container">
        {/* === SIDEBAR === */}
        <aside className="sidebar">
          <div className="sidebar-section top">
            <Link to="/dashboard" className="sidebar-btn">
              <FaHome />
              <span>Dashboard</span>
            </Link>
          </div>

          <div className="sidebar-section">
            <p className="section-title">MAIN</p>
            <Link to="/bookings" className="sidebar-btn active">
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

        {/* === MAIN CONTENT === */}
        <div className="main-content">
          <div className="bookings-header">
            <h2>Bookings Overview</h2>
            <button className="add-booking-btn">
              <FiPlus /> Add New Booking
            </button>
          </div>

          {/* === CALENDAR SNAPSHOT === */}
          <div className="calendar-snapshot">
            <div className="snapshot-header">
              <h3>Calendar Snapshot</h3>
              <Link to="#" className="see-transactions">See all Transactions</Link>
            </div>
            <div className="snapshot-tabs">
              {["All", "Pending", "Confirmed", "Missed", "Completed", "Cancelled"].map((tab, idx) => (
                <button key={idx} className="tab-btn">{tab}</button>
              ))}
            </div>
            <table className="snapshot-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Client</th>
                  <th>Service</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((_, i) => (
                  <tr key={i}>
                    <td>June 3</td>
                    <td>10:00 AM</td>
                    <td>Ikanyi O.</td>
                    <td>Haircut</td>
                    <td><FiMoreHorizontal /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* === RIGHT SIDEBAR CALENDAR SYNC === */}
          <div className="calendar-right">
            <h3>External Calendar Sync</h3>
            <p>Sync your schedule to other platforms.</p>
            <div className="sync-option">
              <FaGoogle /> Google Calendar <span className="connected">Connected</span>
            </div>
            <div className="sync-option">
              <FaMicrosoft /> Microsoft Outlook <span className="connect-btn">Connect</span>
            </div>
            <div className="sync-option">
              <FaCalendarAlt /> Apple Calendar (iCloud) <span className="connect-btn">Connect</span>
            </div>
          </div>

          {/* === CALENDAR VIEW === */}
          <div className="calendar-view">
            <h3>Calendar View</h3>
            <div className="calendar-controls">
              <button>Day</button>
              <button>Week</button>
              <button className="active">Month</button>
            </div>
            <div className="calendar-grid">
              {/* You can use a real calendar library here later */}
              {Array.from({ length: 35 }).map((_, idx) => (
                <div key={idx} className="calendar-cell">{idx + 1}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;