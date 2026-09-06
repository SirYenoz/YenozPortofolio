import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div>
        <h1>Hi, I'm Sir Yenoz 👋</h1>
        <p>Be careful</p>
        <p style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '2rem' }}>
          Full-stack developer passionate about building beautiful and functional web applications
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
        <div className="social-links" style={{ marginTop: '3rem' }}>
          <a href="https://github.com/SirYenoz" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/siryenoz" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
