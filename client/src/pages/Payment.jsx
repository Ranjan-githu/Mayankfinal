import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';

const Payment = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('UPI');

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [navigate, cartItems]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Save payment method
    localStorage.setItem('paymentMethod', paymentMethod);
    navigate('/placeorder');
  };

  return (
    <div className="fade-in" style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={{ marginBottom: '1.5rem' }}>Select Payment Method</h1>
        <form onSubmit={submitHandler}>
          <div style={styles.group}>
            <div style={styles.radioGroup}>
              <input
                type="radio"
                id="UPI"
                name="paymentMethod"
                value="UPI"
                checked={paymentMethod === 'UPI'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={styles.radio}
              />
              <label htmlFor="UPI" style={styles.label}>UPI / VPA (GooglePay, PhonePe)</label>
            </div>

            <div style={styles.radioGroup}>
              <input
                type="radio"
                id="Card"
                name="paymentMethod"
                value="Card"
                checked={paymentMethod === 'Card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={styles.radio}
              />
              <label htmlFor="Card" style={styles.label}>Credit / Debit Card</label>
            </div>

            <div style={styles.radioGroup}>
              <input
                type="radio"
                id="COD"
                name="paymentMethod"
                value="COD"
                checked={paymentMethod === 'COD'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={styles.radio}
              />
              <label htmlFor="COD" style={styles.label}>Cash on Delivery</label>
            </div>
          </div>

          <button type="submit" style={styles.button}>Continue to Place Order</button>
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
    maxWidth: '500px',
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
  },
  group: {
    marginBottom: '2rem'
  },
  radioGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    border: '1px solid #eee',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  radio: {
    marginRight: '1rem',
    transform: 'scale(1.2)'
  },
  label: {
    fontSize: '1.1rem',
    cursor: 'pointer',
    width: '100%'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#004d40',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default Payment;
