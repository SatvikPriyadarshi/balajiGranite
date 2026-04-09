import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const waText = "Hello Shree Balaji Granite Team, I am interested in your luxury stone collections and would like to know more.";
  const waUrl = `https://wa.me/916369695257?text=${encodeURIComponent(waText)}`;
  
  const mailSubject = "Inquiry - Shree Balaji Granite";
  const mailBody = "Hello Shree Balaji Granite Team,\n\nI am interested in your products and would like more information.\n\nRegards,";
  const mailUrl = `mailto:shreebalajigranite26@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            position: 'fixed',
            bottom: '1.2rem',
            right: '1.2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            zIndex: 1000
          }}
        >
          <motion.a
            href={mailUrl}
            whileHover={{ scale: 1.1, backgroundColor: 'var(--copper)', color: 'var(--bg-dark)', borderColor: 'var(--copper)' }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-light)',
              border: '1px solid var(--border-copper)',
              color: 'var(--copper)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              alignSelf: 'center'
            }}
            title="Email Us"
          >
            <Mail size={18} />
          </motion.a>

          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, backgroundColor: '#25D366', color: '#FFF', borderColor: '#25D366', boxShadow: '0 8px 25px rgba(37,211,102,0.5)' }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(192, 120, 64, 0.1)',
              border: '1px solid var(--copper)',
              backdropFilter: 'blur(10px)',
              color: 'var(--copper)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(192, 120, 64, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            title="WhatsApp Us"
          >
            <MessageCircle size={24} />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActions;
