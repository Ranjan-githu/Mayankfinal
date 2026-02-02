import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Mock data logic for demo if backend fails
        try {
          const res = await axios.get(`/api/products/${id}`);
          setProduct(res.data);
        } catch (err) {
          const mockProducts = [
            { _id: '1', name: 'Castrol Activ 1L', brand: 'Castrol', price: 450, category: 'Bike Oils', description: 'High performance engine oil for bikes.', image: 'https://m.media-amazon.com/images/I/61k1+g9zJIL._SX522_.jpg' },
            { _id: '2', name: 'Motul 7100 4T', brand: 'Motul', price: 850, category: 'Bike Oils', description: '100% Synthetic 4-Stroke lubricant.', image: 'https://m.media-amazon.com/images/I/71w+Z5z+kIL._SX522_.jpg' },
            { _id: '3', name: 'Shell Helix Ultra', brand: 'Shell', price: 3200, category: 'Car Oils', description: 'Fully synthetic motor oil.', image: 'https://m.media-amazon.com/images/I/61+yyA4h-0L._SX522_.jpg' },
            { _id: '4', name: 'MRF Nylogrip', brand: 'MRF', price: 1500, category: 'Tyres', description: 'Durable tyre for Indian roads.', image: 'https://m.media-amazon.com/images/I/71qK1+e-1IL._SX522_.jpg' },
            { _id: '5', name: 'Chain Lube', brand: 'Motul', price: 200, category: 'Others', description: 'High quality chain lubricant.', image: 'https://m.media-amazon.com/images/I/61-mS+N-nAL._SX522_.jpg' },
          ];
          const found = mockProducts.find(p => p._id === id);
          setProduct(found);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading...</div>;
  if (!product) return <div style={{ padding: '4rem', textAlign: 'center' }}>Product not found</div>;

  const handleAddToCart = () => {
    addToCart(product, qty);
    navigate('/cart');
  };

  return (
    <div className="fade-in" style={styles.container}>
      <div style={styles.content}>
        <div style={styles.imageCol}>
          <img src={product.image} alt={product.name} style={styles.image} />
        </div>
        <div style={styles.infoCol}>
          <h1 style={styles.title}>{product.name}</h1>
          <p style={styles.brand}>Brand: {product.brand}</p>
          <div style={styles.price}>₹{product.price}</div>
          <p style={styles.desc}>{product.description}</p>

          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label>Quantity:</label>
            <select value={qty} onChange={(e) => setQty(Number(e.target.value))} style={styles.select}>
              {[...Array(10).keys()].map(x => (
                <option key={x + 1} value={x + 1}>{x + 1}</option>
              ))}
            </select>
          </div>

          <div style={styles.actions}>
            <button onClick={handleAddToCart} style={styles.buyBtn}>
              <FaShoppingCart size={20} style={{ marginRight: '10px' }} />
              Add to Cart
            </button>
            <button onClick={() => window.location.href = '/contact'} style={styles.contactBtn}>
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '4rem 10%',
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
    maxWidth: '1200px',
    width: '100%',
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
  },
  imageCol: {
    flex: '1 1 400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '2rem'
  },
  image: {
    maxWidth: '100%',
    maxHeight: '400px',
    objectFit: 'contain'
  },
  infoCol: {
    flex: '1 1 400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    color: '#333'
  },
  brand: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '1rem'
  },
  price: {
    fontSize: '2rem',
    color: '#004d40',
    fontWeight: 'bold',
    marginBottom: '1.5rem'
  },
  desc: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    lineHeight: '1.6',
    color: '#555'
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  buyBtn: {
    padding: '12px 24px',
    backgroundColor: '#25D366',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'opacity 0.2s'
  },
  contactBtn: {
    padding: '12px 24px',
    backgroundColor: 'transparent',
    color: '#333',
    border: '2px solid #333',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  }
};

export default ProductDetail;
