import React from 'react';
import './Contact.css';

const Contact = () => {
  // These functions stop the page from refreshing when a user clicks submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! The NutriSip team will get back to you soon.");
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Awesome! You're now subscribed to our fresh updates.");
  };

  return (
    <div className="contact-page">
      
      {/* Contact Banner */}
      <div className="contact-banner">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Drop us a line or subscribe to our weekly juice drops!</p>
      </div>

      <div className="contact-container">
        
        {/* Left Side: Info & Newsletter */}
        <div className="contact-info-section">
          <div className="info-card">
            <h3>Our Store</h3>
            <p>Malipara , Lane 1</p>
            <p>Sambalpur, Odisha</p>
            <p><strong>Phone:</strong> +91 89178 17171</p>
            <p><strong>Email:</strong> hello@nutrisip.com</p>
          </div>

          <div className="newsletter-card">
            <h3>Join the NutriSip Club</h3>
            <p>Subscribe to get 10% off your first order and weekly health tips!</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form-section">
          <h2>Send us a Message</h2>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            
            <div className="input-group">
              <label>Your Message</label>
              <textarea rows="5" placeholder="How can we help you today?" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;