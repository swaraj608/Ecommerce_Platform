import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: '#001440', // Cecantic Blue background
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
      }}
    >
      <div className="container">
        {/* Brand */}
        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontSize: '24px',
            color: '#ECF0F1', // Light text for brand
            fontWeight: 'bold',
          }}
        >
          E-Shop
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home */}
            <li className="nav-item">
                <Link className="nav-link" to="/search" style={{ color: '#ECF0F1' }}>Search</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: '#ECF0F1' }}>
                Home
              </Link>
            </li>

            
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="dashboardDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: '#ECF0F1' }}
              >
                Dashboards
              </Link>
              <ul className="dropdown-menu" style={{ backgroundColor: '#001440' }}>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/buyer-dashboard"
                    style={{ color: '#ECF0F1' }}
                  >
                    Buyer Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/seller-dashboard"
                    style={{ color: '#ECF0F1' }}
                  >
                    Seller Dashboard
                  </Link>
                </li>
              </ul>
            </li>

          
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="accountDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: '#ECF0F1' }}
              >
                Account
              </Link>
              <ul className="dropdown-menu" style={{ backgroundColor: '#001440' }}>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/signin"
                    style={{ color: '#ECF0F1' }}
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/signup"
                    style={{ color: '#ECF0F1' }}
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </li>

            {/* Products */}
            <li className="nav-item">
              <Link className="nav-link" to="/products" style={{ color: '#ECF0F1' }}>
                Products
              </Link>
            </li>

            {/* Checkout */}
            <li className="nav-item">
              <Link className="nav-link" to="/checkout" style={{ color: '#ECF0F1' }}>
                Checkout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
