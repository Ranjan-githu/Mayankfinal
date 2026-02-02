import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div style={styles.hero}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.title}
        >
          Mayank Enterprises
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={styles.subtitle}
        >
          Your Trusted Partner for Genuine Automobile Products<br />
          Engine Oils | Tyres | Accessories
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/products" style={styles.button}>Explore Products</Link>
          <Link to="/contact" style={{ ...styles.button, backgroundColor: 'transparent', border: '2px solid white' }}>Contact Us</Link>
        </motion.div>
      </div>
    </div>
  );
};

const styles = {
  hero: {
    height: '80vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")', // Professional generic automobile image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    color: 'white',
    textAlign: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  content: {
    position: 'relative',
    zIndex: 1,
    padding: '0 20px',
    maxWidth: '800px'
  },
  title: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    fontWeight: '700',
    letterSpacing: '1px'
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    fontWeight: '300'
  },
  button: {
    display: 'inline-block',
    padding: '12px 30px',
    backgroundColor: '#ffc107',
    color: '#000',
    borderRadius: '30px',
    fontSize: '1.2rem',
    fontWeight: '600',
    margin: '0 10px',
    textDecoration: 'none',
    transition: 'transform 0.2s, background-color 0.2s',
    cursor: 'pointer'
  }
};

export default Hero;
