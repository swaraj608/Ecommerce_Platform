import React, { useState } from 'react';

const ProductPage = () => {
  const [products] = useState([
    
    { id: 1, name: 'Smartphone', category: 'Electronics', price: 800, image: 'https://source.unsplash.com/400x300/?smartphone', description: 'Latest generation smartphone with cutting-edge technology.' },
    { id: 2, name: 'Gaming Console', category: 'Electronics', price: 500, image: 'https://source.unsplash.com/400x300/?gaming,console', description: 'Experience immersive gaming with high performance.' },
    { id: 3, name: 'Fitness Tracker', category: 'Electronics', price: 150, image: 'https://source.unsplash.com/400x300/?fitness,tracker', description: 'Track your fitness goals.' },

    
    { id: 4, name: 'Men’s Jacket', category: 'Fashion', price: 200, image: 'https://source.unsplash.com/400x300/?jacket', description: 'Stylish and durable jacket for men.' },
    { id: 5, name: 'Vintage Watch', category: 'Fashion', price: 120, image: 'https://source.unsplash.com/400x300/?watch', description: 'A classic vintage watch.' },
    { id: 6, name: 'Designer Handbag', category: 'Fashion', price: 250, image: 'https://source.unsplash.com/400x300/?handbag', description: 'Stylish designer handbag.' },

    
    { id: 7, name: 'Non-stick Cookware Set', category: 'Home', price: 300, image: 'https://source.unsplash.com/400x300/?cookware', description: 'Premium non-stick cookware for your kitchen.' },
    { id: 8, name: 'Luxury Sofa', category: 'Home', price: 1200, image: 'https://source.unsplash.com/400x300/?sofa', description: 'Comfortable and elegant sofa for your living room.' },

    
    { id: 9, name: 'Yoga Mat', category: 'Health', price: 40, image: 'https://source.unsplash.com/400x300/?yoga,mat', description: 'Comfortable and durable yoga mat.' },
    { id: 10, name: 'Massage Gun', category: 'Health', price: 200, image: 'https://source.unsplash.com/400x300/?massage', description: 'Relieve muscle tension with this portable massage device.' },

    
    { id: 11, name: 'Camping Tent', category: 'Sports', price: 150, image: 'https://source.unsplash.com/400x300/?tent', description: 'Durable and waterproof camping tent for outdoor adventures.' },
    { id: 12, name: 'Cycling Helmet', category: 'Sports', price: 100, image: 'https://source.unsplash.com/400x300/?helmet', description: 'Lightweight and protective cycling helmet.' },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = 
      !selectedPriceRange ||
      (selectedPriceRange === '0-50' && product.price < 50) ||
      (selectedPriceRange === '50-100' && product.price >= 50 && product.price < 100) ||
      (selectedPriceRange === '100-200' && product.price >= 100 && product.price < 200) ||
      (selectedPriceRange === '200+' && product.price >= 200);

    return matchesCategory && matchesPrice;
  });

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Sidebar: Categories and Price Filter */}
        <div className="col-md-3">
          <h5>Categories</h5>
          <ul className="list-group mb-4">
            <li
              className={`list-group-item ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
              style={{ cursor: 'pointer' }}
            >
              All
            </li>
            <li
              className={`list-group-item ${selectedCategory === 'Electronics' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Electronics')}
              style={{ cursor: 'pointer' }}
            >
              Electronics & Tech
            </li>
            <li
              className={`list-group-item ${selectedCategory === 'Fashion' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Fashion')}
              style={{ cursor: 'pointer' }}
            >
              Fashion & Accessories
            </li>
            <li
              className={`list-group-item ${selectedCategory === 'Home' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Home')}
              style={{ cursor: 'pointer' }}
            >
              Home & Living
            </li>
            <li
              className={`list-group-item ${selectedCategory === 'Health' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Health')}
              style={{ cursor: 'pointer' }}
            >
              Health & Wellness
            </li>
            <li
              className={`list-group-item ${selectedCategory === 'Sports' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Sports')}
              style={{ cursor: 'pointer' }}
            >
              Sports & Outdoors
            </li>
          </ul>

          <h5>Filter by Price</h5>
          <select
            className="form-select"
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
          >
            <option value="">All</option>
            <option value="0-50">Under $50</option>
            <option value="50-100">$50 to $100</option>
            <option value="100-200">$100 to $200</option>
            <option value="200+">Over $200</option>
          </select>
        </div>

      
        <div className="col-md-9">
          <h2 className="text-center mb-4">Our Products</h2>
          <div className="row">
            {filteredProducts.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="card mb-4 shadow-sm">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                    <p className="text-muted small">{product.description}</p>
                    <button className="btn btn-primary w-100">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <div className="text-center">
                <p>No products match your filters!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
