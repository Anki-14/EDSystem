// import React, { useRef, useState, useEffect, useCallback } from "react";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "./EmotionDetector.css";

// const EmotionDetection = () => {
//   const webcamRef = useRef(null);
//   const [emotion, setEmotion] = useState("");
//   const [mode, setMode] = useState("real-time"); // Toggle mode
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isDetecting, setIsDetecting] = useState(false);

//   // Function to capture frames for real-time analysis
//   const sendFrameToBackend = useCallback(async () => {
//     if (!webcamRef.current || !isDetecting) return;
    
//     const imageSrc = webcamRef.current.getScreenshot();
//     if (!imageSrc) return;

//     const blob = await fetch(imageSrc).then((res) => res.blob());
//     const formData = new FormData();
//     formData.append("image", blob, "webcam.jpg");

//     try {
//       const response = await axios.post("http://localhost:5000/detect-emotion", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setEmotion(response.data.emotion);
//     } catch (error) {
//       console.error("Error detecting emotion:", error);
//     }
//   }, [isDetecting]);

//   // Start/Stop real-time detection loop
//   useEffect(() => {
//     let interval;
//     if (mode === "real-time" && isDetecting) {
//       interval = setInterval(() => {
//         sendFrameToBackend();
//       }, 1000); // Adjust detection speed
//     }
//     return () => clearInterval(interval);
//   }, [mode, isDetecting, sendFrameToBackend]);

//   // Handle file upload for manual mode
//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const uploadAndAnalyze = async () => {
//     if (!selectedFile) return;
//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await axios.post("http://localhost:5000/upload-emotion", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setEmotion(response.data.emotion);
//     } catch (error) {
//       console.error("Error detecting emotion:", error);
//     }
//   };

//   return (
//     <div className="detection-container">
//       <h1 className="detection-title">Emotion Detection System</h1>

//       {/* Toggle Mode */}
//       <div className="mode-toggle">
//         <button onClick={() => { setMode("real-time"); setIsDetecting(true); }} className={mode === "real-time" ? "active" : ""}>
//           Real-Time Mode
//         </button>
//         <button onClick={() => { setMode("manual"); setIsDetecting(false); }} className={mode === "manual" ? "active" : ""}>
//           Manual Mode
//         </button>
//       </div>

//       {mode === "manual" ? (
//         <>
//           <label className="upload-box">
//             Click to Upload or Drag & Drop Here
//             <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
//           </label>
//           <button onClick={uploadAndAnalyze} className="detect-btn">Detect</button>
//           {emotion && <h2 className="emotion-result">Detected Emotion: {emotion}</h2>}
//         </>
//       ) : (
//         <>
//           <Webcam ref={webcamRef} screenshotFormat="image/jpeg" className="webcam" />
//           <button onClick={() => setIsDetecting(!isDetecting)} className="detect-btn">
//             {isDetecting ? "Stop Detection" : "Start Detection"}
//           </button>
//           {emotion && <h2 className="emotion-result">Detected Emotion: {emotion}</h2>}
//         </>
//       )}
//     </div>
//   );
// };

// export default EmotionDetection;



// ---------------------------------------------------


// import React, { useState, useEffect } from "react";
// import "./EmotionDetector.css";

// const EmotionDetection = () => {
//   const [emotion, setEmotion] = useState("");

//   useEffect(() => {
//     const fetchEmotion = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/get_emotion");
//         const data = await response.json();
//         setEmotion(data.emotion);
//       } catch (error) {
//         console.error("Error fetching emotion:", error);
//       }
//     };

//     const interval = setInterval(fetchEmotion, 2000); // Fetch every 2 sec
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="detection-container">
//       <h1 className="detection-title">Real-Time Emotion Detection</h1>
//       <img src="http://localhost:5000/video_feed" alt="Live Feed" className="webcam" />
//       {emotion && <h2 className="emotion-result">Detected Emotion: {emotion}</h2>}
//     </div>
//   );
// };

// export default EmotionDetection;


// ---------------------------------------------------

// import React, { useRef, useState, useEffect, useCallback } from "react";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "./EmotionDetector.css";

// const EmotionDetection = () => {
//   const webcamRef = useRef(null);
//   const [emotion, setEmotion] = useState("");
//   const [mode, setMode] = useState("real-time"); // Toggle mode
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isDetecting, setIsDetecting] = useState(false);

//   // Fetch emotion from the backend like old code
//   const fetchEmotion = useCallback(async () => {
//     try {
//       const response = await fetch("http://localhost:5000/get_emotion");
//       const data = await response.json();
//       setEmotion(data.emotion);
//     } catch (error) {
//       console.error("Error fetching emotion:", error);
//     }
//   }, []);

//   // Send frames manually when in real-time mode
//   const sendFrameToBackend = useCallback(async () => {
//     if (!webcamRef.current || !isDetecting) return;
    
//     const imageSrc = webcamRef.current.getScreenshot();
//     if (!imageSrc) return;

