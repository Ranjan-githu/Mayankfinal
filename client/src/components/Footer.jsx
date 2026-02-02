import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <h3>Mayank Enterprises</h3>
        <p>Near Hospital Chauk, Chitrangi, District Singrauli, Madhya Pradesh – 486882</p>
        <p>Email: contact@mayankenterprises.com | Phone: +91 98765 43210</p>
      </div>
      <div style={styles.copy}>
        &copy; {new Date().getFullYear()} Mayank Enterprises. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '2rem 1rem',
    marginTop: 'auto',
    textAlign: 'center'
  },
  content: {
    marginBottom: '1rem'
  },
  copy: {
    fontSize: '0.9rem',
    color: '#ccc'
  }
};

export default Footer;
