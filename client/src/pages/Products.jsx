import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import axios from '../utils/axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFilter = queryParams.get('category');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = '/api/products';
        if (categoryFilter) {
          url += `?category=${encodeURIComponent(categoryFilter)}`;
        }
        // For development/demo without backend running mostly, we can use mock data if fetch fails
        // but let's try fetch first.
        try {
          const res = await axios.get(url);
          setProducts(res.data);
        } catch (err) {
          console.log("Backend not reachable or error, using mock data");
          // Fallback mock data for demo purposes
          const mockProducts = [
            { _id: '1', name: 'Castrol Activ 1L', brand: 'Castrol', price: 450, category: 'Bike Oils', image: 'https://m.media-amazon.com/images/I/61k1+g9zJIL._SX522_.jpg' },
            { _id: '2', name: 'Motul 7100 4T', brand: 'Motul', price: 850, category: 'Bike Oils', image: 'https://m.media-amazon.com/images/I/71w+Z5z+kIL._SX522_.jpg' },
            { _id: '3', name: 'Shell Helix Ultra', brand: 'Shell', price: 3200, category: 'Car Oils', image: 'https://m.media-amazon.com/images/I/61+yyA4h-0L._SX522_.jpg' },
            { _id: '4', name: 'MRF Nylogrip', brand: 'MRF', price: 1500, category: 'Tyres', image: 'https://m.media-amazon.com/images/I/71qK1+e-1IL._SX522_.jpg' },
            { _id: '5', name: 'Chain Lube', brand: 'Motul', price: 200, category: 'Others', image: 'https://m.media-amazon.com/images/I/61-mS+N-nAL._SX522_.jpg' },
          ];
          if (categoryFilter) {
            setProducts(mockProducts.filter(p => p.category === categoryFilter));
          } else {
            setProducts(mockProducts);
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryFilter]);

  return (
    <div className="fade-in" style={{ padding: '2rem 10%', minHeight: '80vh' }}>
      <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>
        {categoryFilter ? `${categoryFilter}` : 'All Products'}
      </h1>

      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading products...</p>
      ) : (
        <div style={styles.grid}>
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      {!loading && products.length === 0 && (
        <p style={{ textAlign: 'center' }}>No products found in this category.</p>
      )}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem'
  }
};

export default Products;
