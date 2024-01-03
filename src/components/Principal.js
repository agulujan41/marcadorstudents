import React from "react";
import "./styles/style.css";
const Principal = () => {
  
  return (
    <>
      <div className="main-container">
        <div className="neon-container">
          <div className="team-name" id="team1Score">
            Equipo 1
          </div>
          <div>-</div>
          <div className="team-name" id="team2Score">
            Equipo 2
          </div>
        </div>
        <div className="neon-container">
          <div className="team-score" id="team1Score">
            0
          </div>
          <div>-</div>
          <div className="team-score" id="team2Score">
            0
          </div>
        </div>
      </div>
    </>
  );
};

export default Principal;
