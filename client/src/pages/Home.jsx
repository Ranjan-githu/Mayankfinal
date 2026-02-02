import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';

const Home = () => {
  return (
    <div className="fade-in">
      <Hero />
      <CategorySection />
      {/* Featured Products or About Section can go here */}
      <section style={{ padding: '4rem 10%', backgroundColor: '#004d40', color: 'white', textAlign: 'center' }}>
        <h2>Why Choose Mayank Enterprises?</h2>
        <p style={{ marginTop: '1rem', fontSize: '1.1rem', maxWidth: '800px', margin: '1rem auto' }}>
          We provide 100% genuine products directly from top brands.
          With years of experience serving Singrauli, we ensure your vehicle runs smoothly and safely.
        </p>
      </section>
    </div>
  );
};

export default Home;
