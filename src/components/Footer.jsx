import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/SirYenoz" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/siryenoz" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/SirYenoz" target="_blank" rel="noopener noreferrer" title="Twitter">
          <FaTwitter />
        </a>
      </div>
      <p>&copy; 2024 Sir Yenoz. All rights reserved.</p>
      <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>YANG BACA ORANG PINTAR</p>
    </footer>
  );
};

export default Footer;
