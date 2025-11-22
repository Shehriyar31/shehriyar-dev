import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TooltipWrapper from './TooltipWrapper';
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
            <TooltipWrapper text="Go to Homepage" placement="bottom">
              <Navbar.Brand as={Link} to="/">
                <img src={logo} alt="ShehriyarDev" className="logo-img" />
                ShehriyarDev
              </Navbar.Brand>
            </TooltipWrapper>
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
                <TooltipWrapper text="Navigate to Home Page" placement="bottom">
                  <Nav.Link 
                    as={Link}
                    to="/"
                    className={location.pathname === '/' ? 'active' : ''}
                  >
                    Home
                  </Nav.Link>
                </TooltipWrapper>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <TooltipWrapper text="Learn About Me" placement="bottom">
                  <Nav.Link 
                    as={Link}
                    to="/about"
                    className={location.pathname === '/about' ? 'active' : ''}
                  >
                    About
                  </Nav.Link>
                </TooltipWrapper>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <TooltipWrapper text="View My Services" placement="bottom">
                  <Nav.Link 
                    as={Link}
                    to="/services"
                    className={location.pathname === '/services' ? 'active' : ''}
                  >
                    Services
                  </Nav.Link>
                </TooltipWrapper>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <TooltipWrapper text="Check My Work" placement="bottom">
                  <Nav.Link 
                    as={Link}
                    to="/portfolio"
                    className={location.pathname === '/portfolio' ? 'active' : ''}
                  >
                    Portfolio
                  </Nav.Link>
                </TooltipWrapper>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <TooltipWrapper text="Explore Courses" placement="bottom">
                  <Nav.Link 
                    as={Link}
                    to="/courses"
                    className={location.pathname === '/courses' ? 'active' : ''}
                  >
                    Courses
                  </Nav.Link>
                </TooltipWrapper>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <TooltipWrapper text="Get In Touch" placement="bottom">
                  <Nav.Link 
                    as={Link}
                    to="/contact"
                    className={location.pathname === '/contact' ? 'active' : ''}
                  >
                    Contact
                  </Nav.Link>
                </TooltipWrapper>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default Header;