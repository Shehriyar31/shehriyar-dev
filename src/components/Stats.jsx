import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { useRef } from 'react';

function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const stats = [
    { number: 50, suffix: "+", label: "Projects Completed", icon: "bi bi-check-circle" },
    { number: 30, suffix: "+", label: "Happy Clients", icon: "bi bi-emoji-smile" },
    { number: 3, suffix: "+", label: "Years Experience", icon: "bi bi-calendar" },
    { number: 100, suffix: "%", label: "Client Satisfaction", icon: "bi bi-award" },
  ];

  return (
    <section className="section" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="section-title">
            <i className="bi bi-trophy me-3"></i>My Achievements
          </h2>
        </motion.div>
        
        <Row>
          {stats.map((stat, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="stats-card">
                  <motion.div 
                    className="stats-icon"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className={stat.icon}></i>
                  </motion.div>
                  <motion.div 
                    className="stats-number"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {isInView && (
                      <CountUp
                        start={0}
                        end={stat.number}
                        duration={2.5}
                        delay={0.5 + index * 0.2}
                        suffix={stat.suffix}
                      />
                    )}
                  </motion.div>
                  <p className="stats-label">{stat.label}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Stats;