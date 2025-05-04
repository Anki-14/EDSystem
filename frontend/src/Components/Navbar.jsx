// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";  // Import external CSS

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       {/* <div className="nav-container">
//         <h2 className="nav-title">
//           <Link to="/">Emotion Recognition System</Link>
//         </h2>
//         <ul className="nav-links">
//           <li><Link to="/detect">Detect Emotion</Link></li>
//           {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
//           {/* <li><Link to="/login">Login</Link></li> */}
//         {/* </ul> */}
//       {/* // </div> */}

      
//   <div className="nav-container">
//     <h2 className="nav-title">
//       <Link to="/">Emotion Recognition System</Link>
//     </h2>
//     <ul className="nav-links">
//       <li><a href="#how-it-works">Working</a></li>
//       <li><a href="#features">Features</a></li>
//       <li><a href="#unique">Why we</a></li>
//       <li><a href="#start">Explore</a></li>
//       <li><a href="#contact">Contact Us</a></li>
//     </ul>
//   </div>

//     </nav>
//   );
// };

// export default Navbar;

// src/Components/Navbar.jsx
import React from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDetectPage = location.pathname === "/detect";

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/login");
  };
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="nav-title">
          <Link to="/">Emotion Recognition System</Link>
        </h2>

        {/* Hide nav links only on /detect */}
        {!isDetectPage && (
          <ul className="nav-links">
          {location.pathname === "/" && (
            <>
              <li><a href="#how-it-works">Working</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#Results">Results</a></li>
              <li><a href="#start">Explore</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </>
          )}
        
          {isLoggedIn && <li><Link to="/dashboard">Dashboard</Link></li>}
        
          {isLoggedIn ? (
            <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
        
        )}
      </div>
    </nav>
  );
};

export default Navbar;
