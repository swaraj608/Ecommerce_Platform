import React, { useState } from 'react';

const SupportPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [queryType, setQueryType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your query has been submitted. Our support team will reach out to you soon.');
    
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Customer Support</h2>

      
      <div className="card mb-4">
        <div className="card-body">
          <h5>Submit Your Query</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="queryType" className="form-label">Type of Inquiry</label>
              <select
                className="form-select"
                id="queryType"
                value={queryType}
                onChange={(e) => setQueryType(e.target.value)}
                required
              >
                <option value="" disabled>Select an option</option>
                <option value="order">Order Issue</option>
                <option value="payment">Payment Problem</option>
                <option value="product">Product Question</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                className="form-control"
                id="message"
                placeholder="Describe your issue or query"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>

      {/* FAQs */}
      <div className="card">
        <div className="card-body">
          <h5>Frequently Asked Questions</h5>
          <ul>
            <li>What is the return policy?</li>
            <li>How can I track my order?</li>
            <li>What payment methods are accepted?</li>
            <li>Can I cancel my order?</li>
          </ul>
          <p className="text-center">
            Need more help? Use the form above or contact us directly via email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
