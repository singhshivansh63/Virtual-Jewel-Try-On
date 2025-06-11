// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h2 className="about-title">✨ About Virtual Try-On</h2>
        <p className="about-text">
          Step into the future of jewelry shopping with our cutting-edge <strong>Virtual Try-On</strong> feature. 
          Using advanced <strong>Augmented Reality (AR)</strong> technology, you can visualize how stunning pieces of 
          jewelry will look on you — all from the comfort of your home.
        </p>
        <p className="about-text">
          Our mission is to merge elegance with innovation, giving you a personalized, luxurious, and interactive 
          shopping experience like never before.
        </p>
        <p className="about-signature">💎 Explore. Try. Shine.</p>
      </div>
    </div>
  );
};

export default About;

