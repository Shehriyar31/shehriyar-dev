import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      icon: "bi bi-code-slash",
      title: "MERN Stack Development",
      description: "Complete full-stack applications using MongoDB, Express.js, React.js, and Node.js with modern architecture.",
    },
    {
      icon: "bi bi-palette",
      title: "Graphics Design",
      description: "Creative visual designs, logos, branding materials, and digital graphics for web and print media.",
    },
    {
      icon: "bi bi-wordpress",
      title: "WordPress Development",
      description: "Custom WordPress websites, themes, plugins, and e-commerce solutions with responsive design.",
    },
    {
      icon: "bi bi-file-earmark-excel",
      title: "MS Office Management",
      description: "Advanced Excel, Word, PowerPoint solutions, data analysis, automation, and document management.",
    },
    {
      icon: "bi bi-facebook",
      title: "Facebook Ads Management",
      description: "Strategic Facebook advertising campaigns, audience targeting, ad optimization, and ROI maximization.",
    },
    {
      icon: "bi bi-phone",
      title: "Responsive Web Design",
      description: "Mobile-first responsive websites that work perfectly across all devices and screen sizes.",
    },
  ];

  return (
    <section className="section" id="services">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="section-title">
            <i className="bi bi-briefcase me-3"></i>My Professional Services
          </h2>
          <p className="lead" style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem'}}>
            Comprehensive digital services from web development to marketing and business solutions
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
                  <p className="service-description">{service.description}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;