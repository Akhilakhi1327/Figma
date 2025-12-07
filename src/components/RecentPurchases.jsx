import React from 'react';
import '../styles/recentPurchases.css';

function RecentPurchases() {
  const purchases = [
    {
      person: "Michael Chen",
      course: "UI/UX Design Masterclass",
      price: "11,399",
      date: "Nov 10th, 2025",
      paymentType: "Credit card",
      status: "Completed"
    },
    {
      person: "Sarah Patel",
      course: "Web Development Essentials",
      price: "12,499",
      date: "Dec 9th, 2025",
      paymentType: "Debit card",
      status: "Completed"
    },
    {
      person: "James Smith",
      course: "Data Science with Python",
      price: "13,300",
      date: "Jan 15th, 2025",
      paymentType: "PayPal",
      status: "Completed"
    },
    {
      person: "Emily Johnson",
      course: "Graphic Design Fundamentals",
      price: "11,800",
      date: "Feb 20th, 2025",
      paymentType: "Credit card",
      status: "Completed"
    },
    {
      person: "David Brown",
      course: "Digital Marketing Masterclass",
      price: "14,000",
      date: "Mar 10th, 2025",
      paymentType: "Net banking",
      status: "Completed"
    },
    {
      person: "Ana Lee",
      course: "Mobile App Development",
      price: "12,800",
      date: "Apr 5th, 2025",
      paymentType: "Debit card",
      status: "Pending"
    },
    {
      person: "Oliver Wilson",
      course: "SEO Optimization Techniques",
      price: "11,999",
      date: "May 25th, 2025",
      paymentType: "Credit card",
      status: "Completed"
    }
  ];

  return (
    <div className="recent-purchases-container">
      <div className="purchases-card">
        <div className="purchases-header">
          <h3 className="purchases-title">Recent Purchases</h3>
          <button className="view-all-btn">View All</button>
        </div>
        
        <div className="table-container">
          <table className="purchases-table">
            <thead>
              <tr className="table-header">
                <th className="text-left">Person Name</th>
                <th className="text-left">Course Name</th>
                <th className="text-left">Price</th>
                <th className="text-left">Purchase Date</th>
                <th className="text-left">Payment type</th>
                <th className="text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((purchase, index) => (
                <tr key={index} className="table-row">
                  <td>
                    <div className="person-cell">
                      <div className="person-avatar">
                        {purchase.person.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="person-name">{purchase.person}</span>
                    </div>
                  </td>
                  <td>
                    <span className="course-name">{purchase.course}</span>
                  </td>
                  <td>
                    <span className="price-value">${purchase.price}</span>
                  </td>
                  <td>
                    <span className="date-value">{purchase.date}</span>
                  </td>
                  <td>
                    <div className="payment-type">
                      <span className="payment-icon"></span>
                      <span>{purchase.paymentType}</span>
                    </div>
                  </td>
                  <td>
                    <span className="view-details-link">
                      [View details]
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="table-footer">
          <div className="footer-info">
           
          </div>
          
            
        </div>
      </div>
    </div>
  );
}

export default RecentPurchases;