import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
  <div className="footer-inline">
    <h2 className="footer-logo">Emotion Recognition System</h2>
    <p className="footer-text">Thank you for visiting our Emotion Recognition System. Built with  by passionate minds.</p>
    <p className="footer-copy">&copy; {new Date().getFullYear()} EmotionRecognitionSystem. All rights reserved.</p>
  </div>
</div>

    </footer>
  );
};

export default Footer;
