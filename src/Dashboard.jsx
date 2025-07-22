import React from "react";
import "./dashboard.css";
import {
  FaSearch, FaBell, FaClock, FaUserCircle,
  FaHome, FaCalendarAlt, FaFileInvoice,
  FaRobot, FaBoxes, FaSlidersH,
  FaCreditCard, FaQuestionCircle,
} from "react-icons/fa";

const Dashboard = () => {
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
            <button className="sidebar-btn active">
              <FaHome />
              <span>Dashboard</span>
            </button>
          </div>

          <div className="sidebar-section">
            <p className="section-title">MAIN</p>
            <button className="sidebar-btn">
              <FaCalendarAlt />
              <span>Bookings & Calendar</span>
            </button>
            <button className="sidebar-btn">
              <FaFileInvoice />
              <span>Clients & Invoices</span>
            </button>
            <button className="sidebar-btn">
              <FaRobot />
              <span>AI Assistant & Messaging</span>
            </button>
            <button className="sidebar-btn">
              <FaBoxes />
              <span>Inventory</span>
            </button>
          </div>

          <div className="sidebar-section">
            <p className="section-title">SUPPORT & PEOPLE</p>
            <button className="sidebar-btn">
              <FaSlidersH />
              <span>App Preferences</span>
            </button>
            <button className="sidebar-btn">
              <FaCreditCard />
              <span>Billing & Subscription</span>
            </button>
            <button className="sidebar-btn">
              <FaQuestionCircle />
              <span>Support & Help</span>
            </button>
          </div>
        </aside>

        <div className="main-content">
            <div className="action-card">
                <div className="action-text">
                    <h2>Hello Peace!👋</h2>
                    <p>Here is what is happening in your business today.</p>
                </div>
                <div className="action-buttons">
                    <button className="action-btn">
                        <span className="btn-icon">➕</span> New Booking
                    </button>
                    <button className="action-btn">
                        <span className="btn-icon">📄</span> Create Invoice
                    </button>
                    <button className="action-btn">
                        <span className="btn-icon">📢</span> Send Broadcast
                    </button>
                </div>
            </div>
            <div className="container-two">
              <h2>Smart Actions for You</h2>
              <div className="action-grid-two">
                <div className="action-card-two">
                  Send reminder to 2 clients with pending payments <br /> <br />
                  <a href="#">View All →</a>
                </div>
                <div className="action-card-two">
                  Follow up with Fatima <br /> 
                  (missed appointment yesterday) <br />
                  <a href="#">View All →</a>
                </div>
                <div className="action-card-two">
                  Bookings Need Confirmation <br /> <br />
                  <a href="#">View All →</a>
                </div>
                <div className="action-card-two">
                  4 Items Low on Stock <br /> <br /> <br />
                  <a href="#">Restock →</a> <a href="#">View All →</a>
                </div>
              </div>
              <div className="currency-select">
              <h2>Business Performance</h2>
                  <select>
                    <option>Select Currency</option>
                    <option>Naira (₦)</option>
                    <option>Dollar ($)</option>
                    <option>Euro (€)</option>
                  </select>
              </div>
              <div className="metric-grid">
                <div className="metric-card">
                  <div className="label">BOOKINGS TODAY</div>
                  <div className="value">3</div>
                  <div className="subtext positive">+1 from yesterday</div>
                  <a href="#">View All →</a>
                </div>
                <div className="metric-card">
                  <div className="label">REVENUE THIS WEEK</div>
                  <div className="value">125,000</div>
                  <div className="subtext negative">-8% from last week</div>
                  <a href="#">Invoices →</a>
                </div>
                <div className="metric-card">
                  <div className="label">AI MESSAGES SENT</div>
                  <div className="value">17</div>
                  <div className="subtext positive">+20%</div>
                  <a href="#">View Logs →</a>
                </div>
                <div className="metric-card">
                  <div className="label">NEW CLIENTS</div>
                  <div className="value">4</div>
                  <div className="subtext neutral">Even</div>
                  <a href="#">View Clients →</a>
                </div>
              </div>
              <div className="calendar-section">
                {/* Left: Calendar Snapshot */}
                <div className="calendar-snapshot">
                  <div className="snapshot-header">
                    <h3>Calendar Snapshot</h3>
                    <a href="#">See All Transactions</a>
                  </div>
                  <p className="subtext">Today’s View</p>

                  <table className="snapshot-table">
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Client</th>
                        <th>Service</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>10:00 AM</td>
                        <td>Ifeanyi O.</td>
                        <td>Personal Training</td>
                        <td><span className="status completed">Completed</span></td>
                        <td>⋯</td>
                      </tr>
                      <tr>
                        <td>1:00 PM</td>
                        <td>Fatima A.</td>
                        <td>Home Catering</td>
                        <td><span className="status pending">Pending</span></td>
                        <td>⋯</td>
                      </tr>
                      <tr>
                        <td>4:30 PM</td>
                        <td>Moses K.</td>
                        <td>Tailoring Pickup</td>
                        <td><span className="status cancelled">Cancelled</span></td>
                        <td>⋯</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Right: Pending Actions */}
                <div className="pending-actions">
                  <h3>Pending Actions</h3>
                  <p className="subtext">Lorem ipsum dolor sit ametis.</p>
                
                  <div className="action-row">
                    <div>
                      <p>2 Unpaid Invoices</p>
                      <p className="amount">$11,234</p>
                    </div>
                    <button className="action-btn green">Send Reminder</button>
                  </div>
                
                  <div className="action-row">
                    <div>
                      <p>5 Bookings Await Confirmation</p>
                      <p className="amount">$11,234</p>
                    </div>
                    <button className="action-btn green">+ View Pending</button>
                  </div>
                
                  <div className="action-row">
                    <div>
                      <p>Calendar not synced</p>
                      <p className="amount">$11,234</p>
                    </div>
                    <button className="action-btn green">Sync Calendar</button>
                  </div>
                  <a href="#" className="see-all">SEE ALL CUSTOMERS →</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;