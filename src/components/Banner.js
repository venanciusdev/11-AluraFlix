import React from 'react';
import './Banner.css';

const Banner = ({ title, description, image }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Banner;
