import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: "How do I place a bulk order?",
    answer: "For bulk orders, please contact us directly via phone or WhatsApp. We offer special rates for bulk purchases of engine oils and tyres."
  },
  {
    question: "Do you sell genuine products?",
    answer: "Yes, Mayank Enterprises only deals in 100% genuine and branded automobile products. We are authorized dealers for major brands."
  },
  {
    question: "Can I inquire about a specific product availability?",
    answer: "Absolutely! You can use the search bar on our products page, or message us on WhatsApp with the product name and we will confirm availability instantly."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Cash, UPI, and Bank Transfers at our shop."
  }
];

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.item}>
      <div style={styles.question} onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={styles.answer}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Help = () => {
  return (
    <div className="fade-in" style={styles.container}>
      <h1 style={styles.heading}>Frequently Asked Questions</h1>
      <div style={styles.list}>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '4rem 10%',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  heading: {
    marginBottom: '3rem',
    color: '#004d40'
  },
  list: {
    width: '100%',
    maxWidth: '800px'
  },
  item: {
    backgroundColor: 'white',
    borderRadius: '10px',
    marginBottom: '1rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    overflow: 'hidden'
  },
  question: {
    padding: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: '#fff',
    fontWeight: '600',
    color: '#333'
  },
  answer: {
    padding: '0 1.5rem 1.5rem 1.5rem',
    color: '#555',
    lineHeight: '1.6'
  }
};

export default Help;
