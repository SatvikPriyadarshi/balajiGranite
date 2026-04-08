import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [mobileMenuOpen]);

  const navLinks = ['About', 'Collections', 'Testimonials'];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: scrolled ? '0.8rem 5%' : '1.2rem 5%',
        background: scrolled ? 'rgba(13, 13, 13, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-copper)' : 'none',
        zIndex: 100, transition: 'all 0.4s ease'
      }}>
        <a href="#hero" style={{ display: 'block', zIndex: 101 }}>
          <img src="/logo.png" alt="Shree Balaji Stone Logo" style={{
            width: scrolled ? '100px' : '150px', height: 'auto',
            mixBlendMode: 'screen', transition: 'width 0.4s ease'
          }} />
        </a>
        
        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '3rem' }} className="nav-links">
          {navLinks.map(item => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2, color: 'var(--copper)' }}
              style={{
                fontFamily: 'var(--font-ui)', fontSize: '0.8rem',
                textTransform: 'uppercase', letterSpacing: '2px',
                transition: 'color 0.3s ease'
              }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        <div className="nav-links">
          <a href="#contact" className="btn">Get in Touch</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="mobile-menu-btn" style={{ display: 'none', zIndex: 101, cursor: 'pointer' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X color="var(--copper)" size={32} /> : <Menu color="var(--text-main)" size={32} />}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
              background: 'var(--bg-dark)', zIndex: 99,
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '3rem'
            }}
          >
            {navLinks.map((item, idx) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (idx * 0.1), duration: 0.5 }}
                style={{
                  fontFamily: 'var(--font-display)', fontSize: '3rem',
                  color: 'var(--text-main)', textTransform: 'uppercase'
                }}
              >
                {item}
              </motion.a>
            ))}
            <motion.a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.6 }}
              className="btn btn-fill" 
              style={{ marginTop: '2rem' }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
