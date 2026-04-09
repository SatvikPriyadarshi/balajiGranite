import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const collections = [
    { num: '01', title: 'Premium Marble', desc: 'Sourced from legendary quarries in Italy and India. Unparalleled elegance with striking veining suitable for opulent interiors.' },
    { num: '02', title: 'Exotic Granite', desc: 'Extremely durable with mesmerizing natural patterns. Ideal for architectural cladding, precision countertops, and heavy-duty luxury finishes.' },
    { num: '03', title: 'Luminous Onyx', desc: 'Translucent and spectacular. Used for backlit installations, creating breathtaking focal points in ultra-luxury environments.' },
    { num: '04', title: 'Natural Sandstone', desc: 'Offering a warm, earthy aesthetic perfect for magnificent exterior facades, heritage landscaping, and bespoke carvings.' },
    { num: '05', title: 'Quartzite', desc: 'Merging the aesthetic depth of marble with the resilient toughness of granite, a favorite among top-tier architects.' },
    { num: '06', title: 'Custom Fabrication', desc: 'Our state-of-the-art facilities offer CNC precision cutting, bespoke profiling, and unparalleled edge finishing for your exact architectural needs.' },
  ];

  return (
    <section id="collections" className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <span className="ui-label">Our Inventory</span>
          <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>Exquisite Collections</h2>
        </motion.div>
        
        <div className="mobile-swipe" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2px', 
          background: 'var(--border-copper)', 
          border: '1px solid var(--border-copper)' 
        }}>
          {collections.map((item, idx) => (
            <motion.div 
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, backgroundColor: 'var(--bg-dark)', zIndex: 10, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
              style={{
                background: 'var(--bg-light)',
                padding: '3rem 2rem',
                position: 'relative',
                transition: 'background-color 0.4s ease'
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '2px',
                background: 'var(--copper)', transform: 'scaleX(0)', transformOrigin: 'left',
                transition: 'transform 0.5s ease'
              }} className="hover-line" />
              
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '1rem', color: 'var(--copper)', marginBottom: '2rem', display: 'block' }}>
                {item.num}
              </span>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
