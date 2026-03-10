import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={styles.title}>About NutriSip 🍊</h1>
        <p style={styles.subtitle}>Sip your way to a healthier you.</p>
      </div>

      {/* About Description */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Story</h2>
        <p style={styles.text}>
          Welcome to NutriSip, your ultimate destination for fresh, natural, and nutrient-packed fruit juices. 
          We believe that maintaining a healthy lifestyle shouldn't be a chore—it should be a refreshing experience. 
          Our mission is to make daily nutrition accessible, delicious, and completely free of artificial preservatives. 
          Whether you need a morning energy boost or a post-workout recovery drink, every sip of NutriSip is crafted 
          to fuel your body and mind.
        </p>
      </div>

      <hr style={styles.divider} />

      {/* Developers Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Meet the Team 💻</h2>
        <p style={styles.text}>The passionate minds blending technology and health together.</p>
        
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3 style={styles.devName}>Ayush Patel</h3>
            <p style={styles.devRole}>Full-Stack Developer</p>
            <p style={styles.devDesc}>Architecting the backend logic and bridging it seamlessly with dynamic frontend interfaces to keep NutriSip running smoothly.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.devName}>Kusum Sahu</h3>
            <p style={styles.devRole}>Frontend Developer</p>
            <p style={styles.devDesc}>Crafting beautiful, responsive, and intuitive user experiences that make navigating the NutriSip platform a breeze.</p>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div style={styles.techSection}>
        <h3 style={styles.techTitle}>Powered By</h3>
        <div style={styles.badgeContainer}>
          <span style={styles.badge}>⚛️ React</span>
          <span style={styles.badge}>🟨 JavaScript</span>
          <span style={styles.badge}>🎨 CSS</span>
        </div>
      </div>
    </div>
  );
};

// Styling Object for easy maintenance
const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#FF8C00", // A nice fresh orange color
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#666",
    fontStyle: "italic",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    color: "#2E8B57", // Sea green for a healthy vibe
    borderBottom: "2px solid #2E8B57",
    display: "inline-block",
    paddingBottom: "5px",
    marginBottom: "15px",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#444",
  },
  divider: {
    border: "0",
    height: "1px",
    background: "#ddd",
    margin: "40px 0",
  },
  cardContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
    flexWrap: "wrap", // Ensures it looks good on mobile
  },
  card: {
    flex: "1",
    minWidth: "250px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    border: "1px solid #eee",
  },
  devName: {
    fontSize: "1.4rem",
    margin: "0 0 5px 0",
    color: "#333",
  },
  devRole: {
    fontWeight: "bold",
    color: "#FF8C00",
    margin: "0 0 10px 0",
  },
  devDesc: {
    fontSize: "0.95rem",
    color: "#555",
    lineHeight: "1.5",
  },
  techSection: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#f1f8e9", // Very light green
    borderRadius: "8px",
  },
  techTitle: {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "15px",
  },
  badgeContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  badge: {
    backgroundColor: "#fff",
    padding: "8px 15px",
    borderRadius: "20px",
    fontSize: "0.9rem",
    fontWeight: "bold",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    border: "1px solid #ddd",
  }
};

export default About;