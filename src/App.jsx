import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from './pages/ProductPage';
import BuyerDashboard from './components/BuyerDashboard';
import SellerDashboard from './components/SellerDashboard';
import CheckoutPage from './components/CheckoutPage';
import SupportPage from './pages/SupportPage';
import SearchPage from './pages/SearchPage';
import UserProfile from './pages/UserProfile';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<UserProfile />} />   {/* New User Profile route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
