import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import project1 from '../assets/1.png';
import project2 from '../assets/2.png';
import project3 from '../assets/3.png';
import project4 from '../assets/4.png';
import project5 from '../assets/5.png';
import project6 from '../assets/6.png';
import project7 from '../assets/7.png';



function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Social Media Downloader",
      description: "A powerful web application for downloading videos from various social media platforms. Built with React, Vite, and Bootstrap for fast and responsive user experience.",
      image: project1,
      technologies: ["React", "Vite", "Bootstrap", "JavaScript"],
      category: "Frontend",
      liveUrl: "https://sm-d-tau.vercel.app/",
      githubUrl: "https://github.com/Shehriyar31/sm-d"
    },
    {
      id: 2,
      title: "Weather App",
      description: "Weather forecasting application with location-based services and beautiful UI. Get real-time weather data for any city worldwide.",
      image: project2,
      technologies: ["React", "API Integration", "Bootstrap"],
      category: "Frontend",
      liveUrl: "https://w-app-eosin.vercel.app/",
      githubUrl: "https://github.com/Shehriyar31/w-app"
    },
    {
      id: 3,
      title: "Todo List App",
      description: "A clean and intuitive task management application for organizing daily activities. Features include add, edit, delete tasks with local storage persistence.",
      image: project3,
      technologies: ["React", "Bootstrap"],
      category: "Frontend",
      liveUrl: "https://w-app-1v5q.vercel.app/",
      githubUrl: "https://github.com/Shehriyar31/to-li"
    },
    {
      id: 4,
      title: "Password Manager",
      description: "Secure password management application for storing and organizing login credentials. Features include password generation, encryption, and easy access to saved passwords.",
      image: project4,
      technologies: ["React", "Bootstrap"],
      category: "Frontend",
      liveUrl: "https://password-manager-jade-nine.vercel.app/",
      githubUrl: "https://github.com/Shehriyar31/password-manager"
    },
    {
      id: 5,
      title: "Mind Exchange",
      description: "Business advertisement platform showcasing various exchange services and business opportunities. A modern marketplace for connecting businesses and service providers.",
      image: project5,
      technologies: ["MongoDB", "Express", "React", "Node.js", "Bootstrap"],
      category: "Full Stack",
      liveUrl: "https://miindexchange-latest.vercel.app/",
      githubUrl: "https://github.com/Shehriyar31/miindexchange-latest"
    },
    {
      id: 6,
      title: "Facebook Video Downloader",
      description: "A powerful video downloader application for Facebook videos. Features include high-quality video downloads, multiple format support, and user-friendly interface.",
      image: project6,
      technologies: ["React", "Vite", "Bootstrap", "API Integration"],
      category: "Frontend",
      liveUrl: "https://yt-eta-three.vercel.app/",
      githubUrl: "https://github.com/Shehriyar31/yt"
    },
    {
      id: 7,
      title: "HTML to Image Converter",
      description: "A versatile tool for converting HTML code into high-quality images. Features include custom styling, multiple format support, and real-time preview functionality.",
      image: project7,
      technologies: ["React", "Vite", "Bootstrap", "API Integration"],
      category: "Frontend",
      liveUrl: "https://htmltoimg-phi.vercel.app/",
      githubUrl: "https://github.com/Shehriyar31/htmltoimg"
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
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
                My Portfolio
              </motion.h1>
              
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Explore my collection of web development projects built with modern technologies. Each project showcases different aspects of full-stack development, from responsive frontends to robust backend systems.
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
                      <i className="bi bi-download me-2"></i> Download CV
                    </Button>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="d-inline-block mb-3"
                >
                  <Button 
                    className="btn-outline-hero" 
                    size="lg"
                    onClick={() => window.open('https://github.com/Shehriyar31', '_blank')}
                  >
                    <i className="bi bi-github me-2"></i> View GitHub
                  </Button>
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
                      alt="Portfolio" 
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
                      <i className="bi bi-collection me-2"></i>Project Showcase
                    </h5>
                  </div>
                  <div className="code-snippet">
                    <div>&lt;div className="portfolio"&gt;</div>
                    <div style={{marginLeft: '20px', color: '#ff6b6b'}}>
                      <i className="bi bi-star-fill"></i> 7 Amazing Projects <i className="bi bi-star-fill"></i>
                    </div>
                    <div>&lt;/div&gt;</div>
                  </div>
                  <div className="mt-3 text-center">
                    <small style={{color: 'rgba(255,255,255,0.7)'}}>
                      <i className="bi bi-code-slash"></i> Built with MERN Stack
                    </small>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Portfolio Grid Section */}
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
              <i className="bi bi-grid-3x3-gap me-3"></i>Featured Projects
            </h2>
            <p className="lead" style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem'}}>
              A showcase of my best work in web development
            </p>
          </motion.div>
          
          <Row>
            {projects.map((project, index) => (
              <Col lg={4} md={6} key={project.id} className="mb-4">
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
                  <div 
                    className="portfolio-card h-100"
                    onClick={() => handleProjectClick(project)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="portfolio-image">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover',
                          borderRadius: '15px 15px 0 0'
                        }}
                      />
                      <div className="portfolio-overlay">
                        <i className="bi bi-eye" style={{ fontSize: '2rem', color: '#00ffff' }}></i>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span className="portfolio-category">{project.category}</span>
                      <h3 className="portfolio-title">{project.title}</h3>
                      <p className="portfolio-description">{project.description}</p>
                      <div className="portfolio-tech">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
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
                  <i className="bi bi-tools me-3"></i>Technical Skills
                </h2>
                
                <div className="skill-item mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{color: '#00ffff', fontWeight: '600'}}>React.js</span>
                    <span style={{color: 'rgba(255,255,255,0.8)'}}>95%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>

                <div className="skill-item mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{color: '#00ffff', fontWeight: '600'}}>Node.js</span>
                    <span style={{color: 'rgba(255,255,255,0.8)'}}>90%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      transition={{ duration: 1.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>

                <div className="skill-item mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{color: '#00ffff', fontWeight: '600'}}>MongoDB</span>
                    <span style={{color: 'rgba(255,255,255,0.8)'}}>85%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ duration: 1.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>

                <div className="skill-item mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{color: '#00ffff', fontWeight: '600'}}>Bootstrap</span>
                    <span style={{color: 'rgba(255,255,255,0.8)'}}>98%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: '98%' }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
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
                    <i className="bi bi-trophy me-2"></i>Project Statistics
                  </h4>
                  
                  <Row>
                    <Col xs={6} className="mb-3">
                      <div className="stat-box">
                        <div className="stat-number">7</div>
                        <div className="stat-label">Projects</div>
                      </div>
                    </Col>
                    <Col xs={6} className="mb-3">
                      <div className="stat-box">
                        <div className="stat-number">100%</div>
                        <div className="stat-label">Success Rate</div>
                      </div>
                    </Col>
                    <Col xs={6} className="mb-3">
                      <div className="stat-box">
                        <div className="stat-number">6</div>
                        <div className="stat-label">Technologies</div>
                      </div>
                    </Col>
                    <Col xs={6} className="mb-3">
                      <div className="stat-box">
                        <div className="stat-number">3+</div>
                        <div className="stat-label">Years Exp</div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton style={{ background: 'rgba(15, 15, 35, 0.9)', border: 'none' }}>
          <Modal.Title style={{ color: '#00ffff' }}>
            {selectedProject?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: 'rgba(15, 15, 35, 0.9)', color: '#fff' }}>
          {selectedProject && (
            <>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem' }}
              />
              <p>{selectedProject.description}</p>
              <div className="mb-3">
                <h6 style={{ color: '#00ffff' }}>Technologies Used:</h6>
                <div>
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag me-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer style={{ background: 'rgba(15, 15, 35, 0.9)', border: 'none' }}>
          {selectedProject?.githubUrl && (
            <Button 
              className="btn-hero"
              onClick={() => window.open(selectedProject.githubUrl, '_blank')}
            >
              <i className="bi bi-github me-2"></i>View Code
            </Button>
          )}
          {selectedProject?.liveUrl && (
            <Button 
              className="btn-outline-hero"
              onClick={() => window.open(selectedProject.liveUrl, '_blank')}
            >
              <i className="bi bi-box-arrow-up-right me-2"></i>Live Demo
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Portfolio;