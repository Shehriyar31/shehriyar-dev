import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';

function Preloader() {
  return (
    <motion.div 
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="preloader-content">
        <motion.div
          className="preloader-logo"
          initial={{ scale: 0.5, rotate: 0 }}
          animate={{ 
            scale: [0.5, 1.2, 1],
            rotate: [0, 360, 720]
          }}
          transition={{ 
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5
          }}
        >
          <img src={logo} alt="Loading..." />
        </motion.div>
        
        <motion.h2
          className="preloader-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          ShehriyarDev
        </motion.h2>
        
        <motion.div
          className="preloader-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Loading Portfolio...
        </motion.div>
        
        <motion.div 
          className="preloader-bar"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
        >
          <div className="preloader-progress"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Preloader;