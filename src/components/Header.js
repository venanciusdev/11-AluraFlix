import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">VideoPlatform</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#movies">Movies</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;