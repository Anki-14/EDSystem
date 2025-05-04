// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Home from "./Pages/Home";
// import Dashboard from "./Pages/Dashboard";
// import EmotionDetection from "./Components/EmotionDetector";
// import LoginForm from "./Pages/Login";
// import Footer from "./Components/Footer";

// const App = () => {
//   const location = useLocation();
//   const hideNavbar = location.pathname === "/detect";

//   return (
//     <Router>
//       <div className="app-wrapper">
//         <Navbar />
//         <div className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/detect" element={<EmotionDetection />} />
//             <Route path="/login" element={<LoginForm />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="*" element={<div>404 Not Found</div>} />
//             <Route path="/detect" element={<EmotionDetection />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import EmotionDetection from "./Components/EmotionDetector";
import LoginForm from "./Pages/Login";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Components/ProtectedRoute";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



const AppContent = () => {
  const location = useLocation();

  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detect" element={<EmotionDetection />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
