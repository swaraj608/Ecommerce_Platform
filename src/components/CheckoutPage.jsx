import React, { useState } from 'react';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [address, setAddress] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [isGift, setIsGift] = useState(false);
  const [orderNotes, setOrderNotes] = useState('');

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert('Order Placed Successfully!');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Checkout</h2>
      <div className="row">

        <div className="col-md-6">
          <form onSubmit={handlePlaceOrder}>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Delivery Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Shipping Method</label>
              <select className="form-select" defaultValue="">
                <option value="" disabled>Select Shipping Method</option>
                <option value="standard">Standard Delivery (3-5 days)</option>
                <option value="express">Express Delivery (1-2 days)</option>
                <option value="same-day">Same-Day Delivery</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <select
                className="form-select"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="" disabled>Select Payment Method</option>
                <option value="credit">Credit/Debit Card</option>
                <option value="upi">UPI</option>
                <option value="wallet">Digital Wallet</option>
              </select>
            </div>

            {/* Promo Code */}
            {/* <div className="mb-3">
              <label htmlFor="promoCode" className="form-label">
                Promo Code
              </label>
              <input
                type="text"
                className="form-control"
                id="promoCode"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
            </div> */}

            <div className="mb-3">
              <label htmlFor="orderNotes" className="form-label">
                Order Notes
              </label>
              <textarea
                className="form-control"
                id="orderNotes"
                placeholder="Add special instructions (optional)"
                rows="3"
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
              ></textarea>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="isGift"
                checked={isGift}
                onChange={(e) => setIsGift(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="isGift">
                This is a gift (Add a gift message)
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Place Order
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">Order Summary</div>
            <div className="card-body">
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Product A</span>
                  <span>$50</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Product B</span>
                  <span>$30</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Shipping</span>
                  <span>$10</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <strong>Total</strong>
                  <strong>$90</strong>
                </li>
              </ul>
              <p className="text-muted text-center">
                Taxes and discounts will be applied during payment.
              </p>
            </div>
          </div>

       
          <div className="mt-4">
            <h5 className="text-center">Need Help?</h5>
            <p className="text-center">
              <a href="/support" className="text-primary">
                Contact Customer Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
