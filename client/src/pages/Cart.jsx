import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  const { cartItems, removeFromCart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

  const checkoutHandler = () => {
    navigate('/login?redirect=shipping');
  };

  return (
    <div className="fade-in" style={styles.container}>
      <h1 style={{ marginBottom: '2rem' }}>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h2>Your cart is empty</h2>
          <Link to="/products" style={{ color: '#004d40', fontWeight: 'bold' }}>Go Back</Link>
        </div>
      ) : (
        <div style={styles.grid}>
          <div style={styles.items}>
            {cartItems.map((item) => (
              <div key={item.product} style={styles.item}>
                <img src={item.image} alt={item.name} style={styles.image} />
                <div style={styles.details}>
                  <Link to={`/product/${item.product}`} style={styles.name}>{item.name}</Link>
                  <p style={styles.price}>₹{item.price}</p>
                </div>
                <div style={styles.actions}>
                  <select
                    value={item.qty}
                    onChange={(e) => addToCart(item, Number(e.target.value))}
                    style={styles.select}
                  >
                    {[...Array(10).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                  <button onClick={() => removeFromCart(item.product)} style={styles.deleteBtn}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.summary}>
            <h3>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h3>
            <p style={styles.total}>₹{total.toFixed(2)}</p>
            <button
              onClick={checkoutHandler}
              style={styles.checkoutBtn}
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '4rem 10%',
    minHeight: '80vh'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem'
  },
  items: {
    flex: '2',
    minWidth: '300px'
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    borderBottom: '1px solid #eee',
    backgroundColor: 'white',
    borderRadius: '8px',
    marginBottom: '1rem'
  },
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
    marginRight: '1rem'
  },
  details: {
    flex: '1',
    marginRight: '1rem'
  },
  name: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#333',
    textDecoration: 'none'
  },
  price: {
    color: '#777'
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  select: {
    padding: '5px',
    borderRadius: '4px'
  },
  deleteBtn: {
    background: 'none',
    border: 'none',
    color: 'red',
    cursor: 'pointer'
  },
  summary: {
    flex: '1',
    minWidth: '250px',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    height: 'fit-content'
  },
  total: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '1rem 0'
  },
  checkoutBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#004d40',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    fontWeight: '600'
  }
};

export default Cart;
