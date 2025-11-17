import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import logo from '../assets/logo.jpg';

function Hero() {
  return (
    <section className="hero-section" id="home">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="text-center text-lg-start">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              Hi, I'm M.Shehriyar Pervaiz<br/>
              <Typewriter
                options={{
                  strings: [
                    'MERN Stack Developer',
                    'Full Stack Developer',
                    'React.js Developer',
                    'Node.js Developer',
                    'MongoDB Expert',
                    'Graphics Designer',
                    'WordPress Developer',
                    'MS Office Expert',
                    'Facebook Ads Expert'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
              <br />
              <span style={{fontSize: '0.8em'}}>Full Stack Web Solutions</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              With 3+ years of experience in MERN Stack, Graphics Design, WordPress, MS Office Management, and Facebook Ads. I create comprehensive digital solutions from web development to marketing.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="d-inline-block me-3 mb-3"
              >
                <Link to="/portfolio">
                  <Button className="btn-hero" size="lg">
                    <i className="bi bi-code-slash me-2"></i> View My Work
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="d-inline-block mb-3"
              >
                <Link to="/contact">
                  <Button className="btn-outline-hero" size="lg">
                    <i className="bi bi-person me-2"></i> Hire Me
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </Col>
          
          <Col lg={6} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.2, type: "spring" }}
              className="hero-image"
            >
              <div className="floating-card">
                <div className="text-center mb-3">
                  <img 
                    src={logo} 
                    alt="ShehriyarDev Software Solutions" 
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      border: '2px solid #00ffff',
                      boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)',
                      animation: 'logoRotate 8s linear infinite'
                    }}
                  />
                  <h5 style={{color: '#00ffff', marginTop: '0.8rem', fontSize: '1.1rem'}}>
                    <i className="bi bi-laptop me-2"></i>Live Preview
                  </h5>
                </div>
                <div className="code-snippet">
                  <div>&lt;div className="success"&gt;</div>
                  <div style={{marginLeft: '20px', color: '#ff6b6b'}}>
                    <i className="bi bi-star-fill"></i> MERN Stack Application <i className="bi bi-star-fill"></i>
                  </div>
                  <div>&lt;/div&gt;</div>
                </div>
                <div className="mt-3 text-center">
                  <small style={{color: 'rgba(255,255,255,0.7)'}}>
                    <i className="bi bi-fire"></i> MongoDB + Express + React + Node
                  </small>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;