import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="about" className="section-padding" ref={containerRef}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="ui-label">Our Legacy</span>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', marginTop: '1rem' }}>Masters of Stone Since 1994</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            At Shree Balaji Stone and Granite, we extract and refine the earth's most spectacular natural canvases. With over three decades of unrivaled expertise, our dedication to ethically sourcing and perfectly finishing luxury stone is absolute.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            From pristine imported Calacatta to exotic Indian granites, our collections grace the most prestigious architectural projects and luxury residences globally. We don't just supply stone; we curate natural masterpieces.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '3rem', borderTop: '1px solid var(--border-copper)', paddingTop: '2rem' }}>
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
          <motion.div style={{
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
