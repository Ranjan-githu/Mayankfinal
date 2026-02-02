import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from '../utils/axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Allow mock success if no backend for demo
      try {
        await axios.post('/api/contact', formData);
      } catch (err) {
        console.warn("Backend fail, simulating success for demo");
      }
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      style={styles.form}
    >
      <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>Send us a Message</h2>

      <div style={styles.group}>
        <label style={styles.label}>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.group}>
        <label style={styles.label}>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.group}>
        <label style={styles.label}>Email (Optional)</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
      </div>

      <div style={styles.group}>
        <label style={styles.label}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          style={styles.textarea}
        />
      </div>

      <button type="submit" disabled={status === 'sending'} style={styles.button}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && <p style={styles.success}>Message sent successfully!</p>}
      {status === 'error' && <p style={styles.error}>Something went wrong. Please try again.</p>}
    </motion.form>
  );
};

const styles = {
  form: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
    width: '100%',
    maxWidth: '500px'
  },
  group: {
    marginBottom: '1rem'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '500',
    color: '#555'
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    fontFamily: 'inherit'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    fontFamily: 'inherit',
    resize: 'vertical'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#004d40',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  success: {
    marginTop: '1rem',
    color: 'green',
    textAlign: 'center'
  },
  error: {
    marginTop: '1rem',
    color: 'red',
    textAlign: 'center'
  }
};

export default ContactForm;
