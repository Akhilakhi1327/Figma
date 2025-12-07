import React from 'react';
import '../styles/device.css';

function DeviceUsage() {
  const deviceData = [
    {
      name: "Desktop",
      count: "4,287 students",
      percentage: "65%",
      color: "var(--primary-green)",
      
    },
    {
      name: "Mobile",
      count: "1,846 students",
      percentage: "28%",
      color: "var(--blue)",
      
    },
    {
      name: "Tablet",
      count: "461 students",
      percentage: "7%",
      color: "var(--green)",
      icon: ""
    }
  ];

  return (
    <div className="device-card">
      <div className="device-header">
        <div>
          <h3>Device & Platform Usage</h3>
          <p className="subtitle">Student access patterns</p>
        </div>
      </div>
      
      <div className="device-content">
        <div className="pie-section">
          <div className="pie-chart-box">
            <div className="pie-placeholder">
              <div className="pie-center">
                <div>6,594</div>
                <div className="center-label">Total Users</div>
              </div>
            </div>
          </div>
          
          <div className="device-legends">
            {deviceData.map((device, index) => (
              <div key={index} className="device-item">
                <div className="device-info">
                  <div className="device-icon">{device.icon}</div>
                  <div className="device-details">
                    <div className="device-name">{device.name}</div>
                    <div className="device-count">{device.count}</div>
                  </div>
                  <div className="device-percentage">{device.percentage}</div>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      width: device.percentage,
                      backgroundColor: device.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="device-platforms">
          <div className="platform-item">
            <div className="platform-icon"></div>
            <div className="platform-info">
              <div className="platform-name">Desktop</div>
              <div className="platform-stats">Most used (65%)</div>
            </div>
          </div>
          <div className="platform-item">
            <div className="platform-icon"></div>
            <div className="platform-info">
              <div className="platform-name">Mobile App</div>
              <div className="platform-stats">Growing (↑12%)</div>
            </div>
          </div>
          <div className="platform-item">
            <div className="platform-icon"></div>
            <div className="platform-info">
              <div className="platform-name">Web</div>
              <div className="platform-stats">Stable</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceUsage;