import React from "react";
import "./bookings.css";
import {
  FaSearch, FaBell, FaClock, FaUserCircle,
  FaHome, FaCalendarAlt, FaFileInvoice,
  FaRobot, FaBoxes, FaSlidersH,
  FaCreditCard, FaQuestionCircle,
  FaGoogle, FaMicrosoft, FaApple, 
} from "react-icons/fa";
import { FiMoreHorizontal, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Bookings = () => {
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

        <div className="main-content">
            <div className="page-header">
              <div>
              <h2>Bookings Overview</h2>
              <p>All your appointments and orders in one place.</p>
              </div>
              <button className="green-btn">
                <FiPlus /> Add New Booking
              </button>
            </div>

            <div className="calendar-overview">
              <div className="calendar-left">
                <div className="calendar-card">
                  <div className="card-header">
                    <h4>Calendar Snapshot</h4>
                    <a href="#">See All Transactions</a>
                  </div>
                  <div className="calendar-tabs">
                    {['All', 'Pending', 'Confirmed', 'Missed', 'Completed', 'Cancelled'].map((tab) => (
                      <button key={tab} className="tab-btn">{tab}</button>
                    ))}
                  </div>
                  <table className="calendar-table">
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
                      {[1, 2, 3].map((i) => (
                        <tr key={i}>
                          <td>June 3</td>
                          <td>10:00 AM</td>
                          <td>Ifeanyi O.</td>
                          <td>Haircut</td>
                          <td><FiMoreHorizontal /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="calendar-right">
                <div className="calendar-card">
                  <h4>External Calendar Sync</h4>
                  <p>Sync your schedule from other platforms.</p>
                  <div className="calendar-sync">
                    <div className="sync-option connected">
                      <FaGoogle /> Google Calendar
                      <span>Connected</span>
                    </div>
                    <div className="sync-option">
                      <FaMicrosoft /> Microsoft Outlook
                      <span>Connect</span>
                    </div>
                  </div>
                  <a href="#" className="see-all">SEE ALL CUSTOMERS &rarr;</a>
                </div>
              </div>
            </div>

            <div className="calendar-view">
              <h4>Calendar View</h4>
              <p>Visualize your weekly or monthly schedule</p>
              <div className="calendar-controls">
                <div>
                  <button className="tab-btn">Day</button>
                  <button className="tab-btn">Week</button>
                  <button className="tab-btn active">Month</button>
                  <button className="tab-btn">Year</button>
                </div>
                <div>
                  <button className="outline-btn">Events</button>
                  <button className="outline-btn">Select dates</button>
                  <button className="outline-btn">Favourites</button>
                </div>
                <div className="calendar-month">
                  <span>July, 2025</span>
                  <button>{'<'}</button>
                  <button>{'>'}</button>
                </div>
              </div>

              <div className="calendar-grid">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="day-name">{['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][i]}</div>
                ))}

                {[...Array(35)].map((_, i) => (
                  <div key={i} className={`day-cell ${i === 9 ? 'has-booking' : ''}`}>
                    <span>{(i + 27) % 31 + 1}</span>
                    {i === 9 && <div className="booking-tag">Booking Meetings</div>}
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;