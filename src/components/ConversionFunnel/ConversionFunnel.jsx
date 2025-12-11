import React from 'react';
import './ConversionFunnel.css';

function ConversionFunnel() {
  const funnelSteps = [
    {
      name: "Visitors",
      count: "9,359",
      percentage: "100%",
      drop: null
    },
    {
      name: "Course View",
      count: "6,382",
      percentage: "68.2%",
      drop: "31.8% drop"
    },
    {
      name: "Add to Cart",
      count: "3,124",
      percentage: "33.4%",
      drop: "34.8% drop"
    },
    {
      name: "Checkout Started",
      count: "2,134",
      percentage: "22.8%",
      drop: "10.6% drop"
    },
    {
      name: "Purchase Complete",
      count: "1,874",
      percentage: "20.0%",
      drop: "2.8% drop"
    }
  ];

  return (
    <div className="conversion-card">
      <div className="conversion-header">
        <div className="conversion-header-left">
          <h3>Conversion Funnel</h3>
          <p className="subtitle">Customer journey analysis</p>
        </div>
        <div className="conversion-header-right">
          <div className="view-only">View only</div>
        </div>
      </div>
      
      <div className="funnel-steps">
        {funnelSteps.map((step, index) => (
          <div key={index} className="funnel-step">
            <div className="step-header">
              <div className="step-name">{step.name}</div>
              <div className="step-percentage">{step.percentage}</div>
            </div>
            
            <div className="step-content">
              <div className="step-count">{step.count}</div>
              
              {step.drop && (
                <div className="step-drop">
                  <span className="drop-icon">↓</span>
                  <span className="drop-text">{step.drop}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="optimization-tip">
        <h4>OPTIMIZATION OPPORTUNITY</h4>
        <p>
          The biggest drop (31.8%) is from Visitors to Course View. 
          Consider improving site navigation, adding video previews, 
          or offering limited-time discounts.
        </p>
      </div>
    </div>
  );
}

export default ConversionFunnel;