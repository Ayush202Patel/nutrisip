import React from 'react';
import './About.css'; // Ensure this file exists in the same directory

const About = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <div className="about-header">
        <h1 className="about-title">About NutriSip</h1>
        <p className="about-subtitle">Sip your way to a healthier you.</p>
      </div>

      {/* About Description */}
      <div className="about-section">
        <h2 className="about-section-title">Our Story</h2>
        <p className="about-text">
          Welcome to NutriSip, your ultimate destination for fresh, natural, and nutrient-packed fruit juices. 
          We believe that maintaining a healthy lifestyle shouldn't be a chore—it should be a refreshing experience. 
          Our mission is to make daily nutrition accessible, delicious, and completely free of artificial preservatives. 
          Whether you need a morning energy boost or a post-workout recovery drink, every sip of NutriSip is crafted 
          to fuel your body and mind.
        </p>
      </div>

      <hr className="about-divider" />

      {/* Developers Section */}
      <div className="about-section">
        <h2 className="about-section-title">Meet the Team</h2>
        <p className="about-text">The passionate minds blending technology and health together.</p>
        
        <div className="card-container">
          <div className="dev-card">
            <h3 className="dev-name">Ayush Patel</h3>
            <p className="dev-role">Full-Stack Developer</p>
            <p className="dev-desc">Architecting the backend logic and bridging it seamlessly with dynamic frontend interfaces to keep NutriSip running smoothly.</p>
          </div>

          <div className="dev-card">
            <h3 className="dev-name">Kusum Sahu</h3>
            <p className="dev-role">Frontend Developer</p>
            <p className="dev-desc">Crafting beautiful, responsive, and intuitive user experiences that make navigating the NutriSip platform a breeze.</p>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="tech-section">
        <h3 className="tech-title">Powered By</h3>
        <div className="badge-container">
          <span className="tech-badge">⚛️ React</span>
          <span className="tech-badge">🟨 JavaScript</span>
          <span className="tech-badge">🎨 CSS</span>
        </div>
      </div>
    </div>
  );
};

export default About;