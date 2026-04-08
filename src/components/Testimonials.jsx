import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding" style={{ backgroundColor: 'var(--bg-dark)', textAlign: 'center' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="ui-label">Endorsements</span>
          <h2 style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '4rem' }}>Client Words</h2>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ padding: '4rem', border: '1px solid var(--border-copper)', position: 'relative', textAlign: 'left' }}
          >
            <div style={{ position: 'absolute', top: '-25px', left: '40px', background: 'var(--bg-dark)', padding: '0 15px' }}>
              <svg viewBox="0 0 24 24" style={{ width: '40px', height: '40px', fill: 'var(--copper)' }}>
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <p className="italic-serif" style={{ fontSize: '1.4rem', lineHeight: 1.8, color: 'var(--text-main)', marginBottom: '2rem' }}>
              "The Calacatta marble supplied by Shree Balaji for our penthouse project was absolutely flawless. Their ability to source and book-match magnificent slabs transformed the space into a true architectural masterpiece."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '30px', height: '1px', background: 'var(--copper)' }}></div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '0.2rem' }}>Arthur Pendelton</h4>
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Principal Architect, AP Studio</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ padding: '4rem', border: '1px solid var(--border-copper)', position: 'relative', textAlign: 'left' }}
          >
            <div style={{ position: 'absolute', top: '-25px', left: '40px', background: 'var(--bg-dark)', padding: '0 15px' }}>
              <svg viewBox="0 0 24 24" style={{ width: '40px', height: '40px', fill: 'var(--copper)' }}>
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <p className="italic-serif" style={{ fontSize: '1.4rem', lineHeight: 1.8, color: 'var(--text-main)', marginBottom: '2rem' }}>
              "Partnering with Shree Balaji Stone ensures we always receive premium quality granite. Their massive inventory and precision in cutting have made them our trusted stone supplier for over a decade of luxury hotel developments."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '30px', height: '1px', background: 'var(--copper)' }}></div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '0.2rem' }}>Elena Rostova</h4>
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Director of Procurement, Global Hotels</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
