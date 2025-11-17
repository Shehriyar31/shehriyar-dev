import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('home');
  
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Navbar expand="lg" fixed="top" className="navbar-custom">
        <Container>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Navbar.Brand as={Link} to="/">
              <img src={logo} alt="ShehriyarDev" className="logo-img" />
              ShehriyarDev
            </Navbar.Brand>
          </motion.div>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Nav.Link 
                  as={Link}
                  to="/"
                  className={location.pathname === '/' ? 'active' : ''}
                >
                  Home
                </Nav.Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Nav.Link 
                  as={Link}
                  to="/about"
                  className={location.pathname === '/about' ? 'active' : ''}
                >
                  About
                </Nav.Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Nav.Link 
                  as={Link}
                  to="/services"
                  className={location.pathname === '/services' ? 'active' : ''}
                >
                  Services
                </Nav.Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Nav.Link 
                  as={Link}
                  to="/portfolio"
                  className={location.pathname === '/portfolio' ? 'active' : ''}
                >
                  Portfolio
                </Nav.Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Nav.Link 
                  as={Link}
                  to="/courses"
                  className={location.pathname === '/courses' ? 'active' : ''}
                >
                  Courses
                </Nav.Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Nav.Link 
                  as={Link}
                  to="/contact"
                  className={location.pathname === '/contact' ? 'active' : ''}
                >
                  Contact
                </Nav.Link>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default Header;