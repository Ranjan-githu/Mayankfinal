import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem('shippingAddress', JSON.stringify({ address, city, postalCode, country }));
    navigate('/payment');
  };

  return (
    <div className="fade-in" style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={{ marginBottom: '1rem' }}>Shipping Address</h1>
        <form onSubmit={submitHandler}>
          <div style={styles.group}>
            <label style={styles.label}>Address</label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.group}>
            <label style={styles.label}>City</label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.group}>
            <label style={styles.label}>Postal Code</label>
            <input
              type="text"
              required
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.group}>
            <label style={styles.label}>Country</label>
            <input
              type="text"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Continue</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '4rem 10%',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '80vh'
  },
  formContainer: {
    width: '100%',
    maxWidth: '500px'
  },
  group: {
    marginBottom: '1rem'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem'
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#004d40',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem'
  }
};

export default Shipping;
