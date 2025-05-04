import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./EmotionDetector.css";
import { Link } from "react-router-dom";
// const [videoFeedUrl, setVideoFeedUrl] = useState(null);


const EmotionDetection = () => {
  const backendBaseURL = "https://emotion-backend-nubf.onrender.com";
  const imageUrl = `${backendBaseURL}${response.data.image}`;
  const [emotion, setEmotion] = useState("");
  const [mode, setMode] = useState("real-time");
  const [selectedFile, setSelectedFile] = useState(null);
  const [demoUsed, setDemoUsed] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [videoFeedUrl, setVideoFeedUrl] = useState(null);
  console.log("EmotionDetection component is loaded");


  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    if (mode === "real-time" && isLoggedIn) {
      setVideoFeedUrl(`${backendBaseURL}/video_feed`);
      console.log("Video Feed URL: ", videoUrl); // Add this log
      setVideoFeedUrl(videoUrl);
    } else {
      setVideoFeedUrl(null);
    }
  }, [mode, isLoggedIn]);

  // ✅ Real-Time Emotion Fetching
  useEffect(() => {
    if (mode !== "real-time" || !isLoggedIn) return;

    const fetchEmotion = async () => {
      try {
        const response = await fetch(`${backendBaseURL}/get_emotion`);
        const data = await response.json();
        setEmotion(data.emotion);
      } catch (error) {
        console.error("Error fetching emotion:", error);
      }
    };
    

    const interval = setInterval(fetchEmotion, 2000);
    return () => clearInterval(interval);
  }, [mode, isLoggedIn]);

  const handleModeChange = async (newMode) => {
    // Stop camera if switching away from real-time
    if (mode === "real-time" && newMode !== "real-time") {
      try {
        await axios.post(`${backendBaseURL}/stop_video_feed`);
      } catch (err) {
        console.error("Failed to stop video feed:", err);
      }
    }
    setMode(newMode);
    setEmotion("");
  };

  
  // ✅ Manual File Change
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // ✅ Upload & Detect Logic
  const uploadAndAnalyze = async () => {
    if (!selectedFile) return;

    // 👉 If user is not logged in and already used demo, block
    if (!isLoggedIn && demoUsed) {
      setShowLoginModal(true);
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
        const formData = new FormData();
    formData.append("file", selectedFile);
        
      const response = await axios.post(`${backendBaseURL}/upload-emotion`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

        console.log("Backend Response: ", response.data); // Add this log

      setEmotion(response.data.emotion);
setSelectedFile({
  ...selectedFile,
  previewUrl: `${backendBaseURL}${response.data.image}`,
});


      // 👉 If not logged in, mark demo as used
      if (!isLoggedIn) {
        setDemoUsed(true);
        setShowLoginModal(true);
      }
    } catch (error) {
      console.error("Error detecting emotion from file:", error);
    }
  };

  return (
    <div className="detection-container">
      <h1 className="detection-title">Emotion Detection System</h1>

      {/* ✅ Mode Toggle Buttons */}
      <div className="mode-toggle">
      <button
  onClick={() => handleModeChange("real-time")}
  className={mode === "real-time" ? "active" : ""}
>
  Real-Time Mode
</button>
<button
  onClick={() => handleModeChange("manual")}
  className={mode === "manual" ? "active" : ""}
>
  Manual Upload Mode
</button>

      </div>

      {/* ✅ Real-Time Webcam View */}
      {mode === "real-time" && isLoggedIn && videoFeedUrl && (
  <img
    src={videoFeedUrl}
    alt="Live Feed"
    className="webcam"
  />
)}

      {mode === "real-time" && !isLoggedIn && (
  <div className="demo-block-text">
    🔒 Please <Link to="/login" style={{ color: "#fff", textDecoration: "underline" }}>login</Link> to use Real-Time Detection
  </div>
)}


      {/* ✅ Manual Upload UI
      {mode === "manual" && (
        <>
          <label className="upload-box">
            Click to Upload or Drag & Drop
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
            />
          </label>
          <button onClick={uploadAndAnalyze} className="detect-btn">
            Detect
          </button>
        </>
      )}

      {/* ✅ Show Detected Emotion */}
      {/* {emotion && <h2 className="emotion-result">Detected Emotion: {emotion}</h2>} */} 

      {mode === "manual" && (
  <>
    <div
      className="upload-box"
      onClick={() => document.getElementById("fileInput").click()}
    >
      {selectedFile ? (
        <img src={URL.createObjectURL(selectedFile)} alt="Preview" className="preview-inside-box" />
      ) : (
        "Click to Upload or Drag & Drop"
      )}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>

    {selectedFile && (
      <button onClick={uploadAndAnalyze} className="detect-btn">
        Detect Emotion
      </button>
    )}

    {emotion && (
  <>
    <div className="emotion-result">Detected Emotion: {emotion}</div>
    {selectedFile?.previewUrl && emotion && (
  <img
    src={selectedFile.previewUrl}
    alt="Uploaded preview"
    className="preview-result"
  />
)}

  </>
)}

  </>
)}


      {/* ✅ Modal Popup after Demo */}
      {showLoginModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Demo Complete 🎉</h3>
            <p>You’ve used your free demo. Sign up to continue using the system!</p>
            <div className="modal-buttons">
              <button onClick={() => navigate("/login")}>Login / Signup</button>
              <button onClick={() => setShowLoginModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmotionDetection;
