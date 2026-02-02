import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { login, user } = useContext(AuthContext);

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [navigate, user, redirect]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (!result.success) {
      setMessage(result.message);
    }
  };

  return (
    <div className="fade-in" style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>Sign In</h1>
        {message && <div style={styles.error}>{message}</div>}
        <form onSubmit={submitHandler}>
          <div style={styles.group}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.button}>Sign In</button>
        </form>

        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} style={{ color: '#004d40', fontWeight: 'bold' }}>Register</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '4rem 10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh'
  },
  formContainer: {
    width: '100%',
    maxWidth: '400px',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    backgroundColor: 'white'
  },
  group: {
    marginBottom: '1rem'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#333'
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#004d40',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    fontWeight: '600'
  },
  error: {
    backgroundColor: '#ffdddd',
    color: 'red',
    padding: '10px',
    marginBottom: '1rem',
    borderRadius: '5px',
    textAlign: 'center'
  }
};

export default Login;
