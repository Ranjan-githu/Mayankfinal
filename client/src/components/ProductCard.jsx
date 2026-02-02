import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      style={styles.card}
    >
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.name} style={styles.image} />
      </div>
      <div style={styles.info}>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.brand}>{product.brand}</p>
        <p style={styles.price}>₹{product.price}</p>
        <Link to={`/product/${product._id}`} style={styles.button}>View Details</Link>
      </div>
    </motion.div>
  );
};

const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    transition: 'box-shadow 0.3s',
    display: 'flex',
    flexDirection: 'column'
  },
  imageContainer: {
    height: '200px',
    overflow: 'hidden',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  info: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  name: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    color: '#333'
  },
  brand: {
    fontSize: '0.9rem',
    color: '#777',
    marginBottom: '0.5rem'
  },
  price: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#004d40',
    marginBottom: '1rem'
  },
  button: {
    marginTop: 'auto',
    textAlign: 'center',
    backgroundColor: '#004d40',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'background-color 0.2s'
  }
};

export default ProductCard;
