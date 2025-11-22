import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TooltipWrapper from './TooltipWrapper';
import logo from '../assets/logo.jpg';
import pkFlag from '../assets/pk.jpg';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4 text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="footer-brand d-flex align-items-center justify-content-center justify-content-lg-start mb-3">
                <img 
                  src={logo} 
                  alt="ShehriyarDev" 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '2px solid #00ffff',
                    marginRight: '10px'
                  }}
                />
                ShehriyarDev
              </div>
              <p className="footer-text">
                Hi, I'm M.Shehriyar Pervaiz - Multi-skilled professional with 3+ years of experience in MERN Stack Development, Graphics Design, WordPress, MS Office Management, and Facebook Ads.
              </p>
            </motion.div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4 text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h5 className="footer-title"><i className="bi bi-rocket me-2"></i>Services</h5>
              <div>
                <TooltipWrapper text="Full Stack Web Development">
                  <a href="#" className="footer-link">Web Development</a>
                </TooltipWrapper>
                <TooltipWrapper text="User Interface & Experience Design">
                  <a href="#" className="footer-link">UI/UX Design</a>
                </TooltipWrapper>
                <TooltipWrapper text="Online Store Development">
                  <a href="#" className="footer-link">E-commerce</a>
                </TooltipWrapper>
                <TooltipWrapper text="Mobile Application Development">
                  <a href="#" className="footer-link">Mobile Apps</a>
                </TooltipWrapper>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4 text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h5 className="footer-title"><i className="bi bi-building me-2"></i>Company</h5>
              <div>
                <TooltipWrapper text="Go to Homepage">
                  <Link to="/" className="footer-link">Home</Link>
                </TooltipWrapper>
                <TooltipWrapper text="Learn About Me">
                  <Link to="/about" className="footer-link">About</Link>
                </TooltipWrapper>
                <TooltipWrapper text="View My Services">
                  <Link to="/services" className="footer-link">Services</Link>
                </TooltipWrapper>
                <TooltipWrapper text="Check My Work">
                  <Link to="/portfolio" className="footer-link">Portfolio</Link>
                </TooltipWrapper>
                <TooltipWrapper text="Get In Touch">
                  <Link to="/contact" className="footer-link">Contact</Link>
                </TooltipWrapper>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={4} md={6} className="mb-4 text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h5 className="footer-title"><i className="bi bi-telephone me-2"></i>Contact Info</h5>
              <div>
                <TooltipWrapper text="Chat on WhatsApp">
                  <a href="https://wa.me/923286257707" className="footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-whatsapp me-2"></i>+92 328 625 7707
                  </a>
                </TooltipWrapper>
                <TooltipWrapper text="My Location">
                  <a href="#" className="footer-link">
                    <i className="bi bi-geo-alt me-2"></i>Gujranwala, Pakistan
                  </a>
                </TooltipWrapper>
                <TooltipWrapper text="Always Ready to Help">
                  <a href="#" className="footer-link">
                    <i className="bi bi-clock me-2"></i>Available 24/7
                  </a>
                </TooltipWrapper>
              </div>
            </motion.div>
          </Col>
        </Row>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p>
            © 2025 ShehriyarDev. All rights reserved. Made with <i className="bi bi-heart-fill text-danger"></i> by ShehriyarDev in Pakistan <img src={pkFlag} alt="Pakistan" style={{width: '20px', height: '15px', marginLeft: '5px'}} />
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}

export default Footer;