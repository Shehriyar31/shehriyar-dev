import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';

function About() {
  return (
    <div className="app">
      <section className="hero-section" id="about">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="text-center text-lg-start">
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                About Me
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h2 className="hero-subtitle mb-4">M.Shehriyar Pervaiz</h2>
                
                <p className="hero-description mb-4">
                  I'm a passionate MERN Stack Developer with 3+ years of experience in creating 
                  innovative web solutions. My expertise spans across full-stack development, 
                  graphics design, WordPress development, MS Office management, and Facebook Ads.
                </p>
                
                <p className="hero-description mb-4">
                  I believe in writing clean, efficient code and creating user-friendly interfaces 
                  that provide exceptional user experiences. My goal is to help businesses grow 
                  through powerful digital solutions.
                </p>
                
                <div className="mb-4">
                  <h4 style={{color: '#00ffff', marginBottom: '1rem'}}>
                    <i className="bi bi-award me-2"></i>My Expertise
                  </h4>
                  <ul style={{color: 'rgba(255,255,255,0.8)', lineHeight: '1.8'}}>
                    <li><i className="bi bi-check-circle me-2" style={{color: '#00ffff'}}></i>MERN Stack Development</li>
                    <li><i className="bi bi-check-circle me-2" style={{color: '#00ffff'}}></i>Graphics Design (Photoshop, Illustrator, CorelDraw)</li>
                    <li><i className="bi bi-check-circle me-2" style={{color: '#00ffff'}}></i>WordPress Development</li>
                    <li><i className="bi bi-check-circle me-2" style={{color: '#00ffff'}}></i>MS Office Management</li>
                    <li><i className="bi bi-check-circle me-2" style={{color: '#00ffff'}}></i>Facebook Ads Management</li>
                    <li><i className="bi bi-check-circle me-2" style={{color: '#00ffff'}}></i>Responsive Web Design</li>
                  </ul>
                </div>
              </motion.div>
            </Col>
            
            <Col lg={6} className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.2, type: "spring" }}
                className="hero-image"
              >
                <div className="floating-card">
                  <div className="text-center mb-3">
                    <img 
                      src={logo} 
                      alt="M.Shehriyar Pervaiz" 
                      style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        border: '3px solid #00ffff',
                        boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)',
                        animation: 'logoRotate 8s linear infinite'
                      }}
                    />
                    <h4 style={{color: '#00ffff', marginTop: '1rem'}}>
                      <i className="bi bi-person-badge me-2"></i>Professional Profile
                    </h4>
                  </div>
                  
                  <div style={{textAlign: 'left', color: 'rgba(255,255,255,0.8)'}}>
                    <p><strong style={{color: '#00ffff'}}>Location:</strong> Gujranwala, Pakistan</p>
                    <p><strong style={{color: '#00ffff'}}>Experience:</strong> 3+ Years</p>
                    <p><strong style={{color: '#00ffff'}}>Projects:</strong> 50+ Completed</p>
                    <p><strong style={{color: '#00ffff'}}>Clients:</strong> 30+ Happy Clients</p>
                  </div>
                  
                  <div className="mt-3 text-center">
                    <small style={{color: 'rgba(255,255,255,0.7)'}}>
                      <i className="bi bi-heart-fill text-danger"></i> Passionate Developer from Pakistan
                    </small>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About;