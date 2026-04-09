import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const collections = [
    { num: '01', title: 'Premium Marble', desc: 'Renowned for unparalleled elegance and striking veining. Perfect for opulent interiors, flooring, and luxurious wall cladding.', img: '/premium_marble.png' },
    { num: '02', title: 'Exotic Granite', desc: 'Extremely durable with mesmerizing natural patterns. Ideal for high-end architectural countertops and heavy-duty finishes.', img: '/exotic_granite.png' },
    { num: '03', title: 'Authentic Kota Stone', desc: 'A tough, non-slip natural limestone providing excellent durability. Essential for commercial flooring, pathways, and elegant corridors.', img: '/kota_stone.png' },
    { num: '04', title: 'Classic Shabad Stone', desc: 'Limestone famous for its smooth texture and classic earthy tone. Perfect for heritage landscaping and unique exterior facades.', img: '/shabad_stone.png' },
    { num: '05', title: 'Indian Granite', desc: 'Sourced strictly from the finest domestic quarries, offering unmatched dimensional stability and rich, consistent color variations.', img: '/indian_granite.png' },
    { num: '06', title: 'Imported Marble', desc: 'Curated directly from legendary global quarries such as Italy and Turkey, handpicked by our experts for your most spectacular projects.', img: '/imported_marble.png' },
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
        
        <div className="mobile-swipe collections-grid">
          {collections.map((item, idx) => (
            <motion.div 
              key={item.num}
              className="collection-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, zIndex: 10, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
              style={{
                background: 'var(--bg-light)',
                backgroundImage: `url(${item.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '3rem 2rem',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                willChange: 'transform, opacity'
              }}
            >
              <div 
                className="card-overlay"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} 
              />
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '2px',
                background: 'var(--copper)', transform: 'scaleX(0)', transformOrigin: 'left',
                transition: 'transform 0.5s ease', zIndex: 2
              }} className="hover-line" />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '1rem', color: 'var(--copper)', marginBottom: '2rem', display: 'block' }}>
                  {item.num}
                </span>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