//     const blob = await fetch(imageSrc).then((res) => res.blob());
//     const formData = new FormData();
//     formData.append("image", blob, "webcam.jpg");

//     try {
//       const response = await axios.post("http://localhost:5000/detect-emotion", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setEmotion(response.data.emotion);
//     } catch (error) {
//       console.error("Error detecting emotion:", error);
//     }
//   }, [isDetecting]);

//   // Handle auto-updating emotion detection
//   useEffect(() => {
//     let interval;
//     if (mode === "real-time" && isDetecting) {
//       interval = setInterval(() => {
//         fetchEmotion(); // ✅ Uses old working API call
//         sendFrameToBackend(); // ✅ Sends frame for detection
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [mode, isDetecting, fetchEmotion, sendFrameToBackend]);

//   // Handle file upload for manual mode
//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const uploadAndAnalyze = async () => {
//     if (!selectedFile) return;
//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await axios.post("http://localhost:5000/upload-emotion", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setEmotion(response.data.emotion);
//     } catch (error) {
//       console.error("Error detecting emotion:", error);
//     }
//   };

//   return (
//     <div className="detection-container">
//       <h1 className="detection-title">Emotion Detection System</h1>

//       {/* Toggle Mode */}
//       <div className="mode-toggle">
//         <button onClick={() => { setMode("real-time"); setIsDetecting(true); }} className={mode === "real-time" ? "active" : ""}>
//           Real-Time Mode
//         </button>
//         <button onClick={() => { setMode("manual"); setIsDetecting(false); }} className={mode === "manual" ? "active" : ""}>
//           Manual Mode
//         </button>
//       </div>

//       {mode === "manual" ? (
//         <>
//           <label className="upload-box">
//             Click to Upload or Drag & Drop Here
//             <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
//           </label>
//           <button onClick={uploadAndAnalyze} className="detect-btn">Detect</button>
//           {emotion && <h2 className="emotion-result">Detected Emotion: {emotion}</h2>}
//         </>
//       ) : (
//         <>
//           {/* ✅ Old working method included */}
//           <img src="http://localhost:5000/video_feed" alt="Live Feed" className="webcam" />

//           {/* ✅ New manual detection option retained */}
//           <Webcam ref={webcamRef} screenshotFormat="image/jpeg" className="webcam" />
//           <button onClick={() => setIsDetecting(!isDetecting)} className="detect-btn">
//             {isDetecting ? "Stop Detection" : "Start Detection"}
//           </button>
//           {emotion && <h2 className="emotion-result">Detected Emotion: {emotion}</h2>}
//         </>
//       )}
//     </div>
//   );
// };

// export default EmotionDetection;


// -----------------------------------------------------------
// import React, { useRef, useState, useEffect, useCallback } from "react";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "./EmotionDetector.css";

// const EmotionDetection = () => {
//   const webcamRef = useRef(null);
//   const [emotion, setEmotion] = useState("");
//   const [mode, setMode] = useState("real-time");
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isDetecting, setIsDetecting] = useState(false);

//   // ✅ Sends a webcam frame to backend and receives emotion directly
//   const sendFrameToBackend = useCallback(async () => {
//     if (!webcamRef.current || !isDetecting) return;

//     const imageSrc = webcamRef.current.getScreenshot();
//     if (!imageSrc) return;

//     const blob = await fetch(imageSrc).then((res) => res.blob());
//     const formData = new FormData();
//     formData.append("image", blob, "webcam.jpg");

//     try {
//       const response = await axios.post("http://localhost:5000/detect-emotion", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setEmotion(response.data.emotion);
//     } catch (error) {
//       console.error("Error detecting emotion from webcam:", error);
//     }
//   }, [isDetecting]);

//   // ✅ Handle webcam detection interval
//   useEffect(() => {
//     let interval;
//     if (mode === "real-time" && isDetecting) {
//       interval = setInterval(() => {
//         sendFrameToBackend();
//       }, 2000); // Every 2 seconds
//     }
//     return () => clearInterval(interval);
//   }, [mode, isDetecting, sendFrameToBackend]);

