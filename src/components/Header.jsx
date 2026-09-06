import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <a href="#home" className="logo">Sir Yenoz</a>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
