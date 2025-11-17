import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import Button from '../common/Button';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const notifRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!showNotifications) return undefined;
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showNotifications]);

  const handleHowItWorks = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'how-it-works' } });
    } else {
      document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsActive(false);
  };

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
          <button type="button" className="navbar-item navbar-link-button" onClick={handleHowItWorks}>
            How It Works
          </button>
          <NavLink className="navbar-item" to="/business">
            For Businesses
          </NavLink>
        </div>

        <div className="navbar-end" style={{ alignItems: 'center', gap: '1rem' }}>
          <div className="navbar-item is-hidden-touch navbar-notifications" ref={notifRef}>
            <Button
              variant="ghost"
              size="small"
              onClick={() => setShowNotifications((prev) => !prev)}
              aria-label="Notifications"
            >
              <span className="icon is-small">
                <FaBell />
              </span>
            </Button>
            {showNotifications && (
              <div className="notification-dropdown">
                <div className="notification-header">
                  <p className="has-text-weight-semibold">Notifications</p>
                </div>
                <div className="notification-list">
                  <p>New yoga class just dropped near you — 40% off at 6:00 PM.</p>
                  <p>Two HIIT classes added in Midtown tonight.</p>
                </div>
                <button
                  type="button"
                  className="notification-action"
                  onClick={() => {
                    setShowNotifications(false);
                    navigate('/deals');
                  }}
                >
                  View more deals
                </button>
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
