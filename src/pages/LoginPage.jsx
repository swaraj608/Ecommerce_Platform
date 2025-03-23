import React from 'react';

const LoginPage = () => {
  return (
    <div
      className="login-page"
      style={{
        backgroundColor: '#536878', // Payne's Grey background
        borderRadius: '10px',
        padding: '20px',
        margin: '50px auto',
        maxWidth: '450px',
        boxShadow: '0px 6px 15px rgba(83, 104, 120, 0.3)', // Soft Payne's Grey shadow
        color: '#eae0c8', // Pearl text
      }}
    >
      <h2
        className="text-center my-5"
        style={{ color: '#eae0c8', marginBottom: '30px' }} // Pearl for headings
      >
        Sign In
      </h2>
      <form className="mx-auto" style={{ maxWidth: '400px' }}>
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
                border: '2px solid #eae0c8', // Pearl border
                borderRadius: '5px',
                backgroundColor: '#f3f3f3', // Light neutral background
                color: '#536878', // Payne's Grey text
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
              border: '2px solid #eae0c8', // Pearl border
              borderRadius: '5px',
              backgroundColor: '#f3f3f3', // Light neutral background
              color: '#536878', // Payne's Grey text
            }}
          />
        </div>
        <div className="text-center mt-3 mb-3">
          <button
            type="submit"
            className="form-control btn btn-primary"
            style={{
              width: '40%', // Adjusted width
              backgroundColor: '#eae0c8', // Pearl button
              border: 'none',
              padding: '15px',
              color: '#536878', // Payne's Grey text
              fontSize: '1.2rem',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0px 4px 8px rgba(83, 104, 120, 0.3)', // Payne's Grey shadow
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = '#d4cbb5') /* Slightly darker Pearl on hover */
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = '#eae0c8') /* Reset to original Pearl */
            }
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
