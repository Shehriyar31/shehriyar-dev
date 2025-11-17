import { useEffect } from 'react';

function ParticleBackground() {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
      particle.style.opacity = Math.random();
      
      const particlesContainer = document.querySelector('.particles');
      if (particlesContainer) {
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
          particle.remove();
        }, 5000);
      }
    };

    const interval = setInterval(createParticle, 300);
    
    return () => clearInterval(interval);
  }, []);

  return <div className="particles"></div>;
}

export default ParticleBackground;