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
            <img src="/logo.png" alt="Shree Balaji Granite Logo" style={{ width: '120px', height: 'auto', mixBlendMode: 'screen', marginBottom: '2rem' }} />
            <p className="italic-serif" style={{ fontSize: '1.4rem', color: 'var(--text-main)', maxWidth: '400px' }}>
              Masters of Granite and Marble
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ flex: 2, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}
          >
            <div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', letterSpacing: '2px', color: 'var(--copper)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', textTransform: 'uppercase' }}>
                <MapPin size={18} /> Global HQ
              </h4>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.8, fontWeight: 300 }}>
                96/1C, Adjacent to SGA Tata Motors,<br/>Kandhampatty Bypass Road,<br/>Salem, Tamil Nadu – 636005, India
              </p>
            </div>
            
            <div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', letterSpacing: '2px', color: 'var(--copper)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', textTransform: 'uppercase' }}>
                <Mail size={18} /> Inquiries
              </h4>
              <a href="mailto:shreebalajigranite26@gmail.com?subject=Inquiry%20-%20Shree%20Balaji%20Granite&body=Hello%20Shree%20Balaji%20Granite%20Team,%0A%0AI%20am%20interested%20in%20your%20products%20and%20would%20like%20more%20information.%0A%0ARegards," style={{ fontFamily: 'var(--font-ui)', fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.8, display: 'inline-block', transition: 'color 0.3s', fontWeight: 300, borderBottom: '1px solid transparent' }} onMouseOver={e=>e.target.style.color='var(--copper)'} onMouseOut={e=>e.target.style.color='var(--text-main)'}>shreebalajigranite26@gmail.com</a>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1.5rem' }}>
                <motion.a href="https://www.instagram.com/shree_balaji_granite_26" target="_blank" rel="noreferrer" whileHover={{ color: 'var(--copper)', y: -2 }} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  Instagram
                </motion.a>
                <motion.a href="https://www.facebook.com/share/17ECMgPfsT/" target="_blank" rel="noreferrer" whileHover={{ color: 'var(--copper)', y: -2 }} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  Facebook
                </motion.a>
              </div>
            </div>

            <div>
              <h4 style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', letterSpacing: '2px', color: 'var(--copper)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', textTransform: 'uppercase' }}>
                <Phone size={18} /> Directly
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="tel:+919362821935" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.8, display: 'inline-block', transition: 'color 0.3s', fontWeight: 300 }} onMouseOver={e=>e.target.style.color='var(--copper)'} onMouseOut={e=>e.target.style.color='var(--text-main)'}>+91 93628 21935</a>
                <a href="tel:+916369695257" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.8, display: 'inline-block', transition: 'color 0.3s', fontWeight: 300 }} onMouseOver={e=>e.target.style.color='var(--copper)'} onMouseOut={e=>e.target.style.color='var(--text-main)'}>+91 63696 95257</a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Interactive Stylized Map */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ width: '100%', height: '300px', marginBottom: '4rem', filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) contrast(1.2)' }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15632.748281358348!2d78.1130638!3d11.6429396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf015fa6ba1ff%3A0xedafb83b32e0325b!2sKandhampatty%20Bypass%2C%20Salem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Bottom Bar */}
        <div className="footer-bottom" style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          padding: '2rem 0', fontFamily: 'var(--font-ui)', fontSize: '0.75rem',
          letterSpacing: '1px', color: 'var(--text-muted)', textTransform: 'uppercase',
          borderTop: '1px solid rgba(192,120,64,0.1)', marginTop: '2rem'
        }}>
          <div>&copy; {new Date().getFullYear()} Shree Balaji Granite. All Rights Reserved.</div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