//   // ✅ Manual upload handler
//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const uploadAndAnalyze = async () => {
//     if (!selectedFile) return;

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await axios.post("http://localhost:5000/upload-emotion", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setEmotion(response.data.emotion);
//     } catch (error) {
//       console.error("Error detecting emotion from file upload:", error);
//     }
//   };

//   return (
//     <div className="detection-container">
//       <h1 className="detection-title">Emotion Detection System</h1>

//       {/* ✅ Toggle Mode Buttons */}
//       <div className="mode-toggle">
//         <button
//           onClick={() => {
//             setMode("real-time");
//             setIsDetecting(false); // Avoid instant detection start
//             setEmotion("");
//           }}
//           className={mode === "real-time" ? "active" : ""}
//         >
//           Real-Time Mode
//         </button>
//         <button
//           onClick={() => {
//             setMode("manual");
//             setIsDetecting(false);
//             setEmotion("");
//           }}
//           className={mode === "manual" ? "active" : ""}
//         >
//           Manual Mode
//         </button>
//       </div>

//       {/* ✅ Manual Mode UI */}
//       {mode === "manual" ? (
//         <>
//           <label className="upload-box">
//             Click to Upload or Drag & Drop
//             <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
//           </label>
//           <button onClick={uploadAndAnalyze} className="detect-btn">Detect</button>
//         </>
//       ) : (
//         <>
//           {/* ✅ Webcam UI */}
//           <Webcam ref={webcamRef} screenshotFormat="image/jpeg" className="webcam" />
//           <button
//             onClick={() => {
//               setIsDetecting(!isDetecting);
//               setEmotion("");
//             }}
//             className="detect-btn"
//           >
//             {isDetecting ? "Stop Detection" : "Start Detection"}
//           </button>
//         </>
//       )}

//       {/* ✅ Detected Emotion */}
//       {emotion && <h2 className="emotion-result">Detected Emotion: {emotion}</h2>}
//     </div>
//   );
// };

// export default EmotionDetection;
// -----------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./EmotionDetector.css";

// const EmotionDetection = () => {
//   const [emotion, setEmotion] = useState("");
//   const [mode, setMode] = useState("real-time");
//   const [selectedFile, setSelectedFile] = useState(null);

//   // ✅ Real-Time Emotion Fetching (unchanged logic)
//   useEffect(() => {
//     if (mode !== "real-time") return;

//     const fetchEmotion = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/get_emotion");
//         const data = await response.json();
//         setEmotion(data.emotion);
//       } catch (error) {
//         console.error("Error fetching emotion:", error);
//       }
//     };

//     const interval = setInterval(fetchEmotion, 2000);
//     return () => clearInterval(interval);
//   }, [mode]);

//   // ✅ Manual Upload
//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const uploadAndAnalyze = async () => {
//     if (!selectedFile) return;

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await axios.post("http://localhost:5000/upload-emotion", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setEmotion(response.data.emotion);
//     } catch (error) {
//       console.error("Error detecting emotion from file:", error);
//     }
//   };

//   return (
//     <div className="detection-container">
//       <h1 className="detection-title">Emotion Detection System</h1>

//       {/* ✅ Mode Toggle Buttons */}
//       <div className="mode-toggle">
//         <button
//           onClick={() => {
//             setMode("real-time");
//             setEmotion("");
//           }}
//           className={mode === "real-time" ? "active" : ""}
//         >
//           Real-Time Mode
//         </button>
//         <button
//           onClick={() => {
//             setMode("manual");
//             setEmotion("");
//           }}
//           className={mode === "manual" ? "active" : ""}
//         >
//           Manual Upload Mode
//         </button>
//       </div>

//       {/* ✅ Real-Time Webcam View */}
//       {mode === "real-time" && (
//         <>
//           <img
//             src="http://localhost:5000/video_feed"
//             alt="Live Feed"
//             className="webcam"
//           />
//         </>
//       )}

//       {/* ✅ Manual Upload UI */}
//       {mode === "manual" && (
//         <>
//           <label className="upload-box">
//             Click to Upload or Drag & Drop
//             <input
//               type="file"
//               accept="image/*,video/*"
//               onChange={handleFileChange}
//             />
//           </label>
//           <button onClick={uploadAndAnalyze} className="detect-btn">
//             Detect
//           </button>
//         </>
//       )}

//       {/* ✅ Show Detected Emotion */}
//       {/* {emotion && <h2 className="emotion-result">Detected Emotion: {emotion}</h2>} */}
//     </div>
//   );
// };

// export default EmotionDetection;
// ------------------------------------------------------------
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./EmotionDetector.css";
import { Link } from "react-router-dom";
// const [videoFeedUrl, setVideoFeedUrl] = useState(null);


const EmotionDetection = () => {
  const backendBaseURL = "https://emotion-backend-nubf.onrender.com";

  const [emotion, setEmotion] = useState("");
  const [mode, setMode] = useState("real-time");
  const [selectedFile, setSelectedFile] = useState(null);
  const [demoUsed, setDemoUsed] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [videoFeedUrl, setVideoFeedUrl] = useState(null);


  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    if (mode === "real-time" && isLoggedIn) {
      setVideoFeedUrl("${backendBaseURL}/video_feed");
    } else {
      setVideoFeedUrl(null);
    }
  }, [mode, isLoggedIn]);

  // ✅ Real-Time Emotion Fetching
  useEffect(() => {
    if (mode !== "real-time" || !isLoggedIn) return;

    const fetchEmotion = async () => {
      try {
        const response = await fetch("${backendBaseURL}/get_emotion");
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
        await axios.post("${backendBaseURL}/stop_video_feed");
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
      const response = await axios.post("${backendBaseURL}/upload-emotion", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setEmotion(response.data.emotion);

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
      <div className="emotion-result">Detected Emotion: {emotion}</div>
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
