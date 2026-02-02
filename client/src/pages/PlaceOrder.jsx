import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';
import AuthContext from '../context/AuthContext';
import axios from '../utils/axios';

const PlaceOrder = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    const addr = localStorage.getItem('shippingAddress');
    if (addr) {
      setShippingAddress(JSON.parse(addr));
    } else {
      navigate('/shipping');
    }
  }, [navigate]);

  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shippingPrice = itemsPrice > 1000 ? 0 : 100;
  const taxPrice = Number((0.18 * itemsPrice).toFixed(2));
  const totalPrice = itemsPrice + shippingPrice + taxPrice;


  useEffect(() => {
    const method = localStorage.getItem('paymentMethod');
    if (method) setPaymentMethod(method);
    else setPaymentMethod('COD'); // Default
  }, []);

  const placeOrderHandler = async () => {
    try {
      if (paymentMethod !== 'COD') {
        // Simulate online payment delay
        const confirmPayment = window.confirm(`Simulating Payment via ${paymentMethod}. Click OK to Pay.`);
        if (!confirmPayment) return;
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      };

      await axios.post(
        '/api/orders',
        {
          orderItems: cartItems,
          shippingAddress,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
          isPaid: paymentMethod !== 'COD', // Mark paid if not COD
          paidAt: paymentMethod !== 'COD' ? Date.now() : null
        },
        config
      );

      clearCart();
      alert('Order Placed Successfully!');
      navigate('/profile');
    } catch (error) {
      alert(error.response?.data?.message || 'Error placing order');
    }
  };

  return (
    <div className="fade-in" style={styles.container}>
      <h1 style={{ marginBottom: '2rem' }}>Place Order</h1>
      <div style={styles.row}>
        <div style={styles.col8}>
          <div style={styles.card}>
            <h2>Shipping</h2>
            <p>{shippingAddress.address}, {shippingAddress.city}, {shippingAddress.postalCode}, {shippingAddress.country}</p>
          </div>

          <div style={styles.card}>
            <h2>Payment Method</h2>
            <p>Method: {paymentMethod}</p>
          </div>

          <div style={styles.card}>
            <h2>Order Items</h2>
            {cartItems.length === 0 ? <p>Your cart is empty</p> : (
              <div>
                {cartItems.map((item, index) => (
                  <div key={index} style={styles.item}>
                    <div style={{ flex: 1 }}>
                      <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                      <Link to={`/product/${item.product}`} style={{ marginLeft: '10px' }}>{item.name}</Link>
                    </div>
                    <div>
                      {item.qty} x ₹{item.price} = ₹{item.qty * item.price}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={styles.col4}>
          <div style={styles.summary}>
            <h2>Order Summary</h2>
            <div style={styles.summaryItem}><span>Items</span><span>₹{itemsPrice}</span></div>
            <div style={styles.summaryItem}><span>Shipping</span><span>₹{shippingPrice}</span></div>
            <div style={styles.summaryItem}><span>Tax</span><span>₹{taxPrice}</span></div>
            <div style={{ ...styles.summaryItem, fontWeight: 'bold', fontSize: '1.2rem' }}><span>Total</span><span>₹{totalPrice}</span></div>

            <button onClick={placeOrderHandler} style={styles.placeBtn}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '4rem 10%', minHeight: '80vh' },
  row: { display: 'flex', flexWrap: 'wrap', gap: '2rem' },
  col8: { flex: 2, minWidth: '300px' },
  col4: { flex: 1, minWidth: '250px' },
  card: { backgroundColor: 'white', padding: '1.5rem', marginBottom: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' },
  item: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #eee' },
  summary: { backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' },
  summaryItem: { display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' },
  placeBtn: { width: '100%', padding: '12px', backgroundColor: '#004d40', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }
};

export default PlaceOrder;
