// import React from "react";
import React, { useState } from "react";
import "./Home.css"; // Import external CSS
import { Link } from "react-router-dom";
import ankita from '../assets/ankita.jpg';
import niki from '../assets/niki.jpg';
import rutuja from '../assets/rutuja.jpg';
import sneha from '../assets/sneha.jpg';
import grp1 from '../assets/grp1.jpg';
import grp2 from '../assets/grp2.jpg';
import ankita1 from '../assets/team/ankita1.jpg'
import nikita1 from '../assets/team/nikita1.jpeg'
import rutuja1 from '../assets/team/rutuja1.jpeg'
// import ankita1 from '../assets/team/ankita1.jpg'


const Home = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image click
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);  // Set the clicked image as the selected image
  };

  // Function to handle close click
  const handleCloseClick = () => {
    setSelectedImage(null);  // Reset the selected image when closed
  };
  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [ankita, niki, rutuja, sneha, grp1, grp2];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
  <div className="hero-content">
  <h1 className="sigmar-regular">Discover the Power of Your Emotions</h1>
<p className="hero-subtitle">
   Ready to find out how you’re feeling today? Our emotion detection system uses AI to reveal your emotional state in real-time — and shows how this tech is revolutionizing NGO work and mental health support.
</p>
<ul className="hero-features">
  <li>🎥 Live Webcam Detection</li>
  <li>🧠 Real-Time Mood Insights</li>
  <li>🌍 Support NGOs and Mental Health Initiatives</li>
</ul>
<Link to="/detect" className="hero-button">Try It Now & See Your Mood!</Link>


  </div>
</div>

<section className="how-it-works" id="how-it-works">
  <h2>How It Works for NGOs</h2>
  <div className="timeline">
    <div className="step">
      <div className="icon">🎥</div>
      <h3>Real-Time Detection</h3>
      <p>Enable webcam or upload images to detect emotional distress, such as signs of depression, anxiety, or sadness.</p>
    </div>
    <div className="step">
      <div className="icon">📊</div>
      <h3>Track Emotional Health</h3>
      <p>Track changes in emotional well-being over time, helping NGOs provide personalized support.</p>
    </div>
    <div className="step">
      <div className="icon">📈</div>
      <h3>Data-Driven Insights</h3>
      <p>Use collected data to generate insights that help NGOs identify at-risk individuals and adapt their support programs.</p>
    </div>
  </div>
</section>

<div className="section features-overview" id="features">
  <h2 className="features-heading">Features Overview for NGOs</h2>
  <div className="features-cards">
    <div className="feature-card">
      <i className="fas fa-heartbeat fa-2x feature-icon"></i>
      <h3>Depression Detection</h3>
      <p>Detect early signs of emotional distress like sadness or hopelessness—critical for NGOs to intervene early.</p>
    </div>
    <div className="feature-card">
      <i className="fas fa-users fa-2x feature-icon"></i>
      <h3>Remote Monitoring</h3>
      <p>Monitor emotional well-being remotely, especially in rural or underserved areas where mental health resources are limited.</p>
    </div>
    <div className="feature-card">
      <i className="fas fa-bell fa-2x feature-icon"></i>
      <h3>Instant Alerts</h3>
      <p>Receive real-time alerts when emotional distress is detected, helping NGOs act quickly in times of need.</p>
    </div>
  </div>
</div>

{/* Detection Results Section */}
<div className="detection-results-section" id="Results">
        <h2 className="section-title">Recent Emotion Detection Results</h2>
        <div className="detection-gallery">
          <img src={ankita} alt="Detection 1" onClick={() => handleImageClick(ankita)} />
          <img src={niki} alt="Detection 2" onClick={() => handleImageClick(niki)} />
          <img src={rutuja} alt="Detection 3" onClick={() => handleImageClick(rutuja)} />
          <img src={sneha} alt="Detection 4" onClick={() => handleImageClick(sneha)} />
          <img src={grp1} alt="Detection 5" onClick={() => handleImageClick(grp1)} />
          <img src={grp2} alt="Detection 6" onClick={() => handleImageClick(grp2)} />
        </div>
      </div>

      {/* Modal for showing enlarged image */}
      {selectedImage && (
        <div className="image-modal">
          <button className="close-button" onClick={handleCloseClick}>×</button>
          <img src={selectedImage} alt="Enlarged" className="enlarged-image" />
        </div>
      )}



