import React from "react";
import './invoices.css';
import {
  FaSearch, FaBell, FaClock, FaUserCircle,
  FaHome, FaCalendarAlt, FaFileInvoice,
  FaRobot, FaBoxes, FaSlidersH,
  FaCreditCard, FaQuestionCircle, 
} from "react-icons/fa";
import { Link } from 'react-router-dom';


const Invoices = () => {
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
            <Link to="/invoices" className="sidebar-btn active">
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

        <div className="main-content">
            <div className="clients-container">
                <div className="header">
                    <div className="title-block">
                      <h2>Clients & Invoices</h2>
                      <p>All your appointments and orders in one place.</p>
                    </div>
                    <div className="actions">
                      <button className="green-btn">+ Add Client</button>
                      <button className="green-btn">+ Add New Booking</button>
                    </div>
                </div>
                <div className="summary-cards">
                    <div className="card">
                      <p className="label">Total Clients</p>
                      <h3>142</h3>
                      <span className="trend positive">+11 from yesterday</span>
                    </div>
                    <div className="card">
                      <p className="label">Outstanding Pay</p>
                      <h3>109,000</h3>
                      <span className="trend negative">-8% from last week</span>
                    </div>
                    <div className="card">
                      <p className="label">Total Invoices</p>
                      <h3>317</h3>
                      <span className="trend positive">+20%</span>
                    </div>
                    <div className="card">
                      <p className="label">Overdue Invoices</p>
                      <h3>5</h3>
                      <span className="trend neutral">Even</span>
                    </div>
                </div>
                <div className="tabs">
                    <button className="active-tab">Clients</button>
                    <button>Invoices</button>
                </div>
                
                <div className="table-header">
                    <input type="text" placeholder="Search message..." />
                    <div className="filters">
                      <span>Filters</span>
                      <span>Date Range</span>
                      <span>Sort by: Most relevant</span>
                    </div>
                </div>
                
                <div className="filters-tags">
                  {['Category', 'Stock level', 'Product Type', 'Supplier', 'Warehouse Location', 'Date Added', 'Reorder Status', 'Tags/Labels', 'Unit of Measure'].map((tag, index) => (
                    <span key={index} className="tag-filter">{tag}</span>
                  ))}
                </div>
                
                <table className="clients-table">
                    <thead>
                      <tr>
                        <th>Client Name</th>
                        <th>Contact Info</th>
                        <th>Total Invoices</th>
                        <th>Last Activity</th>
                        <th>Total Invoiced</th>
                        <th>Status</th>
                        <th>Tags</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4].map((item) => (
                        <tr key={item}>
                          <td>
                            <div className="client-info">
                              <div className="avatar" />
                              <span>John Doe</span>
                            </div>
                          </td>
                          <td>john@email.com<br />+234 8032645678</td>
                          <td>5</td>
                          <td>Jun 20, 2025</td>
                          <td>500,000</td>
                          <td><span className="status active">● Active</span></td>
                          <td>VIP, High Value</td>
                          <td><span className="actions-dots">⋮</span></td>
                        </tr>
                      ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;