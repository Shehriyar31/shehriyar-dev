import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Technologies() {
  const technologies = [
    { name: "HTML", icon: "bi bi-filetype-html" },
    { name: "CSS", icon: "bi bi-filetype-css" },
    { name: "JavaScript", icon: "bi bi-file-code" },
    { name: "MongoDB", icon: "bi bi-database" },
    { name: "Express.js", icon: "bi bi-server" },
    { name: "React.js", icon: "bi bi-code-slash" },
    { name: "Node.js", icon: "bi bi-terminal" },
    { name: "WordPress", icon: "bi bi-wordpress" },
    { name: "Photoshop", icon: "bi bi-palette" },
    { name: "Illustrator", icon: "bi bi-brush" },
    { name: "CorelDraw", icon: "bi bi-vector-pen" },
    { name: "Facebook Ads", icon: "bi bi-facebook" },
    { name: "MS Excel", icon: "bi bi-file-earmark-excel" },
    { name: "MS Word", icon: "bi bi-file-earmark-word" },
    { name: "PowerPoint", icon: "bi bi-file-earmark-ppt" },
    { name: "Bootstrap", icon: "bi bi-bootstrap" },
  ];

  return (
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
            <i className="bi bi-tools me-3"></i>My Skills & Tools
          </h2>
          <p className="lead" style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem'}}>
            Development, design, marketing, and productivity tools I master for comprehensive digital solutions
          </p>
        </motion.div>
        
        <Row>
          {technologies.map((tech, index) => (
            <Col lg={2} md={3} sm={4} xs={6} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.15,
                  rotateY: 15,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="tech-card">
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    style={{ fontSize: '2rem', marginBottom: '0.5rem' }}
                  >
                    <i className={tech.icon}></i>
                  </motion.div>
                  <p className="tech-name">{tech.name}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Technologies;