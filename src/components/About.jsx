import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="about" className="section-padding" ref={containerRef}>
      <div className="container grid-2" style={{ alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="ui-label">Our Legacy</span>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', marginTop: '1rem' }}>Salem's Trusted Granite & Marble Dealers</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            At Shree Balaji Granite, guided by the vision of Owner <strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>Sohan Mali</strong>, we bring you the earth's most spectacular natural canvases. Operating as the premier granite shop in Salem, our three decades of unrivaled expertise ensures ethically sourced, high-grade stones for every architectural dream.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            We provide all varieties of best quality stones, expertly crafting nature's finest gifts. We are the leading Kota stone suppliers near you, and our premium collections include:
            <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', listStyleType: 'disc' }}>
              <li>Premium Quality Marbles</li>
              <li>Exotic & Local Granites</li>
              <li>Durable Kota Stones</li>
              <li>Authentic Shabad Stones in Salem</li>
            </ul>
          </p>
          
          <div className="stats-grid" style={{ marginTop: '3rem', borderTop: '1px solid var(--border-copper)', paddingTop: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--copper-light)', marginBottom: '0.5rem' }}>30+</div>
              <div className="ui-label">Years Heritage</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--copper-light)', marginBottom: '0.5rem' }}>500+</div>
              <div className="ui-label">Exotic Colors</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--copper-light)', marginBottom: '0.5rem' }}>Global</div>
              <div className="ui-label">Distribution</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ position: 'relative', padding: '3rem' }}
        >
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
            border: '1px solid var(--border-copper)', transform: 'translate(20px, 20px)', zIndex: -1
          }}></div>
          <motion.div aria-label="Premium Granite slabs installation showcasing high quality marble and stone work in Salem" role="img" style={{
            width: '100%', aspectRatio: '4/5', background: 'var(--bg-light)',
            backgroundImage: 'url(/installation.png)', backgroundSize: 'cover', backgroundPosition: 'center',
            filter: 'grayscale(20%) contrast(1.1)', y: yImage
          }}></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
