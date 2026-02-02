import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMotorcycle, FaCar, FaCogs } from 'react-icons/fa';
import { GiCarWheel } from 'react-icons/gi';

const categories = [
  { name: 'Bike Oils', icon: <FaMotorcycle size={40} />, link: '/products?category=Bike Oils' },
  { name: 'Car Oils', icon: <FaCar size={40} />, link: '/products?category=Car Oils' },
  { name: 'Tyres', icon: <GiCarWheel size={40} />, link: '/products?category=Tyres' },
  { name: 'Accessories', icon: <FaCogs size={40} />, link: '/products?category=Others' },
];

const CategorySection = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Our Product Categories</h2>
      <div style={styles.grid}>
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={styles.card}
          >
            <Link to={cat.link} style={styles.link}>
              <div style={styles.icon}>{cat.icon}</div>
              <h3 style={styles.title}>{cat.name}</h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 10%',
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#333'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem'
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon: {
    color: '#004d40',
    marginBottom: '1rem'
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: '600'
  }
};

export default CategorySection;
