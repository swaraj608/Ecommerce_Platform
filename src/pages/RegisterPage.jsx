import React from 'react';

const RegisterPage = () => {
  return (
    <div
      className="register-page"
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
        Sign Up
      </h2>
      <form className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="form-group m-4">
          <label style={{ color: '#eae0c8', marginBottom: '8px' }}>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
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
        <div className="form-group m-4">
          <label style={{ color: '#eae0c8', marginBottom: '8px' }}>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
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
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = '#d4cbb5') 
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = '#eae0c8') 
            }
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
