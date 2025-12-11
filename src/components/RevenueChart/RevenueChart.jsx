import React from "react";
import "./RevenueBreakdown.css";


const RevenueBreakdown = ({ data, totalLabel = "TOTAL REVENUE", total }) => {
  const defaultData = [
    { source: "Course Sales", amount: 183962, percentage: 65, color: "#2D5652", icon: "₹" },
    { source: "Live Classes & Workshops", amount: 53743, percentage: 25, color: "#10B981", icon: "📚" },
    { source: "One on one mentorship", amount: 23235, percentage: 10, color: "#F59E0B", icon: "👤" }
  ];
  const items = (data && data.length) ? data : defaultData;
  const totalAmount = total ?? items.reduce((s, i) => s + (i.amount || 0), 0);

  return (
    <div className="rb-card" role="region" aria-label="Revenue breakdown">
      <div className="rb-header">
        <div className="rb-title">
          <h3>Revenue Breakdown</h3>
          <span className="rb-sub">By revenue source</span>
        </div>

        <div className="rb-total">
          <div className="rb-total-label">{totalLabel}</div>
          <div className="rb-total-amount">₹{Number(totalAmount).toLocaleString()}</div>
          <div className="rb-total-change">↑ 23% this quarter</div>
        </div>
      </div>

      <div className="rb-list">
        {items.map((it, idx) => (
          <div key={idx} className="rb-item">
            <div className="rb-item-left">
              <div className="rb-icon" aria-hidden="true" style={{ backgroundColor: it.color }}>
                <span className="rb-icon-text">{it.icon}</span>
              </div>

              <div className="rb-meta">
                <div className="rb-source">{it.source}</div>
                <div className="rb-subtext">{it.percentage}% of total</div>
              </div>
            </div>

            <div className="rb-item-right">
              <div className="rb-amount">₹{Number(it.amount).toLocaleString()}</div>

              <div
                className="rb-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={it.percentage}
                aria-label={`${it.source} ${it.percentage}%`}
              >
                <div
                  className="rb-bar-fill"
                  style={{ width: `${Math.max(0, Math.min(100, it.percentage))}%`, backgroundColor: it.color }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueBreakdown;
