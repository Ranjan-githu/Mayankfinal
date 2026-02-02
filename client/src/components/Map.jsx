import React from 'react';

const Map = () => {
  return (
    <div style={styles.container}>
      <iframe
        title="Mayank Enterprises Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.772590288865!2d82.55160531498642!3d24.19565788437896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCbjExJzQ0LjQiTiA4MsKwMzMnMTMuNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '400px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
  }
};

export default Map;
