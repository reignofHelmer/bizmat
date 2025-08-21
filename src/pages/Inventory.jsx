import React from "react";
import "./inventory.css";
import "./inventory.responsive.css";
import {
  FaSearch, FaBell, FaClock, FaUserCircle,
  FaHome, FaCalendarAlt, FaFileInvoice,
  FaRobot, FaBoxes, FaSlidersH,
  FaCreditCard, FaQuestionCircle,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Inventory = () => {
  const items = [
    { id: 1, name: "Name", stock: "12 units", price: "3,500", category: "Shoes" },
    { id: 2, name: "Name", stock: "12 units", price: "3,800", category: "Shoes" },
    { id: 3, name: "Name", stock: "12 units", price: "2,500", category: "Shoes" },
    { id: 4, name: "Name", stock: "12 units", price: "3,500", category: "Shoes" },
    { id: 5, name: "Name", stock: "12 units", price: "3,600", category: "Shoes" },
  ];

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
            <Link to="/invoices" className="sidebar-btn">
              <FaFileInvoice />
              <span>Clients & Invoices</span>
            </Link>
            <Link to="/aimessaging" className="sidebar-btn">
              <FaRobot />
              <span>AI Assistant & Messaging</span>
            </Link>
            <Link to="/inventory" className="sidebar-btn active">
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
          <div className="inventory-container">
            <div className="inventory-header">
              <h2>Inventory</h2>
              <button className="add-booking">+ Add New Booking</button>
            </div>

            <div className="tabs">
              <button className="tab active">All items</button>
              <button className="tab">Out of Stock</button>
            </div>

            <div className="inventory-toolbar">
              <input type="text" placeholder="Search message..." className="search-input" />
              <span className="synced">Synced 2 min ago</span>
              <span className="filters">Filters</span>
              <span className="sort">Sort by: <strong>Most relevant</strong></span>
            </div>

            <div className="filters-bar">
              {[
                "Category", "Stock Level", "Product Type", "Supplier", "Warehouse Location",
                "Date Added", "Reorder Status", "Tags/Labels", "Unit of Measure"
              ].map((filter, idx) => (
                <button key={idx} className="filter-button">{filter}</button>
              ))}
            </div>

            <table className="inventory-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Status</th>
                  <th>Stock</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="product-info">
                        <div className="product-image" />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td>In Stock / Low / Out</td>
                    <td>{item.stock}</td>
                    <td className="price">● {item.price}</td>
                    <td>{item.category}</td>
                    <td>...</td>
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

export default Inventory;