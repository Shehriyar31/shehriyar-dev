import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function Services() {
  const services = [
    {
      icon: "bi bi-code-slash",
      title: "MERN Stack Development",
      description: "Complete full-stack applications using MongoDB, Express.js, React.js, and Node.js with modern architecture.",
      features: ["Custom Web Applications", "RESTful APIs", "Database Design", "Authentication Systems", "Real-time Features"]
    },
    {
      icon: "bi bi-laptop",
      title: "Frontend Web Development",
      description: "Modern frontend applications using React.js, HTML5, CSS3, and JavaScript with responsive design.",
      features: ["React.js Applications", "HTML5 & CSS3", "JavaScript ES6+", "Bootstrap Framework", "Interactive UI Components"]
    },
    {
      icon: "bi bi-palette",
      title: "Graphics Design",
      description: "Creative visual designs, logos, branding materials, and digital graphics for web and print media.",
      features: ["Logo Design", "Brand Identity", "Print Materials", "Digital Graphics", "UI/UX Design"]
    },
    {
      icon: "bi bi-wordpress",
      title: "WordPress Development",
      description: "Custom WordPress websites, themes, plugins, and e-commerce solutions with responsive design.",
      features: ["Custom Themes", "Plugin Development", "E-commerce Setup", "SEO Optimization", "Performance Optimization"]
    },
    {
      icon: "bi bi-file-earmark-excel",
      title: "MS Office Management",
      description: "Advanced Excel, Word, PowerPoint solutions, data analysis, automation, and document management.",
      features: ["Excel Automation", "Data Analysis", "Report Generation", "Document Templates", "Macro Development"]
    },
    {
      icon: "bi bi-facebook",
      title: "Facebook Ads Management",
      description: "Strategic Facebook advertising campaigns, audience targeting, ad optimization, and ROI maximization.",
      features: ["Campaign Strategy", "Audience Targeting", "Ad Creation", "Performance Tracking", "ROI Optimization"]
    },
    {
      icon: "bi bi-phone",
      title: "Responsive Web Design",
      description: "Mobile-first responsive websites that work perfectly across all devices and screen sizes.",
      features: ["Mobile-First Design", "Cross-Browser Compatibility", "Performance Optimization", "User Experience", "Modern Layouts"]
    },
  ];

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section" id="services">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="text-center text-lg-start">
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                My Professional Services
              </motion.h1>
              
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Comprehensive digital solutions tailored to your business needs. From web development to marketing, I provide end-to-end services to help your business grow and succeed in the digital world.
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
                  <Link to="/contact">
                    <Button className="btn-hero" size="lg">
                      <i className="bi bi-telephone me-2"></i> Get Quote
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
                      <i className="bi bi-chat-dots me-2"></i> Discuss Project
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
                      alt="Services" 
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
                      <i className="bi bi-gear me-2"></i>Service Portfolio
                    </h5>
                  </div>
                  <div className="code-snippet">
                    <div>&lt;div className="services"&gt;</div>
                    <div style={{marginLeft: '20px', color: '#ff6b6b'}}>
                      <i className="bi bi-star-fill"></i> 6 Professional Services <i className="bi bi-star-fill"></i>
                    </div>
                    <div>&lt;/div&gt;</div>
                  </div>
                  <div className="mt-3 text-center">
                    <small style={{color: 'rgba(255,255,255,0.7)'}}>
                      <i className="bi bi-award"></i> Quality & Excellence Guaranteed
                    </small>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid Section */}
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
              <i className="bi bi-briefcase me-3"></i>Service Details
            </h2>
            <p className="lead" style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem'}}>
              Detailed overview of all professional services I offer
            </p>
          </motion.div>
          
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="h-100"
                >
                  <div className="service-card h-100">
                    <motion.div 
                      className="service-icon"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <i className={service.icon}></i>
                    </motion.div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description mb-4">{service.description}</p>
                    
                    <div className="text-start">
                      <h6 style={{color: '#00ffff', marginBottom: '1rem'}}>
                        <i className="bi bi-check-square me-2"></i>What's Included:
                      </h6>
                      <ul style={{color: 'rgba(255,255,255,0.8)', listStyle: 'none', padding: 0}}>
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="mb-2">
                            <i className="bi bi-arrow-right-circle me-2" style={{color: '#00ffff'}}></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Me Section */}
      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title text-start">
                  <i className="bi bi-star me-3"></i>Why Choose Me?
                </h2>
                
                <div className="mb-4">
                  <h5 style={{color: '#00ffff', marginBottom: '1rem'}}>
                    <i className="bi bi-lightning me-2"></i>Fast Delivery
                  </h5>
                  <p style={{color: 'rgba(255,255,255,0.8)'}}>
                    Quick turnaround times without compromising on quality. Your project will be delivered on time, every time.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h5 style={{color: '#00ffff', marginBottom: '1rem'}}>
                    <i className="bi bi-award me-2"></i>Quality Assurance
                  </h5>
                  <p style={{color: 'rgba(255,255,255,0.8)'}}>
                    Rigorous testing and quality checks ensure your project meets the highest standards and exceeds expectations.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h5 style={{color: '#00ffff', marginBottom: '1rem'}}>
                    <i className="bi bi-headset me-2"></i>24/7 Support
                  </h5>
                  <p style={{color: 'rgba(255,255,255,0.8)'}}>
                    Round-the-clock support and maintenance to ensure your project runs smoothly at all times.
                  </p>
                </div>
              </motion.div>
            </Col>
            
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="floating-card">
                  <h4 style={{color: '#00ffff', marginBottom: '2rem'}}>
                    <i className="bi bi-graph-up me-2"></i>Success Metrics
                  </h4>
                  
                  <Row>
                    <Col xs={6} className="mb-3">
                      <div style={{
                        background: 'rgba(0, 255, 255, 0.1)',
                        borderRadius: '15px',
                        padding: '1.5rem',
                        textAlign: 'center',
                        border: '1px solid rgba(0, 255, 255, 0.2)'
                      }}>
                        <div style={{
                          fontSize: '2rem',
                          fontWeight: '900',
                          background: 'linear-gradient(45deg, #00ffff, #ff6b6b)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          marginBottom: '0.5rem'
                        }}>100%</div>
                        <div style={{color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem'}}>Client Satisfaction</div>
                      </div>
                    </Col>
                    <Col xs={6} className="mb-3">
                      <div style={{
                        background: 'rgba(0, 255, 255, 0.1)',
                        borderRadius: '15px',
                        padding: '1.5rem',
                        textAlign: 'center',
                        border: '1px solid rgba(0, 255, 255, 0.2)'
                      }}>
                        <div style={{
                          fontSize: '2rem',
                          fontWeight: '900',
                          background: 'linear-gradient(45deg, #00ffff, #ff6b6b)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          marginBottom: '0.5rem'
                        }}>50+</div>
                        <div style={{color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem'}}>Projects Done</div>
                      </div>
                    </Col>
                    <Col xs={6} className="mb-3">
                      <div style={{
                        background: 'rgba(0, 255, 255, 0.1)',
                        borderRadius: '15px',
                        padding: '1.5rem',
                        textAlign: 'center',
                        border: '1px solid rgba(0, 255, 255, 0.2)'
                      }}>
                        <div style={{
                          fontSize: '2rem',
                          fontWeight: '900',
                          background: 'linear-gradient(45deg, #00ffff, #ff6b6b)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          marginBottom: '0.5rem'
                        }}>3+</div>
                        <div style={{color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem'}}>Years Experience</div>
                      </div>
                    </Col>
                    <Col xs={6} className="mb-3">
                      <div style={{
                        background: 'rgba(0, 255, 255, 0.1)',
                        borderRadius: '15px',
                        padding: '1.5rem',
                        textAlign: 'center',
                        border: '1px solid rgba(0, 255, 255, 0.2)'
                      }}>
                        <div style={{
                          fontSize: '2rem',
                          fontWeight: '900',
                          background: 'linear-gradient(45deg, #00ffff, #ff6b6b)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          marginBottom: '0.5rem'
                        }}>24/7</div>
                        <div style={{color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem'}}>Support</div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Services;