{/* Case Studies Section */}
<div className="section case-studies-section" id="case-studies">
  <h2 className="features-heading">Case Studies: Real-World Impact</h2>
  <div className="features-cards case-studies-cards">
    
    {/* PsyPost */}
    <div className="case-study-card">
      <div className="card-inner">
        <div className="card-front">
          {/* <img src="psyPost-image.jpg" alt="PsyPost Case Study" className="case-study-image" /> */}
          <img
    src="data:image/jpeg;base64,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"
    alt="PsyPost Logo"
    className="case-study-logo"
  />
          <h3>PsyPost - Supporting Therapists</h3>
        </div>
        <div className="card-back">
          <p>
            PsyPost is using emotion AI to help therapists understand their patients' emotional well-being. By analyzing real-time emotional cues, therapists can adjust their approach and provide better care for individuals with anxiety and depression.
          </p>
          {/* <Link to="/case-study/psyPost" className="read-more-button">Read More</Link> */}
          <a 
        href="https://www.psypost.org/decoding-lies-with-ai-new-machine-learning-model-uses-facial-expressions-and-pulse-rates-to-detect-deception/" 
        className="read-more-button" 
        target="_blank" 
        rel="noreferrer"
      >
        Read More
      </a>
        </div>
      </div>
    </div>

    {/* Woebot */}
    <div className="case-study-card">
      <div className="card-inner">
        <div className="card-front">
          {/* <img src="woebot-image.jpg" alt="Woebot Health Case Study" className="case-study-image" /> */}
          <img
    src="data:image/png;base64,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"
    alt="woebot Logo"
    className="case-study-logo"
  />
          <h3>Woebot - Student Support</h3>
        </div>
        <div className="card-back">
          <p>
            Woebot Health uses AI-driven emotion detection to help students monitor their emotional well-being. This technology is helping schools provide emotional support, even when students are reluctant to ask for help.
          </p>
          <a 
        href="https://redresscompliance.com/ai-case-study-woebot-ai-for-mental-health-support/" 
        className="read-more-button" 
        target="_blank" 
        rel="noreferrer"
      >
        Read More
      </a>
          {/* <Link to="/case-study/woebot" className="read-more-button">Read More</Link> */}
        </div>
      </div>
    </div>

    {/* Mindstrong */}
    <div className="case-study-card">
      <div className="card-inner">
        <div className="card-front">
          {/* <img src="mindstrong-image.jpg" alt="Mindstrong Health Case Study" className="case-study-image" /> */}
          <img
    src="data:image/png;base64,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"
    alt="mindstrong Logo"
    className="case-study-logo"
  />
          <h3>Mindstrong - Mental Tracking</h3>
        </div>
        <div className="card-back">
          <p>
            Mindstrong Health utilizes emotion tracking via smartphones to monitor the mental health of people living with depression and anxiety. Their technology provides users with real-time emotional feedback and enables them to track improvements over time.
          </p>
          <a 
        href="https://d3.harvard.edu/platform-rctom/submission/mindstrong-an-application-of-ai-in-wellness/?utm_source=chatgpt.com" 
        className="read-more-button" 
        target="_blank" 
        rel="noreferrer"
      >
        Read More
      </a>
          {/* <Link to="/case-study/mindstrong" className="read-more-button">Read More</Link> */}
        </div>
      </div>
    </div>

  </div>
</div>

<div className="team-section">
  <h2>🎓 Meet the Team</h2>
  <div className="team-cards-container">
    {[
      {
        name: "Ankita Gursali",
        role: "Frontend Developer",
        image: ankita1,
        linkedin: "https://www.linkedin.com/in/ankita-g-947943229/",
      },
      {
        name: "Nikita Kedare",
        role: "Backend Developer",
        image: nikita1,
        linkedin: "https://www.linkedin.com/in/nikita-kedare-6389622b9/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
      },
      {
        name: "Rutuja Dange",
        role: "ML Specialist",
        image: rutuja1,
        linkedin: "https://www.linkedin.com/in/rutuja-dange-33b72128b/?originalSubdomain=in",
      },
      {
        name: "Sneha Taru",
        role: "UI/UX Designer",
        image: ankita1,
        linkedin: "https://www.linkedin.com/in/sneha-taru-082b2b2a7/?originalSubdomain=in",
      },
    ].map((member, index) => (
      <div className="team-card" key={index}>
        <img src={member.image} alt={member.name} />
        <h3>{member.name}</h3>
        <p>{member.role}</p>
        <a href={member.linkedin} target="_blank" rel="noreferrer">
          <button className="linkedin-button">LinkedIn</button>
        </a>
      </div>
    ))}
  </div>
</div>

      
      {/* Call to Action */}
<div className="section call-to-action" id="start">
  <h2 id="start1">Get Started Now!</h2>
  <div className="start2">
    <p className="cta-description">
      NGOs, mental health organizations, and social workers can use our emotion detection system to track emotional health, intervene in times of distress, and provide better support. Start today and make a difference.
    </p>
    <Link to="/detect" className="cta-button">Get Started</Link>
  </div>
</div>


      <div className="contact-split-section" id="contact">
      <div className="contact-split-section">
  {/* Left: Contact Info */}

  {/* Meet the Team Section */}



  <div className="contact-left">
  <h1>Thank You,<br />We’re Glad You’re Here!</h1>
  <p>Have questions, suggestions, or feedback?</p>
  <p>Reach out to us at:</p>
  <a href="mailto:emotion@college.edu">emotion@college.edu</a>
  <p>Or give us a call: +91-98765-43210</p>


</div>


  {/* Right: Feedback Form + Map */}
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

    {/* Map at Bottom Right */}
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
</div>


  
</div>

      
    </div>
  );
};

export default Home;
