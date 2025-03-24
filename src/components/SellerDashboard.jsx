import React from 'react';

const SellerDashboard = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Seller Dashboard</h2>
      
      
      <div className="alert alert-info" role="alert">
        Total Sales This Month: $5,000
      </div>

      <div className="row">
        
        <div className="col-md-6">
          <h5 className="mb-3">Active Listings</h5>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Product A
              <span className="badge bg-primary rounded-pill">Views: 120</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Product B
              <span className="badge bg-primary rounded-pill">Views: 75</span>
            </li>
          </ul>
        </div>
        
        <div className="col-md-6">
          <h5 className="mb-3">Sales Goals</h5>
          <div>
            <p>Goal: $10,000</p>
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
