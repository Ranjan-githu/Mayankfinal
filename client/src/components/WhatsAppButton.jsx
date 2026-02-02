import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.button}
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    color: 'white',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    textDecoration: 'none',
    zIndex: 1000,
    transition: 'transform 0.3s'
  }
};

export default WhatsAppButton;
