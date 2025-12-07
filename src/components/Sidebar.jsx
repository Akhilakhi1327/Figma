import React from 'react';
import '../styles/sidebar.css';

function Sidebar() {
  const menuItems = [
    { icon: '', label: 'Dashboard' },
    { icon: '', label: 'Students' },
    { icon: '', label: 'Courses' },
    { icon: '', label: 'Revenue' },
    { icon: '', label: 'Analytics' },
    { icon: '', label: 'Settings' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>E-Learning Dashboard</h2>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <a 
            key={index} 
            href="#" 
            className={`nav-item ${index === 0 ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </a>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">TN</div>
          <div>
            <div className="user-name">Tenant Name</div>
            <div className="user-role">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;