import React from 'react';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="fade-in" style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>

      <div style={styles.grid}>
        <div style={styles.info}>
          <div style={styles.infoCard}>
            <h3>Owner Details</h3>
            <p style={styles.highlight}>Mayank Singh Chandel</p>
            <p>Proprietor</p>
          </div>

          <div style={styles.infoItem}>
            <FaMapMarkerAlt size={24} style={styles.icon} />
            <div>
              <h4>Visit Us</h4>
              <p>Near Hospital Chauk, Chitrangi,<br />District Singrauli, Madhya Pradesh – 486882</p>
            </div>
          </div>

          <div style={styles.infoItem}>
            <FaPhone size={24} style={styles.icon} />
            <div>
              <h4>Call Us</h4>
              <p>+91 8726709736</p>
            </div>
          </div>

          <div style={styles.infoItem}>
            <FaEnvelope size={24} style={styles.icon} />
            <div>
              <h4>Email Us</h4>
              <p>contact@mayankenterprises.com</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>

      <div style={styles.mapSection}>
        <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Find Us on Map</h2>
        <Map />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '4rem 10%',
    minHeight: '80vh'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '3rem',
    fontSize: '2.5rem',
    color: '#004d40'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
    marginBottom: '4rem',
    justifyContent: 'center'
  },
  info: {
    flex: '1 1 300px',
    maxWidth: '500px'
  },
  infoCard: {
    backgroundColor: '#004d40',
    color: 'white',
    padding: '2rem',
    borderRadius: '15px',
    marginBottom: '2rem',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
  },
  highlight: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0.5rem 0'
  },
  infoItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  },
  icon: {
    color: '#004d40',
    marginRight: '1rem',
    marginTop: '0.2rem'
  },
  mapSection: {
    marginTop: '2rem'
  }
};

export default Contact;
