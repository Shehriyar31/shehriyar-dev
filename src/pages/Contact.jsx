import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/logo.jpg';

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [whatsappError, setWhatsappError] = useState('');

  const services = [
    'MERN Stack Development',
    'Frontend Web Development',
    'Graphics Design',
    'WordPress Development',
    'MS Office Management',
    'Facebook Ads Management',
    'Responsive Web Design',
    'Courses & Training'
  ];

  const courses = [
    'Frontend Development',
    'Full Stack Development',
    'Graphics Designing',
    'MS Office Management',
    'WordPress Development',
    'Facebook Ads Management'
  ];

  const validateWhatsApp = (number) => {
    const pakistanRegex = /^03\d{9}$/;
    return pakistanRegex.test(number);
  };

  const handleWhatsAppChange = (e) => {
    const value = e.target.value;
    setWhatsappNumber(value);
    
    if (value && !validateWhatsApp(value)) {
      setWhatsappError('Please enter valid Pakistani number (03XXXXXXXXX)');
    } else {
      setWhatsappError('');
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateWhatsApp(whatsappNumber)) {
      setWhatsappError('Please enter valid Pakistani number (03XXXXXXXXX)');
      return;
    }
    
    setIsLoading(true);

    // EmailJS configuration
    emailjs.sendForm(
      'service_jatuzbb', // Your EmailJS service ID
      'template_o3miq87', // Template ID
      form.current,
      'nE6EN-lvKAnch6V6p' // Your public key
    )
    .then((result) => {
      console.log(result.text);
      toast.success('Message sent successfully! I will get back to you soon.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      toast.error('Failed to send message. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="text-center text-lg-start">
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                Get In Touch
              </motion.h1>
              
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Ready to start your next project? Let's discuss your requirements and bring your ideas to life. I'm here to help you achieve your digital goals.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-4"
              >
                <div className="contact-info">
                  <div className="contact-item mb-3">
                    <i className="bi bi-whatsapp me-3" style={{color: '#00ffff', fontSize: '1.2rem'}}></i>
                    <span>+923286257707</span>
                  </div>
                  <div className="contact-item mb-3">
                    <i className="bi bi-geo-alt me-3" style={{color: '#00ffff', fontSize: '1.2rem'}}></i>
                    <span>Gujranwala, Pakistan</span>
                  </div>
                </div>
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
                      alt="Contact" 
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        border: '2px solid #00ffff',
                        boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)',
                        animation: 'logoRotate 8s linear infinite'
                      }}
                    />
                    <h5 style={{color: '#00ffff', marginTop: '0.8rem', fontSize: '1.1rem'}}>
                      <i className="bi bi-chat-dots me-2"></i>Let's Connect
                    </h5>
                  </div>
                  <div className="code-snippet">
                    <div>&lt;div className="contact"&gt;</div>
                    <div style={{marginLeft: '20px', color: '#ff6b6b'}}>
                      <i className="bi bi-star-fill"></i> Available 24/7 <i className="bi bi-star-fill"></i>
                    </div>
                    <div>&lt;/div&gt;</div>
                  </div>
                  <div className="mt-3 text-center">
                    <small style={{color: 'rgba(255,255,255,0.7)'}}>
                      <i className="bi bi-lightning"></i> Quick Response Guaranteed
                    </small>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="section-title">
              <i className="bi bi-envelope me-3"></i>Send Message
            </h2>
            <p className="lead" style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem'}}>
              Fill out the form below and I'll get back to you within 24 hours
            </p>
          </motion.div>
          
          <Row className="justify-content-center">
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="contact-form-card">
                  <Form ref={form} onSubmit={sendEmail} autoComplete="off">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label style={{color: '#00ffff', fontWeight: '600'}}>
                            <i className="bi bi-person me-2"></i>Full Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="user_name"
                            placeholder="Enter your full name"
                            required
                            className="contact-input"
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck="false"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label style={{color: '#00ffff', fontWeight: '600'}}>
                            <i className="bi bi-envelope me-2"></i>Email Address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="user_email"
                            placeholder="Enter your email"
                            required
                            className="contact-input"
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck="false"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label style={{color: '#00ffff', fontWeight: '600'}}>
                            <i className="bi bi-whatsapp me-2"></i>WhatsApp Number
                          </Form.Label>
                          <Form.Control
                            type="tel"
                            name="user_whatsapp"
                            placeholder="03XXXXXXXXX"
                            required
                            className={`contact-input ${whatsappError ? 'is-invalid' : ''}`}
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck="false"
                            value={whatsappNumber}
                            onChange={handleWhatsAppChange}
                            maxLength={11}
                            pattern="03[0-9]{9}"
                          />
                          {whatsappError && (
                            <div className="invalid-feedback" style={{color: '#ff6b6b', fontSize: '0.875rem', marginTop: '0.25rem'}}>
                              {whatsappError}
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label style={{color: '#00ffff', fontWeight: '600'}}>
                            <i className="bi bi-gear me-2"></i>Service Required
                          </Form.Label>
                          <Form.Select 
                            name="service_type" 
                            required 
                            className="contact-input"
                            autoComplete="off"
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                          >
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>{service}</option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    {selectedService === 'Courses & Training' && (
                      <Row>
                        <Col md={12}>
                          <Form.Group className="mb-3">
                            <Form.Label style={{color: '#00ffff', fontWeight: '600'}}>
                              <i className="bi bi-mortarboard me-2"></i>Select Course
                            </Form.Label>
                            <Form.Select 
                              name="course_name" 
                              required 
                              className="contact-input"
                              autoComplete="off"
                            >
                              <option value="">Select a course</option>
                              {courses.map((course, index) => (
                                <option key={index} value={course}>{course}</option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                    )}
                    
                    <Form.Group className="mb-4">
                      <Form.Label style={{color: '#00ffff', fontWeight: '600'}}>
                        <i className="bi bi-chat-text me-2"></i>Message
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        placeholder="Tell me about your project requirements..."
                        required
                        className="contact-input"
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="false"
                      />
                    </Form.Group>
                    
                    <div className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          type="submit" 
                          className="btn-hero" 
                          size="lg"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                              Sending...
                            </>
                          ) : (
                            <>
                              <i className="bi bi-send me-2"></i>Send Message
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </div>
                  </Form>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Info Section */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <h4>WhatsApp</h4>
                  <p>+923286257707</p>
                  <small>Response within 2 hours</small>
                </div>
              </motion.div>
            </Col>
            
            <Col lg={4} md={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <h4>Location</h4>
                  <p>Gujranwala, Pakistan</p>
                  <small>Available 24/7</small>
                </div>
              </motion.div>
            </Col>
            
            <Col lg={4} md={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <i className="bi bi-clock"></i>
                  </div>
                  <h4>Availability</h4>
                  <p>24/7 Support</p>
                  <small>Remote work worldwide</small>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Contact;