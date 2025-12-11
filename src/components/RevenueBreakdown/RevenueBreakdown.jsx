import React from "react";
import "./RevenueBreakdown.css";

const RevenueBreakdown = ({ data, total }) => {
  const defaultData = [
    { source: "Course Sales", amount: 163962, percentage: 64, color: "#3B82F6" },
    { source: "Live Classes & Workshops", amount: 53743, percentage: 21, color: "#10B981" },
    { source: "One on one mentorship", amount: 23235, percentage: 9, color: "#F59E0B" },
    { source: "Other", amount: 13022, percentage: 6, color: "#8B5CF6" }
  ];

  const displayData = data && data.length ? data : defaultData;
  const totalAmount = total || displayData.reduce((s, it) => s + (it.amount || 0), 0) || 253962;

  return (
    <div className="revenue-breakdown" role="region" aria-label="Revenue breakdown">
      <div className="revenue-header">
        <div className="header-left">
          <h3>Revenue Breakdown</h3>
          <p className="subtitle">By revenue source</p>
        </div>

        <div className="header-right">
          <span className="total-label">TOTAL REVENUE</span>
          <span className="total-amount">${Number(totalAmount).toLocaleString()}</span>
        </div>
      </div>

      <div className="revenue-content">
        {displayData.map((item, index) => (
          <div
            key={index}
            className="revenue-item"
            style={{ borderLeftColor: item.color }}
            role="listitem"
          >
            <div className="item-left">
              <div
                className="color-indicator"
                style={{ backgroundColor: item.color }}
                aria-hidden="true"
              />
              <span className="source-name">{item.source}</span>
            </div>

            <div className="item-right">
              <span className="source-amount">${(item.amount || 0).toLocaleString()}</span>
              <span className="source-percentage">{item.percentage}% of total</span>
            </div>
          </div>
        ))}
      </div>

      <div className="revenue-footer">
        <div className="percentage-bar" aria-hidden="true">
          {displayData.map((item, index) => (
            <div
              key={index}
              className="percentage-segment"
              style={{
                flexBasis: `${item.percentage}%`,
                backgroundColor: item.color
              }}
            />
          ))}
        </div>

        <div className="percentage-labels">
          {displayData.map((item, index) => (
            <span key={index} className="percentage-label">
              {item.percentage}%
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueBreakdown;
