import React, { useState } from "react";
import './aimessaging.css';
import './aimessaging.responsive.css';
import {
  FaSearch, FaBell, FaClock, FaUserCircle,
  FaHome, FaCalendarAlt, FaFileInvoice,
  FaRobot, FaBoxes, FaSlidersH,
  FaCreditCard, FaQuestionCircle,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Aimessaging = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [newMessage, setNewMessage] = useState('');

  const messages = [
    { id: 1, name: "Uzo E.", initials: "UE", message: "Can I reschedule my booking?", date: "July 18", avatar: "#4f46e5", unread: true },
    { id: 2, name: "Chidera M.", initials: "CM", message: "Hi, I want to book a session", date: "July 18", avatar: "#059669", unread: false },
    { id: 3, name: "Amaka O.", initials: "AO", message: "How much for...", date: "July 18", avatar: "#dc2626", unread: false },
    { id: 4, name: "Amaka O.", initials: "AO", message: "How much for...", date: "July 18", avatar: "#dc2626", unread: false },
    { id: 5, name: "Adanna O.", initials: "AD", message: "Okay, thank you!", date: "July 18", avatar: "#7c3aed", unread: false }
  ];

  const tabs = ['All', 'Unread', 'Archived'];
  const stats = [
    { label: 'INTERACTIONS', value: '3' },
    { label: 'BOOKINGS', value: '12' },
    { label: 'INVOICES', value: '5' }
  ];

  const handleMessageClick = (message) => {
    setSelectedMessage(message);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message logic here
      setNewMessage('');
    }
  };

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

        {/* Main Content - WhatsApp-like Layout */}
        <div className="main-content">
          <div className="messaging-container">
            {/* Header Section */}
            <div className="messaging-header">
              <div className="header-left">
                <h2>AI Assistant & Messaging</h2>
                <p className="subtitle">All your appointments and orders in one place.</p>
              </div>
              <div className="header-right">
                <button className="action-btn primary">Resend Failed Messages</button>
                <button className="action-btn secondary">Re-Sync Whatsapp</button>
              </div>
            </div>

            {/* Status and Stats Row */}
            <div className="status-stats-row">
              <div className="status-section">
                <div className="status-indicator">
                  <span className="status-dot active"></span>
                  <span className="status-text">Active</span>
                  <span className="time-text">Last seen: 30 min</span>
                </div>
              </div>
              
              <div className="stats-section">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Layout - Messages List + Chat Area */}
            <div className="chat-layout">
              {/* Left Panel - Messages List */}
              <div className="messages-panel">
                <div className="messages-header">
                  <h3>Messages</h3>
                  <div className="message-search">
                    <FaSearch className="search-icon" />
                    <input 
                      type="text" 
                      placeholder="Search messages..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* Message Tabs */}
                <div className="message-tabs">
                  {tabs.map((tab) => (
                    <button 
                      key={tab}
                      className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Primary Chat Label */}
                <div className="chat-section-label">
                  Primary Chat
                </div>

                {/* Messages List */}
                <div className="messages-list">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`message-item ${selectedMessage?.id === message.id ? 'selected' : ''}`}
                      onClick={() => handleMessageClick(message)}
                    >
                      <div className="message-avatar" style={{ backgroundColor: message.avatar }}>
                        {message.initials}
                      </div>
                      <div className="message-content">
                        <div className="message-header">
                          <span className="sender-name">{message.name}</span>
                          <span className="message-date">{message.date}</span>
                        </div>
                        <div className="message-text">{message.message}</div>
                      </div>
                      {message.unread && <div className="unread-indicator"></div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Panel - Chat Area */}
              <div className="chat-area">
                {selectedMessage ? (
                  <>
                    {/* Chat Header */}
                    <div className="chat-header">
                      <div className="chat-user-info">
                        <div className="chat-avatar" style={{ backgroundColor: selectedMessage.avatar }}>
                          {selectedMessage.initials}
                        </div>
                        <div className="chat-user-details">
                          <span className="chat-user-name">{selectedMessage.name}</span>
                          <span className="chat-user-status">Online</span>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="chat-messages">
                      <div className="chat-message received">
                        <div className="message-bubble">
                          {selectedMessage.message}
                        </div>
                        <div className="message-time">{selectedMessage.date}</div>
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="message-input-container">
                      <input 
                        type="text"
                        placeholder="Type..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="message-input"
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <button className="send-btn" onClick={handleSendMessage}>
                        Send
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="no-chat-selected">
                    <div className="no-chat-content">
                      <span className="chat-name">New Chat</span>
                      <p>Select a message to start chatting</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aimessaging;