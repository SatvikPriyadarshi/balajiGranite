import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/gallery_1.png', alt: 'Exotic Onyx Lobby', span: 'col-span-2 row-span-2' },
    { src: '/gallery_2.png', alt: 'Calacatta Kitchen', span: 'col-span-1 row-span-1' },
    { src: '/gallery_3.png', alt: 'Sandstone Patio', span: 'col-span-1 row-span-1' }
  ];

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <span className="ui-label">Installations</span>
          <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>Architectural Masterpieces</h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          gridAutoRows: '300px'
        }} className="masonry-grid">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              onClick={() => setSelectedImage(img.src)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid var(--border-copper)',
                height: '100%'
              }}
              className={`gallery-item ${img.span}`}
            >
              <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="hover-zoom" />
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'rgba(13,13,13,0.3)', display: 'flex', justifyContent: 'center', alignItems: 'center',
                opacity: 0, transition: 'opacity 0.3s ease'
              }} className="gallery-overlay">
                <Maximize2 color="var(--copper)" size={40} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
              background: 'rgba(5,5,5,0.95)', zIndex: 10000,
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              padding: '2rem'
            }}
          >
            <button style={{
              position: 'absolute', top: '2rem', right: '2rem',
              background: 'transparent', border: 'none', color: 'var(--copper)', cursor: 'pointer'
            }} onClick={() => setSelectedImage(null)}>
              <X size={40} />
            </button>
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: 'spring', damping: 25 }}
              style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', border: '1px solid var(--border-copper)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
