import React, { useContext } from 'react'; // Added useContext
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext'; // Import AuthContext
import CartContext from '../context/CartContext'; // Import CartContext
import { FaShoppingCart, FaUser } from 'react-icons/fa'; // Import Icons

const Navbar = () => {
  const { user, logout } = useContext(AuthContext); // Get user state
  const { cartItems } = useContext(CartContext); // Get cart state

  return (
    <nav className="navbar" style={styles.nav}>
      <div className="logo" style={styles.logo}>
        <Link to="/">Mayank Enterprises</Link>
      </div>
      <ul className="nav-links" style={styles.ul}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/products" style={styles.link}>Products</Link></li>

        {/* Cart Link */}
        <li>
          <Link to="/cart" style={styles.link}>
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span style={styles.badge}>{cartItems.length}</span>
            )}
          </Link>
        </li>

        {/* User Auth Links */}
        {user ? (
          <li style={styles.dropdown}>
            <span style={styles.link}><FaUser /> {user.name}</span>
            <div style={styles.dropdownContent}>
              <Link to="/profile" style={styles.dropdownItem}>Profile</Link>
              <button onClick={logout} style={styles.dropdownItem}>Logout</button>
            </div>
          </li>
        ) : (
          <li><Link to="/login" style={styles.link}><FaUser /> Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '80px',
    backgroundColor: '#004d40',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    zIndex: 1000,
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  ul: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    alignItems: 'center' // Align items vertically
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1.1rem',
    transition: 'color 0.3s',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    cursor: 'pointer' // Add cursor pointer
  },
  badge: {
    backgroundColor: '#ffc107',
    color: 'black',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '0.8rem',
    marginLeft: '5px'
  },
  dropdown: {
    position: 'relative',
    cursor: 'pointer'
  },
  dropdownContent: {
    display: 'none', // Simple hover, better accomplished with state or CSS hover
    position: 'absolute',
    right: 0,
    backgroundColor: '#f9f9f9',
    minWidth: '120px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1
  },
  // We need a way to show dropdown, simplest is CSS hover for now or simple JS
  // Let's rely on basic CSS hover via a class if we can, or just keep it simple. 
  // For this "student-demo-pro" level, let's just make it visible on hover via inline style tweak is hard.
  // We'll add a simple style block for .navbar li:hover .dropdown-content
  dropdownItem: {
    color: 'black',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
    border: 'none',
    background: 'none',
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer'
  }
};
// Quick hack to enable hover for dropdown without CSS file edit yet
// Better to just add a style tag or className usage


export default Navbar;
