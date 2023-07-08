import React from "react";
import "./Congratscard.css";

function Congrats() {
  return (
    <div className="congratsContainer text-center p-5">
      <h1>Congratulations</h1>
      <div className="make container mt-5 border rounded-5">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          alt="Profile"
          className="imgprofile"
        />
        <div className="fw-bold fs-2">Kiran V</div>
        <p className="congrats">Vishnu Institute of Computer Education and Technology, Bhimavaram</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          alt="Watch"
          className="imgwatch"
        />
      </div>
    </div>
  );
}

export default Congrats;
