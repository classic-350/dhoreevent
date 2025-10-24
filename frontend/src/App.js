import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">
          <h2>DHORE EVENTS</h2>
          <p>Precision Planning, Perfect Events</p>
        </div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Get Quote</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Creating Unforgettable <span className="highlight">Moments</span></h1>
          <p>Premium event management and decoration services since 2018</p>
          <p>Over 500+ successful events • Corporate • Weddings • Celebrations</p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Free Quote</button>
            <button className="btn-secondary">WhatsApp Us</button>
          </div>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <p>Comprehensive event management solutions for every occasion</p>
        <div className="service-stats">
          <div className="stat">
            <span className="icon">✅</span>
            <span>500+ Events Completed</span>
          </div>
          <div className="stat">
            <span className="icon">🎯</span>
            <span>6+ Years Experience</span>
          </div>
          <div className="stat">
            <span className="icon">💯</span>
            <span>100% Client Satisfaction</span>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <h2>Our Portfolio</h2>
        <p>Showcasing our expertise across diverse events</p>
        <div className="portfolio-note">
          <p>🎨 Beautiful event galleries and testimonials coming soon!</p>
        </div>
      </section>
    </div>
  );
}

export default App;
