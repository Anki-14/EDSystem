// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import EmotionDetection from "./Components/EmotionDetector";
import LoginForm from "./Pages/Login";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detect" element={<EmotionDetection />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
