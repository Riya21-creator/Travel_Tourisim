import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="subtitle">Your journey begins with trust, comfort, and great experiences.</p>

      <div className="about-box">
        <h2>Who We Are</h2>
        <p>
          Welcome to our Travel & Tourism platform! We are a team of passionate explorers
          helping travelers discover beautiful destinations with comfort and joy.
        </p>
      </div>

      <div className="about-box">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature-card">✨ Affordable Travel Packages</div>
          <div className="feature-card">🌍 Customized Travel Plans</div>
          <div className="feature-card">🛫 24/7 Travel Assistance</div>
        </div>
      </div>
    </div>
  );
}

export default About;
