import React from 'react';
import '../styles/dashboard.css';

function DashboardCards() {
  const cardsData = [
    {
      title: "ACTIVE USERS",
      value: "2,847",
      subtitle: "ACTIVE THIS WEEK",
      change: "+345",
      changeText: "from last week"
    },
    {
      title: "TOTAL REVENUE",
      value: "₹2,53,962",
      subtitle: "TOTAL RECOVER",
      change: "+2.7K",
      changeText: "this quarter"
    },
    {
      title: "ACTIVE COURSES",
      value: "38",
      subtitle: "MONITOR PROJECT",
      change: "+3",
      changeText: "added this month"
    }
  ];

  return (
    <div className="dashboard-cards">
      {cardsData.map((card, index) => (
        <div key={index} className="stat-card">
          <div className="card-content">
            <div className="card-value">{card.value}</div>
            <div className="card-title">{card.title}</div>
            <div className="card-subtitle">{card.subtitle}</div>
          </div>
          <div className="card-change">
            <div className="change-value">↑ {card.change}</div>
            <div className="change-text">{card.changeText}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;