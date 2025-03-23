import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const SearchPage = () => {
  
  const [products] = useState([
    { id: 1, name: 'Vintage Watch', category: 'Fashion', price: 120, image: 'https://source.unsplash.com/400x300/?watch' },
    { id: 2, name: 'Gaming Console', category: 'Electronics', price: 500, image: 'https://source.unsplash.com/400x300/?gaming,console' },
    { id: 3, name: 'Yoga Mat', category: 'Health', price: 40, image: 'https://source.unsplash.com/400x300/?yoga,mat' },
    { id: 4, name: 'Designer Handbag', category: 'Fashion', price: 250, image: 'https://source.unsplash.com/400x300/?handbag' },
    { id: 5, name: 'Smartphone', category: 'Electronics', price: 800, image: 'https://source.unsplash.com/400x300/?smartphone' },
    { id: 6, name: 'Running Shoes', category: 'Fashion', price: 120, image: 'https://source.unsplash.com/400x300/?shoes,running' },
    { id: 7, name: 'Fitness Tracker', category: 'Electronics', price: 150, image: 'https://source.unsplash.com/400x300/?fitness,tracker' },
    { id: 8, name: 'Massage Device', category: 'Health', price: 200, image: 'https://source.unsplash.com/400x300/?massage' },
  ]);

 
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Search Products</h2>

      
      <Form className="mb-4">
        <Row>
          <Col md={6}>
            <Form.Group controlId="searchInput">
              <Form.Control 
                type="text" 
                placeholder="Search for products..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="categorySelect">
              <Form.Control 
                as="select"
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Health">Health</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Button variant="primary" type="submit" className="w-100" onClick={e => e.preventDefault()}>
              Search
            </Button>
          </Col>
        </Row>
      </Form>

     
      <Row>
        {filteredProducts.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary" className="w-100">
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchPage;
