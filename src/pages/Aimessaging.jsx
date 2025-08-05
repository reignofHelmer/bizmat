import React from "react";
import './aimessaging.css';
import {
  FaSearch, FaBell, FaClock, FaUserCircle,
  FaHome, FaCalendarAlt, FaFileInvoice,
  FaRobot, FaBoxes, FaSlidersH,
  FaCreditCard, FaQuestionCircle,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Aimessaging = () => {
  const messages = [
    { name: "Uzo E.", message: "Can I reschedule my order?", date: "July 18" },
    { name: "Chidera M.", message: "Hi, I want to book a session", date: "July 18" },
    { name: "Amaka O.", message: "How much for...", date: "July 18" },
  ];

  return (
    <div>
      {/* Top Header */}
      <header className="top-header">
        <div className="logo">
          <img src="/bizlogob.png" alt="Bizmvt Logo" />
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

      {/* Dashboard Layout */}
      <div className="dashboard-container">
        {/* Sidebar */}
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
            <Link to="/aimessaging" className="sidebar-btn active">
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

        {/* Main Content */}
        <div className="main-content">
          <div className="assistant-container">
            {/* Assistant Header */}
            <div className="assistant-header">
              <div>
                <h2>AI Assistant & Messaging</h2>
                <p>All your appointments and orders in one place.</p>
              </div>
              <div className="sync-buttons">
                <button className="btn green">Resend Failed Messages</button>
                <button className="btn green-outline">Re-sync WhatsApp</button>
              </div>
            </div>

            {/* Assistant Layout */}
            <div className="assistant-body">
              {/* Left Panel */}
              <div className="left-panel">
                <div className="status-card">
                  <div className="status-label">
                    <span className="dot green"></span> Active
                    <span className="last-sync">Last Sync 2h ago</span>
                  </div>
                  <div className="metrics">
                    <div><strong>3</strong><span>INTERACTIONS</span></div>
                    <div><strong>12</strong><span>BOOKINGS</span></div>
                    <div><strong>5</strong><span>INVOICES</span></div>
                  </div>
                </div>

                <div className="message-card">
                  <h4>Messages</h4>
                  <input type="text" className="search-input" placeholder="Search message..." />
                  <div className="tabs">
                    <button className="active">All (Primary)</button>
                    <button>Unread</button>
                    <button>Pinned</button>
                  </div>

                  <div className="message-list">
                    {messages.map((msg, idx) => (
                      <div className="message-item" key={idx}>
                        <div className="avatar-circle" />
                        <div className="message-info">
                          <div className="name">{msg.name}</div>
                          <div className="preview">{msg.message}</div>
                        </div>
                        <div className="date">{msg.date}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div className="right-panel">
                <div className="chat-header">
                  <h4>New Chat</h4>
                  <div className="chat-actions">
                    <button title="Upload"><i className="icon">📎</i></button>
                    <button title="Call"><i className="icon">📞</i></button>
                  </div>
                </div>

                <div className="chat-body">
                  <p className="empty-chat-text">Select a conversation to start chatting</p>
                </div>

                <div className="chat-input">
                  <input type="text" placeholder="Chat" />
                  <button className="send-btn">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Main Content */}
      </div>
    </div>
  );
};

export default Aimessaging;
