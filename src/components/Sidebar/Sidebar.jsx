import React from 'react';
import './sidebar.css';

function Sidebar({ isOpen = false, isDesktop = false, onClose = () => {} }) {
  const menuItems = [
    { icon: '', label: 'Dashboard' },

  ];

  const classes = [
    'sidebar',
    isOpen && !isDesktop ? 'sidebar--open' : '',
    isDesktop ? 'sidebar--desktop' : ''
  ].join(' ').trim();

  const ariaHidden = !isDesktop && !isOpen;

  return (
    <aside className={classes} aria-hidden={ariaHidden}>
      <div className="sidebar-header">
        <h2 className="sidebar-title">E-Learning</h2>

        <button
          className="sidebar-close"
          onClick={onClose}
          aria-label="Close sidebar"
          type="button"
        >
          ✕
        </button>
      </div>

      <nav className="sidebar-nav" role="navigation" aria-label="Main">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`nav-item ${index === 0 ? 'active' : ''}`}
            onClick={() => {
              if (!isDesktop) onClose();
            }}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">TN</div>
          <div className="user-meta">
            <div className="user-name">Tenant Name</div>
            <div className="user-role">Admin</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
