import React from 'react';
import UserProfile from '../pages/UserProfile'; 

const BuyerDashboard = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Buyer Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <UserProfile dashboardView={true} />
        </div>
       
        <div className="col-md-8">
          <h3>Your Recent Orders</h3>
         
          <div className="list-group">
            <div className="list-group-item">Order #12345 - Shipped</div>
            <div className="list-group-item">Order #12346 - Delivered</div>
            <div className="list-group-item">Order #12347 - Processing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
