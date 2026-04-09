import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'collections', 'testimonials'];
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize
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
        borderBottom: scrolled ? '1px solid var(--border-copper)' : '1px solid transparent',
        zIndex: 100, transition: 'all 0.4s ease'
      }}>
        <a href="#hero" style={{ display: 'block', zIndex: 101 }}>
          <img src="/logo.png" alt="Shree Balaji Granite Logo" style={{
            width: scrolled ? '100px' : '150px', height: 'auto',
            mixBlendMode: 'screen', transition: 'width 0.4s ease'
          }} />
        </a>
        
        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '3rem' }} className="nav-links">
          {navLinks.map(item => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2, color: 'var(--copper)', textShadow: '0 0 10px rgba(192,120,64,0.6)' }}
                style={{
                  fontFamily: 'var(--font-ui)', fontSize: '0.8rem',
                  textTransform: 'uppercase', letterSpacing: '2px',
                  color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                  textShadow: isActive ? '0 0 12px rgba(192,120,64,0.8)' : 'none',
                  borderBottom: isActive ? '1px solid var(--copper)' : '1px solid transparent',
                  paddingBottom: '0.3rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {item}
              </motion.a>
            )
          })}
        </div>
        
        <div className="nav-links">
          <a href="#contact" className="btn">Get in Touch</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <motion.div 
          className="mobile-menu-btn" 
          style={{ display: 'none', zIndex: 101, cursor: 'pointer' }} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X color="var(--copper)" size={28} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu color="var(--text-main)" size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)', transition: { delay: 0.2, duration: 0.3 } }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
              background: 'rgba(5, 5, 5, 0.9)', zIndex: 99,
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '3rem'
            }}
          >
            {navLinks.map((item, idx) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2 } }}
                  transition={{ delay: 0.1 + (idx * 0.08), duration: 0.4, type: "spring", stiffness: 100 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    fontFamily: 'var(--font-display)', fontSize: '2.5rem',
                    color: isActive ? 'var(--copper)' : 'var(--text-main)', 
                    textTransform: 'uppercase',
                    textShadow: isActive ? '0 0 20px rgba(192,120,64,0.5)' : 'none',
                    letterSpacing: '3px'
                  }}
                >
                  {item}
                </motion.a>
              )
            })}
            <motion.a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
              transition={{ delay: 0.4 }}
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
