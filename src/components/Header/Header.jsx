import React from 'react';
import './header.css';

function Header({ onToggleSidebar = () => {}, isDesktop = false }) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="header">
      <div className="header-left">
        
        <button
          className="hamburger-btn"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
          type="button"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <div className="header-titles">
          <h1 className="header-title">Welcome back, Tenant Name</h1>
          <p className="subtitle">Track your e-learning platform performance</p>
        </div>
      </div>

      <div className="header-right">
        <div className="date" aria-live="polite">{formattedDate}</div>

        <button className="notification-btn" aria-label="Notifications">
          <span className="bell-icon" aria-hidden="true"></span>
          <span className="notification-badge" aria-hidden="true"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
