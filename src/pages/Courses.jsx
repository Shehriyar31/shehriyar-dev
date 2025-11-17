import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function Courses() {
  const courses = [
    {
      icon: "bi bi-code-slash",
      title: "Frontend Development",
      description: "Master modern frontend technologies including HTML5, CSS3, JavaScript ES6+, React.js, and responsive design principles.",
      duration: "3-4 Months",
      level: "Beginner to Advanced",
      topics: ["HTML5 & CSS3", "JavaScript ES6+", "React.js", "Bootstrap", "Responsive Design", "Git & GitHub"],
      price: "Contact for Pricing"
    },
    {
      icon: "bi bi-layers",
      title: "Full Stack Development",
      description: "Complete MERN Stack development course covering MongoDB, Express.js, React.js, and Node.js with real-world projects.",
      duration: "6-8 Months",
      level: "Intermediate to Advanced",
      topics: ["MongoDB", "Express.js", "React.js", "Node.js", "RESTful APIs", "Authentication", "Deployment"],
      price: "Contact for Pricing"
    },
    {
      icon: "bi bi-palette",
      title: "Graphics Designing",
      description: "Professional graphics design course covering Adobe Photoshop, Illustrator, CorelDraw, and design principles.",
      duration: "2-3 Months",
      level: "Beginner to Advanced",
      topics: ["Adobe Photoshop", "Adobe Illustrator", "CorelDraw", "Logo Design", "Brand Identity", "Print Design"],
      price: "Contact for Pricing"
    },
    {
      icon: "bi bi-file-earmark-excel",
      title: "MS Office Management",
      description: "Advanced Microsoft Office suite training including Excel, Word, PowerPoint with automation and data analysis.",
      duration: "1-2 Months",
      level: "Beginner to Advanced",
      topics: ["Excel Advanced", "Word Professional", "PowerPoint Design", "Data Analysis", "Macros", "Templates"],
      price: "Contact for Pricing"
    },
    {
      icon: "bi bi-wordpress",
      title: "WordPress Development",
      description: "Complete WordPress development course from basics to advanced custom theme and plugin development.",
      duration: "2-3 Months",
      level: "Beginner to Advanced",
      topics: ["WordPress Basics", "Custom Themes", "Plugin Development", "E-commerce", "SEO", "Security"],
      price: "Contact for Pricing"
    },
    {
      icon: "bi bi-facebook",
      title: "Facebook Ads Management",
      description: "Master Facebook advertising with campaign creation, audience targeting, optimization, and ROI maximization strategies.",
      duration: "1-2 Months",
      level: "Beginner to Advanced",
      topics: ["Campaign Setup", "Audience Targeting", "Ad Creation", "Analytics", "Optimization", "ROI Tracking"],
      price: "Contact for Pricing"
    }
  ];

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section" id="courses">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="text-center text-lg-start">
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                Professional Courses
              </motion.h1>
              
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Learn from industry expert with 3+ years of experience. Get hands-on training in the most in-demand technologies and skills to boost your career in tech industry.
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
                      <i className="bi bi-telephone me-2"></i> Enroll Now
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
                      <i className="bi bi-chat-dots me-2"></i> Get Info
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
                      alt="Courses" 
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
                      <i className="bi bi-mortarboard me-2"></i>Learn & Grow
                    </h5>
                  </div>
                  <div className="code-snippet">
                    <div>&lt;div className="courses"&gt;</div>
                    <div style={{marginLeft: '20px', color: '#ff6b6b'}}>
                      <i className="bi bi-star-fill"></i> 6 Professional Courses <i className="bi bi-star-fill"></i>
                    </div>
                    <div>&lt;/div&gt;</div>
                  </div>
                  <div className="mt-3 text-center">
                    <small style={{color: 'rgba(255,255,255,0.7)'}}>
                      <i className="bi bi-award"></i> Industry Expert Training
                    </small>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Courses Grid Section */}
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
              <i className="bi bi-book me-3"></i>Available Courses
            </h2>
            <p className="lead" style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem'}}>
              Choose from our comprehensive range of professional courses
            </p>
          </motion.div>
          
          <Row>
            {courses.map((course, index) => (
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
                      <i className={course.icon}></i>
                    </motion.div>
                    <h3 className="service-title">{course.title}</h3>
                    <p className="service-description mb-3">{course.description}</p>
                    
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-2">
                        <span style={{color: '#00ffff', fontWeight: '600'}}>Duration:</span>
                        <span style={{color: 'rgba(255,255,255,0.8)'}}>{course.duration}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <span style={{color: '#00ffff', fontWeight: '600'}}>Level:</span>
                        <span style={{color: 'rgba(255,255,255,0.8)'}}>{course.level}</span>
                      </div>
                    </div>
                    
                    <div className="text-start mb-4">
                      <h6 style={{color: '#00ffff', marginBottom: '1rem'}}>
                        <i className="bi bi-check-square me-2"></i>What You'll Learn:
                      </h6>
                      <ul style={{color: 'rgba(255,255,255,0.8)', listStyle: 'none', padding: 0}}>
                        {course.topics.map((topic, idx) => (
                          <li key={idx} className="mb-2">
                            <i className="bi bi-arrow-right-circle me-2" style={{color: '#00ffff'}}></i>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-center mt-auto">
                      <div className="mb-3">
                        <span style={{
                          background: 'linear-gradient(45deg, #00ffff, #ff6b6b)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          fontSize: '1.2rem',
                          fontWeight: '700'
                        }}>
                          {course.price}
                        </span>
                      </div>
                      <Link to="/contact">
                        <Button className="btn-hero w-100">
                          <i className="bi bi-mortarboard me-2"></i>Enroll Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Our Courses Section */}
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
                  <i className="bi bi-trophy me-3"></i>Why Choose Our Courses?
                </h2>
                
                <div className="mb-4">
                  <h5 style={{color: '#00ffff', marginBottom: '1rem'}}>
                    <i className="bi bi-person-check me-2"></i>Expert Instructor
                  </h5>
                  <p style={{color: 'rgba(255,255,255,0.8)'}}>
                    Learn from industry professional with 3+ years of real-world experience and proven track record.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h5 style={{color: '#00ffff', marginBottom: '1rem'}}>
                    <i className="bi bi-laptop me-2"></i>Hands-on Projects
                  </h5>
                  <p style={{color: 'rgba(255,255,255,0.8)'}}>
                    Build real-world projects and create a professional portfolio to showcase your skills to employers.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h5 style={{color: '#00ffff', marginBottom: '1rem'}}>
                    <i className="bi bi-headset me-2"></i>Lifetime Support
                  </h5>
                  <p style={{color: 'rgba(255,255,255,0.8)'}}>
                    Get continuous support even after course completion. Ask questions anytime and get career guidance.
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
                    <i className="bi bi-graph-up me-2"></i>Course Benefits
                  </h4>
                  
                  <Row>
                    <Col xs={6} className="mb-3">
                      <div className="stat-box">
                        <div className="stat-number">100%</div>
                        <div className="stat-label">Practical</div>
                      </div>
                    </Col>
                    <Col xs={6} className="mb-3">
                      <div className="stat-box">
                        <div className="stat-number">24/7</div>
                        <div className="stat-label">Support</div>
                      </div>
                    </Col>
                    <Col xs={6} className="mb-3">
                      <div className="stat-box">
                        <div className="stat-number">Live</div>
                        <div className="stat-label">Projects</div>
                      </div>
                    </Col>
                    <Col xs={6} className="mb-3">
                      <div className="stat-box">
                        <div className="stat-number">Career</div>
                        <div className="stat-label">Guidance</div>
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

export default Courses;