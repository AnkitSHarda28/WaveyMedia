import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to Wavey Media</h1>
        <p>Your bridge to the world's top influencers.</p>
        <a href="#contact" className="cta-button">Get Started</a>
      </div>
    </section>
  );
}

export default Hero;
