import React from "react";
import "./Home.css"; // Import external CSS

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 id="title">welcome</h1>
      </div>

      {/* How It Works Section */}
      {/* <!-- HTML --> */}
<section class="how-it-works">
  <h2>How It Works</h2>
  <div class="timeline">
    <div class="step">
      <div class="icon">📤</div>
      <h3>Upload</h3>
      <p>Upload an image with a visible face.<br/>The system analyzes it for emotion.</p>
    </div>

    <div class="step">
      <div class="icon">📷</div>
      <h3>Live Detection</h3>
      <p>Enable webcam to detect emotions in real-time using AI.</p>
    </div>

    <div class="step">
      <div class="icon">🧠</div>
      <h3>Emotion Analysis</h3>
      <p>Our model detects faces & classifies emotions using DeepFace.</p>
    </div>

    <div class="step">
      <div class="icon">✅</div>
      <h3>Result</h3>
      <p>You get dominant emotion results with visual face highlights.</p>
    </div>
  </div>
</section>



<div className="section features-overview">
  <h2 className="features-heading">Features Overview</h2>
  <div className="features-cards">
    <div className="feature-card">
      <h3>About Us</h3>
      <p>Learn about our team and mission.</p>
    </div>
    <div className="feature-card">
      <h3>Emotion Detector</h3>
      <p>Upload an image or use the webcam to analyze emotions.</p>
    </div>
    <div className="feature-card">
      <h3>Dashboard</h3>
      <p>Track past emotion detections with analytics.</p>
    </div>
    <div className="feature-card">
      <h3>User Profile</h3>
      <p>Save your emotion data and customize settings.</p>
    </div>
  </div>
</div>
<div className="unique-section">
  <h2>What Makes Us Unique</h2>
  <div className="unique-timeline">
    <div className="timeline-item">
      <div className="dot" />
      <div className="content">
        <h3>Real-Time Emotion Detection</h3>
        <p>Instantly detects facial emotions through webcam using our deep learning model.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="dot" />
      <div className="content">
        <h3>Image Upload Analysis</h3>
        <p>Upload an image and get accurate emotion predictions in seconds.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="dot" />
      <div className="content">
        <h3>Emotion Analytics</h3>
        <p>Visualize your emotion history and insights with interactive charts and dashboards.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="dot" />
      <div className="content">
        <h3>Data Privacy</h3>
        <p>No voice/speaker tracking. Your image and emotion data stays secure and private.</p>
      </div>
    </div>
  </div>
</div>


      {/* Call to Action */}
      <div className="section call-to-action">
        <h2 id="start">Get Started Now!</h2>
        <div className="start2">
        <p>Sign up to access the full features of the Emotion Recognition System.</p>
        <button className="cta-button">Get Started</button>
        </div>
      </div>

      <div className="contact-split-section">
  {/* Left: Message & Info */}
  <div className="contact-left">
    <h1>Thank You,<br />We’re Glad You’re Here!</h1>
    <p>Have questions, suggestions, or feedback?</p>
    <p>Reach out to us at:</p>
    <a href="mailto:emotion@college.edu">emotion@college.edu</a>
    <p>Or give us a call: +91-98765-43210</p>

    {/* Social Links */}
    <div className="social-icons">
      <a href="#"><i className="fab fa-facebook-f"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
      <a href="#"><i className="fab fa-linkedin-in"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
    </div>

    {/* Map */}
    <div className="map">
      <iframe
        title="college-location"
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d213187.3060530934!2d73.9000814739253!3d18.554942026686092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc2c3b8ef685c23%3A0xe48a65d74dfeb2bb!2sDhole%20Patil%2C%20Survey%20No%201284%20College%20Road%20Near%20Eon%20IT%20Park%20Road%20Vitthal%20Nagar%2C%20Wagholi%2C%20Kharadi%2C%20Pune%2C%20Maharashtra%20412207!3m2!1d18.5550838!2d73.9615726!5e0!3m2!1sen!2sin!4v1744019547097!5m2!1sen!2sin"
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>

  {/* Right: Feedback Form */}
  <div className="contact-right">
    <h2>Send Us Feedback</h2>
    <form>
      <div className="form-row">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Work Email*" required />
      </div>
      <div className="form-row">
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="College / Organization" />
      </div>
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Submit Feedback</button>
    </form>
  </div>
</div>

      
    </div>
  );
};

export default Home;
