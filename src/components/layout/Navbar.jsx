import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import Button from '../common/Button';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <strong>Swift Slots</strong>
        </Link>
        <a
          role="button"
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <NavLink className="navbar-item" to="/deals">
            Browse Deals
          </NavLink>
          <a className="navbar-item" href="#how-it-works">
            How It Works
          </a>
          <NavLink className="navbar-item" to="/business">
            For Businesses
          </NavLink>
        </div>

        <div className="navbar-end" style={{ alignItems: 'center', gap: '1rem' }}>
          <div className="navbar-item is-hidden-touch">
            <button
              className="button is-white"
              onClick={() => setShowNotifications((prev) => !prev)}
              aria-label="Notifications"
            >
              <span className="icon is-small">
                <FaBell />
              </span>
            </button>
            {showNotifications && (
              <div className="card" style={{ position: 'absolute', right: '1.5rem', width: '280px', zIndex: 10 }}>
                <div className="card-content" style={{ display: 'grid', gap: '0.5rem' }}>
                  <p className="has-text-weight-semibold">Notifications</p>
                  <p>New yoga class just dropped near you — 40% off at 6:00 PM.</p>
                  <p>Two HIIT classes added in Midtown tonight.</p>
                  <p className="has-text-link" role="button" onClick={() => navigate('/deals')}>
                    View more deals
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="navbar-item">
            <div className="buttons">
              <Button variant="primary" onClick={() => navigate('/deals')}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
