import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import { Navigate } from "react-router-dom";


const Dashboard = () => {
  const [history, setHistory] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")) || {};


  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get("http://localhost:5000/history");
        setHistory(response.data);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="dashboard-container">
        <h1 className="dashboard-title">Your Dashboard</h1>

        <div className="section">
          <h2 className="section-title" id="userprofile">User Profile</h2>
          <div className="profile">
  <p><strong>Name:</strong> {user.name || "N/A"}</p>
  <p><strong>Email:</strong> {user.email || "N/A"}</p>
</div>
        </div>

        <div className="section">
          <h2 className="section-title" id="userprofile">Past Emotion Analysis</h2>
          <div className="past-analysis">
            {history.map((entry, index) => (
              <div key={index} className="card">
                <img
                  src={`http://localhost:5000${entry.image}`}
                  alt={`emotion-${index}`}
                  onError={(e) => (e.target.style.display = "none")}
                />
                <p>Emotion: {entry.emotion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Dashboard;
