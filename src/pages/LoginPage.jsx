import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link for routing
import SellerDashboard from '../components/SellerDashboard';

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission for now
    // Add logic to handle login (e.g., API call)
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundColor: '#536878',
        borderRadius: '10px',
        padding: '20px',
        margin: '50px auto',
        maxWidth: '450px',
        boxShadow: '0px 6px 15px rgba(83, 104, 120, 0.3)',
        color: '#eae0c8',
      }}
    >
      <h2
        className="text-center my-5"
        style={{ color: '#eae0c8', marginBottom: '30px' }}
      >
        Sign In
      </h2>
      <form className="mx-auto" style={{ maxWidth: '400px' }} onSubmit={handleSubmit}>
        <div className="form-group m-4">
          <label style={{ color: '#eae0c8', marginBottom: '8px' }}>Email address</label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #eae0c8',
                borderRadius: '5px',
                backgroundColor: '#f3f3f3',
                color: '#536878',
              }}
            />
          </div>
        </div>
        <div className="form-group m-4">
          <label style={{ color: '#eae0c8', marginBottom: '8px' }}>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '20px',
              border: '2px solid #eae0c8',
              borderRadius: '5px',
              backgroundColor: '#f3f3f3',
              color: '#536878',
            }}
          />
        </div>
        <div className="text-center mt-3 mb-3">
          <button
            type="submit"
            className="form-control btn btn-primary"
            style={{
              width: '40%',
              backgroundColor: '#eae0c8',
              border: 'none',
              padding: '15px',
              color: '#536878',
              fontSize: '1.2rem',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0px 4px 8px rgba(83, 104, 120, 0.3)',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#d4cbb5')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#eae0c8')}
          >
            Sign In
          </button>
        </div>
      </form>

      <p className="text-center">
        <Link to="/seller-dashboard" style={{ marginRight: '10px' , color:"white"}}>
          Skip to Seller Dashboard
        </Link>
        <Link to="/buyer-dashboard" style={{ marginRight: '10px' , color:"white"}}>Skip to Buyer Dashboard</Link>
      </p>
    </div>
  );
};

export default LoginPage;
