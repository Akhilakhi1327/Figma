import React from 'react';
import '../styles/header.css';

function Header() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="header">
      <div className="header-left">
        <h1>Welcome back, Tenant Name 🔥</h1>
        <p className="subtitle">Track your e-learning platform performance</p>
      </div>
      
      <div className="header-right">
        <div className="date">{formattedDate}</div>
        <button className="notification-btn">
          <span className="bell-icon">🔔</span>
          <span className="notification-badge">3</span>
        </button>
      </div>
    </div>
  );
}

export default Header;