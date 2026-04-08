import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#050505', paddingTop: '8rem', overflow: 'hidden' }} id="contact">
      <div className="container" style={{ padding: '0 5%' }}>
        
        {/* Top Footer Section */}
        <div className="footer-flex" style={{ display: 'flex', justifyContent: 'space-between', gap: '5rem', marginBottom: '6rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <img src="/logo.png" alt="Shree Balaji Stone Logo" style={{ width: '120px', height: 'auto', mixBlendMode: 'screen', marginBottom: '2rem' }} />
            <p className="italic-serif" style={{ fontSize: '1.4rem', color: 'var(--text-main)', maxWidth: '400px' }}>
              Unearthing Nature's Ultimate Masterpieces.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ flex: 2, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}
          >
            <div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--copper)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} /> Global HQ
              </h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>RIICO Industrial Area,<br/>Kishangarh, Rajasthan,<br/>India 305801</p>
            </div>
            
            <div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--copper)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} /> Inquiries
              </h4>
              <a href="mailto:exports@shreebalajistone.com" style={{ color: 'var(--text-muted)', lineHeight: 1.8, display: 'block', transition: 'color 0.3s' }}>exports@shreebalajistone.com</a>
              <a href="mailto:info@shreebalajistone.com" style={{ color: 'var(--text-muted)', lineHeight: 1.8, display: 'block', transition: 'color 0.3s' }}>info@shreebalajistone.com</a>
            </div>

            <div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--copper)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} /> Directly
              </h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>+91 98XXX XXXXX<br/>+91 99XXX XXXXX</p>
            </div>
          </motion.div>

        </div>

        {/* Interactive Stylized Map */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ width: '100%', height: '300px', marginBottom: '4rem', filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) contrast(1.2)' }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14691.077270425892!2d74.85871!3d26.581561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396beed0b8f04753%3A0xc3c907a3877acda5!2sRIICO%20Industrial%20Area%2C%20Kishangarh%2C%20Rajasthan%20305801!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Bottom Bar */}
        <div className="footer-bottom" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '2rem 0', fontFamily: 'var(--font-ui)', fontSize: '0.75rem',
          letterSpacing: '1px', color: 'var(--text-muted)', textTransform: 'uppercase',
          borderTop: '1px solid rgba(192,120,64,0.1)', marginTop: '2rem'
        }}>
          <div>&copy; {new Date().getFullYear()} Shree Balaji Stone & Granite. All Rights Reserved.</div>
          
          <div style={{ display: 'flex', gap: '2rem' }}>
            <motion.a href="#" whileHover={{ color: 'var(--copper)', y: -2 }} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram <ArrowUpRight size={12}/></motion.a>
            <motion.a href="#" whileHover={{ color: 'var(--copper)', y: -2 }} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn <ArrowUpRight size={12}/></motion.a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
