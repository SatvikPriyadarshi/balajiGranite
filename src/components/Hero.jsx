import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/marble.png',
  '/granite.png',
  '/installation.png'
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" style={{ height: '100vh', position: 'relative', overflow: 'hidden', padding: 0 }}>
      {/* Background Slider */}
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        />
      </AnimatePresence>

      {/* Radial Dark Overlay to blend logo and text robustly */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        background: 'radial-gradient(circle at center, rgba(13,13,13,0.65) 0%, rgba(5,5,5,0.98) 100%)',
        zIndex: 1
      }}></div>

      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        gap: '2rem'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ width: '300px', height: '300px', position: 'relative' }}
        >
          <div style={{
            position: 'absolute',
            width: '100%', height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(192,120,64,0.15) 0%, rgba(13,13,13,0) 70%)',
            filter: 'blur(20px)',
          }}></div>
          <img src="/logo.png" alt="Monogram" style={{
            width: '100%', height: '100%', objectFit: 'contain',
            mixBlendMode: 'screen', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
          }} />
        </motion.div>

        <motion.div 
          className="italic-serif"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.4 }
            }
          }}
          style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center', textShadow: '0px 4px 15px rgba(0,0,0,1)', fontSize: 'clamp(1.2rem, 5vw, 1.8rem)', color: '#fff' }}
        >
          {['Timeless', 'Splendor,', 'Crafted', 'from', 'Nature.'].map((word) => (
            <motion.span 
              key={word}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hero-buttons"
          style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}
        >
          <a href="#collections" className="btn btn-fill">Explore Collections</a>
          <a href="#about" className="btn">Our Legacy</a>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
