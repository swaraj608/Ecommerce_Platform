import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      
      <section className="hero-section text-center">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to E-Shop</h1>
          <p className="hero-subtitle">Discover unique products tailored just for you.</p>
          <Link to="/products" className="btn btn-primary btn-lg">
            Explore Now
          </Link>
        </div>
      </section>

     
      <section className="features-section text-center mt-5">
        <h2 className="features-title">Why Shop With Us?</h2>
        <div className="features-container">
          <div className="feature">
            <i className="fas fa-shipping-fast"></i>
            <h4>Fast Delivery</h4>
            <p>Get your orders delivered quickly and reliably.</p>
          </div>
          <div className="feature">
            <i className="fas fa-tags"></i>
            <h4>Best Prices</h4>
            <p>Enjoy great deals and discounts on top-quality products.</p>
          </div>
          <div className="feature">
            <i className="fas fa-star"></i>
            <h4>Customer Satisfaction</h4>
            <p>Our customers love us for our exceptional service and quality.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
